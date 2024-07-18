import { useEffect, useRef } from 'react';

type Props = {
  title: string;
  description: string;
  keywords: string[];
};

export const useSEO = ({ title, description, keywords }: Props) => {
  const prevTitle = useRef(document.title);

  const prevDescription = useRef(
    document.querySelector('meta[name="description"]')?.getAttribute('content'),
  );

  const prevMetaTitle = useRef(
    document.querySelector('meta[name="title"]')?.getAttribute('content'),
  );
  const prevKeywords = useRef(
    document.querySelector('meta[name="keywords"]')?.getAttribute('content'),
  );

  useEffect(() => {
    const previousTitle = prevTitle.current;
    const metaTitle = document.querySelector('meta[name="title"]');
    const previousMetaTitle = prevMetaTitle?.current;

    if (title) {
      document.title = title;
      metaTitle?.setAttribute('content', title);
    }

    return () => {
      document.title = previousTitle;
      metaTitle?.setAttribute('content', previousMetaTitle as string);
    };
  }, [title]);

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = prevDescription.current;

    console.log(metaDescription);

    if (description) {
      metaDescription?.setAttribute('content', description);
    }

    return () =>
      metaDescription?.setAttribute('content', previousDescription as string);
  }, [description]);

  useEffect(() => {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const previousKeywords = prevKeywords.current;

    if (keywords) {
      metaKeywords?.setAttribute('content', keywords.toString());
    }

    return () =>
      metaKeywords?.setAttribute('content', previousKeywords as string);
  }, [keywords]);
};
