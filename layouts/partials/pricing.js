"use client";

import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Pricing = ({ pricing }) => {
  return (
    // Changed bg-theme-light to a custom dark background to match the "Midnight" vibe
    <section className="section" style={{ backgroundColor: '#0f172a' }}>
      <div className="container text-center">
        <div className="animate">
          {/* section-title should now be white/light-gray to pop off the dark bg */}
          <div className="text-white">
            {markdownify(pricing.title, "h2", "section-title text-white")}
            {markdownify(pricing.description, "p", "mt-4 opacity-70")}
          </div>
        </div>
        
        <div className="row mt-10 justify-center">
          {pricing.packets.map((packet, index) => (
            <div key={"packet-" + index} className="col-12 md:col-6 lg:col-4 mb-8">
              {/* 
                  1. Changed bg-white to a deep navy (#1e293b)
                  2. Added a subtle slate border (#334155)
                  3. Changed rounded-xl to a more corporate rounded-md
              */}
              <div 
                className="p-8 rounded-md shadow-2xl border border-[#334155] transition-all duration-300 flex flex-col h-full hover:border-primary hover:-translate-y-2"
                style={{ backgroundColor: '#1e293b' }}
              >
                <h3 className="h4 mb-2 text-white">{packet.name}</h3>
                
                {/* Price is now Royal Blue for that "Tech Authority" look */}
                <p className="text-primary font-bold text-3xl mb-4">{packet.price}</p>
                
                <p className="text-sm text-slate-400 mb-6">{packet.description}</p>
                
                <ul className="text-left mb-8 flex-grow text-slate-300">
                  {packet.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      {/* Checkmark color updated to your brand primary blue */}
                      <span className="mr-2 text-primary">✔</span> {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className="btn btn-primary w-full mt-auto"
                  style={{ borderRadius: '6px' }} // Corporate sharpening
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
