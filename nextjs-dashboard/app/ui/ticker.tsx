'use client';

import { useRef, useEffect } from "react";
import styles from "@/app/ui/ticker.module.scss";

const items = [
  "ReactJS", "Typescript", "GraphQL", "modernizing legacy front ends", 
  "Svelte", "time zones", "NodeJS", "building design systems", "product engineering", "npm", "webpack","collaboration",
  "babel",  "Vanilla JavaScript", "mentoring", "C#", ".NET", "SQL", "technical leadership", "bright colors", "CSS", "Rest APIs", "Azure"
];

export function Ticker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const itemsRef = useRef([...items]); // keep array in ref

  useEffect(() => {
    const container = containerRef.current;
    const ticker = tickerRef.current;
    if (!container || !ticker) return;

    let offset = 0;
    const pixelsPerFrame = 0.5;

    const animate = () => {
      offset += pixelsPerFrame;
      container.scrollLeft = offset;

      const firstItem = itemRefs.current[0];
      if (firstItem) {
        const firstRect = firstItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (firstRect.right <= containerRect.left) {
            ticker.appendChild(firstItem);
            itemRefs.current.push(itemRefs.current.shift()!);
            itemsRef.current.push(itemsRef.current.shift()!);

            const width = firstItem.offsetWidth;
            offset -= width;
            container.scrollLeft = offset;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div
      className={styles.tickerWrap}
      ref={containerRef}
      style={{ overflow: 'hidden', width: '100%' }}
    >
      <div
        className={`glowy ${styles.ticker}`}
        ref={tickerRef}
        style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
      >
        {itemsRef.current.map((skill, i) => (
          <div
            key={i}
            ref={el => {
              if (el) itemRefs.current[i] = el;
            }
            }
            className={styles.tickerItem}
          >{skill}<div className={`glowy-blue ${styles.separator}`}>|</div></div>
        ))}
      </div>
    </div>
  );
}
