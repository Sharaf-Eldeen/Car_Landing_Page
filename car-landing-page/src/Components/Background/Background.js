import video1 from "../../Assets/video1.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import "./Background.css";

export default function Background({ playStatus, imageCount }) {
  if (playStatus) {
    return (
      <video className="background" autoplay loop muted>
        <source src={video1} type="video/mp4"></source>
      </video>
    );
  } else if (imageCount === 0) {
    return <img src={image1} className="background" alt="image1" />;
  } else if (imageCount === 1) {
    return <img src={image2} className="background" alt="image2" />;
  } else if (imageCount === 2) {
    return <img src={image3} className="background" alt="image3" />;
  }
}
