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
            © {new Date().getFullYear()} Syed Awais Gillani. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://wa.me/923257109880"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://www.instagram.com/nexcore.i?igsi=MWE1ejQ5ODM2NzU0Mg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://github.com/rashidgillani490-hash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-accent transition-colors text-lg"
            >
              <FaGithub />
            </Link>
            <Link
              href="mailto:rashidgillani490@gmail.com"
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