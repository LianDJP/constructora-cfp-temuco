import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Proyectos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-construction-blue to-construction-blue/80">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/")}
              className="border-white/30 text-foreground hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Button>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Cada proyecto que desarrollamos refleja nuestro compromiso con la excelencia, 
              la innovación y la satisfacción de nuestros clientes. Conoce las obras que 
              están transformando la región de La Araucanía.
            </p>
          </div>
        </div>
      </section>

      {/* Visualización de Panorama Constructora */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nuestros Proyectos y Obras
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora nuestra galería completa de proyectos realizados y en desarrollo. 
              Cada obra refleja nuestro compromiso con la calidad y la innovación.
            </p>
          </div>
          
          <div className="w-full bg-muted/20 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://panorama-constructora-cl.lovable.app"
              className="w-full h-[600px] md:h-[700px] lg:h-[800px] border-0"
              title="Panorama de Proyectos - Constructora CFP"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ 
                minHeight: '500px',
                maxWidth: '100%'
              }}
            />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Visualización interactiva de nuestros proyectos y obras realizadas
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conversemos sobre tu visión. Nuestro equipo de expertos está listo para 
            hacer realidad tu próximo proyecto de construcción.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/#contacto")}
            className="group"
          >
            Solicitar Cotización
            <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform rotate-180" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Proyectos;