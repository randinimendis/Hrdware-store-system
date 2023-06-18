import React, {Component} from 'react';
import axios from 'axios'
import ReturnTableRow from './ReturnTableRow';
import RepHeader from '../repair/RepHeader'
//import Header from "../employeMag/Header"

export default  class ViewReturnItem extends  Component{

    constructor(props) {
        super(props);

        // this.onChangeSearch = this.onChangeSearch.bind(this);
        

        this.state = {
            return : [],
            
        }
       
    }

    componentDidMount() {
       
        axios.get('http://localhost:8000/api/repair/getReturnitem/')
            .then(response => {
                
                this.setState({return : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.return.map(function (object, i){
            return <ReturnTableRow obj = {object} key = {i}/>;
        });
    }
render() {
        return (
             <div>
                <RepHeader/>
                    <br/>
                    <h1 style={{textAlign:'center'}}> All Return Item Details</h1>
                    
                    <table className="table table-striped" style = {{marginTop :5,display:'table',marginLeft:'auto',marginRight:'auto'}}>
                            <thead style={{padding:10,textAlign:'center'}}>
                                <tr>
                                 
                                    
                                    <th style={{padding:20}}>Repair ID</th>
                                    <th style={{padding:20}}>Warrenty ID</th>
                                    <th style={{padding:20}}>Note</th>
                                    <th style={{padding:20}}>action</th>
                                </tr>
                            </thead>
                            <tbody style={{padding:20,textAlign:'center'}}>
                                {this.tabRow()}
                            </tbody>
                    </table>

             </div>
        )
    }
}