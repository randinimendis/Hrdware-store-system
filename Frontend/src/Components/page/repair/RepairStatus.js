import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { Component } from 'react';
import axios from 'axios';
import RepaireTableRow from './RepaireStatusTableRow';
import RepHeader from '../repair/RepHeader'


export default  class Repairstatus extends  Component{


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
        axios.get('http://localhost:8000/api/repair/getData/'+this.state.id)
        .then(response => {
            this.setState({repaires : response.data});

        })
        .catch(function (error){
            console.log(error);
        })
       
    }

    tabRow(){
        return <RepaireTableRow obj={this.state.repaires}/>
    }

    onChangeId(e){
        this.setState( {
            id: e.target.value
        });
    }

    render() {
        return(
            <div>
                <RepHeader/>
                <br/>
                <h3 style={{textAlign:'center'}}>Enter the repair ID that you want to get the status about repair in real time...</h3>
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
                    
                    <FormLabel>Enter Id</FormLabel>
                    <TextField value={this.state.id} onChange={this.onChangeId}margin="normal" fullWidth variant ="outlined" name="id"  inputProps={{ pattern: "RID[0-9]{3}", }}required helperText="Please enter a valid RID (e.g. RID123)"/>
            
                    <Button variant ="contained" type ="submit">Get Details</Button>
                    </Box>
                </form>

                <br/><br/>

                <table className="table table-striped" style = {{marginTop :5,display:'table',marginLeft:'auto',marginRight:'auto'}}>
                            <thead style={{padding:10,textAlign:'center'}}>
                                <tr>
                                    {/* <th>id</th> */}
                                    <th style={{padding:20}}>RepairID</th>
                                    <th style={{padding:20}}>ItemName</th>
                                    <th style={{padding:20}}>State</th>
                                </tr>
                            </thead>
                            <tbody style={{padding:20,textAlign:'center'}}>
                                {this.tabRow()}
                            </tbody>
                    </table>
            </div>
        )
    }
}

