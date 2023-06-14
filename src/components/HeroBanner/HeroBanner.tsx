import './style.scss';

interface HeroBannerProps {
  imgSrc?: string;
  alt?: string;
}

export const HeroBanner = ({ imgSrc, alt }: HeroBannerProps) => {
  return <img className='heroBanner' src={imgSrc} alt={alt ?? 'Hero banner image'} />;
};
