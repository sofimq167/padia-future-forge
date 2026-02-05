import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and info */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold gradient-text mb-2">PADIA</h3>
            <p className="text-sm text-muted-foreground">
              Semillero de Programación, Analítica de Datos e IA
            </p>
            <p className="text-sm text-muted-foreground">
              Universidad San Buenaventura Cali
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Mail, label: 'Email' },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-padia-orange hover:bg-padia-orange/10 transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Semillero PADIA - Universidad San Buenaventura Cali. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
