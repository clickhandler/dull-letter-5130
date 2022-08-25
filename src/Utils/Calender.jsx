import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Style/Calender.css";

const Calender = () => {
  const [oppo, setOppo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/calenders").then((res) => {
      res
        .json()
        .then((resul) => {
          setOppo(resul);
        })
        .catch((Err) => {
          console.log("Error");
        });
    });
  }, []);

  console.log(oppo);

  return (
    <div>
      <Navbar />
      <div className="Content">
        <div>
          <span style={{ borderBottom: "3px solid red" }}>OUR CALENDAR</span>

          <p>
            SparkAmerica works hard to build community and be accessible to
            everyone, because leaders come in all shapes, sizes, and levels of
            ability so there's something for everyone, all year round. The
            challenges and events on the SparkAmerica Calendar are designed by
            experts in lifestyle coaching and behavior change science for the
            total health of participants. That means subjects like nutrition,
            mental health, sleep, and even financial wellness will be covered.
            The physical challenges, like the Fit City Challenge, are based on
            Active Minutes. That means that anyone can participate, because all
            you need is to be active for at least 10 minutes a day. All kinds of
            activity - walk your dog, garden, roller skate, play basketball,
            dance, hike, skateboard, swim - count toward your Active Minutes!
            All of our challenges utilize the PeopleOne Health portal, our free
            and easy-to-use technology platform.
          </p>
        </div>
      </div>
      <div className="Grid-Box">
        {oppo.map((item) => (
          <div>
            <h2 style={{fontSize:"22px"}} >{item.headOne}</h2>
            <p>{item.para}</p>
            <p style={{fontWeight:"900"}}>{item.date}</p>
            <img src={item.Img} alt="" />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Calender;
