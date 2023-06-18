import React, { Component } from 'react';
import axios from 'axios';
import SupplyHeader from '../supplymanagement/SupplyHeader'
import SupplyTableRow from '../supplymanagement/SupplyTableRow'

export default class SupplyAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {supdetl:[]};
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/supdetails/get")
        //locallhost:5000/supdetails
            .then(Response => {
                console.log(Response.data); // Check the data structure
                this.setState({ supdetl: Response.data.supdetails });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    tabRow() {
        return this.state.supdetl.map((object, i) => {
            return (
                <SupplyTableRow
                    obj={object}
                    key={i}
                    onEdit={this.handleEdit.bind(this)}
                    onDelete={this.handleDelete.bind(this)}
                />
            );
        });
    }

    handleEdit(id) {
  
        console.log('Edit supdetail with id:', id);
    }
    
    handleDelete(id) {
        axios.delete(`http://localhost:8000/api/supdetails/delete/${id}`)
          //locallhost:5000/supdetails
            .then(response => {
                console.log('supdetail deleted:', response.data);
                // Refresh the supdetails state after deletion
                this.componentDidMount();
            })
            .catch(error => {
                console.log('Error deleting employee:', error);
            });
    }


  render() {
    return (
      <div className='bodycolor'>
        <SupplyHeader/>
        <h3 align="center">All supdetail List</h3>
        <table className="table table-striped table table-light" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address </th>
                    <th>discription</th>
                    <th colSpan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                {this.tabRow()}
            </tbody>
        </table>
      </div>
    );
  }
}