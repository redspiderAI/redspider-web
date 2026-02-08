import React, { useEffect, useState } from 'react';

type Props = {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export default function ImageCarousel({ images, autoPlay = true, autoPlayInterval = 5000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, images.length]);

  if (!images || images.length === 0) {
    return null;
  }

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const onKey = (e: React.KeyboardEvent, fn: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fn();
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="swiper-slide"
              data-swiper-slide-index={i}
              style={{ minWidth: '100%', marginRight: '20px' }}
            >
              <a href="#" className="homeon_video_img public-img block" target="_blank" rel="noreferrer">
                <img src={src} alt={`slide-${i}`} className="w-full h-56 md:h-72 lg:h-80 object-cover" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        className="pub_nav pub_prev pub_prev1 absolute left-2 top-1/2 -translate-y-1/2"
        tabIndex={0}
        role="button"
        aria-label="Previous slide"
        aria-disabled={images.length <= 1 ? 'true' : 'false'}
        onClick={prev}
        onKeyDown={(e) => onKey(e, prev)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" data-inject-url="https://www.actionsoft.com.cn/static/images/r3.svg">
          <defs>
            <style>{`.cls-1{fill:#fff;fill-rule:evenodd}`}</style>
          </defs>
          <path
            id="形状_3_拷贝_17--inject-29"
            data-name="形状 3 拷贝 17"
            className="cls-1"
            d="M1630,842.465h-0.37l-4.3,4.3a1,1,0,0,0,1.42,1.416l6.01-6.008,0.22-.325,0.08-.379v0l-0.08-.383-0.22-.324-6.01-6.008a1,1,0,0,0-1.42,1.416l4.3,4.3H1630"
            transform="translate(-1625.06 -834.469) rotate(180 1630 842.465)"
          />
        </svg>
      </div>

      <div
        className="pub_nav pub_next pub_next1 absolute right-2 top-1/2 -translate-y-1/2"
        tabIndex={0}
        role="button"
        aria-label="Next slide"
        aria-disabled={images.length <= 1 ? 'true' : 'false'}
        onClick={next}
        onKeyDown={(e) => onKey(e, next)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" data-inject-url="https://www.actionsoft.com.cn/static/images/r3.svg">
          <defs>
            <style>{`.cls-1{fill:#fff;fill-rule:evenodd}`}</style>
          </defs>
          <path
            id="形状_3_拷贝_17--inject-30"
            data-name="形状 3 拷贝 17"
            className="cls-1"
            d="M1630,842.465h-0.37l-4.3,4.3a1,1,0,0,0,1.42,1.416l6.01-6.008,0.22-.325,0.08-.379v0l-0.08-.383-0.22-.324-6.01-6.008a1,1,0,0,0-1.42,1.416l4.3,4.3H1630"
            transform="translate(-1625.06 -834.469)"
          />
        </svg>
      </div>
    </div>
  );
}
