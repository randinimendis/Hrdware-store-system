/*import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class ReportGenerator extends Component {

  generatePdfReport = () => {
    axios.get("http://localhost:8000/api/empdetail/get").then(res => {
        if (res.data.success) {
            const posts = res.data.empdet;
            const reportTitle = "List of Employees";

        // Create a new PDF document
        const doc = new jsPDF();

        // Add title to the report
        doc.setFontSize(20);
        doc.text(reportTitle, 20, 20);

        // Create the table
        doc.autoTable({
          head: [['Employee Name', 'Employee salary', 'Employee gender', ' Employee NIC','Employee Position']],
          body: posts.map(post => [post.name, post.salary, post.gender, post.nic, post.position]),
          startY: 40,
        });

        // Save the PDF document
        doc.save(`${reportTitle}.pdf`);
      }
    });
  }

  render() {
    return (
      <div>
        <button className ="btn btn-primary mt-2 rounded-pill" onClick={this.generatePdfReport}>Generate PDF Report</button>
      </div>
    )
  }
}
*/
import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class Report extends Component {
 
  generatePdfReport = () => {
    axios.get("http://localhost:8000/api/empdetail/get").then(res => {
      if (res.status === 200) {
        const post = res.data;
        const reportTitle = "List of leaves";

        // Create a new PDF document
        const doc = new jsPDF();

        // Add title to the report
        doc.setFontSize(20);
        doc.text(reportTitle, 20, 20);

        // Create the table
        doc.autoTable({
          head: [['Name', 'Salary', 'Gender', 'NIC', 'Position']],
          body: post.empdetail.map((employee) => [employee.name, employee.salary, employee.gender, employee.nic, employee.position]),
          startY: 40,
        });

        // Save the PDF document
        doc.save(`${reportTitle}.pdf`);
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary mt-2" onClick={this.generatePdfReport}>Generate PDF Report</button>
      </div>
    )
  }
}
