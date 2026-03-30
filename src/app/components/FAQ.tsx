import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faqData';

export function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">자주 묻는 질문</h2>
          <p className="text-gray-600">궁금하신 내용을 확인해보세요</p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqData.map((faq) => (
            <Accordion.Item
              key={faq.question}
              value={faq.question}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-6 pb-4 pt-2 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <div className="mt-10 text-center bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 mb-4">추가 문의사항이 있으신가요?</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors"
          >
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}