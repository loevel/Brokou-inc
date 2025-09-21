"use client";

import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface ClockItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface OrganizationalClockProps {
  items: ClockItem[];
}

export function OrganizationalClock({ items }: OrganizationalClockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconWrappersRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const numItems = items.length;
  const angleStep = 360 / numItems;

  useEffect(() => {
    // Animate the active item
    itemsRef.current.forEach((itemEl, index) => {
      if (itemEl) {
        gsap.to(itemEl, {
          scale: index === activeIndex ? 1.2 : 1,
          color: index === activeIndex ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });

     iconWrappersRef.current.forEach((wrapperEl, index) => {
      if (wrapperEl) {
        gsap.to(wrapperEl, {
          backgroundColor: index === activeIndex ? 'hsl(var(--primary))' : 'hsl(var(--card))',
          color: index === activeIndex ? 'hsl(var(--primary-foreground))' : 'hsl(var(--primary))',
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    });

    // Animate the detail card
    detailsRef.current.forEach((detailEl, index) => {
      if (detailEl) {
        gsap.to(detailEl, {
          opacity: index === activeIndex ? 1 : 0,
          y: index === activeIndex ? 0 : 20,
          duration: 0.5,
          ease: 'power2.out',
          display: index === activeIndex ? 'block' : 'none',
        });
      }
    });
  }, [activeIndex]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    if (index !== activeIndex) {
      gsap.to(itemsRef.current[index], { scale: 1.1, duration: 0.3 });
      gsap.to(iconWrappersRef.current[index], { backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))', duration: 0.3 });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (index !== activeIndex) {
      gsap.to(itemsRef.current[index], { scale: 1, duration: 0.3 });
      gsap.to(iconWrappersRef.current[index], { backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--primary))', duration: 0.3 });
    }
  };


  return (
    <div ref={containerRef} className="lg:grid lg:grid-cols-2 lg:gap-24 items-center min-h-[70vh]">
      {/* Left Column: Clock */}
      <div className="hidden lg:flex items-center justify-center h-full">
        <div className="relative w-96 h-96 rounded-full border-4 border-primary/20 flex items-center justify-center">
            {/* Center dot */}
            <div className="absolute w-4 h-4 bg-primary rounded-full z-10"></div>
            
            {/* Clock Items */}
            {items.map((item, index) => {
              const angle = angleStep * index - 90; // -90 to start from top
              const x = 50 + 45 * Math.cos(angle * Math.PI / 180);
              const y = 50 + 45 * Math.sin(angle * Math.PI / 180);
              return (
                <div
                  key={item.title}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="absolute flex flex-col items-center text-center transition-transform duration-300 text-muted-foreground cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%)`,
                  }}
                  onClick={() => handleItemClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                    <div ref={el => iconWrappersRef.current[index] = el} className="p-3 bg-card rounded-full border shadow-md">
                        <item.icon className="h-6 w-6" />
                    </div>
                  <span className="mt-2 text-xs font-semibold w-24">{item.title}</span>
                </div>
              );
            })}
        </div>
      </div>

      {/* Right Column: Descriptions */}
      <div className="relative h-64">
        {items.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => (detailsRef.current[index] = el)}
            className={cn("absolute inset-0 flex flex-col justify-center", index === 0 ? "opacity-100" : "opacity-0")}
            style={{display: index === 0 ? 'block' : 'none'}}
          >
            <div className="p-8 rounded-lg shadow-lg bg-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-md">
                   <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
