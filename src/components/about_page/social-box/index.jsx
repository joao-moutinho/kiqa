import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

export const SocialBox = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/">
        <BsFacebook className="media-icon"></BsFacebook>
      </a>
      <a href="https://www.instagram.com">
        <BsInstagram className="media-icon"></BsInstagram>
      </a>
      <a href="https://www.twitter.com">
        <FiTwitter className="media-icon"></FiTwitter>
      </a>
      <a href="linkedin.com">
        <FiLinkedin className="media-icon"></FiLinkedin>
      </a>
    </div>
  );
};
