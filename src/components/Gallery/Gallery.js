import React, { useEffect, useState} from 'react';
import './Gallery.css';
import { SRLWrapper } from 'simple-react-lightbox';

const images = [
  {id: '1' , imageName: 'img-01.jpg', tag: 'Products Illustration' },
  {id: '2' , imageName: 'img-02.jpg', tag: 'Architecture Illustration' },
  {id: '3' , imageName: 'img-03.jpg', tag: 'Logo' },
  {id: '4' , imageName: 'img-04.jpg', tag: 'Products Illustration' },
  {id: '5' , imageName: 'img-05.jpg', tag: 'Architecture Illustration' },
  {id: '6' , imageName: 'img-06.jpg', tag: 'Logo' },
  {id: '7' , imageName: 'img-07.jpg', tag: 'Products Illustration' },
  {id: '8' , imageName: 'img-08.jpg', tag: 'Architecture Illustration' },
  {id: '9' , imageName: 'img-09.jpg', tag: 'Logo' },
  {id: '10' , imageName: 'img-10.jpg', tag: 'Products Illustration' },
  {id: '11' , imageName: 'img-11.jpg', tag: 'arquitetura' },
  {id: '12' , imageName: 'img-12.jpg', tag: 'Logo' },
  {id: '13' , imageName: 'img-13.jpg', tag: 'Products Illustration' },
  {id: '14' , imageName: 'img-05.jpg', tag: 'aArchitecture Illustration' },
  {id: '15' , imageName: 'img-05.jpg', tag: 'Architecture Illustration' },
  {id: '16' , imageName: 'img-05.jpg', tag: 'Architecture Illustration' },
]

const options = {
  buttons: {
    showDownloadButton: false,
    backgroundColor: 'rgba(30,30,36,0)',
    showAutoplayButton: false,
    showThumbnailsButton: false,	
  }
}

function Gallery() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(
    () => {
      tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    },
    [tag]
  );

  return (
    <div className="image-container">
     <div className="tags">
       <TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> 
       <TagButton name="Products Illustration" tagActive={tag === 'Products Illustration' ? true : false} handleSetTag={setTag} /> 
       <TagButton name="Architecture Illustration" tagActive={tag === 'Architecture Illustration' ? true : false} handleSetTag={setTag} /> 
       <TagButton name="Logo" tagActive={tag === 'Logo' ? true : false} handleSetTag={setTag} /> 
     </div>
     <SRLWrapper options ={options}>
       <div className="image-grid">
         {filteredImages.map(image => (
           <div key={image.id} className="image-item">
             <a href={`/images/${image.imageName}`}>
                    <img className="image" src={`/images/${image.imageName}`} alt="" />
             </a>
            </div> 
         ))}
       </div>
     </SRLWrapper>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};


export default Gallery;
