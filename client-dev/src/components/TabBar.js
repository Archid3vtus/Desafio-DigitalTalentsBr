import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class TabBar extends Component {
  state = {
    lastEvent: null
  };

  changeUrl = e => {
    e.preventDefault();

    this.props.history.push("/" + e.target.name);
  };

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="/admin" name="admin" onClick={this.changeUrl}>
              Administração
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sensores" name="sensores" onClick={this.changeUrl}>
              Sensores
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default TabBar;
