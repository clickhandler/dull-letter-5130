import React from "react";
import "../Style/Footer.css";
const Footer = () => {
    return (
        <div className="FooterDiv">
            <div className="Box">
                <div>
                    <h3>CONTACT US</h3>
                    <p>

                        support@sparkamerica.com
                        <br />
                        (888) 330-6891
                        <br />
                        SparkAmerica
                        <br />
                        P.O. Box 123,
                        Oakmont, PA 15139

                    </p>
                </div>
                <div>
                    <h3>SPARKAMERICA</h3>
                    <p>JOIN THE MOVEMENT   <br />
                        PARTNERS
                        <br />CALENDAR
                        <br /> THE APP   <br />
                        CONTACT US   <br />
                        REGISTER</p>
                </div>
            </div>

            <div>
                <p style={{color:"white" }}>® 2020 PeopleOne Health. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
