import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class TabBar extends Component {
  state = {
    lastEvent: null,
    activeTab: "admin"
  };

  changeUrl = e => {
    e.preventDefault();

    this.setState({ activeTab: e.target.name });
    this.props.history.push("/" + e.target.name);
  };

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              href="/admin"
              name="admin"
              onClick={this.changeUrl}
              active={this.state.activeTab === "admin" ? true : false}
            >
              Administração
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/sensores"
              name="sensores"
              onClick={this.changeUrl}
              active={this.state.activeTab === "sensores" ? true : false}
            >
              Relatórios
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default TabBar;
