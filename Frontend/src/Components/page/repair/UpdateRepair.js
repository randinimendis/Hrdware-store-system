import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { Component } from 'react';
import axios from 'axios';


export default  class UpdateRepair extends  Component{


    constructor(props){
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeRepairPeriod = this.onChangeRepairPeriod.bind(this);
        this.onChangeEstimatedCost = this.onChangeEstimatedCost.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitgetDetails = this.onSubmitgetDetails.bind(this);

        this.state = {
            id:'',
            ItemName: '',
            RepairPeriod: '',
            EstimatedCost:'',
            Description:'',
            state: ''
        }
       
    }
    
    onSubmitgetDetails(e) {
        e.preventDefault();
        axios.get('http://localhost:8000/api/repair/editRepair/'+this.state.id)
            .then(res => {
                this.setState({
                    ItemName: res.data.ItemName,
                    RepairPeriod: res.data.RepairPeriod,
                    EstimatedCost: res.data.EstimatedCost,
                    Description: res.data.Description
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangeId(e){
        this.setState( {
            id: e.target.value
        });
    }
    onChangeItemName(e){
        this.setState( {
            ItemName: e.target.value
        });
    }
    onChangeRepairPeriod(e){
        this.setState( {
            RepairPeriod: e.target.value
        });
    }
    onChangeEstimatedCost(e){
        this.setState( {
            EstimatedCost: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState( {
            Description: e.target.value
        });
    }
   
    onSubmit(e){
        e.preventDefault();
        this.state.status = 'pending';
        const obj = {
            ItemName : this.state.ItemName,
            RepairPeriod : this.state.RepairPeriod,
            EstimatedCost : this.state.EstimatedCost,
            Description : this.state.Description,
            state : this.state.status
        };

        axios.post('http://localhost:8000/api/repair/updateRepair/'+this.state.id,obj)
        .then(res => console.log(res.data));
        //this.props.history.push('/myorder/'+this.state.email);
        window.location.replace('/view');

    }

    render() {
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Update Repair Details</h1>
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
                marginTop={10}
            >
                    
                    <FormLabel>Enter Id</FormLabel>
                    <TextField value={this.state.id} onChange={this.onChangeId}margin="normal" fullWidth variant ="outlined" name="id" inputProps={{ pattern: "RID[0-9]{3}", }}required helperText="Please enter a valid RID (e.g. RID123)"/>
            
                    <Button variant ="contained" type ="submit">Get Details</Button>
                    </Box>
                </form>

            


            <form onSubmit={this.onSubmit}>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                maxWidth={700}
                alignContent={"center"}
                alignSelf={"center"}
                marginLeft={"auto"}
                marginRight={"auto"}
                marginTop={10}
            >
                    {/* <FormLabel> RepairID</FormLabel>
                    <TextField value={RepairID} margin="normal" fullWidth variant ="outlined" name="repairID"/> */}
                    <FormLabel> Item Name</FormLabel>
                    <TextField value={this.state.ItemName} onChange={this.onChangeItemName}margin="normal" fullWidth variant ="outlined" name="itemName"/>
                    <FormLabel> Repair Period</FormLabel>
                    <TextField value={this.state.RepairPeriod} onChange={this.onChangeRepairPeriod}type="normal"margin="normal" fullWidth variant ="outlined" name="repairperiod"/>
                    <FormLabel> Estimated Cost</FormLabel>
                    <TextField value={this.state.EstimatedCost} onChange={this.onChangeEstimatedCost}type="number"margin="normal" fullWidth variant ="outlined" name="estimatedcost"/>
                    <FormLabel>Description</FormLabel>
                    <TextField value={this.state.Description} onChange={this.onChangeDescription}margin="normal" fullWidth variant ="outlined" name="Description"/>
            
                    {/* <FormControlLabel control={<Checkbox Checked={inputs.alldetailsarecorrect} />} label="All details are correct"/> */}
                    <Button variant ="contained" type ="submit">Update Repair</Button>
                    </Box>
                </form>
            </div>
        )
    }
}

