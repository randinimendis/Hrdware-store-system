
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/customerD-routes')
const empRouter = require('./routes/empdetails-routes')
const inquRouter = require('./routes/inquirys-routes')
const warrantyRouter = require('./routes/warranty-routes')
const supdetailsRouter = require('./routes/supdetails-routes')
const purchesRouter = require('./routes/addpurches-routes')
const rapirRouter = require('./routes/repair-route')
const vehiRouter = require('./routes/veh-routes')
const productRouter = require('./routes/productRoute')
const paymentsRouter = require('./routes/payment-routes')
const cors = require("cors");


const app = express();
app.use(cors());
//meddlewares
app.use(express.json());//http://localhost:8000/customerD/
app.use("/api",router)//http:locallhost:8000/customerD
app.use("/api",empRouter)//http:locallhost:8000/customerD
app.use("/api",inquRouter)//http:locallhost:8000/customerD
app.use("/api",warrantyRouter)//http:locallhost:8000/customerD
app.use("/api",supdetailsRouter)//http:locallhost:8000/customerD
app.use("/api",purchesRouter)//http:locallhost:8000/customerD
app.use("/api",rapirRouter)//http:locallhost:8000/customerD
app.use("/api",vehiRouter)//http:locallhost:8000/customerD
app.use("/api",productRouter)//http:locallhost:8000/customerD
app.use("/api",paymentsRouter)//http:locallhost:8000/customerD



mongoose
  .connect("mongodb+srv://admin:TpZYcEm8Mk3lYSKm@cluster0.idhoqcn.mongodb.net/hardwareStore?retryWrites=true&w=majority")
  .then(() => console.log("Connected to database"))
  .then(() =>{app.listen(8000);
})
.catch((err)=> console.log(err));