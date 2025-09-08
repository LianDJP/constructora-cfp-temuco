import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const GoogleFormSection = () => {
  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para convertir tus ideas en realidad. Contáctanos y 
            comencemos a construir juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Email</h3>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">contacto@constructoracfp.cl</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Teléfono</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">+56 9 5066 2535</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Oficina</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Iquilla 1095<br />
                      Padre las Casas, La Araucanía
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Form Preview */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  Solicitar Información
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="w-full">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScg9wfrz3StN1tRLqGLCZN_yK0Pur4DBfjQXfCm4gT8twmTvw/viewform?embedded=true"
                    className="w-full h-[500px] sm:h-[600px] lg:h-[700px] border-0 rounded-lg"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Formulario de Contacto"
                  >
                    Cargando...
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleFormSection;