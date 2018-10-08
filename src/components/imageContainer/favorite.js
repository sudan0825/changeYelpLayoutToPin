import React from 'react';
import './imageContainer.css';

const ImageContainer=(props)=>{
    
   
    return (<div className="imageContainer" >
            
               <div className="img"><img src={props.pic} alt={props.name}/></div>
               <a className="favoriteStoreLink" href={props.url} target="_blank" rel="noopener noreferrer" ><h4>{props.name}</h4></a>
           
            </div>)
}

export default ImageContainer;
