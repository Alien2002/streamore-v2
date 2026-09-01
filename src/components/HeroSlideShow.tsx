import { useEffect, useRef, useState } from 'react';
import styles from './HeroSlideShow.module.css';

interface Slide {
    src: string;
    alt: string;
    scene: string;
}

const SLIDE_DURATION = 7000;

const slides: Slide[] = [
    { src: 'hero_pic.jpg', alt: 'Broadcast camera rig', scene: 'Broadcast Production' },
    { src: 'hero_pic1.jpg', alt: 'Live event stage lighting', scene: 'Live Event Coverage' },
    { src: 'hero_pic2.jpg', alt: 'Podcast studio microphone', scene: 'Podcast Studio' },
    { src: 'hero_pic3.jpg', alt: 'Professional cinema camera', scene: 'Cinematic Capture' },
    { src: 'hero_pic4.jpg', alt: 'Conference hall', scene: 'Corporate Events' },
    { src: 'hero_pic5.jpg', alt: 'Aerial city skyline', scene: 'Aerial Cinematography' },
    { src: 'hero_pic6.jpg', alt: 'Aerial city skyline', scene: 'Aerial Cinematography' },
];

export default function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progressWidth, setProgressWidth] = useState(0);

    const timerRef = useRef<ReturnType<typeof setInterval>>();
    const progressTimerRef = useRef<ReturnType<typeof setTimeout>>();

    const resetProgress = () => {
        setProgressWidth(0);
        clearTimeout(progressTimerRef.current);
        progressTimerRef.current = setTimeout(() => setProgressWidth(100), 50);
    };

    const startTimer = () => {
        resetProgress();
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentSlide((i) => (i + 1) % slides.length);
            resetProgress();
        }, SLIDE_DURATION);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(timerRef.current);
            clearTimeout(progressTimerRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //   const goToSlide = (index: number) => {
    //     setCurrentSlide(index);
    //     startTimer();
    //   };

    //   const sceneNum = (() => {
    //     const n = currentSlide + 1;
    //     return (n < 10 ? '0' + n : String(n)) + ' / 0' + slides.length;
    //   })();

    return (
        <>
            <div className={styles.heroSlideshow}>
                {slides.map((slide, i) => (
                    <div
                        key={slide.src}
                        className={`${styles.heroSlide} ${currentSlide === i ? styles.active : ''}`}
                    >
                        <img src={slide.src} alt={slide.alt} loading={i === 0 ? 'eager' : 'lazy'} />
                    </div>
                ))}

                <div className={styles.heroTint} />

                <div
                    className={styles.heroProgress}
                    style={{
                        width: `${progressWidth}%`,
                        transitionDuration: progressWidth === 0 ? '0ms' : `${SLIDE_DURATION}ms`,
                    }}
                />
            </div>

            {/* <div className={styles.heroSlideLabel}>
        <span className={styles.hslNum}>{sceneNum}</span>
        <span className={styles.hslSep} />
        <span className={styles.hslText}>{slides[currentSlide].scene}</span>
      </div>

      <div className={styles.heroGridOverlay} aria-hidden="true" /> */}

            {/* <div className={styles.heroDots} role="tablist" aria-label="Slide navigation">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            className={`${styles.heroDot} ${currentSlide === i ? styles.active : ''}`}
            aria-selected={currentSlide === i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goToSlide(i)}
            role="tab"
          />
        ))}
      </div> */}
        </>
    );
}