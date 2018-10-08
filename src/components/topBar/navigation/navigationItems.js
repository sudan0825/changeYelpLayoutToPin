import React from 'react';

import { NavLink } from 'react-router-dom'


const navigationItems=(props)=>{
    return (
        <li className="navigationItems" >
        <NavLink to={props.link} 
                 exact={props.exact}>{props.item}</NavLink>
       
        
        
        
        </li>
    )
        
    
}

export default navigationItems;