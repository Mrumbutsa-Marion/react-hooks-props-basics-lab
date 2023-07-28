import React from "react";
import user from "../data/user"
import Links from "./Links";
function About({bio}){
  return (
    <div id="about">
      <user/>
      <h2>About Me</h2>
      {bio !== "" &&<p>{bio}</p>}
      {/* <p>links={Links}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links/>
      {/* <Comment commentText="I agree with this statement. - Angela Merkel" /> */}
    </div>
  );
}

export default About;
