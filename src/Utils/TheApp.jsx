import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../Style/TheApp.css";
const The_App = () => {
  return (
    <div>
      <Navbar />
      <div className="Content">
        <div>
          <span style={{ borderBottom: "3px solid red" }}>OUR APP</span>

          <p>
            SparkAmerica is powered by the PeopleOne Health app, a world-class
            technology platform created by our experienced team responsible for
            developing we ready interfaces and apps that received more than 50
            million annual visitors with high engagement levels. It's designed
            to be intuitive and user friendly, and makes it easy to participate
            in SparkAmerica challenges, users can track their progress, get
            access to helpful resources, and view community information like
            leaderboards and updates.
          </p>
        </div>

        <div className="Boxes">
          <div>
            <img style={{borderBottom:"5px solid orange "}}
              src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_FitnessGameMain.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>THE PEOPLEONE HEALTH APP WEBSITE</h2>
            <p>
              The PeopleOne Health App Website is a feature rich technology tool
              used to do things like :
            </p>
            <ul>
              <li>Track user progress during challenges</li>
              <li>
                Receive updates and access resources like helpful articles and
                videos that can boost your health journey
              </li>
              <li>
                View Leaderboards during challenges that incorporate friendly
                competition
              </li>
              <li>Access the Fitness Game and track daily habits and goals</li>
            </ul>
          </div>
        </div>
        {/* ----------------------------------------------------------------------- */}
        <div className="Boxes">

          <div style={{borderBottom:"5px solid green "}} >
            <h2>THE PEOPLEONE HEALTH MOBILE APP</h2>
            <p>
              SparkAmerica participants can also use the PeopleOne Health Mobile app to track their progress during challenges. The app can be downloaded for free for both iPhone and Android devices from the iOS App Store or the Google App Store, and utilizes the same easy-to-use features and amazing resources as the desktop portal.
            </p>
            <p>Additionally, the PeopleOne Health app syncs with:</p>
            <ul>
              <li>Apple Health</li>
              <li>
                Google Fit
              </li>
              <li>
                FitBit
              </li>

            </ul>
            <p>This feature makes it more convenient to log Active Minutes. Users can also manually enter their minutes and activities in the Fitness Game.</p>
          </div>
          <div>
            <img
              src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_AppHomeScreen.jpg"
              alt=""
            />
          </div>
        </div>
        {/* ---------------------------------------------------------------------- */}

        <div className="Boxes">
          <div>
            <img
              src="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_FitnessGameMobile.jpg"
              alt=""
            />
          </div>
          <div>
            <h2>THE FITNESS GAME</h2>
            <p>
              The Fitness Game lives inside of the PeopleOne Health portal to help users see their progress in a fun and convenient format. Every day the game will sync with your mobile health app or you can enter your Active Minutes manually. It's as easy as putting in the number of minutes, the Activity Description, and hitting the Add Minutes button. Then "Pow!", you'll see your minutes added and as you scroll down you can also see your history and activity streaks.
            </p>

          </div>
        </div>

        {/* -------------------------------------------------------------- */}
      </div>

      <Footer />
    </div>
  );
};

export default The_App;
