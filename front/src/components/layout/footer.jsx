import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Logo */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <img
              src="./img/logos/logo 1.png"
              alt="Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
            <h5 className="text-blue-500 text-lg font-semibold mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2">
              {[
                "Our Story",
                "Newsroom",
                "Causes",
                "Become a volunteer",
                "Partner with us",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h5 className="text-white text-lg font-semibold mb-4">
              Contact Information
            </h5>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:120-240-9600" className="hover:text-blue-400">
                  120-240-9600
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:donate@charity.org"
                  className="hover:text-blue-400"
                >
                  donate@charity.org
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                Akershusstranda 20, 0150 Oslo, Norway
              </p>
              <a
                href="#"
                className="inline-block mt-3 px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition"
              >
                Get Direction
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © 2036{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Kind Heart
            </a>{" "}
            Charity Org. Design:{" "}
            <a
              href="https://templatemo.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              TemplateMo
            </a>
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Instagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
