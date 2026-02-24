import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="pt-24 pb-0 px-4 relative overflow-hidden">
      {/* Background curve and glow */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 200L60 186.7C120 173 240 147 360 133.3C480 120 600 120 720 133.3C840 147 960 173 1080 180C1200 187 1320 173 1380 166.7L1440 160V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0Z"
            fill="url(#curveGradient)"
            fillOpacity="0.1"
          />
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="1440" y2="0">
              <stop stopColor="hsl(25, 95%, 53%)" />
              <stop offset="1" stopColor="hsl(35, 90%, 55%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-padia-orange/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Icon eliminado por solicitud */}

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Construyamos el <span className="gradient-text glow-text">futuro</span> juntos
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Únete a nuestra comunidad de innovadores y forma parte del semillero que está 
          transformando la tecnología en la Universidad San Buenaventura Cali.
        </p>

        {/* CTA Buttons eliminados por solicitud */}
      </div>
    </section>
  );
};
