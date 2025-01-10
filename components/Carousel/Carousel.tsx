// app/components/Carousel/Carousel.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { CarouselItem } from "@/types/carousel";
import Link from "next/link";
import styles from "./Carousel.module.css";

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [active, setActive] = useState(1);
  const [other1, setOther1] = useState(0);
  const [other2, setOther2] = useState(2);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const handleNext = () => {
    setDirection("next");
    const countItem = items.length;
    setActive((prev) => (prev + 1 >= countItem ? 0 : prev + 1));
    setOther1((prev) => (prev - 1 < 0 ? countItem - 1 : prev - 1));
    setOther2((prev) => (prev + 1 >= countItem ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("prev");
    const countItem = items.length;
    setActive((prev) => (prev - 1 < 0 ? countItem - 1 : prev - 1));
    setOther1((prev) => (prev + 1 >= countItem ? 0 : prev + 1));
    setOther2((prev) => (prev + 1 >= countItem ? 0 : prev + 1));
  };

  useEffect(() => {
    // Reset animations
    const images = document.querySelectorAll(`.${styles.image} img`);
    const captions = document.querySelectorAll(`.${styles.image} figcaption`);

    images.forEach((img) => {
      const element = img as HTMLElement;
      element.style.animation = "none";
      void element.offsetWidth;
      element.style.animation = "";
    });

    captions.forEach((caption) => {
      const element = caption as HTMLElement;
      element.style.animation = "none";
      void element.offsetWidth;
      element.style.animation = "";
    });

    // Reset auto play
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  }, [active]);

  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const getItemClassName = (index: number) => {
    if (index === active) return styles.active;
    if (index === other1) return styles.other_1;
    if (index === other2) return styles.other_2;
    return "";
  };

  return (
    <section className={`${styles.carousel} ${styles[direction]}`}>
      <div className={styles.list}>
        {items.map((item, index) => (
          <article
            key={item.id}
            className={`${styles.item} ${getItemClassName(index)}`}
          >
            <div
              className={styles.mainContent}
              style={{ backgroundColor: item.backgroundColor }}
            >
              <div className={styles.content}>
                <h2>{item.title}</h2>
                <p className={styles.price}>$ {item.price}</p>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.addToCard}>Add To Card</button>
              </div>
            </div>
            <figure className={styles.image}>
              <img src={item.image} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          </article>
        ))}
      </div>
      <div className='m-auto w-full'>
        <div className={styles.arrows}>
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
          <Link href='/tester'>テストページへ</Link>
        </div>
      </div>
    </section>
  );
}
