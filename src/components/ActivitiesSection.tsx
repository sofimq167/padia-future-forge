import { Trophy, Users2, Rocket, HeartHandshake, BookOpen } from 'lucide-react';

const activities = [
  {
    icon: Trophy,
    title: 'Competencias',
    description: 'Participamos en hackathons, datathons y competencias de programación a nivel nacional e internacional.',
  },
  {
    icon: Users2,
    title: 'Congresos',
    description: 'Asistimos y presentamos en congresos académicos de tecnología, IA y ciencia de datos.',
  },
  {
    icon: Rocket,
    title: 'Proyectos Innovadores',
    description: 'Desarrollamos soluciones tecnológicas que impactan positivamente en la comunidad.',
  },
  {
    icon: HeartHandshake,
    title: 'Red de Apoyo',
    description: 'Construimos una comunidad de estudiantes que se apoyan mutuamente en su crecimiento profesional.',
  },
  {
    icon: BookOpen,
    title: 'Aprendizaje Colectivo',
    description: 'Organizamos talleres, workshops y sesiones de estudio para compartir conocimientos.',
  },
];

export const ActivitiesSection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-padia-orange/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-padia-orange font-display text-sm tracking-widest uppercase mb-4 block">
            Nuestras actividades
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            ¿Qué hacemos en <span className="gradient-text">PADIA</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nos dedicamos a formar profesionales integrales a través de diversas actividades académicas y tecnológicas.
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, idx) => (
            <div
              key={idx}
              className="glass-card p-6 card-hover group relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-padia-orange/0 to-padia-orange/0 group-hover:from-padia-orange/5 group-hover:to-transparent transition-all duration-500" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-padia-orange/20 to-padia-amber/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <activity.icon className="w-7 h-7 text-padia-orange" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground relative">
                {activity.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative">
                {activity.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-padia-orange/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
