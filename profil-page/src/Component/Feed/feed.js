import React from "react";
import Card from "react-bootstrap/Card";
import FileUpload from "./fileUpload";

class Feed extends React.Component {
  userData;
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      imgUrl: ""
    };
  }

  setDescription = value => {
    this.setState({
      description: value
    });
  };

  setImgUrl = value => {
    this.setState({
      imgUrl: value
    });
  };

  createPost = () => {
    this.props.createPost(this.state);
    this.setDescription("");
  };

  render() {
    return (
      <Card className="mb-2">
        <div className="card gedf-card">
          <div className="card-body">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="posts"
                role="tabpanel"
                aria-labelledby="posts-tab"
              >
                <div className="form-group">
                  <label className="sr-only" for="message">
                    post
                  </label>
                  <textarea
                    name="post"
                    value={this.state.description}
                    onChange={event => {
                      this.setDescription(event.target.value);
                    }}
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="What are you thinking?"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="d-flex justify-content-between align-items-center ">
                <FileUpload
                  fileChanged={file => {
                    this.setImgUrl(file);
                  }}
                />
                <button
                  className="btn btn-link  "
                  onClick={() => {
                    this.createPost();
                  }}
                  type="submit"
                >
                  <i className="fa fa-file-text-o mr-2"> </i>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Feed;
