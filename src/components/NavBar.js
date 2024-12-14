import { useState, useEffect } from "react"; 
import { FaFacebook, FaWhatsapp, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import logo from '../assets/img/logo.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false); // Close menu on click
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <nav className={`fixed w-full z-10 py-4 px-6 transition-all duration-300 ${scrolled ? "bg-gray-800 shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="w-16 h-16 mr-2 object-contain" />
            <span className="text-white text-xl font-bold">MyPortfolio</span>
          </a>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Links */}
          <div className={`absolute top-16 left-0 mr-5 w-full bg-gray-900 p-5 md:p-0 md:bg-transparent md:static md:flex md:space-x-8 md:items-center md:justify-end ${menuOpen ? "block" : "hidden"}`}>
            <a href="#home" className={`block md:inline-block text-white hover:text-blue-500 ${activeLink === "home" ? "text-blue-500" : ""}`} onClick={() => onUpdateActiveLink("home")}>
              Home
            </a>
            <a href="#skills" className={`block md:inline-block mt-4 md:mt-0 text-white hover:text-blue-500 ${activeLink === "skills" ? "text-blue-500" : ""}`} onClick={() => onUpdateActiveLink("skills")}>
              Skills
            </a>
            <a href="#projects" className={`block md:inline-block mt-4 md:mt-0 text-white hover:text-blue-500 ${activeLink === "projects" ? "text-blue-500" : ""}`} onClick={() => onUpdateActiveLink("projects")}>
              Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100068844817728" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebook size={25} />
            </a>
            <a href="https://wa.me/22962341440" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaWhatsapp size={24} />
            </a>
            <a href="www.linkedin.com/in/merveille-doh-015804296" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
              <FaLinkedin size={25} />
            </a>
            <HashLink to="#connect">
              <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
                Let’s Connect
              </button>
            </HashLink>
          </div>
        </div>
      </nav>
    </Router>
  );
};
