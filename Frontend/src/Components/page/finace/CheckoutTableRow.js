import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";



class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deletesss = this.deletesss.bind(this);
    }
    deletesss(){
        axios.delete('http://localhost:8000/api/payments/'+this.props.obj._id)
            .then(this.setState({redirect: true}))
            .catch(err => console.log(err))
        //this.props.history.push('/index');
        alert("Your details Successfully Deleted....")
        window.location.replace('/finview');
    }
    
    render() {
        return (
           <tr>
             
               <td style={{padding:20}}>
                   {this.props.obj.name}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.address}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.city}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.email}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.paymenttype}
               </td>
               <td style={{padding:20}}>
                   {this.props.obj.status}
               </td>
               <td style={{padding:20, gap:20}}>
                   <Link to={`/update/${this.props.obj._id}`} className="btn btn-success" style={{background:'green',textDecoration:'none',padding: 5,color:'white'}}>Edit</Link>
                   <br/><br/>
                   <button onClick={this.deletesss} className="btn btn-danger" style={{background:'red',textDecoration:'none',padding: 5,color:'white',border:'none'}}>Delete</button>
               </td>
              
           </tr>
           
        );
    }
}

export default TableRow;