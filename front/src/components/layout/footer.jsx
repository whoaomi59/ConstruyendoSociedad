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
import { RoutesHome } from "../../mock/causas";

export default function Footer({ empresa }) {
  return (
    <footer className="bg-orange-400 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <img
              src={empresa.Logo}
              alt={empresa.Nombre}
              className="h-40 w-auto"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
            <h5 className="text-white text-lg font-semibold mb-4">
              Enlaces rápidos
            </h5>
            <ul className="space-y-2">
              {RoutesHome.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.paht}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h5 className="text-white text-lg font-semibold mb-4">
              Información del contacto
            </h5>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:120-240-9600" className="hover:text-blue-400">
                  {empresa.Telefono}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:donate@charity.org"
                  className="hover:text-blue-400"
                >
                  {empresa.Email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                {empresa.Ubicacion}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-2 border-t border-orange-500 pt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="flex space-x-4 mt-4 md:mt-0">© 2025</p>
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
