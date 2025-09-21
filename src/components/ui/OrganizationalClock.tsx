"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const clockRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const numItems = items.length;
  const angleStep = 360 / numItems;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = sectionsRef.current;
      const hand = handRef.current;
      const clockItems = itemsRef.current;

      // Pin the container
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${items.length * 100}%`,
          pin: true,
          scrub: true,
        },
      });

      // Animate clock hand and highlight active item
      items.forEach((item, index) => {
        // Rotate hand
        timeline.to(hand, {
            rotation: index * angleStep,
            duration: 1,
            ease: 'none',
        }, `step-${index}`);
        
        // Highlight clock item
        timeline.to(clockItems[index], {
            scale: 1.2,
            color: 'hsl(var(--primary))',
            duration: 0.5,
        }, `step-${index}`);

        // Show description card
        timeline.to(sections[index], {
            opacity: 1,
            duration: 0.5
        }, `step-${index}`);
        
        if (index > 0) {
            // Un-highlight previous clock item
            timeline.to(clockItems[index - 1], {
                scale: 1,
                color: 'hsl(var(--muted-foreground))',
                duration: 0.5,
            }, `step-${index}`);
            // Hide previous description card
            timeline.to(sections[index - 1], {
                opacity: 0,
                duration: 0.5
            }, `step-${index}`);
        }
        
        // Add a pause
        timeline.to({}, {duration: 2}, `step-${index}`);
      });

      // Handle the last item fade out
      timeline.to(clockItems[items.length - 1], {
        scale: 1,
        color: 'hsl(var(--muted-foreground))',
        duration: 0.5,
      }, 'end');
      timeline.to(sections[items.length - 1], {
        opacity: 0,
        duration: 0.5
      }, 'end');


    }, containerRef);

    return () => ctx.revert();
  }, [angleStep, items.length]);

  return (
    <div ref={containerRef} className="lg:grid lg:grid-cols-2 lg:gap-24 items-center h-screen">
      {/* Left Column: Descriptions */}
      <div className="relative h-64">
        {items.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => (sectionsRef.current[index] = el!)}
            className="absolute inset-0 flex flex-col justify-center opacity-0"
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

      {/* Right Column: Clock */}
      <div ref={clockRef} className="hidden lg:flex items-center justify-center h-screen">
        <div className="relative w-96 h-96 rounded-full border-4 border-primary/20 flex items-center justify-center">
            {/* Center dot */}
            <div className="absolute w-4 h-4 bg-primary rounded-full z-10"></div>
            
            {/* Clock Hand */}
            <div ref={handRef} className="absolute w-1/2 h-1 bg-primary origin-left top-1/2 left-1/2 transform -translate-y-1/2">
                <div className="absolute right-0 w-3 h-3 bg-primary rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            {/* Clock Items */}
            {items.map((item, index) => {
              const angle = angleStep * index - 90; // -90 to start from top
              const x = 50 + 45 * Math.cos(angle * Math.PI / 180);
              const y = 50 + 45 * Math.sin(angle * Math.PI / 180);
              return (
                <div
                  key={item.title}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="absolute flex flex-col items-center text-center transition-transform duration-300 text-muted-foreground"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                    <div className="p-3 bg-card rounded-full border shadow-md">
                        <item.icon className="h-6 w-6" />
                    </div>
                  <span className="mt-2 text-xs font-semibold w-24">{item.title}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
