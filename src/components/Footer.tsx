import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-gray text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/f01836c2-9bea-49ae-aa6b-e2137d9c651d.png" 
                alt="Constructora CFP Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Constructora CFP es líder en proyectos de construcción en la región de 
              La Araucanía. Con experiencia, calidad y compromiso, construimos el futuro 
              de Temuco y sus alrededores.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-construction-accent" />
                <span className="text-white/80">contacto@constructoracfp.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-construction-accent" />
                <span className="text-white/80">+56 9 5066 2535</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-construction-accent" />
                <span className="text-white/80">Av. Alemania 1234, Temuco</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Construcción Residencial
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Construcción Comercial
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Construcción Industrial
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Remodelaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-white/80 hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/80 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Constructora CFP. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Construyendo el futuro de Temuco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;