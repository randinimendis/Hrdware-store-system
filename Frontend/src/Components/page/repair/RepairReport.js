import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { Component } from 'react';
import axios from 'axios';
import RepaireTableRow from './RepairReportTableRow';
import RepHeader from '../repair/RepHeader'
import jsPDF from "jspdf";
import 'jspdf-autotable';



export default  class RepairReport extends  Component{


    constructor(props){
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onSubmitgetDetails = this.onSubmitgetDetails.bind(this);

        this.state = {
            id:'',
            repaires : []
        }
       
    }
    
    onSubmitgetDetails(e) {
        e.preventDefault();
        //alert("Report Data Get api is Calling "+this.state.id)
        axios.get('http://localhost:8000/api/repair/getReportData/'+this.state.id)
        //alert("Report Data Get api is back "+this.state.id)
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

    onChangeId(e){
        this.setState( {
            id: e.target.value
        });
    }

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "My Report";
        const headers = [[ "RID","ItemName", "RepairPeriod","EstimatedCost", "Description","Status"]];
    
        const data = this.state.repaires.map(elt=> [ elt.RID, elt.ItemName, elt.RepairPeriod,elt.EstimatedCost, elt.Description, elt.status]);
    
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
        return(
            <div>
                <RepHeader/>
                <br/>
                <h3 style={{textAlign:'center'}}>Enter Repair ID for genarate report..</h3>
            <form onSubmit={this.onSubmitgetDetails}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={5}
            >
                    
                    <FormLabel>Enter here</FormLabel>
                    <TextField value={this.state.id} onChange={this.onChangeId}margin="normal" fullWidth variant ="outlined" name="id"  inputProps={{ pattern: "RID[0-9]{3}", }}required helperText="Please enter a valid RID (e.g. RID123)"/>
            
                    <Button variant ="contained" type ="submit">Get Details</Button>
                    </Box>
                </form>

                <br/><br/>

                <table className="table table-striped" style = {{marginTop :5,display:'table',marginLeft:'auto',marginRight:'auto'}}>
                            <thead style={{padding:10,textAlign:'center'}}>
                                <tr>
                                    {/* <th>id</th> */}
                                  
                                    <th style={{padding:20}}>Repair ID</th>
                                    <th style={{padding:20}}>ItemName</th>
                                    <th style={{padding:20}}>RepairPeriod</th>
                                    <th style={{padding:20}}>EstimatedCost</th>
                                    <th style={{padding:20}}>Description</th>
                                    <th style={{padding:20}}>State</th>
                                </tr>
                            </thead>
                            <tbody style={{padding:20,textAlign:'center'}}>
                                {this.tabRow()}
                            </tbody>
                </table>

                <br/>
                <center>
                    <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export Result -</button>
                </center>
            </div>
        )
    }
}