import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section: string) => {
    if (location.pathname === "/") {
      // Already on home page, just scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with hash
      navigate(`/#${section}`);
    }
    setIsMenuOpen(false);
  };

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
            <button 
              onClick={() => handleNavigation("inicio")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleNavigation("servicios")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => navigate("/proyectos")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </button>
            <button 
              onClick={() => handleNavigation("contacto")} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
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
              <button 
                onClick={() => handleNavigation("inicio")} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => handleNavigation("servicios")} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => {
                  navigate("/proyectos");
                  setIsMenuOpen(false);
                }} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Proyectos
              </button>
              <button 
                onClick={() => handleNavigation("contacto")} 
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;