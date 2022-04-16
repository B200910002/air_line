import React, { Component } from "react";

class Header extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      //this is return component
      <div className="container-fluid p-5 bg-dark text-white text-center">
        <h1>Hunnu airline</h1>
        <p>Хүн ба компьютер харилцааны зохиомж хичээлийн бие даалт</p>
      </div>
    );
  }
}

export default Header;
