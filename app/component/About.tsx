import AboutCard from '@/components/ui/AboutCard';
import TimeZoneCard from '@/components/ui/TimeZoneCard';
import ContactCard from '@/components/ui/ContactCard';
import Title from './Title';

export default function About() {
  return (
    <main id='about' className="min-h-screen p-4 md:p-8">
        <Title text="About 👩🏻‍🎓" className='flex flex-col items-center justify-center
                  -rotate-6'/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto py-12">
        {/* Left Column */}
        <div className="md:col-span-1 md:row-span-2">
          <AboutCard />
        </div>
        
        {/* Right Column */}
        <div className="md:col-span-1">
          <TimeZoneCard />
        </div>

         <div className="md:col-span-1">
          <ContactCard />
        </div>

      </div>
    </main>
  );
}
