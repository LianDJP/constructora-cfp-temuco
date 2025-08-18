import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/f01836c2-9bea-49ae-aa6b-e2137d9c651d.png" 
              alt="Constructora CFP Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#proyectos" className="text-foreground hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#servicios" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a 
                href="#proyectos" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proyectos
              </a>
              <a 
                href="#contacto" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;