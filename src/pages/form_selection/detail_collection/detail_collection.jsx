import React, { useState } from "react";
import { Row, Button } from "antd";

export const Detail_collection = (props) => {
   const {user, setUser} = props
  const [userDetail, setUserDetail] = useState([{name: '', email: '', dob :'', contatNo: ''}]);

  const handleUserDetailChanged = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserDetail([{ ...userDetail, [name]: value }]);
  };

  const submitData = () => {
    if(userDetail.name && userDetail.email){
        setUser("documentCollection")
    }
  };
  return (
    <div>
      <form method="POST">
        <Row>
          <label>
            Name<sup>*</sup>
          </label>
        </Row>
        <Row>
          <input
            type="text"
            required="true"
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
            placeholder="Enter a Valid Salary in numbers e.g 50,000/-"
            name="name"
            value={userDetail?.name}
            onChange={handleUserDetailChanged}
          />
        </Row>
        <Row>
          <label>
            Email<sup>*</sup>
          </label>
        </Row>
        <Row>
          <input
            type="text"
            placeholder="Example - userid@gmail.com"
            name="email"
            value={userDetail?.email}
            onChange={handleUserDetailChanged}
            required
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          />
        </Row>
        <Row>
          <label>Date of Birth</label>
        </Row>
        <Row>
          <input
            type="date"
            id="dob"
            name="dob"
            value={userDetail?.dob}
            onChange={handleUserDetailChanged}
            style={{ marginBottom: "20px", height: "30px" }}
          />
        </Row>
        <Row>
          <label>Contact no</label>
        </Row>
        <Row>
          <input
            type="tel"
            name="contactNo"
            placeholder="Enter your 10 digit contact no"
            value={userDetail?.contactNo}
            onChange={handleUserDetailChanged}
            style={{ width: "100%", marginBottom: "20px", height: "30px" }}
          />
        </Row>
        <button
          type="submit"
          style={{ width: "20%", height: "40px" }}
          onClick={submitData}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
