"use client";

import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const { main } = menu;
  const [showMenu, setShowMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const [direction, setDirection] = useState(null);

  const pathname = usePathname();
  const asPath = pathname;

  useEffect(() => {
    const header = headerRef.current;
    const headerHeight = header.clientHeight + 200;
    let prevScroll = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > 0 ? setSticky(true) : setSticky(false);
      if (scrollY > headerHeight) {
        prevScroll > scrollY ? setDirection(-1) : setDirection(1);
        prevScroll = scrollY;
      } else {
        setDirection(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="header-height-fix"></div>
      <header
        className={`header ${sticky && "header-sticky"} ${
          direction === 1 && "unpinned"
        }`}
        ref={headerRef}
        style={{ 
          backgroundColor: "#0f172a", 
          borderBottom: "1px solid #1e293b",
          transition: "all 0.3s ease"
        }}
      >
        <nav className="navbar container-xl">
          {/* brand logo text */}
          <div className="order-0">
            <Link href="/" className="navbar-brand flex items-center">
              <span className="h3 font-bold mb-0" style={{ color: "#f8fafc", letterSpacing: "-0.5px" }}>
                U&E <span className="text-primary">Digital Services</span>
              </span>
            </Link>
          </div>

          <ul
            id="nav-menu"
            className={`navbar-nav order-2 w-full justify-center lg:order-1 md:w-auto md:space-x-2 lg:flex ${
              !showMenu && "hidden"
            }`}
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span 
                      className="nav-link inline-flex items-center cursor-pointer"
                      style={{ color: "#f8fafc" }}
                    >
                      {menu.name}
                      <svg className="h-4 w-4 fill-current ml-1" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul 
                      className="nav-dropdown-list hidden max-h-0 w-full overflow-hidden border border-[#334155] py-0 transition-all duration-500 group-hover:block group-hover:max-h-[200px] group-hover:py-2 lg:invisible lg:absolute lg:left-1/2 lg:block lg:w-auto lg:-translate-x-1/2 lg:group-hover:visible lg:group-hover:opacity-100"
                      style={{ backgroundColor: "#1e293b" }}
                    >
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className={`nav-dropdown-link block transition-all ${
                              asPath === child.url && "active"
                            }`}
                            style={{ color: "#cbd5e1" }}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      className={`nav-link block transition-colors hover:text-primary ${
                        asPath === menu.url ? "text-primary" : ""
                      }`}
                      style={{ color: asPath === menu.url ? "" : "#f8fafc" }}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>

          <div className="order-1 ml-auto flex items-center md:ml-0">
            {config.nav_button.enable && (
              <Link
                className="btn btn-primary hidden lg:flex"
                href={config.nav_button.link}
                style={{ borderRadius: "6px" }}
              >
                {config.nav_button.label}
              </Link>
            )}

            {/* navbar toggler */}
            <button
              className="lg:hidden p-2"
              style={{ color: "#f8fafc" }}
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <CgClose className="text-3xl" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="32px"
                  height="32px"
                >
                  <path
                    fill="currentColor"
                    d="M 5 5 L 5 11 L 11 11 L 11 5 L 5 5 z M 13 5 L 13 11 L 19 11 L 19 5 L 13 5 z M 21 5 L 21 11 L 27 11 L 27 5 L 21 5 z M 7 7 L 9 7 L 9 9 L 7 9 L 7 7 z M 15 7 L 17 7 L 17 9 L 15 9 L 15 7 z M 23 7 L 25 7 L 25 9 L 23 9 L 23 7 z M 5 13 L 5 19 L 11 19 L 11 13 L 5 13 z M 13 13 L 13 19 L 19 19 L 19 13 L 13 13 z M 21 13 L 21 19 L 27 19 L 27 13 L 21 13 z M 7 15 L 9 15 L 9 17 L 7 17 L 7 15 z M 15 15 L 17 15 L 17 17 L 15 17 L 15 15 z M 23 15 L 25 15 L 25 17 L 23 17 L 23 15 z M 5 21 L 5 27 L 11 27 L 11 21 L 5 21 z M 13 21 L 13 27 L 19 27 L 19 21 L 13 21 z M 21 21 L 21 27 L 27 27 L 27 21 L 21 21 z M 7 23 L 9 23 L 9 25 L 7 25 L 7 23 z M 15 23 L 17 23 L 17 25 L 15 25 L 15 23 z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
