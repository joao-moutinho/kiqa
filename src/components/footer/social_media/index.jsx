import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import "./social_media.scss";

export const SocialMediaFooter = () => {
  return (
    <div>
      <h3 className="socials-title" >Socials</h3>
      <div className="social-icons">
        <div className="meta-icons">
          <a href="https://www.facebook.com/">
            <BsFacebook className="media-icon"></BsFacebook>
          </a>
          <a href="https://www.instagram.com">
            <BsInstagram className="media-icon"></BsInstagram>
          </a>
        </div>
        <div className="twitter-icons">
          <a href="https://www.twitter.com">
            <FiTwitter className="media-icon"></FiTwitter>
          </a>
          <a href="linkedin.com">
            <FiLinkedin className="media-icon"></FiLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};
