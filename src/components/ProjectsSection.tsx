import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import residentialImage from "@/assets/project-residential.jpg";
import commercialImage from "@/assets/project-commercial.jpg";
import industrialImage from "@/assets/project-industrial.jpg";

const projects = [
  {
    title: "Condominio Los Robles",
    category: "Residencial",
    image: residentialImage,
    description: "Moderno condominio de 45 unidades con áreas verdes y amenidades exclusivas.",
    year: "2023"
  },
  {
    title: "Centro Comercial Araucanía",
    category: "Comercial",
    image: commercialImage,
    description: "Complejo comercial de 15,000 m² con tecnología sustentable y diseño innovador.",
    year: "2022"
  },
  {
    title: "Planta Industrial MaderaTech",
    category: "Industrial",
    image: industrialImage,
    description: "Moderna planta procesadora con sistemas automatizados y estándares internacionales.",
    year: "2023"
  }
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada proyecto refleja nuestro compromiso con la excelencia, la innovación 
            y la satisfacción del cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-card transition-all duration-300 border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/90 text-foreground border-border">
                    {project.year}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facebook Feed Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Síguenos en Facebook
            </h3>
            <p className="text-lg text-muted-foreground">
              Mantente al día con nuestros últimos proyectos y noticias
            </p>
          </div>
          
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fconstructoracfp&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="500"
                height="700"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="mx-auto rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente? 
            <a href="#contacto" className="text-primary hover:underline ml-2">
              Conversemos sobre tu visión
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;