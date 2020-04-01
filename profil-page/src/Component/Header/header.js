import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import "./header.css";

class Navigation extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <div className="bg-light">
        <Navbar
          className="navigator justify-content-between container "
          bg="light"
          expand="lg"
        >
          <Nav.Link className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="Home">
                <i className="fa fa-home "></i>
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="Network">
                <i className="fa fa-wifi "> </i>
                Network
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="Ask">
                <i className="fa fa-ambulance "></i>
                Ask a dead
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="Onco">
                <i className="fa fa-hospital-o "></i>
                DeadKlinic
              </a>
            </li>
          </Nav.Link>

          <Form inline className="pl-2">
            <button className="btn btn-light " type="button">
              <i className=" fa fa-search "></i>
            </button>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2  text-center   "
            />
          </Form>

          <Nav.Link className="navbar-nav icons ">
            <li className="nav-item ">
              <a className="nav-link">
                <i className="fa fa-bell"></i>
              </a>
            </li>

            <li className="nav-item ">
              <a className="nav-link">
                <i className="fa fa-commenting-o "></i>
              </a>
            </li>
          </Nav.Link>

          <Card className="right border-0" bg="light">
            <div className="container">
              <div className="d-flex justify-content-center h-100">
                <div className="image_inner_container">
                  <img src={user.avatarUrl} />
                </div>
              </div>
            </div>
          </Card>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
