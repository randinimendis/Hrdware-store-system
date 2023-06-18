import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../vehical/vehregister.css'

const Editvehicle = () => {
    const [regNo,setRegNo]= useState("");
    const [vCode,setVcode]= useState("");
    const [brand,setBrand]= useState("");
    const [capacity,setCapacity]=useState("");
    const [licence_expDate,setLicence_expDate]=useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8000/api/vehs/get/' + id)
      .then(response => {
        setRegNo(response.data.vehi.regNo);
        setVcode(response.data.vehi.vCode);
        setBrand(response.data.vehi.brand);
        setCapacity(response.data.vehi.capacity);
        setLicence_expDate(response.data.vehi.licence_expDate);
       setIsLoading(false);
      })

      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const updatedVehicle = {
      regNo: regNo,
      vCode: vCode,
      brand: brand,
      capacity: capacity,
      licence_expDate: licence_expDate
    };

    axios.put('http://localhost:8000/api/vehs/update/' + id, updatedVehicle)
      .then(res => console.log(res.data));

    window.location = '/vehadmin';
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <div className="testbox">
      <form onSubmit={onSubmit} className='add-vhe-form'>
      <h3 align="center">Update Vehicle</h3>
        <div className="form-group">
          <label>Vehicle Registration Number: </label>
          <input className='add-veh-input'
                 type="text"
                 //className="form-control"
                 value={regNo}
                 onChange={e => setRegNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Vehicle Code Number: </label>
          <input className='add-veh-input'
                 type="number"
                 //className="form-control"
                 value={vCode}
                 onChange={e => setVcode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Vehicle Brand: </label>
          <input className='add-veh-input'
                 type="text"
                 //className="form-control"
                 value={brand}
                 onChange={e => setBrand(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Vehicle capacity(Kg): </label>
          <input className='add-veh-input' 
                 type="number"
                 //className="form-control"
                 value={capacity}
                 onChange={e => setCapacity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Vehicle licence expiry date: </label>
          <input className='add-veh-input'
                 type="date"
                 //className="form-control"
                 value={licence_expDate}
                 onChange={e => setLicence_expDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Update Vehicle" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Editvehicle;