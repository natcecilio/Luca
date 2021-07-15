import React, { useEffect, useState} from 'react';
import './Gallery.css';
import { SRLWrapper } from 'simple-react-lightbox';
import {useTheme} from '../../context/Theme';
import images from "./Images";

const options = {
  buttons: {
    showDownloadButton: false,
    backgroundColor: 'rgba(30,30,36,0)',
    showAutoplayButton: false,
    showThumbnailsButton: false,	
  }
}

const filterItems = [
  {
    name : "all", 
  },

  {
    name : "Products Illustration",
  },

  {
    name : "Architecture Illustration",
  },

  
  {
    name : "Branding",
  },

  {
    name : "Character Design",
  },
  
]

function Gallery() {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  const { theme } = useTheme();

  useEffect(
    () => {
      tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    },
    [tag]
  );

  return (
    <div className={`gal-container ${theme}`}  onContextMenu={() => {return false;}}>
     <div className={`tags ${theme}`}>
       {filterItems.map(filter => (
         <TagButton name= {filter.name} tagActive={tag === filter.name } handleSetTag={setTag} key={filter.name}/>
       ))}
         
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
