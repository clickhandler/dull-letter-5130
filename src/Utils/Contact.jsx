import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import "../Style/Contact.css"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="Content">
        <div>
          <h1
            style={{
              borderBottom: "3px solid red",
              display: "block",
              width: "18%",
              marginBottom: "40px",
            }}
          >
            READY TO JOIN?
          </h1>

          <p>
            SparkAmerica is made up of organizations and businesses just like
            yours. If you're interested in participating, joining us as a
            strategic partner, or becoming a sponsor, we would love to hear from
            you. Have questions about how you can utilize our Annual Calendar in
            your organization? We can help you understand how it all works to
            deliver a thriving culture. If you're an individual interested in
            joining a team, please visit our SparkCities page to see if your
            city is listed. From there you can see visit one of our SparkCity
            home pages and look for your organization. If you don't see your
            organization, ask your HR leader to sign up and enter your business
            name and, once verified, your organization will become a part of the
            movement.
          </p>
        </div>
        {/* Form */}
        <div className="FormBox">
          <div>
            <p style={{fontSize:"25px"}}>REACH OUT</p>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="email" />

              <FormLabel>Email Address </FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <p style={{fontWeight:"bolder"}}>Your Interest in SparkAmerica</p>
            <Checkbox>Interested in Partnering</Checkbox>
            <br/>
            <Checkbox>Interested in Sponsoring</Checkbox>
            <br/>
            <Checkbox>Please bring SparkAmerica to Our City</Checkbox>
            <br/>
            <Button className="BTN3" colorScheme="red" style={{ borderRadius: "20px"}}>
              SEND MESSAGE
            </Button>
          </div>
          <div>
            <h3>OUR INFORMATION</h3>
            <br></br>
            <span style={{color:"#007FC4"}}>support@sparkamerica.com</span>
            <p>
              (888) 330-6891
              <br></br>
              SparkAmerica
              <br></br>
              P.O. Box 123, Oakmont, PA 15139
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
