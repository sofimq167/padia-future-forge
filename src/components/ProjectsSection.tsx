import { ExternalLink, Github } from 'lucide-react';

const projects = [
  { title: 'Proyecto 1' },
  { title: 'Proyecto 2' },
  { title: 'Proyecto 3' },
  { title: 'Proyecto 4' },
];

export const ProjectsSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[600px] h-[600px] bg-padia-orange/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-padia-orange font-display text-sm tracking-widest uppercase mb-4 block">
            Nuestro trabajo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Proyectos</span> Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploramos, creamos e innovamos a través de proyectos que aplican programación, 
            analítica de datos e inteligencia artificial.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card p-6 card-hover group relative overflow-hidden flex flex-col items-center justify-center min-h-[180px]"
            >
              <h3 className="font-display text-xl font-semibold mb-6 text-foreground text-center">
                {project.title}
              </h3>
              <button
                className="text-base text-padia-orange hover:text-padia-amber flex items-center gap-2 transition-colors border border-padia-orange rounded-lg px-4 py-2"
                // TODO: Cambiar href a la herramienta correspondiente
                onClick={() => window.open('https://herramienta.ejemplo.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5" />
                Ver más
              </button>
            </div>
          ))}
        </div>

        {/* Coming soon card */}
        <div className="mt-6 glass-card p-8 text-center border-dashed border-2 border-border/50">
          <p className="text-muted-foreground">
            Más proyectos próximamente...
          </p>
        </div>
      </div>
    </section>
  );
};
