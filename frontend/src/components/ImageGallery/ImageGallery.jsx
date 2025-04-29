import "./ImageGallery.css";
import React, { useState } from 'react';

const images = [
    {
      src: '/images/MainPage/img1.jpg',
      caption: 'Photo by Johannes Plenio',
      link: 'https://unsplash.com/photos/piano-keys-RWytwNueNng?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },
   
    {
      src: '/images/MainPage/img2.jpg',
      caption: ' Photo by Brett Jordan',
      link: "https://unsplash.com/photos/black-and-blue-vinyl-record-SssdoXhhtJw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
    },
    {
      src: '/images/MainPage/img3.jpg',
      caption: 'Photo by Joey Thompson',
      link: 'https://unsplash.com/photos/woman-on-top-of-crowd-4zN_-PKsbWw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },
    {
      src: '/images/MainPage/img4.jpg',
      caption: 'Photo by Diane Picchiottino',
      link: 'https://unsplash.com/photos/silhouette-of-woman-singing-on-stage-lds8U6yTP9w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },
    {
      src: '/images/MainPage/img5.jpg',
      caption: 'Photo by Jens Thekkeveettil',
      link: 'https://unsplash.com/photos/person-playing-saxophone-dBWvUqBoOU8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    },
  ];
  

  function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = images[currentIndex];
  
    return (
      <div className="gallery">
        <a href={currentImage.link} target="_blank" rel="noopener noreferrer">
        <img src={currentImage.src} alt="Main page" className="main-image" />
      </a>
        <p className="caption">{currentImage.caption}</p>
        <div className="thumbnails">
          {images.map((img, index) => (
            <button
              key={index}
              className={`thumbnail-button ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={img.src} alt={`Thumbnail ${index + 1}`} className="thumbnail" />
            </button>
          ))}
        </div>
      </div>
    );
  }
  
export default ImageGallery;