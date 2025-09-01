"use client"
import { useState, useEffect  } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
}, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white h-[70px] xl:h-[85px] flex justify-between items-center px-[30px] md:px-[40px] min-[950px]:px-[100px] 2xl:px-[200px] transition-all duration-300 ${
          scrolled ? "border-b border-gray-200 shadow-sm" : ""
        }`}
      >
        <img
          src="/icons/ravantech.svg"
          alt="RavanTech logo"
          width={132.3}
          height={35}
          className="xl:w-auto xl:h-[50px]"
        />

        <ul className="hidden md:flex md:items-center md:gap-x-4 min-[950px]:gap-x-7 md:font-sora md:font-semibold md:text-[15px] xl:text-[17px]">
          <li className="hover:text-secondary-purple">
            <a href="#about-us">Sobre nosotros</a>
          </li>
          <li className="hover:text-secondary-purple">
            <a href="#services">Servicios</a>
          </li>
          <li className="hover:text-secondary-purple">
            <a href="#clients">Clientes</a>
          </li>
          <li className="hover:text-secondary-purple">
            <a href="#contact">Contacto</a>
          </li>
          <li className="flex gap-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/facebook-2.svg"
                alt="Facebook icon"
                width={22}
                height={22}
                className="xl:w-auto xl:h-[25px]"
              />
            </a>
            <a href="https://www.instagram.com/ravantech.xr/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/instagram-2.svg"
                alt="Instagram icon"
                width={22}
                height={22}
                className="xl:w-auto xl:h-[25px]"
              />
            </a>
          </li>
        </ul>
  
        <button className="cursor-pointer md:hidden" onClick={handleToggleMenu}>
          <img
            src="/icons/menu.svg"
            alt="Menu icon"
            width={25}
            height={25}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="bg-main-purple w-full z-100 h-screen fixed top-0 left-0 flex flex-col justify-center items-center text-center">
          <button
            className="cursor-pointer absolute top-[40px] right-[40px]"
            onClick={handleToggleMenu}
          >
            <img
              src="/icons/close-menu.svg"
              alt="Close menu icon"
              width={35}
              height={35}
            />
          </button>

          <ul className="flex flex-col gap-y-[40px] text-white font-sora font-bold text-xl">
            <li>
              <a href="#about-us">Sobre nosotros</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#clients">Clientes</a>
            </li>
            <li>
              <a href="contact">Contacto</a>
            </li>
          </ul>

          <div className="flex gap-x-[40px] absolute bottom-[50px]">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/facebook.svg"
                alt="Facebook icon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.instagram.com/ravantech.xr/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/instagram.svg"
                alt="Instagram icon"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.linkedin.com/company/ravan-tech/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn icon"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};