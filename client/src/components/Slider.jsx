import SimpleImageSlider from "react-simple-image-slider";
import bg1 from '../img/bg1.png'
import bg2 from '../img/bg2.png'
import bg3 from '../img/bg3.png'

const images = [
  { url: bg1 },
  { url: bg2 },
  { url: bg3 },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height="88%"
        position="center"
        marginRight="20em"
        images={images}
        showNavs={true}
        autoPlay={true}
        slideDuration={1}
        autoPlayDelay={5}
      />
    </div>
  );
}

export default Slider