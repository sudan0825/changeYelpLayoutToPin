import React from 'react';
import ImageHoverPage from './imageHoverPage'
import './imageContainer.css';

const ImageContainer=(props)=>{
    
   
    return (<div className="imageContainer" >
            
               <div className="img"><img src={props.pic} alt={props.name}/></div>
               <ImageHoverPage url={props.url} 
                               addToFavorite={props.addToFavorite} 
                               item= {props.item}/>
            <h4>{props.name}</h4>
           
            </div>)
}

export default ImageContainer;
