import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = 'Sakshi Singh';
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = 'bajaj nagar ';
    var city = 'nagpur';
    var state = 'MAHARASHTRA';
    var zip = data.address.zip;
    var phone = '6386058060';
    var email = 'sakshi6778@gmail.com';
    
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sakshi's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>I am 3rd year Student in VNIT and passionate Developer , I am always ready to learn new technologies and tries to improve my skills</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Sakshi Singh</span>
                <br />
                <span>
                  bajaj nagar
                  <br />
                  {city} ,{state}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
