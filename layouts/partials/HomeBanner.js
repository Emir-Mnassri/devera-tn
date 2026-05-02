"use client";

import Circle from "@layouts/components/Circle";
import ImageFallback from "@layouts/components/ImageFallback";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect } from "react";

const HomeBanner = ({ banner: bannerData }) => {
  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          ".banner-img",
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
          },
          ">-.5"
        );

      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(
          bannerBg,
          {
            y: 0,
          },
          {
            y: -position,
          }
        )
        .fromTo(
          bannerContent,
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        )
        .fromTo(
          ".banner-bg .circle",
          {
            y: 0,
          },
          {
            y: position,
          },
          "<"
        );
    });

    return () => ctx2.revert();
  }, []);

  return (
    <section className="section banner pt-14">
      <div className="container-xl">
        <div className="relative">
          <div className="bg-theme banner-bg col-12 absolute left-0 top-0">
            <Circle className="circle left-[10%] top-12" width={32} height={32} fill={false} />
            <Circle className="circle left-[2.5%] top-[29%]" width={85} height={85} />
            <Circle className="circle bottom-[48%] left-[22%]" width={20} height={20} />
            
            {/* Shifted circles significantly lower to clear the text path */}
            <Circle className="circle bottom-[20%] left-[12%]" width={47} height={47} fill={false} />
            <Circle className="circle bottom-[10%] left-[6%]" width={62} height={62} fill={false} />
            
            <Circle className="circle right-[12%] top-[15%]" width={20} height={20} />
            <Circle className="circle right-[2%] top-[30%]" width={73} height={73} fill={false} />
            
            {/* Moved this dot further right and down to clear "reliable" */}
            <Circle className="circle right-[10%] top-[65%]" width={37} height={37} fill={false} />
            
            <Circle className="circle right-[33%] top-[54%]" width={20} height={20} />
            <Circle className="circle bottom-[15%] right-[3%]" width={65} height={65} />
          </div>
          <div className="row overflow-hidden rounded-2xl">
            <div className="col-12">
              <div className="row relative justify-center pb-10">
                
                {/* 
                   MODIFIED: 
                   - Changed pt-32 to pt-16 (reduced top padding)
                   - Added -mt-10 (negative top margin to pull text into the header area space)
                   - Changed pb-40 to pb-56 (increased bottom space)
                */}
                <div className="banner-content col-10 pt-16 pb-56 -mt-10 text-center">
                  
                  {markdownify(
                    bannerData.title,
                    "h1",
                    "mb-8 banner-title opacity-0 text-white font-bold" 
                  )}
                  
                  {bannerData.link && bannerData.link.href && (
                    <div className="banner-btn opacity-0">
                      <Link
                        className="btn btn-primary"
                        href={bannerData.link.href}
                        style={{ borderRadius: '6px' }}
                      >
                        {bannerData.link.label}
                      </Link>
                    </div>
                  )}
                </div>

                {bannerData.image && (
                  <div className="col-10">
                    <ImageFallback
                      className="banner-img opacity-0 rounded-lg shadow-xl"
                      src={bannerData.image}
                      width={1170}
                      height={666}
                      priority={true}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .banner-title {
          text-shadow: 0 4px 15px rgba(0,0,0,0.7);
          letter-spacing: -0.02em;
          line-height: 1.25;
        }
      `}</style>
    </section>
  );
};

export default HomeBanner;
