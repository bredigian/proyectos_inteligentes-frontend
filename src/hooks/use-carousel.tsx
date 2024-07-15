import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

type Props = {
  autoplay: boolean;
};

export const useCarousel = ({ autoplay }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: autoplay }),
  ]);

  return { emblaRef };
};
