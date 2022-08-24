import React from "react";
import "../Style/Home.css";
import { FcSearch } from "react-icons/fc";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="App">
      <div className="Nav-Head">
        <div style={{ width: "30%" }}>
          {" "}
          <img
            src="https://sparkpeo.hs.llnwd.net/e1/assets/resource/sparkpeople_logo.svg"
            alt="logo"
          />
        </div>
        <div>
          <p>
            SparkPeople closed in August 2021.{" "}
            <a
              style={{ color: "#007FC4", textDecoration: "underline" }}
              href="https://sparkamerica.com/"
            >
              Visit SparkAmerica.com
            </a>{" "}
            for our free new experience.
          </p>
        </div>
        <div>
          <FcSearch />
        </div>
      </div>
      <br />
      <div>
        <img
          style={{ width: "100%" }}
          src="https://www.sparkpeople.com/assets/city_header1.jpg"
          alt=""
        />
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="Content-Box">
        <div className="Content">
          <div>
            <h1>
              SparkPeople's features, community and mobile apps closed on August
              17, 2021.
            </h1>
          </div>

          <div>
            <p>
              We'd like to introduce you to SparkAmerica, a new platform we hope
              you will join to help spread the spark to even more people!
              SparkAmerica is a national movement and fitness challenge, where
              you can compete with cities across the nation, work toward
              personal growth and even win prizes! The ad-free site will also
              include a nutrition and fitness tracker, challenges, articles and
              recipes, along with many other features we are working to develop.
            </p>
          </div>
        </div>
        <div>
          <Button colorScheme="blue" size="lg">
            Join SparkAmerica Now
          </Button>
        </div>
        <div>
          <p className="p1">
            If you have any questions or problems, please email{" "}
            <a
              href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              style={{ color: "#007FC4", textDecoration: "underline" }}
            >
              support@sparkpeople.com.
            </a>{" "}
          </p>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="Content-Box-II">
        <div>
          <img
            src="https://www.sparkpeople.com/assets/sunset_thin.jpg"
            alt="Sunview"
          />
        </div>
        <div>
          <h1>More About SparkPeople Closing</h1>
        </div>
        <div>
          <p>
            We want to thank you for inviting us to be a part of your journey
            and for the privilege of earning your support and enthusiasm for the
            brand. SparkPeople's business model has always been free and was
            driven by advertiser support, a model that became difficult to
            maintain in recent years. With many larger technology companies
            emerging in the health and fitness space, we struggled to compete
            for the same advertising dollars that would keep the site online and
            alive. Unfortunately, it costs many millions of dollars per year to
            run SparkPeople, and the burden eventually became too much.
            <br/>
            SparkAmerica is part of our new business model, in which we work
            with companies and organizations to help keep their employees
            healthy with PeopleOne Health. Not only does this business model
            allow us to expand our health offerings to more people, but it also
            does a much better job of paying the bills and will likely allow us
            to hire more people over time to keep improving our tech offerings.
            We're very excited that we can open up our website and app for this
            business while keeping it free to help all individuals and
            organizations in the United States achieve their health and fitness
            goals.
          </p>
        </div>
      </div>

{/* -------------------------------------------------------------------------------------------------- */}
<div className="Footer">
<div className="Footer-content">
    <div>
        <p style={{fontSize:"13px",marginTop:"5px" ,fontWeight:"bolder" }}>SparkPeople's features, community and mobile apps closed on August 17, 2021, along with its features and mobile apps.
Some of our articles and other content are still available to view. Click here to learn more.</p>
    </div>
    <div>
        <p style={{textDecoration:"underline",fontSize:"13px",cursor:"pointer"}} >Home | Diet Resources | PeopleOne Health | SparkAmerica | Healthy Recipes | Exercise Demos | Calorie Counter Tool | SparkPeople Blog Copyright SparkPeople, Inc. 2022., All Rights Reserved | Terms and Conditions | Privacy Policy | About Our Ads</p>
    </div>
    <div>
        <p style={{fontSize:"13px",marginTop:"5px" }} >SparkPeople, SparkCoach, SparkPages, SparkPoints, SparkDiet, SparkAmerica, SparkRecipes, DailySpark, and other marks are trademarks of SparkPeople, Inc. All Rights Reserved.
No portion of this website can be used without the permission of SparkPeople or its authorized affiliates.
SPARKPEOPLE is a registered trademark of SparkPeople, Inc. in the United States, European Union, Canada, and Australia. All rights reserved.</p>
    </div>
    <div>
        <p style={{fontSize:"13px",marginTop:"5px" ,fontWeight:"bolder" }}  >NOTE: Terms and Conditions and Privacy Policy last updated on October 25, 2013</p>
    </div>
</div>
</div>


    </div>
  );
};

export default Home;
