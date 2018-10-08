import React from 'react';
import './topbar.css'
import NavigationMenue from './navigation/navigationMenue'


const topBar = (props)=>{
    let categoriesList=[];
    

    if(props.categories.length!==0){

        for(let i =0;i<props.categories.length;i++){
            categoriesList.push(<li className="categoriesList"
                                key={props.categories[i]}

                                >
                                {props.categories[i]}
                                </li>)
                                }

                                }


            return (

                <div className="topBar">
                <div>
                <div className="logo"><img  src="https://www.hiretual.com/hubfs/Hiretual-Sep-2018/images/hiretual.svg" alt="Hiretual"/></div>
                <div className="search">
                <input  
                name="search"               
                type="search" 
                className="searchCategory"
                placeholder="Search..." 
                onKeyPress={props.getCategories}
                value={props.searchInput}
                onChange={props.change}
                autoFocus={props.focuseInput}
                 />
                {props.showTypeahead?<ul className="typehead" >
                {categoriesList}
                </ul>:null}
                </div>
                <NavigationMenue/>
                </div>
                </div>
            )
        }
        export default  topBar;
