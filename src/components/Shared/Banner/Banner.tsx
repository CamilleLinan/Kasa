import { FC } from "react";
import './_Banner.scss';

interface BannerProps {
  title: string;
  src: string;
}

const Banner: FC<BannerProps> = (props) => {
  return (
    <div className="banner">
      <h1 className="banner-title">{props.title}</h1>
      <img src={props.src} alt="banniere-kasa" className="banner-img" />
    </div>
  );
};

export default Banner;