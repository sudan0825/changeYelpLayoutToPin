import React, {Component} from 'react';

import ImageContainer from '../../components/imageContainer/imageContainer';

import axios from '../../axios';

import './GetDataFromYelp.css'




class GetDataFromYelp extends Component{

    constructor(props){
        super(props);
        this.state ={
            data:[]
        }
    }


    addToFavorite=(e)=>{

        this.state.data.forEach((store)=>{
            if(store.id===e.target.getAttribute("item")){
                console.log(store.name);
                axios.post('/favorite.json',store).then((res)=>{
                    console.log("success");
                }).catch((e)=>{
                    console.log("cannot post favorite");
                    console.log(e)
                })
            }
        })


    }
  componentWillReceiveProps(newProps){
        if(newProps.thevalueTobeRender!==this.props.thevalueTobeRender){
            this.setState({data:newProps.thevalueTobeRender})
        }
    }

componentDidMount() {
    //Initial website with Bars


    axios.get('/Bars.json').then(res=>{
        let datalist=[];
        for(let i in res.data){
            datalist=[...datalist, ...res.data[i]];
        }
        this.setState({data:datalist})



    }).catch(e=>{
        console.log(e)})
}

render(){
    let imageContainers=[];
    if(this.state.data.length!==0){

        this.state.data.forEach((store,i)=>{
            if(store.image_url.length!==0) 
                imageContainers.push(<ImageContainer 
                                     key={store.id} 
                                     pic={store.image_url} 
                                     url={store.url}
                                     name={store.name}
                                     item={store.id}
                                     addToFavorite={this.addToFavorite}/>)
                                     })



                }

                                return (<div className="main">
                                {   imageContainers  }
                                </div>)
                                }
                                }

                                export default GetDataFromYelp;