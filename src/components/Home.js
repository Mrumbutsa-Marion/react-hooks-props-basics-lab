import React from "react";

function Home(user) {
  // const [name, email, password]
  return (
    <div id="home">
            {/* <h1 style={{ color: 'firebrick'}}>{name}is a Web Developer from {name} */}

      <h1 style={{ color: 'firebrick'}}>
        {user.name} is a Web Developer from {user.city}
      </h1>
    </div>
  );
}


export default Home;
