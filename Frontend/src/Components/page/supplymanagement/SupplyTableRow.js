import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class SupplyTableRow extends Component {
    handleEditClick = () => {
        this.props.onEdit(this.props.obj._id);
    };

    handleDeleteClick = () => {
        this.props.onDelete(this.props.obj._id);
       
    };

    render() {
        return (
            
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.discription}</td>
                <td>
                <Link to={"/supplyedit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={this.handleDeleteClick}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}