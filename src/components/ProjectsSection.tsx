import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Sistema de Predicciónes',
    description: 'Modelo de machine learning para predicción de deserción estudiantil utilizando técnicas avanzadas de IA.',
    technologies: ['Python', 'TensorFlow', 'Pandas'],
    status: 'En desarrollo',
  },
  {
    title: 'Dashboard Analítico',
    description: 'Plataforma de visualización de datos académicos en tiempo real para la toma de decisiones.',
    technologies: ['React', 'D3.js', 'Node.js'],
    status: 'Completado',
  },
  {
    title: 'Chatbot Universitario',
    description: 'Asistente virtual con procesamiento de lenguaje natural para consultas académicas.',
    technologies: ['Python', 'NLP', 'FastAPI'],
    status: 'En desarrollo',
  },
  {
    title: 'Análisis de Sentimientos',
    description: 'Herramienta de análisis de opiniones en redes sociales usando deep learning.',
    technologies: ['Python', 'BERT', 'PyTorch'],
    status: 'Investigación',
  },
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
              className="glass-card p-6 card-hover group relative overflow-hidden"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                  project.status === 'Completado' 
                    ? 'bg-green-500/20 text-green-400' 
                    : project.status === 'En desarrollo'
                    ? 'bg-padia-orange/20 text-padia-orange'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground pr-24">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-sm text-padia-orange hover:text-padia-amber flex items-center gap-1 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Ver más
                </button>
                <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
                  <Github className="w-4 h-4" />
                  Código
                </button>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-padia-orange/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
