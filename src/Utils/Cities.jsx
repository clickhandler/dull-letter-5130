import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@chakra-ui/react";
import { FcOk, FcSurvey } from "react-icons/fc";
import {Link} from 'react-router-dom'

import "../Style/Cities.css";
const Cities = () => {
  return (
    <div>
      <Navbar />
      <div className="Content">
        <div>
          <h3 style={{ width: "70%", fontSize: "23px", marginBottom: "20px" }}>
            <span style={{ borderBottom: "3px solid red" }}>ONE PERSON</span>
            ,ONE COMMUNITY, ONE CITY AT A TIME
          </h3>
          <p>
            SparkAmerica is focused on building Fit & Healthy leaders all across
            the country. We do that by implementing programs in SparkCities -
            urban and suburban localities whose business and civic leaders have
            joined with us to create community and promote healthy living. We
            are proud of the work being done and the partnerships we've formed
            in each of these cities, and of the friendly competition we see each
            year as they strive to be the healthiest SparkCity in America!
          </p>
        </div>
        {/* ----------------------- */}
        <div>
          <h3
            style={{
              borderBottom: "2px solid red",
              display: "inline-block",
              fontSize: "23px",
              marginBottom: "20px",
              fontWeight: "900",
            }}
          >
            JOIN SPARKAMERICA
          </h3>
          <p>
            We have over 70 cities participating in SparkAmerica, click below to
            sign up in your city today! You can join your city in three ways.
          </p>
          <ul>
            <li>First, by being part of your #TeamCity.</li>
            <li>
              Second, by joining an existing business or organization in your
              city.
            </li>
            <li>Third, by requesting to add your business or organization.</li>
          </ul>
        </div>
     <Link to={"/register"} >   <Button className="BTNS" colorScheme="blue">
          <FcOk />
          REGISTER HERE
        </Button></Link>
        <p>
          If you want to learn more about how the SparkAmerica Fit City
          Challenge works and also learn how you can connect to the tools inside
          SparkAmerica, download our toolkit!
        </p>
        <a
             rel="noreferrer" href="https://spark360prodstorage.blob.core.windows.net/publicfiles/2022%20SparkAmerica%20Toolkit.pdf"
          target={"_blank"}
        >
          <Button className="BTNS" colorScheme="blue">
            <FcSurvey /> DOWNLOAD THE TOOLKIT (PDF)
          </Button>
        </a>
        <div>
          <h3
            style={{
              borderBottom: "2px solid red",
              display: "inline-block",
              fontSize: "23px",
              marginBottom: "20px",
              fontWeight: "900",
            }}
          >
            FIT CITY CHALLENGE
          </h3>
          <p>
            The Fit City Challenge happens twice a year in the Spring and Fall
            and is one of our most active challenges. Once you've signed up fro
            SparkAmerica, you're automatically ready to participate in the Fit
            City Challenge to help your city become one of the healthiest in
            America. Check out the cities below to see the latest leaderboards
            and get your organization and city ready for the next Fit City
            Challenge.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cities;
