import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  
  return <section id="inicio" className="relative min-h-[100vh] sm:min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(/lovable-uploads/f928274e-6a00-41ec-9b86-1da4649bbf20.png)`,
      backgroundPosition: 'center 30%'
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/90 via-construction-blue/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
            Tu futuro, un proyecto a la vez
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed animate-slide-up">
            Con compromiso, innovación y calidad, Constructora CFP desarrolla proyectos 
            residenciales, comerciales e industriales en la región de La Araucanía. 
            Nuestro objetivo es entregar soluciones constructivas que superen las expectativas 
            de cada cliente, desde el primer contacto hasta la entrega final.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={() => navigate("/proyectos")}
            >
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white hover:bg-white text-zinc-950 w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicitar Cotización
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20">
            <div className="text-center py-2">
              <div className="flex justify-center mb-2 sm:mb-3">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-construction-accent" />
              </div>
              <div className="text-sm sm:text-base text-white/90 font-medium">Proyectos en curso</div>
            </div>
            <div className="text-center py-2">
              <div className="flex justify-center mb-2 sm:mb-3">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-construction-accent" />
              </div>
              <div className="text-sm sm:text-base text-white/90 font-medium">Clientes satisfechos</div>
            </div>
            <div className="text-center py-2">
              <div className="flex justify-center mb-2 sm:mb-3">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-construction-accent" />
              </div>
              <div className="text-sm sm:text-base text-white/90 font-medium">Compromiso 100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;