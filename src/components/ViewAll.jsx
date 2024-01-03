import React, { useState } from 'react'
import StudentHeader from './StudentHeader';

const ViewAll = () => {
const [data,changeData]=useState(
  [
    {"SlNo":1,"Name":"Jack John","RollNo":"1232","AdmissionNo":23,"College":"xyz"},
    {"SlNo":2,"Name":"Meera","RollNo":"1890","AdmissionNo":12,"College":"mes"},
    {"SlNo":3,"Name":"Jill John","RollNo":"567","AdmissionNo":34,"College":"sbc"},
    {"SlNo":4,"Name":"Ann John","RollNo":"456","AdmissionNo":45,"College":"svnc"},
    {"SlNo":5,"Name":"GEORGE","RollNo":"908","AdmissionNo":89,"College":"cet"},
    {"SlNo":6,"Name":"KRISH","RollNo":"1566","AdmissionNo":90,"College":"bhs"}
  ]
)

  return (
    <div>
      <StudentHeader />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Student Name</th>
                      <th scope="col">Roll Number</th>
                      <th scope="col">Admission Number</th>
                      <th scope="col">College Name</th>
                    </tr>
                  </thead>
                  <tbody>
{data.map(
  (value,index)=>{
    return                     <tr>
                      <th scope="row">{value.SlNo}</th>
                      <td>{value.Name}</td>
                      <td>{value.AdmissionNo}</td>
                      <td>{value.RollNo}</td>
                      <td>{value.College}</td>
                    </tr>

  }
)}

                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAll