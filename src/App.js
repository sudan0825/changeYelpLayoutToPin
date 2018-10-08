import React, { Component } from 'react';
import Topbar from './components/topBar/topbar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import GetDataFromYelp from './containers/GetDataFromYelp/GetDataFromYelp';
import Favorite from './containers/Favorite/Favorite';
import axios from './axios'


class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            showTypeahead:false,
            categories:[],
            searchInput:"",
            thevalueTobeRender:{},
            focuseInput:false
        }
    }

    //get the search categories
    getCategories=(e)=>{
        if(e.key==='Enter'){
        

            axios.get('/'+e.target.value+'.json').then((res)=>{
                
                if(res.data.length===0){
                    this.setState({thevalueTobeRender:"We do not have the category you searched in our database"})
                }else{

                    let datalist=[];
                    for(let i in res.data){
                        datalist=[...datalist, ...res.data[i]];
                    }
                    
                    this.setState({thevalueTobeRender:datalist})
                    console.log(this.state.thevalueTobeRender);
                }
            }).catch((e)=>{
                console.log("cannot retrieve the search categories")
            })

        }


    }
    
    //suggest categories to be input
    typeahead=(e)=>{
        if(e.key!=='Enter'){
            this.setState({showTypeahead:true});
            axios.get('/categories.json').then((res)=>{


                for(let i in res.data){

                    this.setState({categories:res.data[i][1].split(",")})

                }

            }).catch((e)=>{
                console.log(e)
            })
        }

    }

    //if mouse leave the search input, hide the drop down menu  
    bodyClick=(e)=>{

        //hide typeahead if the anywhere other then searchCategory is clicked
        if(e.target.className==="searchCategory"){
            this.setState({showTypeahead:true});
        }else {
            this.setState({showTypeahead:false});
        }
        //if the typeahead is clicked, set the input field value
        if(e.target.className==="categoriesList"){

            this.setState({searchInput:e.target.innerHTML,
                           focuseInput:true});
            

        }



    }
    //get the category from drop down list; set it as the input value; retrieve data from backend
    gettheCategory=(e)=>{

    }

    render() {
        let routes=(
            <Switch>
            <Route path="/Home" render={(props)=><GetDataFromYelp thevalueTobeRender={this.state.thevalueTobeRender}/>}/>
            <Route path="/Favorite" component={Favorite}/>
            </Switch>
        )



        return (

            <BrowserRouter>
            <div className="App" onClick={this.bodyClick}>

            <Topbar getCategories={this.getCategories} 
            typeahead={this.typeahead}
            showTypeahead={this.state.showTypeahead}
            searchInput={this.state.searchInput}
            categories={this.state.categories}
            gettheCategory={this.gettheCategory}
            focuseInput={this.state.focuseInput}/>
            {routes}


            </div>
            </BrowserRouter>

        );
    }
}

export default App;