import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClassCategories } from './components/ClassCategories';
import { Instructors } from './components/Instructors';
import { Schedule } from './components/Schedule';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ClassCategories />
        <Instructors />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
