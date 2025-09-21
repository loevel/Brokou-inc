"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ClockItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface OrganizationalClockProps {
  items: ClockItem[];
}

export function OrganizationalClock({ items }: OrganizationalClockProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };
  
  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((itemEl, index) => {
        if (!itemEl) return;

        const distance = index - activeIndex;
        const isFar = Math.abs(distance) > 2;

        let scale = 1;
        let x = 0;
        let zIndex = items.length - Math.abs(distance);
        let opacity = 1;

        if (distance !== 0) {
            scale = Math.max(1 - Math.abs(distance) * 0.2, 0.5);
            x = (distance * 50) + (distance > 0 ? 30 : -30);
        }
        
        if (isFar) {
            opacity = 0;
            x = distance > 0 ? 200 : -200;
        }

        gsap.to(itemEl, {
            x: `${x}%`,
            scale: scale,
            zIndex: zIndex,
            opacity: opacity,
            duration: 0.5,
            ease: 'power3.out',
        });
    });

  }, [activeIndex, items.length]);

  return (
    <div className="w-full flex flex-col items-center">
      <div 
        ref={containerRef} 
        className="relative w-full h-[400px] flex justify-center items-center overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              ref={(el) => (itemsRef.current[index] = el)}
              className="absolute w-64 h-80 cursor-pointer"
              onClick={() => handleItemClick(index)}
            >
              <div className={cn(
                "w-full h-full p-6 rounded-lg shadow-lg border transition-all duration-500 ease-power3-out flex flex-col justify-between text-center",
                activeIndex === index ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground'
              )}>
                <div className="flex-grow flex flex-col items-center justify-center">
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                </div>
                <p className={cn(
                    "text-sm transition-opacity duration-300",
                    activeIndex === index ? 'opacity-70' : 'opacity-0'
                )}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Button onClick={prevItem} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Précédent</span>
        </Button>
        <div className="flex items-center gap-2">
            {items.map((_, index) => (
                <button 
                    key={index} 
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activeIndex === index ? 'bg-primary scale-125' : 'bg-muted-foreground/50'
                    )}
                />
            ))}
        </div>
        <Button onClick={nextItem} variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Suivant</span>
        </Button>
      </div>
    </div>
  );
}
