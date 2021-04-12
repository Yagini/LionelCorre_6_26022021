
/*class ImgFactory {
  constructor(element) {
    this.src = element.src;
    this.alt = element.alt;
  }
}

const createPicture = () => {
  const lightboxImg = document.createElement("img");
  lightboxImg.classList.add("lightbox__img");
  lightboxImg.src = this.src;
  lightboxImg.alt = this.alt;

  lightboxContent.appendChild(lightboxImg);

  return lightboxImg;
};

class VideoFactory {
  constructor(element) {
    this.src = element.src;
    this.alt = element.alt;
    this.type = "video/mp4"
  }  
}

const createVideo = () => {
    const lightboxVideo = document.createElement("video");
    lightboxVideo.classList.add("lightbox__video");    
    lightboxVideo.alt = this.alt;
    lightboxVideo.controls = true;
    lightboxVideo.style.display = "none"; 
    const lightboxVideoSrc = document.createElement("source");    
    lightboxVideoSrc.src = this.src;
    lightboxVideoSrc.type = this.type;

    lightboxVideo.appendChild(lightboxVideoSrc);   
    lightboxContent.appendChild(lightboxVideo);

    return lightboxVideo;
}

export class MediaFactory {
    constructor(element) {
        if (type === "video/mp4") {
            new createPicture(element);            
        } else {
            new createVideo(element);
        };       
    };
};*/

