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
            Construyendo el
            <span className="block text-construction-accent">
              Futuro de Temuco
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-slide-up">
            Con más de una década de experiencia, Constructora CFP lidera proyectos 
            de construcción residencial, comercial e industrial en la región de La Araucanía. 
            Calidad, confianza y excelencia en cada obra.
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
              <div className="flex justify-center mb-2">
                <Building2 className="h-8 w-8 text-construction-accent" />
              </div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-sm text-white/80">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-construction-accent" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Clientes</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-construction-accent" />
              </div>
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-white/80">Años</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;