import React from "react";
import "../Style/Register.css";
import { Input, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <>
      <img
        className="BackImage"
        src="https://portal.peopleonehealth.com/Content/Images/CityImages/SparkAmericaCityPageHeader.jpg"
        alt=""
      />

      <div className="RegisterBox">
        <div>
          <img
            src="https://portal.peopleonehealth.com/Content/Images/CityImages/SparkAmerica2020-02-768x96.png"
            alt=""
          />
        </div>
        <div className="Container">
          <h3>Please enter your email address to get started:</h3>
          <br />
          <Input placeholder="Email Address" />
          <br />
          <br />
          <h3>
            Note: If your organization or company already uses PeopleOne, please
            enter your company email address above.
          </h3>
          <br />
          <div className="RegBtn">
            <div>
           <Link to={"/cities"}>  <h1 style={{ color: "#007FC4", fontWeight: "bolder",cursor:"pointer" }}>
                GO BACK
              </h1></Link> 
            </div>
            <div>
              <Button colorScheme="blue">CONTINUE</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
