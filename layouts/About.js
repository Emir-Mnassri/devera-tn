"use client";

import { markdownify } from "@lib/utils/textConverter";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageFallback from "./components/ImageFallback";

const About = ({ data }) => {
  const { frontmatter } = data;
  const {
    about_us,
    works,
    mission,
    clients,
    our_member,
    our_office,
  } = frontmatter;

  return (
    <div style={{ backgroundColor: '#0b1120', color: '#cbd5e1' }}>
      <section className="section pt-10">
        
        {/* Rebranded About Us Section */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[40px]">
                {/* Visual Glows matching the agency aesthetic */}
                <div 
                  className="absolute -left-4 -top-4 h-32 w-32 rounded-full opacity-20" 
                  style={{ backgroundColor: '#3b82f6', filter: 'blur(50px)' }}
                ></div>
                
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                  <ImageFallback
                    className="animate relative w-full"
                    src={about_us.image}
                    width={425}
                    height={487}
                    alt="U & E Digital Agency"
                  />
                </div>

                <div 
                  className="absolute -right-4 -bottom-4 h-40 w-40 rounded-full opacity-10" 
                  style={{ backgroundColor: '#10b981', filter: 'blur(60px)' }}
                ></div>
              </div>
            </div>

            <div className="animate md:col-6 md:order-1 lg:col-5">
              <span className="text-primary uppercase tracking-[0.2em] font-semibold text-sm">
                E-Commerce Specialists
              </span>
              <h1 className="h2 section-title bar-left mt-4 text-white">
                We Build Successful Businesses, Not Just Websites.
              </h1>
              <div className="mt-10 text-slate-400 text-lg leading-relaxed">
                <p>
                  U & E Digital Services is the premier online manifesto for elite digital presence, 
                  specifically focused on building high-quality e-commerce websites for Tunisian businesses.
                </p>
                <p className="mt-4">
                  We specialize in crafting high-performance platforms, managing social media advertising 
                  campaigns, and securing your brand's authority through social media verification badges. 
                  Whether you are scaling a local startup or securing a public profile, we provide the 
                  technical precision and strategic marketing needed to dominate the modern digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services Section */}
        <div className="section container bg-slate-900/30 rounded-3xl py-20 border border-slate-800/50">
          <div className="animate text-center max-w-3xl mx-auto">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Our Expertise</p>
            <h2 className="section-title text-white">Tunisian Market Growth</h2>
            <p className="mt-6 text-slate-400">
              Empowering Tunisian entrepreneurs with the tools to sell all around Tunisia.
            </p>
          </div>
          <div className="row mt-10 justify-center">
              <div className="mt-10 md:col-6 lg:col-4">
                <div className="animate text-center p-8 rounded-xl bg-slate-800/20 border border-slate-700/30 hover:border-primary/30 transition-colors">
                  <h3 className="h4 text-white">E-Commerce Development</h3>
                  <p className="mt-4 text-slate-400">Tailored online stores built to maximize sales for Tunisian businesses.</p>
                </div>
              </div>
              <div className="mt-10 md:col-6 lg:col-4">
                <div className="animate text-center p-8 rounded-xl bg-slate-800/20 border border-slate-700/30 hover:border-primary/30 transition-colors">
                  <h3 className="h4 text-white">Targeted Advertising</h3>
                  <p className="mt-4 text-slate-400">Precision-engineered ad campaigns designed for maximum ROI and growth.</p>
                </div>
              </div>
              <div className="mt-10 md:col-6 lg:col-4">
                <div className="animate text-center p-8 rounded-xl bg-slate-800/20 border border-slate-700/30 hover:border-primary/30 transition-colors">
                  <h3 className="h4 text-white">Verification Services</h3>
                  <p className="mt-4 text-slate-400">Establishing trust and authority through social media verification badges.</p>
                </div>
              </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[40px]">
                <div className="relative overflow-hidden rounded-2xl border border-slate-800">
                  <ImageFallback
                    className="animate relative w-full"
                    src={mission.image}
                    width={425}
                    height={487}
                    alt="The Mission"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] -z-10"></div>
              </div>
            </div>
            <div className="animate md:col-6 lg:col-5">
              <p className="text-primary uppercase tracking-widest text-sm font-bold">The Mission</p>
              <h2 className="section-title bar-left mt-4 text-white">Driving Tunisian Innovation</h2>
              <div className="mt-10 text-slate-400 italic border-l-4 border-primary pl-6">
                "Our mission is to be the primary catalyst for business success in Tunisia. We don't just build sites; we architect the future of your enterprise."
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default About;
