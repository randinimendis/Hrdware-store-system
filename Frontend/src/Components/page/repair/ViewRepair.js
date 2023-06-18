import React, {Component} from 'react';
import axios from 'axios'
import RepaireTableRow from './RepaireTableRow';
import jsPDF from "jspdf";
import 'jspdf-autotable';
import RepHeader from './RepHeader';

export default  class ViewRepair extends  Component{

    constructor(props) {
        super(props);

        // this.onChangeSearch = this.onChangeSearch.bind(this);
        

        this.state = {
            repaires : [],
            
        }
       
    }

    componentDidMount() {
       
        axios.get('http://localhost:8000/api/repair/getData/')
            .then(response => {
               
                this.setState({repaires : response.data});

            })
            .catch(function (error){
                console.log(error);
            })
    }

    tabRow(){
        return this.state.repaires.map(function (object, i){
            return <RepaireTableRow obj = {object} key = {i}/>;
        });
    }
    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My All Repaire Report";
        const headers = [["db_ID", "_ID","ItemName", "RepairPeriod","EstimatedCost", "Description","Status"]];
    
        const data = this.state.repaires.map(elt=> [elt._id, elt.RID, elt.ItemName, elt.RepairPeriod,elt.EstimatedCost, elt.Description, elt.status]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
      }



    render() {
        return (
             <div>
            <RepHeader/>   
                    <br/>
                    <h1 style={{textAlign:'center'}}>All Repair Details</h1>
                    
                    <table className="table table-striped" style = {{marginTop :5,display:'table',marginLeft:'auto',marginRight:'auto'}}>
                            <thead style={{padding:10,textAlign:'center'}}>
                                <tr>
                                 
                            
                                    <th style={{padding:20}}>Repair ID</th>
                                    <th style={{padding:20}}>Item Name</th>
                                    <th style={{padding:20}}>RepairPeriod</th>
                                    <th style={{padding:20}}>EstimatedCost</th>
                                    <th style={{padding:20}}>Description</th>
                                    <th style={{padding:20}}>State</th>
                                    <th colSpan="2" style={{padding:20}}>Action</th>
                                </tr>
                            </thead>
                            <tbody style={{padding:20,textAlign:'center'}}>
                                {this.tabRow()}
                            </tbody>
                    </table>
                    <center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>

             </div>
        )
    }
}