const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

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
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61576274735152&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
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