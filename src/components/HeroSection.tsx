import { Button } from '@/components/ui/button';
import gatoImg from '../gato.png';
import logoNaranja from '../logonaranja.png';
import { DataSphere } from './DataSphere';
import { Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background effects */}
      <div className="absolute inset-0">
        <DataSphere />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-padia-orange/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-padia-amber/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="w-2 h-2 rounded-full bg-padia-orange animate-pulse" />
          <span className="text-sm text-muted-foreground">Universidad San Buenaventura Cali</span>
        </div>

        {/* Main title con imagen */}
        <div className="flex flex-col items-center justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground">Semillero</span>
          <div className="flex items-center gap-4 mt-2">
            <img src={logoNaranja} alt="Logo PADIA Naranja" className="h-20 md:h-32 lg:h-40 w-auto" />
            <img src={gatoImg} alt="Gato PADIA" className="h-16 md:h-24 lg:h-32 w-auto" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="text-foreground font-medium">Programación</span>
          <span className="mx-3 text-padia-orange">·</span>
          <span className="text-foreground font-medium">Analítica de Datos</span>
          <span className="mx-3 text-padia-orange">·</span>
          <span className="text-foreground font-medium">Inteligencia Artificial</span>
        </p>

        {/* Tagline */}
        <div className="flex items-center justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="w-5 h-5 text-padia-orange" />
          <p className="text-xl md:text-2xl text-padia-orange font-display font-medium">
            Estamos construyendo el futuro, un dato a la vez
          </p>
          <Sparkles className="w-5 h-5 text-padia-orange" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {/* <Button variant="glow" size="xl">
            Únete al semillero
          </Button> */}
          {/* <Button variant="glow-outline" size="xl">
            Conoce más
          </Button> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-padia-orange transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
