import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';
import Footer from '@/components/layout/Footer';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
        <ScrollAnimation>
          <Services />
        </ScrollAnimation>
        <ScrollAnimation>
          <Testimonials />
        </ScrollAnimation>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
