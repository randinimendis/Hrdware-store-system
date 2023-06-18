import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WarTableRow extends Component {
    handleEditClick = () => {
        this.props.onEdit(this.props.obj._id);
    };

    handleDeleteClick = () => {
        this.props.onDelete(this.props.obj._id);
    };




    render() {
        return (
            <tr>
                <td>{this.props.obj.firstname}</td>
                <td>{this.props.obj.lastname}</td>
                <td>{this.props.obj.itemname}</td>
                <td>{this.props.obj.contactnumber}</td>
                <td>{this.props.obj.invoicenumber}</td>
                <td>{this.props.obj.purchaseddate}</td>
                <td>{this.props.obj.natureoftheproblem}</td>
                <td>{this.props.obj.attachitemphotos}</td>
                <td>
                <Link to={"/warranty/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
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