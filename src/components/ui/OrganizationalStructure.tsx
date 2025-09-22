
"use client";

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StructureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface OrganizationalStructureProps {
  items: StructureItem[];
  autoplay?: boolean;
}

export function OrganizationalStructure({ items, autoplay = false }: OrganizationalStructureProps) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

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
    if (autoplay && !isHovering) {
      intervalRef.current = setInterval(nextItem, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, isHovering, items.length]);

  useEffect(() => {
    if (!containerRef.current) return;

    itemsRef.current.forEach((itemEl, index) => {
        if (!itemEl) return;

        const distance = index - activeIndex;
        
        let zIndex = items.length - Math.abs(distance);
        let scale = 1;
        let opacity = 1;
        let x = 0;
        
        if (distance !== 0) {
            scale = 0.8;
            opacity = 0.4;
            x = distance * 50 + (distance > 0 ? 30 : -30);
        } else {
             zIndex = items.length + 1;
        }


        gsap.to(itemEl, {
            x: `${x}%`,
            scale: scale,
            opacity: opacity,
            zIndex: zIndex,
            duration: 0.5,
            ease: 'power3.out',
        });
    });

  }, [activeIndex, items.length]);

  return (
    <div 
        className="w-full flex flex-col items-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        ref={containerRef} 
        className="relative w-full h-[350px] flex justify-center items-center overflow-visible"
        style={{ perspective: '1200px' }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              ref={(el) => (itemsRef.current[index] = el)}
              className="absolute w-60 h-80 cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => handleItemClick(index)}
            >
              <div className={cn(
                "w-full h-full p-6 rounded-lg shadow-lg border transition-all duration-500 ease-in-out flex flex-col justify-between text-center bg-card text-card-foreground",
                {
                    'border-primary shadow-primary/20 scale-110': activeIndex === index
                }
              )}>
                <div className="flex-grow flex flex-col items-center justify-center">
                  <div className={cn("p-4 rounded-full mb-4 transition-colors", activeIndex === index ? 'bg-primary/10' : 'bg-muted')}>
                    <Icon className={cn("h-10 w-10 transition-colors", activeIndex === index ? 'text-primary' : 'text-muted-foreground')} />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                </div>
                <p className={cn(
                    "text-sm text-muted-foreground transition-opacity duration-300",
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
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
