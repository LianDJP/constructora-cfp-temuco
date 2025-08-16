import { Card, CardContent } from "@/components/ui/card";
import { Home, Building, Factory, Hammer } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Construcción Residencial",
    description: "Casas, departamentos y condominios diseñados con los más altos estándares de calidad y confort."
  },
  {
    icon: Building,
    title: "Construcción Comercial",
    description: "Oficinas, centros comerciales y espacios corporativos que impulsan el crecimiento empresarial."
  },
  {
    icon: Factory,
    title: "Construcción Industrial",
    description: "Bodegas, plantas industriales y centros logísticos con tecnología de vanguardia."
  },
  {
    icon: Hammer,
    title: "Remodelaciones",
    description: "Renovación y ampliación de espacios existentes con diseño moderno y funcional."
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casas, cabañas, quinchos, terrazas, entre otros, pensadas para hacer realidad tus ideas, con un enfoque en la calidad, el cumplimiento y la atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-professional transition-all duration-300 border-0 bg-card">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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