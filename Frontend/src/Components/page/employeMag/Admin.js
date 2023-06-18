/*import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import ReportGenerator from './ReportGenerator';

export default class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {empdetails:[]};
    }

    componentDidMount() {
        axios.get("http://localhost:5000/empdetail/get")
            .then(Response => {
                console.log(Response.data); // Check the data structure
                this.setState({ empdetails: Response.data.empdetail });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    tabRow() {
        return this.state.empdetails.map((object, i) => {
            return (
                <TableRow
                    obj={object}
                    key={i}
                    onEdit={this.handleEdit.bind(this)}
                    onDelete={this.handleDelete.bind(this)}
                />
            );
        });
    }

    handleEdit(id) {
  
        console.log('Edit employee with id:', id);
    }
    
    handleDelete(id) {
        axios.delete(`http://localhost:5000/empdetail/delete/${id}`)
            .then(response => {
                console.log('Employee deleted:', response.data);
                // Refresh the empdetails state after deletion
                this.componentDidMount();
            })
            .catch(error => {
                console.log('Error deleting employee:', error);
            });
    }


  render() {
    return (
      <div>
        <h3 align="center">All Employee List</h3>
        <ReportGenerator/>

        
         


        <table className="table table-striped table table-light" style={{marginTop:20}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Gender</th>
                    <th>NIC</th>
                    <th>Position</th>
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
}*/



/* new1
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import 'jspdf-autotable';
import Report from './Report';

export default class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            empdetails: [],
            searchQuery: ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/empdetail/get")
            .then(Response => {
                console.log(Response.data); // Check the data structure
                this.setState({ empdetails: Response.data.empdetail });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        // Filter the rows based on the searchQuery state
        const filteredRows = this.state.empdetails.filter((row) => {
            return row.name.toLowerCase().includes(this.state.searchQuery.toLowerCase());
        });
        return filteredRows.map((object, i) => {
            return (
                <TableRow
                    obj={object}
                    key={i}
                    onEdit={this.handleEdit.bind(this)}
                    onDelete={this.handleDelete.bind(this)}
                />
            );
        });
    }

    handleEdit(id) {
        console.log('Edit employee with id:', id);
    }

    handleDelete(id) {
        axios.delete(`http://localhost:8000/api/empdetail/delete/${id}`)
            .then(response => {
                console.log('Employee deleted:', response.data);
                // Refresh the empdetails state after deletion
                this.componentDidMount();
            })
            .catch(error => {
                console.log('Error deleting employee:', error);
            });
    }

    // Update the searchQuery state whenever the input value changes
    handleInputChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        return (
            <div>
                <h3 align="center">All Employee List</h3>
                <Report/>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchQuery}
                    onChange={this.handleInputChange}
                />
                <table className="table table-striped table table-light" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Gender</th>
                            <th>NIC</th>
                            <th>Position</th>
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
*/


/* new one
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import 'jspdf-autotable';
import Report from './Report';

const Admin = () => {
  const [empdetails, setEmpdetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/empdetail/get")
      .then(response => {
        console.log(response.data); // Check the data structure
        setEmpdetails(response.data.empdetail);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleEdit = (id) => {
    console.log('Edit employee with id:', id);
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/empdetail/delete/${id}`)
      .then(response => {
        console.log('Employee deleted:', response.data);
        // Refresh the empdetails state after deletion
        axios.get("http://localhost:8000/api/empdetail/get")
          .then(response => {
            console.log(response.data); // Check the data structure
            setEmpdetails(response.data.empdetail);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log('Error deleting employee:', error);
      });
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredRows = empdetails.filter(row => {
    return row.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const tabRow = () => {
    return filteredRows.map((object, i) => {
      return (
        <TableRow
          obj={object}
          key={i}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      );
    });
  }

  return (
    <div>
      <h3 align="center">All Employee List</h3>
      <Report />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <table className="table table-striped table table-light" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>NIC</th>
            <th>Position</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tabRow()}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // add this import
import 'jspdf-autotable';
import Report from './Report';

const TableRow = (props) => {
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
}

const Admin = () => {
  const [empdetails, setEmpdetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/empdetail/get")
      .then(response => {
        console.log(response.data); // Check the data structure
        setEmpdetails(response.data.empdetail);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/empdetail/delete/${id}`)
      .then(response => {
        console.log('Employee deleted:', response.data);
        // Refresh the empdetails state after deletion
        axios.get("http://localhost:8000/api/empdetail/get")
          .then(response => {
            console.log(response.data); // Check the data structure
            setEmpdetails(response.data.empdetail);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log('Error deleting employee:', error);
      });
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredRows = empdetails.filter(row => {
    return row.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h3 align="center">All Employee List</h3>
      <Report />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <table className="table table-striped table table-light" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>NIC</th>
            <th>Position</th>
            <th colSpan="2">Action</th>
           </tr>
        </thead>
        <tbody>
          {filteredRows.map((object, i) => {
            return (
              <TableRow
                obj={object}
                key={i}
                onDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // add this import
import 'jspdf-autotable';
import Report from './Report';
import Header from "../employeMag/Header"

const TableRow = (props) => {
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
}

const Admin = () => {
  const [empdetails, setEmpdetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8000/api/empdetail/get")
      .then(response => {
        console.log(response.data); // Check the data structure
        setEmpdetails(response.data.empdetail);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/empdetail/delete/${id}`)
      .then(response => {
        console.log('Employee deleted:', response.data);
        // Refresh the empdetails state after deletion
        axios.get("http://localhost:8000/api/empdetail/get")
          .then(response => {
            console.log(response.data); // Check the data structure
            setEmpdetails(response.data.empdetail);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log('Error deleting employee:', error);
      });
  }

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const filteredRows = empdetails.filter(row => {
    return row.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    
    <div className='bodycolor'>
      <Header/>
      <h3 align="center">All Employee List</h3>
      <Report />
      <input
        className='add-emp-input'
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <p>Showing {filteredRows.length} out of {empdetails.length} employees</p>
      <table className="table table-striped table table-light" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>NIC</th>
            <th>Position</th>
            <th colSpan="2">Action</th>
           </tr>
        </thead>
        <tbody>
          {filteredRows.map((object, i) => {
            return (
              <TableRow
                obj={object}
                key={i}
                onDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
