import { MapPin, Phone, Clock, Mail, ExternalLink, MessageCircle } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { transportationInfoData, contactContent } from '../data/contactData';

export function Contact() {
  const googleMapsUrl = siteConfig.map.googleMapLink;
  const naverMapsUrl = siteConfig.map.naverMapLink;
  const googleMapsEmbedUrl = siteConfig.map.googleMapEmbedUrl || null;
  
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">{contactContent.sectionTitle}</h2>
          <p className="text-gray-600 text-center">{contactContent.sectionDescription}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-5 text-lg">{contactContent.consultationTitle}</h3>
              
              <div className="space-y-5">
                {/* Phone - Clickable */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 mb-1">{contactContent.labels.phone}</p>
                    <a 
                      href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                      className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors inline-block"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-gray-700 mt-1">{siteConfig.hours.consultationHours}</p>
                  </div>
                </div>

                {/* Email - Clickable */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-600 mb-1">{contactContent.labels.email}</p>
                    <a 
                      href={`mailto:${siteConfig.email}`}
                      className="text-base text-blue-600 hover:text-blue-700 transition-colors break-all inline-block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">{contactContent.labels.hours}</p>
                    <div className="text-gray-900 space-y-1 text-sm">
                      <p>{siteConfig.hours.weekday}</p>
                      <p>{siteConfig.hours.saturday}</p>
                      <p className="text-gray-600">{siteConfig.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Address with Map Links */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-1">{contactContent.labels.address}</p>
                    <p className="text-gray-900 leading-relaxed font-medium">{siteConfig.address.street}</p>
                    <p className="text-gray-900">{siteConfig.address.building}</p>
                    <p className="text-sm text-blue-700 font-medium mt-2">{siteConfig.address.subway}</p>
                    
                    {/* Map Link Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <a
                        href={naverMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {contactContent.buttons.naverMap}
                      </a>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {contactContent.buttons.googleMap}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                {siteConfig.cta.primary}
              </h4>
              <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                {contactContent.ctaDescription}
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  {contactContent.buttons.phoneConsultation}
                </a>
                <a
                  href={siteConfig.kakaoTalkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-yellow-400 text-gray-900 px-6 py-3.5 rounded-lg hover:bg-yellow-500 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  {contactContent.buttons.kakaoConsultation}
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`[${siteConfig.siteName}] 수강 상담 신청`)}&body=${encodeURIComponent('상담 신청합니다.\n\n이름:\n연락처:\n관심 과정:\n문의사항:')}`}
                  className="w-full bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {contactContent.buttons.emailInquiry}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px] lg:h-full min-h-[400px] border border-gray-200">
            {googleMapsEmbedUrl ? (
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${siteConfig.siteName} 위치`}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-16 h-16 text-gray-400 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{siteConfig.siteName}</h3>
                <p className="text-gray-700 mb-1">{siteConfig.address.street}</p>
                <p className="text-gray-700 mb-4">{siteConfig.address.building}</p>
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <a
                    href={naverMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {contactContent.buttons.naverMap}
                  </a>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {contactContent.buttons.googleMap}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Directions */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-5 text-lg">{contactContent.transportationTitle}</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
            {transportationInfoData.map((item) => (
              <div key={item.label}>
                <p className="font-bold text-gray-900 mb-2">{item.icon} {item.label}</p>
                <p className="leading-relaxed text-sm whitespace-pre-line">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}