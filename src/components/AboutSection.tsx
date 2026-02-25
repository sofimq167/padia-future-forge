import React from 'react';
import { Cpu, Users, Lightbulb, GraduationCap } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';
// @ts-ignore
import logoNaranja from '../logonaranja.png';

const MembersDisplay: React.FC = () => {
  const { members } = useAdmin();
  const topMembers = members.slice(0, 3);
  const restMembers = members.slice(3);
  const grouped: typeof restMembers[] = [];
  for (let i = 0; i < restMembers.length; i += 4) {
    grouped.push(restMembers.slice(i, i + 4));
  }
  return (
    <>
      {/* Top row */}
      <div className="flex justify-center gap-8 mb-8 flex-wrap">
        {topMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-neutral-900 rounded-xl px-8 py-6 flex flex-col items-center w-[250px] h-[150px] border border-neutral-700 group"
            style={{ boxShadow: '0 4px 24px 0 rgba(255,140,0,0.18)' }}
          >
            {member.photo && (
              <img
                src={member.photo}
                alt={member.name}
                className="w-16 h-16 rounded-full mb-2 object-cover"
              />
            )}
            <span className="font-semibold text-lg text-white text-center mb-1">{member.name}</span>
            {member.role && (
              <span className="text-xs text-padia-orange text-center mb-2">{member.role}</span>
            )}
            <a
              href={member.linkedin ? member.linkedin : undefined}
              target={member.linkedin ? "_blank" : undefined}
              rel={member.linkedin ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1 mt-2 text-padia-orange hover:text-padia-orange/80"
              aria-label={`LinkedIn de ${member.name}`}
              style={!member.linkedin ? { pointerEvents: 'none', cursor: 'default' } : {}}
            >
              <img src="/icons8-linkedin.svg" alt="LinkedIn" className={`w-5 h-5${!member.linkedin ? ' opacity-40' : ''}`} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        ))}
      </div>
      {/* Rest of members in rows of 3 or 4 */}
      {grouped.map((group, gidx) => (
        <div key={gidx} className="flex justify-center gap-8 mb-6 flex-wrap">
          {group.map((member, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 rounded-xl px-8 py-4 flex flex-col items-center w-[250px] h-[120px] border border-neutral-700 group"
              style={{ boxShadow: '0 4px 24px 0 rgba(255,140,0,0.13)' }}
            >
              {member.photo && (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-16 h-16 rounded-full mb-2 object-cover"
                />
              )}
              <span className="font-semibold text-lg text-white text-center mb-1">{member.name}</span>
              {member.role && (
                <span className="text-xs text-padia-orange text-center mb-2">{member.role}</span>
              )}
              <a
                href={member.linkedin ? member.linkedin : undefined}
                target={member.linkedin ? "_blank" : undefined}
                rel={member.linkedin ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 mt-2 text-padia-orange hover:text-padia-orange/80"
                aria-label={`LinkedIn de ${member.name}`}
                style={!member.linkedin ? { pointerEvents: 'none', cursor: 'default' } : {}}
              >
                <img src="/icons8-linkedin.svg" alt="LinkedIn" className={`w-5 h-5${!member.linkedin ? ' opacity-40' : ''}`} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="pt-24 pb-0 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-padia-orange/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-padia-orange font-display text-sm tracking-widest uppercase mb-4 block">
          
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            ¿Qué es <img src={logoNaranja} alt="Logo PADIA Naranja" className="inline h-14 md:h-20 lg:h-24 w-auto align-middle" />?
          </h2>
        </div>
        <div className="glass-card p-8 md:p-12 glow-border relative overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-padia-orange/10 to-transparent" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="text-foreground font-semibold">PADIA</span>
                <img
                  src="/gato.png"
                  alt="Logo Gato PADIA"
                  className="inline-block align-middle h-[1.3em] md:h-[1.7em] lg:h-[1.3em] mx-2"
                  style={{ maxHeight: '1.3em', verticalAlign: 'middle' }}
                />
                es el semillero multidisciplinario de la 
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

        {/* Integrantes */}
        <MembersDisplay />


        {/* Main content card */}
        {/* ...existing code... */}
      </div>
    </section>
  );
};
