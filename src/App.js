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

    //get the search stores based on the input value
    getCategoriesFromDB=(e)=>{
        if(e.key==='Enter'){

            this.setState({showTypeahead:false});
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
        console.log(this);

    }



    //if mouse leave the search input, hide the drop down menu  
    bodyClick=(e)=>{

        //hide typeahead if the anywhere other then searchCategory is clicked
        if(e.target.className==="searchCategory"){
            this.setState({showTypeahead:true});


            axios.get('/categories.json').then((res)=>{


                for(let i in res.data){

                    this.setState({categories:res.data[i][1].split(",")})

                }

            }).catch((e)=>{

                console.log(e)
            })



        }else {

            this.setState({showTypeahead:false});

        }
        //if the typeahead is clicked, set the input field value
        if(e.target.className==="categoriesList"){

            this.setState({searchInput:e.target.innerHTML,
                           focuseInput:true});



        }
        console.log(this.state.showTypehead)


    }
    //get the category from drop down list; set it as the input value; retrieve data from backend
    onInputchange=(e)=>{

        console.log(e.target.value)
        this.setState({searchInput:e.target.value})
        console.log(this);
        console.log(this.state.searchInput)

    }
    getSnapshotBeforeUpdate(preprops, prestate){
        if(prestate!==this.state||preprops!==this.props){

            return this.state
        }
        console.log(preprops, prestate)
        return null

    }

componentDidUpdate(preprops, prestate,snapshot){
    console.log(snapshot)
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
            <div className="App" onClick={(e)=>this.bodyClick(e)}>

            <Topbar 
        getCategories={e=>this.getCategoriesFromDB(e)} 
        showTypeahead={this.state.showTypeahead}
        searchInput={this.state.searchInput}
        categories={this.state.categories}
        change={e=>this.onInputchange(e)}
        focuseInput={this.state.focuseInput}/>
        {routes}


</div>
    </BrowserRouter>

);
}
}

export default App;