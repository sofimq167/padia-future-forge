import { Cpu, Users, Lightbulb, GraduationCap } from 'lucide-react';
// @ts-ignore
import logoNaranja from '../logonaranja.png';

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
        <div className="mt-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
            Integrantes del Semillero
          </h2>
          <span className="text-padia-orange font-display text-sm tracking-widest uppercase mb-4 block">
          
          </span>
          {(() => {
            const members = [
              { name: "Giovanny Hidalgo Suarez", role: "Director", linkedin: "https://www.linkedin.com/in/giovanny-hidalgo-suarez-95711b1a5/" },
              { name: "Mariana Cruz", role: "Lider célula 1", linkedin: "https://www.linkedin.com/in/mariana-cruz-53a8531b0/" },
              { name: "Sofia Valencia", role: "Lider célula 2", linkedin: "https://www.linkedin.com/in/sofia-valencia-solano-66022a345/" },
              { name: "Lilian Estefania Maradiago Correa", linkedin: "https://www.linkedin.com/in/lilian-estefania-maradiago-correa-40b423244/" },
              { name: "Valeria Rudas Ruiz", linkedin: "https://www.linkedin.com/in/valeria-rudas-ruiz-941a0715b/" },
              { name: "Juan Sebastián Dosman Bastidas", linkedin: "https://www.linkedin.com/in/sebastiandosman/" },
              { name: "Gustavo Adolfo Camargo Pineda", linkedin: "https://www.linkedin.com/in/gustavoadolfocamargopineda/" },
              { name: "Dillan Alexander Asprilla Sánchez", linkedin: "https://www.linkedin.com/in/dillanasprilla/" },
              { name: "Carlos Andrés Serrato Echeverry", linkedin: "https://www.linkedin.com/in/carlos-andres-serrato-echeverry/" },
              { name: "Nicolas Ramirez Villota", linkedin: "https://www.linkedin.com/in/nicolasdlp/" },
              { name: "Juan David Díaz Cerón", linkedin: "https://www.linkedin.com/in/juan-david-díaz-cerón-272416265/" },
              { name: "Jhonatan Andrés Ortega Caicedo" },
              { name: "Valerie Sofia Olave Pineda", linkedin: "https://www.linkedin.com/in/valerie-olave-3a1929350/" },
              { name: "Natalia Giraldo Amador", linkedin: "https://www.linkedin.com/in/natalia-giraldo-432076256/" },
              { name: "Sofia Moreno Quintero", linkedin: "https://www.linkedin.com/in/sofia-moreno-3a3249272/" },
              { name: "Juan Pablo Bustamante Bermúdez", linkedin: "https://www.linkedin.com/in/jpbustamanteb/" },
              { name: "Kevin Alexis López Camacho", linkedin: "https://www.linkedin.com/in/kevin-lópez-7a19b8369/" },
              { name: "Bylen Yesid Naspiran Realpe", linkedin: "https://www.linkedin.com/in/bylenyesidnaspiranrealpe/" },
              { name: "Maria José Ramirez Montero", linkedin: "https://www.linkedin.com/in/maria-jose-ramirez-montero-8b45052b3/" },
              { name: "Nicolas Hernandez Rodriguez" },
              { name: "Samuel Vargas Valderruten" },
              { name: "Fernanda Elizabeth Muñoz Cháves" },
              { name: "Valeria Becerra Rendón" },
              { name: "Samuel Mejia Chavarriaga" },
              { name: "Sofía Acosta Escobar" },
            ];
            const topMembers = members.slice(0, 3);
            const restMembers = members.slice(3);
            // Group the rest in arrays of 3 or 4
            const grouped = [];
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
          })()}
        </div>

        {/* Main content card */}
        
      </div>
    </section>
  );
};
