import React from 'react';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6 mt-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Tanzeel ur Rehman. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://wa.me/923244368294"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://www.instagram.com/tanzeelur302?igsi=MTZxeDQybGFoZTF2Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://github.com/Tanzeel-ur-rehman2008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaGithub />
            </Link>
            <Link
              href="mailto:tanzeelg2007@gmail.com"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaEnvelope />
            </Link>
          </div>

          {/* Made with love */}
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-accent text-xs" /> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;