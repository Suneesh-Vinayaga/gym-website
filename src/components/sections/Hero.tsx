
'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = animationRef.current;
    if (!container) return;

    const gridSize = { x: 20, y: 10 };
    container.innerHTML = ''; // Clear previous elements
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < gridSize.x * gridSize.y; i++) {
      const el = document.createElement('div');
      el.classList.add('grid-item');
      fragment.appendChild(el);
    }
    container.appendChild(fragment);

    const animation = anime.timeline({
      targets: '.grid-item',
      easing: 'easeOutSine',
      delay: anime.stagger(100, { grid: [gridSize.x, gridSize.y], from: 'center' }),
      loop: true,
    })
    .add({
      backgroundColor: ['hsl(0, 0%, 4%)', 'hsl(0, 100%, 45.1%)', 'hsl(0, 0%, 4%)'],
      scale: [1, 1.2, 1],
      duration: 1500,
      delay: anime.stagger(50, {grid: [gridSize.x, gridSize.y], from: 'center'})
    })
    .add({
      backgroundColor: 'hsl(0, 0%, 4%)',
      duration: 2000,
      delay: 2000
    });

    return () => {
      animation.pause();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        ref={animationRef}
        className="absolute inset-0 grid h-full w-full"
        style={{ gridTemplateColumns: 'repeat(20, 1fr)', gridTemplateRows: 'repeat(10, 1fr)' }}
      ></div>
      
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>

      <div className="relative z-10 text-center text-primary-foreground p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-lg text-white">
          Forge Your Strength.
        </h1>
        <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter text-accent drop-shadow-lg">
          Find Your Fit.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          Welcome to Deer Fitness, where dedication meets results. Join our community and transform your life.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="secondary" className="text-lg font-bold">
            <Link href="#services" onClick={handleScroll}>Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
