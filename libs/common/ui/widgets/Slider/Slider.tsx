import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cl from 'classnames';
import { SliderArrow } from '../../shared';
import styles from './Slider.module.scss';

interface ISlider {
  photos: string[];
}

interface cloneI {
  head: number;
  tail: number;
}

const TRANSITION_DURATION = 250;

export const Slider: FC<ISlider> = ({ photos }) => {
  const { locale } = useRouter();

  const [blockButtons, setBlockButton] = useState(false);
  const [cloneCount, setCloneCount] = useState<cloneI>({ head: 1, tail: 0 });
  const [position, setPosition] = useState(cloneCount.head);
  const [pages, setPages] = useState<Array<any>>();
  const [transitionDuration, setTransitionDuration] =
    useState(TRANSITION_DURATION);

  const percent = (position - 1) * 100;
  const photosDivStyle =
    locale === 'ar'
      ? {
          transitionDuration: `${transitionDuration}ms`,
          translate: `${percent}% 0%`,
        }
      : {
          transitionDuration: `${transitionDuration}ms`,
          translate: `${-percent}% 0%`,
        };

  useEffect(() => {
    setPages([photos[photos.length - 1], ...photos, photos[0]]);
    setCloneCount({ head: 2, tail: 1 });
  }, [photos]);

  useEffect(() => {
    if (position === 1) {
      setTimeout(() => {
        setTransitionDuration(0);
        if (pages?.length) {
          setPosition(pages.length - cloneCount.tail);
        }
      }, TRANSITION_DURATION);
      return;
    }

    if (position == pages?.length) {
      setTimeout(() => {
        setTransitionDuration(0);
        setPosition(cloneCount.head);
      }, TRANSITION_DURATION);
      return;
    }
  }, [position, cloneCount]);

  useEffect(() => {
    if (transitionDuration === 0) {
      setBlockButton(true);

      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
        setBlockButton(false);
      }, TRANSITION_DURATION / 5);
    }
  }, [transitionDuration]);

  const slideForwards = () => {
    if (blockButtons) return;

    if (position === pages?.length) {
      setPosition(1);
    } else {
      setPosition((p) => p + 1);
    }

    setBlockButton(true);

    setTimeout(() => {
      setBlockButton(false);
    }, TRANSITION_DURATION);
  };

  const slideBackwards = () => {
    if (blockButtons) return;

    if (position !== 1) {
      setPosition((p) => p - 1);
    } else {
      setPosition(photos.length);
    }

    setBlockButton(true);

    setTimeout(() => {
      setBlockButton(false);
    }, TRANSITION_DURATION);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <SliderArrow
          onClick={() => slideBackwards()}
          className={cl(styles.slider__arrow, styles['slider__arrow--left'])}
        />
        <div className={styles.slider__track} style={photosDivStyle}>
          {pages?.map((photo, i) => (
            <img
              key={i}
              className={styles.slider__image}
              src={photo}
              alt="realty"
            />
          ))}
        </div>
        <SliderArrow
          onClick={() => slideForwards()}
          className={cl(styles.slider__arrow, styles['slider__arrow--right'])}
        />
      </div>
    </div>
  );
};

export default Slider;
