import React, {Component} from 'react';

import FavoriteStore from '../../components/imageContainer/favorite';

import axios from '../../axios';


import '../GetDataFromYelp/GetDataFromYelp.css'





class Favorite extends Component{

    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }


    componentDidMount() {
        axios.get('/favorite.json').then((res)=>{

            this.setState({data:res.data})
      
        }).catch((e)=>{
            console.log("cannot get your favorite");
            console.log(e)
        })
    }

    render(){
        let imageContainers=[];
        if(this.state.data.length!==0){

            for(let i in this.state.data){
                imageContainers.push(<FavoriteStore 
                                     key={this.state.data[i].id} 
                                     pic={this.state.data[i].image_url} 
                                     url={this.state.data[i].url}
                                     name={this.state.data[i].name}
                                     item={this.state.data[i].id}
                                    />)
                                     
                                    



            }
                                     }
       return (<div className="main">
                    {imageContainers}
                    </div>)
                    }
                    }

                    export default Favorite;