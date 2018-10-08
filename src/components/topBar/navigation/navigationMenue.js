import React from 'react';

import NavigationItems from './navigationItems';

const navigationMenue=(props)=>{
    //list items list
    let  menueItems=["Home", "Favorite"];
    
    //create navigation items based on list items
     let nvItems=menueItems.map((item)=>{
         return <NavigationItems key={item}
         item={item} 
         link={'/'+item}/>});
         

       return (<div className="navigationMenue">
            
                <ul>{nvItems}</ul>
            
        </div>)

       
   
}
                
                
export default navigationMenue;