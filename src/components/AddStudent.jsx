import React, { useState } from 'react'
import StudentHeader from './StudentHeader'

const AddStudent = () => {

    const [input, changeInput] = useState({
      SlNo: "",
      Name: "",
      RollNo: "",
      AdmissionNo: "",
      College: "",
      Date_of_Birth:"",
      Parent_Name:"",
      Mobile_Number:"",
      Email_ID:"",
      Address:"",
      Pin_code:""
    });

    const readValue=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }

    const submitValue=()=>{
        console.log(input)
    }

  return (
    <div>
      <StudentHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Student Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  value={input.Name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Roll Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="RollNo"
                  value={input.RollNo}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Admission Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="AdmissionNo"
                  value={input.AdmissionNo}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  College
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="College"
                  value={input.College}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  className="form-control"
                  name="Date_of_Birth"
                  value={input.Date_of_Birth}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Parent Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Parent_Name"
                  value={input.Parent_Name}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="Mobile_Number"
                  value={input.Mobile_Number}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="Email_ID"
                  value={input.Email_ID}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Address"
                  value={input.Address}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Pin code
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="Pin_code"
                  value={input.Pin_code}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent