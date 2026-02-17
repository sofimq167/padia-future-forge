import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import logoPadia from '../logopadia.png';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and info */}
          <div className="text-center md:text-left">
            <img src={logoPadia} alt="Logo Padia" className="h-20 w-auto mb-2 mx-auto md:mx-0" />
            <p className="text-sm text-muted-foreground">
              Semillero de Programación, Analítica de Datos e IA
            </p>
            <p className="text-sm text-muted-foreground">
              Universidad San Buenaventura Cali
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/padiausb/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-padia-orange hover:bg-padia-orange/10 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-10 h-10" />
            </a>
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
