import { component$, useStore, useStyles$ } from '@builder.io/qwik';
import styles from './slider.css?inline';

interface SliderProps {
  images: string[]
}

export const Slider = component$((props: SliderProps) => {
  useStyles$(styles);
  const { images } = props;
  if (!images.length) {
    return null
  }
  const slider = useStore({ mainImage: images[0] });
  return (
    <div class="slider">
      <img src={slider.mainImage} />
      <div>
        {images.map((img) =>
          (<img src={img} onClick$={() => slider.mainImage = img}/>)
        )}
      </div>
    </div>
  );
});