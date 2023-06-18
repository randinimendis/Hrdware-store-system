import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class SupplyGenpdf extends Component {
 
  generatePdfReport = () => {
    axios.get("http://localhost:8000/api/purches/get").then(res => {
      if (res.status === 200) {
        const post = res.data;
        const reportTitle = "Procuct of List ";

        // Create a new PDF document
        const doc = new jsPDF();

        // Add title to the report
        doc.setFontSize(20);
        doc.text(reportTitle, 20, 20);

        // Create the table
        doc.autoTable({
          head: [['product name', 'supplier name', 'requireddate', 'supplier id', 'quentity','note']],
          body: post.addpurche.map((supplier) => [supplier.productname, supplier.suppliername, supplier.requireddate, supplier.supplierid, supplier.quentity, supplier.note]),
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
