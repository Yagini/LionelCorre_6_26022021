/**
 * class MediaFactory qui gère la création des médias images ou vidéo
 * selon la condition 
 */

export class MediaFactory {
  constructor (src, alt) {
    if (src.includes(".jpg")) {
      return new ImageFactory(src , alt);
    } else {
      return new VideoFactory(src, alt);
    };
  };
};

/**
 * Class permettant la création du média Image
 */
class ImageFactory {
  constructor (src, alt) {
    this.src = src;
    this.alt = alt;
  };
  createElement () {
    const portfolioImg = document.createElement("img");    
    portfolioImg.src = this.src;
    portfolioImg.alt = this.alt;
    return portfolioImg;
  };
};

/**
 * Class permettant la création du média vidéo
 */
class VideoFactory {
  constructor (src, alt) {
    this.src = src; 
    this.alt = alt;
  };
  createElement () {
    const portfolioVideo = document.createElement("video");
    portfolioVideo.alt = this.alt;    
    const portfolioVideoSource = document.createElement("source");
    portfolioVideoSource.src = this.src;
    portfolioVideoSource.alt = this.alt;
    portfolioVideoSource.type = "video/mp4";
    portfolioVideo.appendChild(portfolioVideoSource);
    return portfolioVideo;
  };
};



