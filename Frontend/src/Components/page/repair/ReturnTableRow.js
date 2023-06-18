import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";
//import RepHeader from './repair/RepHeader.css'


class ReturnTableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.status = this.status.bind(this);
    }
 

    delete(){
        axios.get('http://localhost:8000/api/repair/deletereturn/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Repair Successfully Deleted....")
        window.location.replace('/returnitem');
    }
    status(){
        axios.get('http://localhost:8000/api/repair/changereturn/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        window.location.replace('/returnitem');
    }
    render() {
        return (
           <tr>
                
               <td style={{padding:20}}>
                   {this.props.obj.RepaireId}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.WarrantyId}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.Note}
               </td>
               <td>
               <button onClick={this.delete}  style={{background:'red',textDecoration:'none',padding: 5,color:'white',border:'none'}}>Delete</button>
               </td>   <br/><br/>
           </tr>
        );
    }
}

export default ReturnTableRow;