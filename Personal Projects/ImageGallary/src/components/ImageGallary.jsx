import React, { useRef, useState } from 'react';
import './image.css';
import profile from '../assets/profile.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import {motion} from 'framer-motion'

const images = [
    {
      id: 'image1',
      url: image1,
    },
    {
      id: 'image2',
      url: image2,
    },
    {
      id: 'image3',
      url: image3,
    },
  ];
  

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  const [closing, setClosing] = useState(false);
  
  
  const openImage = (index) => {
    setSelectedImage(index);
  };





const closeImage = () => {
 
    setSelectedImage(null);
   // Wait for the closing animation (0.3s) to complete
};

  return (
    <div className="image-gallery">
        <div className='Text-section'>
            <img src={profile} alt="profile image" />
           <div className="title">LEVIN STANLEY</div>
           <div className="product">Product design</div>
        </div>
      {images.map((image, index) => (
        <motion.div key={index} className="image-item" onClick={() => setSelectedImage(image)}>
          <motion.img 
          layoutId={image.id}
          src={image.url} alt={`Image ${index + 1}`}
          whileHover={{
           scale:1.012,
           transition:{
            duration:0.2
           }
          }} 

          />
        </motion.div>
      ))}
       
      {selectedImage !== null && (
         <motion.div
         className='image-popup'
         layoutId={selectedImage.id}
         initial={{  scale: 0.8 }}
         animate={{ scale: 1 }}
         exit={{ scale: 0.8 }} // Exit animation with a scale transform
       >
          <div className="image-popup-content">
            <span className="close-button" onClick={closeImage}>
              &times;
            </span>
            <motion.img src={selectedImage.url} alt={`Image `}
            />
            <div className="image-caption">
              {/* Add your content here */}
              <div className="content">
              <p className='title'>Title </p>
              <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere pretium elit sit amet pharetra. Proin dignissim quam vel felis maximus posuere. Mauris vel feugiat sem. Morbi commodo, lorem vel tincidunt sollicitudin, tortor ipsum vestibulum lorem, at sollicitudin mauris felis vel ligula. Vivamus mattis consequat est vel dictum. Duis convallis erat sapien, eget congue mauris convallis ac. Maecenas sollicitudin tristique dapibus. Morbi scelerisque cursus fringilla. In gravida elit non eros lobortis finibus. Phasellus pellentesque lobortis placerat. Suspendisse potenti. Phasellus rhoncus quis nulla quis vehicula. In consectetur, ante sed posuere efficitur, felis arcu placerat ex, quis dictum justo eros vel elit. Morbi non suscipit dui.
              </p>
              {/* Add more content as needed */}
            </div>
            </div>
            <div className="image-caption">
              {/* Add your content here */}
              <div className="content">
              <p className='title'>Title </p>
              <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere pretium elit sit amet pharetra. Proin dignissim quam vel felis maximus posuere. Mauris vel feugiat sem. Morbi commodo, lorem vel tincidunt sollicitudin, tortor ipsum vestibulum lorem, at sollicitudin mauris felis vel ligula. Vivamus mattis consequat est vel dictum. Duis convallis erat sapien, eget congue mauris convallis ac. Maecenas sollicitudin tristique dapibus. Morbi scelerisque cursus fringilla. In gravida elit non eros lobortis finibus. Phasellus pellentesque lobortis placerat. Suspendisse potenti. Phasellus rhoncus quis nulla quis vehicula. In consectetur, ante sed posuere efficitur, felis arcu placerat ex, quis dictum justo eros vel elit. Morbi non suscipit dui.
              </p>
              {/* Add more content as needed */}
            </div>
            </div>

            <div className="image-caption">
              {/* Add your content here */}
              <div className="content">
              <p className='title'>Title </p>
              <p className='description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere pretium elit sit amet pharetra. Proin dignissim quam vel felis maximus posuere. Mauris vel feugiat sem. Morbi commodo, lorem vel tincidunt sollicitudin, tortor ipsum vestibulum lorem, at sollicitudin mauris felis vel ligula. Vivamus mattis consequat est vel dictum. Duis convallis erat sapien, eget congue mauris convallis ac. Maecenas sollicitudin tristique dapibus. Morbi scelerisque cursus fringilla. In gravida elit non eros lobortis finibus. Phasellus pellentesque lobortis placerat. Suspendisse potenti. Phasellus rhoncus quis nulla quis vehicula. In consectetur, ante sed posuere efficitur, felis arcu placerat ex, quis dictum justo eros vel elit. Morbi non suscipit dui.
              </p>
              {/* Add more content as needed */}
            </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageGallery;
