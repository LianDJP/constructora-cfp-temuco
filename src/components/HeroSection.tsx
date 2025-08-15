import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
const HeroSection = () => {
  return <section id="inicio" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-construction-blue/90 via-construction-blue/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Tu futuro, un proyecto a la vez
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            Con compromiso, innovación y calidad, Constructora CFP desarrolla proyectos 
            residenciales, comerciales e industriales en la región de La Araucanía. 
            Nuestro objetivo es entregar soluciones constructivas que superen las expectativas 
            de cada cliente, desde el primer contacto hasta la entrega final.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="secondary" size="lg" className="group">
              Ver Proyectos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white text-zinc-950">
              Solicitar Cotización
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Building2 className="h-8 w-8 text-construction-accent" />
              </div>
              <div className="text-base text-white/90 font-medium">Proyectos en curso</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="h-8 w-8 text-construction-accent" />
              </div>
              <div className="text-base text-white/90 font-medium">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="h-8 w-8 text-construction-accent" />
              </div>
              <div className="text-base text-white/90 font-medium">Compromiso 100%</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;