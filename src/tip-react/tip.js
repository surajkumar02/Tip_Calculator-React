import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from'./header'
import Input from './input'
import Footer from './footer'


export default class Tip extends React.Component{
    constructor(props){
        super(props)

       
    
    }


 render(){
     return(
            
        <div className="m-4 border" >
           <Header />
           <Input />
           <Footer />
      
         </div>
        )
    }   
}