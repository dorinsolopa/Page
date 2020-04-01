import React from "react";
import Card from "react-bootstrap/Card";
import MyCard from "./MyCard";
import Button from "react-bootstrap/Button";
import { myContent } from "./const";

class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), meetings: [] };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({ meetings: myContent });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  deleteMeetings = ex => {
    const filteredMeetings = this.state.meetings.filter((meeting, index) => {
      return index !== ex;
    });
    this.setState({ meetings: filteredMeetings });
  };

  render() {
    const post = this.props.post;
    return (
      <Card>
        <div style={{ margin: "10px" }}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="h6 ">MEETINGS</div>
            <button
              size="sm"
              variant="btn btn-outline-primary"
              className=" btn btn-outline-primary "
              type="submit"
            >
              View all
            </button>
          </div>
          {this.state.meetings.map((item, index) => {
            return (
              <MyCard
                title={item.title}
                user={item.user}
                deleteMeetings={() => {
                  this.deleteMeetings(index);
                }}
              />
            );
          })}
          <div>
            <h4 className="text-center">
              It is {this.state.date.toLocaleTimeString()}
            </h4>
          </div>
        </div>
      </Card>
    );
  }
}

export default Meetings;
