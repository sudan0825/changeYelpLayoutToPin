import React from 'react';

import './imageContainer.css';

import save from '../../assets/save.svg'

const ImageHoverPage=(props)=>{
    
    return (<div className="ImageHoverPage"> 
                <div className="saveImg" onClick={props.addToFavorite} >
                   <img src={save} alt="save" item= {props.item}/>
                </div>
                <a className="linkToCompany" href={props.url} target="_blank" rel="noopener noreferrer" > To store page on Yelp</a>
            </div>)
}

export default ImageHoverPage;
            
            
//             imageContainers.push(<ImageContainer 
//                                    key={store.id} 
//                                    pic={store.image_url} 
//                                    url={store.url}
//                                    name={store.name}/>)