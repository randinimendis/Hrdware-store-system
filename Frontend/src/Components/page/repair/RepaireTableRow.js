import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import axios from "axios";

//chenge
class RepaireTableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.status = this.status.bind(this);
    }
    delete(){
        axios.get('http://localhost:8000/api/repair/deleteRepair/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your Repair Successfully Deleted....")
        window.location.replace('/view');
    }
    status(){
        axios.get('http://localhost:8000/api/repair/changeRepair/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        window.location.replace('/view');
    }
    render() {
        return (
           <tr>
      
                
               <td style={{padding:20}}>
                   {this.props.obj.RID}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.ItemName}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.RepairPeriod}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.EstimatedCost}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.Description}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.status}
               </td>
               <td style={{padding:20, gap:20}}>
                   <Link to={"/editRepaire"} style={{background:'green',textDecoration:'none',padding: 5,color:'white'}}>Edit</Link>
                   <br/><br/>
                   <button onClick={this.delete}  style={{background:'red',textDecoration:'none',padding: 5,color:'white',border:'none'}}>Delete</button>
                   <br/><br/>
                   <button onClick={this.status}  style={{background:'yellow',textDecoration:'none',padding: 5,color:'black',border:'none'}}>Change Status</button>
               </td>
               
           </tr>
        );
    }
}

export default RepaireTableRow;