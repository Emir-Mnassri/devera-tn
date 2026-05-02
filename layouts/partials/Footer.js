"use client";

import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;

  return (
    <footer className="footer" style={{ backgroundColor: '#0f172a', color: '#f8fafc' }}>
      <div className="container">
        {/* Border updated to a subtle slate to match the Midnight aesthetic */}
        <div className="row border-y border-[#1e293b] py-12">
          
          {/* Brand Column */}
          <div className="animate md:col-6 lg:col-3">
            {/* Replaced Logo component with the Header-consistent text branding */}
            <Link href="/" className="inline-block mb-4">
              <span className="h4 font-bold mb-0" style={{ color: "#f8fafc", letterSpacing: "-0.5px" }}>
                U&E <span className="text-primary">Digital Services</span>
              </span>
            </Link>
            {markdownify(footer_content, "p", "mt-3 text-slate-400 text-sm leading-relaxed")}
          </div>

          {/* Socials Column */}
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5 text-white mb-5 font-semibold">Socials</h3>
            <div className="mt-5">
              {email && (
                <Link 
                  href={`mailto:${email}`} 
                  className="text-slate-300 hover:text-primary transition-colors duration-200"
                >
                  {email}
                </Link>
              )}
              {/* Social icons will inherit transition styles from global CSS */}
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5 text-white mb-5 font-semibold">Quick Links</h3>
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className="text-slate-300 hover:text-primary hover:underline transition-all duration-200"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5 text-white mb-5 font-semibold">Location & Contact</h3>
            <ul className="mt-5 leading-10 text-slate-300">
              <li className="flex items-start">
                <span className="mr-2 text-primary">📍</span>
                {markdownify(location)}
              </li>
              {phone && (
                <li className="flex items-center">
                  <span className="mr-2 text-primary">📞</span>
                  <Link 
                    href={`tel:${phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {phone}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 text-center text-slate-500 text-xs tracking-wider">
          {markdownify(copyright, "p", "footer-copy-write uppercase")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
