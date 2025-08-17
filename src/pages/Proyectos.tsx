import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Import project images
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";

const Proyectos = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Conjunto Residencial Los Alamos",
      description: "Moderno conjunto residencial de 24 casas con espacios verdes, ubicado en el corazón de Temuco. Diseño arquitectónico contemporáneo con acabados de primera calidad.",
      image: projectResidential,
      category: "residencial",
      location: "Temuco",
      year: "2024",
      units: "24 casas",
      status: "En construcción"
    },
    {
      id: 2,
      title: "Centro Comercial Plaza Araucanía",
      description: "Proyecto comercial de gran envergadura con 150 locales comerciales, área de restaurantes y entretenimiento. Diseño moderno que integra funcionalidad y estética.",
      image: projectCommercial,
      category: "comercial",
      location: "Temuco",
      year: "2023",
      units: "150 locales",
      status: "Completado"
    },
    {
      id: 3,
      title: "Complejo Industrial Maitén",
      description: "Instalaciones industriales de última generación para procesamiento y almacenamiento. Diseño sustentable con tecnología de punta para optimizar procesos productivos.",
      image: projectIndustrial,
      category: "industrial",
      location: "Padre Las Casas",
      year: "2024",
      units: "3 naves",
      status: "En planificación"
    },
    {
      id: 4,
      title: "Edificio Corporativo Mirador",
      description: "Torre corporativa de 8 pisos con oficinas premium y tecnología inteligente. Ubicación estratégica con vista panorámica de la ciudad.",
      image: projectCommercial,
      category: "comercial",
      location: "Temuco Centro",
      year: "2023",
      units: "48 oficinas",
      status: "Completado"
    },
    {
      id: 5,
      title: "Villa San Sebastián",
      description: "Exclusivo proyecto residencial de casas pareadas con jardines privados. Diseño que combina comfort familiar con eficiencia energética.",
      image: projectResidential,
      category: "residencial",
      location: "Vilcún",
      year: "2024",
      units: "16 casas",
      status: "En construcción"
    },
    {
      id: 6,
      title: "Planta de Procesamiento Agricola",
      description: "Moderna planta para procesamiento de productos agrícolas con certificaciones internacionales. Infraestructura diseñada para máxima eficiencia operacional.",
      image: projectIndustrial,
      category: "industrial",
      location: "Lautaro",
      year: "2025",
      units: "1 planta",
      status: "En planificación"
    }
  ];

  const categories = [
    { key: "todos", label: "Todos los Proyectos" },
    { key: "residencial", label: "Residencial" },
    { key: "comercial", label: "Comercial" },
    { key: "industrial", label: "Industrial" }
  ];

  const filteredProjects = selectedCategory === "todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Completado":
        return "default";
      case "En construcción":
        return "secondary";
      case "En planificación":
        return "outline";
      default:
        return "outline";
    }
  };

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
              className="border-white/30 text-white hover:bg-white/10"
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

      {/* Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.key)}
                className="transition-all duration-200"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden shadow-card hover:shadow-professional transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={getStatusBadgeVariant(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{project.units}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No se encontraron proyectos para esta categoría.
              </p>
            </div>
          )}
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