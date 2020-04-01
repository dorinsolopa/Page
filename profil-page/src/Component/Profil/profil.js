import React from "react";
import Nav from "react-bootstrap/Nav";
import "./profil.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ProfileComp extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <Card className="container-fluid gedf-wrapper  ">
        <Card.Body>
          <Nav>
            <div className="sidebar-content ">
              <a className="align-right" href="">
                <span className="align-right">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </span>
              </a>
              <Card.Header>
                <div className="image_outer_container text-center ">
                  <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={user.avatarUrl}
                  />
                  <h4 className="title">{user.name}</h4>
                  <small className="small">{user.email}</small>
                </div>
              </Card.Header>

              <div className="text-center">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="h5">{user.pendingRequeste}</div>
                    <div class="h6 text-muted">Pending Requests</div>
                  </li>
                  <li class="list-group-item">
                    <div class="h5">{user.invites}</div>
                    <div class="h6 text-muted">Invites</div>
                  </li>
                </ul>
                <div>
                  <Button
                    className="btn-simple btn-icon btn-round float-right title rounded-pill   "
                    color="primary"
                    type="submit"
                  >
                    {user.connections} Connections
                    <i className="fa fa-chevron-right continue_arrow_icon" />
                  </Button>
                </div>
              </div>
            </div>
          </Nav>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileComp;
