import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VehTableRow extends Component {
    handleEditClick = () => {
        this.props.onEdit(this.props.obj._id);
    };

    handleDeleteClick = () => {
        this.props.onDelete(this.props.obj._id);
    };

    render() {
        return (
            <tr>
                <td>{this.props.obj.regNo}</td>
                <td>{this.props.obj.vCode}</td>
                <td>{this.props.obj.brand}</td>
                <td>{this.props.obj.capacity}</td>
                <td>{this.props.obj.licence_expDate}</td>
                <td>
                <Link to={"/vehedit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
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