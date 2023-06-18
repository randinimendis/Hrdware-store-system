/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TableRow extends Component {
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
                <td>{this.props.obj.salary}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.nic}</td>
                <td>{this.props.obj.position}</td>
                <td>
                <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
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
}*/

/*
import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = (props) => {
const handleEditClick = () => {
props.onEdit(props.obj._id);
};
const handleDeleteClick = () => {
    props.onDelete(props.obj._id);
};

return (
    <tr>
        <td>{props.obj.name}</td>
        <td>{props.obj.salary}</td>
        <td>{props.obj.gender}</td>
        <td>{props.obj.nic}</td>
        <td>{props.obj.position}</td>
        <td>
            <Link to={"/edit/" + props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
            <button
                type="submit"
                className="btn btn-danger"
                onClick={handleDeleteClick}>
                Delete
            </button>
        </td>
    </tr>
   
);
};

export default TableRow;*/