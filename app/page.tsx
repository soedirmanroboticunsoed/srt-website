'use client';

import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ArticleGrid from './components/ArticleGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <section id="hero" className="grid grid-cols-[35%_65%] h-auto flex items-center justify-center text-white text-center px-5 py-10 mt-4">
        <div className="flex items-center justify-end">
          <img src="/images/soedirmanrobotic.png" alt="Logo" className="w-80 h-auto mr-4"></img>
        </div>
        <div className="flex text-left w-fit-content flex-col items-center justify-center px-5">
          <div>
            <p className="text-3xl my-2">Jenderal Soedirman University</p>
            <h1 className="text-8xl font-black my-2">SOEDIRMAN</h1>
            <h1 className="text-8xl font-black my-2">ROBOTIC</h1>
            <h1 className="text-8xl font-black my-2">TEAM</h1>
            <p className="text-xl my-2 italic">"The Future We Make, For The Better Life"</p>
          </div>
        </div>
      </section>
      <section id="sponsorship" className="px-5 py-10">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl">Our Sponsors</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 my-10 gap-16">
            <div className="flex items-center text-center">
              <img src="/images/robosoedwear.png" alt="Logo" className="w-16 h-auto mr-4"></img>
              <div className="flex flex-col text-left">
                <h1 className="text-xl italic">Robosoed Wear</h1>
                <p className="text-sm italic">Hardware Provider</p>
              </div>
            </div>
            <div className="flex items-center text-center">
              <img src="/images/gudangbotol.png" alt="Logo" className="w-16 h-auto mr-4"></img>
              <div className="flex flex-col text-left">
                <h1 className="text-xl italic">Gudang Botol</h1>
                <p className="text-sm italic">Used Bottle Supplier</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="px-5 py-10">
        <div className="flex flex-col items-center justify-center mb-10 gap-2">
          <h1 className="text-3xl">Our Teams</h1>
          <p className="text-xl italic">Get to Know Our Management and Technical Teams</p>
        </div>
        <img src="/images/management-teams.png" alt="management teams" className="w-screen h-auto"/>
        <img src="/images/technical-teams.png" alt="technical teams" className="w-screen h-auto"/>
      </section>
      <section id="achievements" className="px-5 py-10">
        <div className="flex flex-col items-center justify-center mb-10 gap-2">
          <h1 className="text-3xl">Our Achievements</h1>
          <p className="text-xl italic">Get to Know Our Management and Technical Teams</p>
        </div>
        <ArticleGrid />
        <div className="flex items-center justify-center my-14">
          <button
            onClick={() => window.location.href = "#"}
            className="flex flex-cols justify-center items-center gap-2 border border-white px-12 py-2 rounded-lg hover:bg-white hover:text-black transition text-xl"
          >
            See More <ChevronRight size={20} />
          </button>
        </div>
      </section>
      <section id="events" className="px-5 py-10">
        <div className="flex flex-col items-center justify-center mb-10 gap-2">
          <h1 className="text-3xl">Frequently Asked Questions</h1>
          <p className="text-xl italic">Still got questions? Check out our FAQ down here & contact us if still got any.</p>
        </div>
        <div className="px-24">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg bold">
                How can we initiate a partnership with your organization?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! We&apos;re open to various partnership opportunities. For more details, feel free to reach out to us via email at soedirmanrobotic@gmail.com.<br />
                <br />
                You can also contact our Person In Charge through WhatsApp:<br />
	                •	Name (Media Partnership): Number<br />
	                •	Name (Sponsorship): Number<br />
                <br />
                We&apos;d be thrilled to collaborate with you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg bold">
                Do you offer any programs, booths, or the possibility for us to visit your organization?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer several programs designed to engage with external parties, including Open House, S3 Expo, Pengabdian Pengurus, and External Visitations. For students of Jenderal Soedirman University, participation is open for events like Open House and S3 Expo. For organizations, schools, and other external parties are welcome to collaborate with us through Pengabdian Pengurus and External Visitations.<br />
                <br />
                If you are interested, we kindly ask that you contact our Person In Charge in advance to check for availability:<br />
                Name - (Number)
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg bold">When will you be opening recruitment for new members?</AccordionTrigger>
              <AccordionContent>
                We typically hold our Open Recruitment between November and January. However, please note that the exact timing may vary from year to year. To stay updated, make sure to follow us on Instagram, as all official announcements, including recruitment info will be posted there.<br />
                <br />
                Stay tuned and see yaa!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg bold"> Is there an internship program available?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer internship opportunities for those who are curious about our internal workflows and want to gain firsthand experience with how we operate. All information regarding the internship program will be announced on our Instagram, so be sure to follow us to stay updated and not miss out on any of our upcoming opportunities!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section id="footer" className="px-5 py-10 text-white">
        <Footer />
      </section>
    </main>
  );
}
