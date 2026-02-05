import { Cpu, Users, Lightbulb, GraduationCap } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-padia-orange/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-padia-orange font-display text-sm tracking-widest uppercase mb-4 block">
            Conócenos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            ¿Qué es <span className="gradient-text">PADIA</span>?
          </h2>
        </div>

        {/* Main content card */}
        <div className="glass-card p-8 md:p-12 glow-border relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-padia-orange/10 to-transparent" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground font-semibold">PADIA</span> es el semillero multidisciplinario de la 
                <span className="text-padia-orange"> Universidad San Buenaventura Cali</span>, donde estudiantes apasionados por la tecnología 
                se unen para explorar, aprender y crear soluciones innovadoras.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos una comunidad académica y tecnológica enfocada en la <span className="text-foreground">innovación</span>, 
                la <span className="text-foreground">investigación</span> y el <span className="text-foreground">aprendizaje colaborativo</span>, 
                preparando a los profesionales del futuro digital.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Cpu, label: 'Tecnología', desc: 'De vanguardia' },
                { icon: Users, label: 'Comunidad', desc: 'Colaborativa' },
                { icon: Lightbulb, label: 'Innovación', desc: 'Constante' },
                { icon: GraduationCap, label: 'Formación', desc: 'Integral' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-4 text-center card-hover group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-padia-orange/10 flex items-center justify-center group-hover:bg-padia-orange/20 transition-colors">
                    <item.icon className="w-6 h-6 text-padia-orange" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
