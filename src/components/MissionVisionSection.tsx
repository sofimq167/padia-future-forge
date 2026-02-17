import { Target, Eye } from 'lucide-react';

export const MissionVisionSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-padia-orange/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-padia-orange/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-padia-orange font-display text-sm tracking-widest uppercase mb-4 block">
            Nuestro propósito
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Misión & <span className="gradient-text">Visión</span>
          </h2>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-card p-8 card-hover relative group overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-padia-orange to-padia-amber" />
            
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-padia-orange/10 rounded-full blur-3xl group-hover:bg-padia-orange/20 transition-colors" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-padia-orange/20 to-padia-amber/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-padia-orange" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground">Misión</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra misión es explorar, promover y desarrollar habilidades sólidas en nuestros miembros a través de la investigación colaborativa, el aprendizaje continuo y la innovación
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="glass-card p-8 card-hover relative group overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-padia-amber to-padia-orange" />
            
            {/* Decorative glow */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-padia-amber/10 rounded-full blur-3xl group-hover:bg-padia-amber/20 transition-colors" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-padia-amber/20 to-padia-orange/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-padia-amber" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground">Visión</h3>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Buscamos convertirnos en un referente local, siendo un espacio de excelencia académica donde se impulsan proyectos innovadores, se fortalecen habilidades técnicas y se establecen alianzas estratégicas con instituciones y empresas del sector tecnológico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
