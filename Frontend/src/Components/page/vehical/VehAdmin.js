import React, { Component } from 'react';
import axios from 'axios';
import VehHeader from '../vehical/VehHeader'
import VehTableRow from './VehTableRow';

export default class VehAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {veh:[]};
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/vehs/get")
            .then(Response => {
                console.log(Response.data); // Check the data structure
                this.setState({ veh: Response.data.vehs });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    tabRow() {
        return this.state.veh.map((object, i) => {
            return (
                <VehTableRow
                    obj={object}
                    key={i}
                    onEdit={this.handleEdit.bind(this)}
                    onDelete={this.handleDelete.bind(this)}
                />
            );
        });
    }

    handleEdit(id) {
  
        console.log('Edit vehicle with id:', id);
    }
    
    handleDelete(id) {
        axios.delete(`http://localhost:8000/api/vehs/delete/${id}`)
            .then(response => {
                console.log('Vehicle deleted:', response.data);
                // Refresh the empdetails state after deletion
                this.componentDidMount();
            })
            .catch(error => {
                console.log('Error deleting vehicle:', error);
            });
    }


  render() {
    return (
      <div>
        <VehHeader/>
        <h3 align="center">All Vehicle List</h3>
        <table className="table table-striped table table-light" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th>Vehicle Registration Number</th>
                    <th>Vehicle Code Number</th>
                    <th>Vehicle Brand</th>
                    <th>Vehicle capacity(Kg)</th>
                    <th>Vehicle licence expiry date</th>
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