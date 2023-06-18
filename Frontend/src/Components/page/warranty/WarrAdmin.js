import React, { Component } from 'react';
import axios from 'axios';
import WarTableRow from './WarTableRow';
import WarHeader from './WarHeader.component';

export default class WarrAddmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      warranty: [],
      searchQuery: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/warranty/get')
      .then((response) => {
        console.log(response.data); // Check the data structure
        this.setState({ warranty: response.data.warrantyes });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleEdit(id) {
    console.log('Edit warranty with id:', id);
  }

  handleDelete(id) {
    axios
      .delete(`http://localhost:8000/api/warranty/delete/${id}`)
      .then((response) => {
        console.log('Warranty details deleted:', response.data);
        // Refresh the warranty deails state after deletion
        this.componentDidMount();
      })
      .catch((error) => {
        console.log('Error deleting warranty:', error);
      });
  }

  handleSearchChange = (event) => {
    const { value } = event.target;
    this.setState({ searchQuery: value });
  };

  tabRow() {
    const { warranty, searchQuery } = this.state;
    const filteredWarranty = warranty.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    return filteredWarranty.map((object, i) => {
      return (
        <WarTableRow
          obj={object}
          key={i}
          onEdit={this.handleEdit.bind(this)}
          onDelete={this.handleDelete.bind(this)}
        />
      );
    });
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <WarHeader />
        <h3 align="center">All Warranty List</h3>
        <div style={{ marginBottom: 20 }}>
          <label>
            Search:
            <input type="text" value={searchQuery} onChange={this.handleSearchChange} />
          </label>
        </div>
        <table className="table table-striped table table-light" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Item Name</th>
              <th>Contact Number</th>
              <th>Invoice Number</th>
              <th>Purchased Date</th>
              <th>Nature Of The Problem</th>
              <th>Attach Item Photos</th>

              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
