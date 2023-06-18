import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";


export default function  RepaireStatusTableRow(props) {
   
   console.log("PP",props);
        return (
           <tr>
                <td style={{padding:20}}>
                   {props.obj.RID}
               </td>
               <td style={{padding:20}}>
                   {props.obj.ItemName}
               </td>
               <td style={{padding:20}}>
                   {props.obj.status}
               </td>
           </tr>
        );
   
}
