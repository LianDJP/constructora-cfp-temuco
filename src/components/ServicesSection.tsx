import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Factory, Hammer } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Construcción Residencial",
    description: "Casas, cabañas, quinchos, terrazas, entre otros, pensadas para hacer realidad tus ideas, con un enfoque en la calidad, el cumplimiento y la atención personalizada."
  },
  {
    icon: Building,
    title: "Construcción Comercial",
    description: "Locales, oficinas y espacios comerciales diseñados para potenciar tu emprendimiento y brindar una experiencia atractiva a tus clientes."
  },
  {
    icon: Factory,
    title: "Construcción Industrial",
    description: "Bodegas, talleres y espacios productivos creados para optimizar tus operaciones y garantizar durabilidad."
  },
  {
    icon: Hammer,
    title: "Remodelaciones",
    description: "Ampliaciones, renovaciones de viviendas y mejoras menores como trabajos de albañilería, instalación de techos, cambios de ventanas y puertas, entre otros."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de construcción adaptadas a las necesidades 
            específicas de cada cliente y proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-professional transition-all duration-300 border-0 bg-card h-full">
              <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;