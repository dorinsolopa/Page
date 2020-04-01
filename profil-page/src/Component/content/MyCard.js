import React from "react";
import Card from "react-bootstrap/Card";

const MyCard = props => {
  return (
    <Card>
      <div className="card gedf-card ">
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <button
              className="border-0 "
              style={{ backgroundColor: "white" }}
              onClick={props.deleteMeetings}
            >
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
            </button>
          </div>

          <div className="container ">
            <div className="d-flex justify-content-center h-100">
              <div className="image_outer_container">
                <div className="image_inner_container">
                  <img src={require("../../assets/img/deadp.png")} />
                </div>
              </div>
            </div>
          </div>

          <h5 className="card-title">{props.title}</h5>
          <a className="nav-link" href="Home">
            <i class="fa fa-user-md" aria-hidden="true"></i>
            {props.user}
          </a>

          <a className="nav-link" href="Home">
            <i className="fa fa-hospital-o " aria-hidden="true"></i>
            Clinic Visit
          </a>
        </div>
      </div>
    </Card>
  );
};

export default MyCard;
