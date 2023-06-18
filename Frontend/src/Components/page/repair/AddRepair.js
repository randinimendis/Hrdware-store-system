import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from "@mui/material";
import React, { Component } from 'react';
import RepHeader from "./RepHeader";
import axios from 'axios';
import "./empbg.css"

export default  class AddRepair extends  Component{
    constructor(props){
        super(props);


        this.onChangeRID = this.onChangeRID.bind(this);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeRepairPeriod = this.onChangeRepairPeriod.bind(this);
        this.onChangeEstimatedCost = this.onChangeEstimatedCost.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            RID:'',
            ItemName: '',
            RepairPeriod: '',
            EstimatedCost:'',
            Description:'',
            status:''
        }
    }

    onChangeRID(e){
        this.setState( {
            RID: e.target.value
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
            RID : this.state.RID,
            ItemName : this.state.ItemName,
            RepairPeriod : this.state.RepairPeriod,
            EstimatedCost : this.state.EstimatedCost,
            Description : this.state.Description,
            status : this.state.status
        };

        axios.post('http://localhost:8000/api/repair/add',obj)
                                .then(res => {
                                    alert("Item added Successfully");
                                    this.setState({
                                        RID:'',
                                        ItemName: '',
                                        RepairPeriod: '',
                                        EstimatedCost:'',
                                        Description:''
                            
                                    })
                                    console.log(res.data)});
                                    window.location.replace('/view');
    }

    render() {
        return(
            <div>
                <RepHeader/>
                <h1 style={{textAlign:'center'}}>Add Repair Items</h1>
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
                    <FormLabel> Repair ID</FormLabel>
                    <TextField value={this.state.RID}onChange={this.onChangeRID} margin="normal" fullWidth variant ="outlined" name="repairID" inputProps={{ pattern: "RID[0-9]{3}", }}required helperText="Please enter a valid RID (e.g. RID123)"/> 
                    <FormLabel> Item Name</FormLabel>
                    <TextField value={this.state.ItemName} onChange={this.onChangeItemName}margin="normal" fullWidth variant ="outlined" name="itemName" required/>
                    <FormLabel> Repair Period</FormLabel>
                    <TextField value={this.state.RepairPeriod} onChange={this.onChangeRepairPeriod}type="normal"margin="normal" fullWidth variant ="outlined" name="repairperiod" required/>
                    <FormLabel> Estimated Cost</FormLabel>
                    <TextField value={this.state.EstimatedCost} onChange={this.onChangeEstimatedCost}type="number"margin="normal" fullWidth variant ="outlined" name="estimatedcost" required InputProps={{inputProps: { min: 0 }}} error={this.state.cost < 0}helperText={this.state.cost < 0 ? 'Cost cannot be negative' : ''}/>
                    <FormLabel>Description</FormLabel>
                    <TextField value={this.state.Description} onChange={this.onChangeDescription}margin="normal" fullWidth variant ="outlined" name="Description" required/>
            
                    {/* <FormControlLabel control={<Checkbox Checked={inputs.alldetailsarecorrect} />} label="All details are correct"/> */}
                    <Button variant ="contained" type ="submit">Add Repair</Button>
                    </Box>
                </form>
            </div>
        )
    }
}

