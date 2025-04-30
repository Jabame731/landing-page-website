// app/components/Footer.tsx

import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <Link href="/" className="text-white font-bold text-xl">
            <span className="flex align-middle">
              <Image
                src="/favicon.ico"
                alt="Logo"
                className=" mr-2"
                width={35}
                height={35}
              />
              <span className="text-lg">TRI-J Security Agency </span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Reliable security solutions tailored for businesses, events, and
            individuals.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-400">
            123 Secure Street, Cityville
            <br />
            Phone: (123) 456-7890
            <br />
            Email: contact@TRI-J Security Agency.com
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-white">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TRI-J Security Agency. All rights reserved.
      </div>
    </footer>
  );
}
