import React from "react";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Post extends React.Component {
  render() {
    const post = this.props.post;
    const author = this.props.author;
    return (
      <Card className="mt-3">
        <div className="card gedf-card ">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mr-2">
                  <img
                    className="rounded-circle"
                    width="45"
                    src={author.avatarUrl}
                  />
                </div>
                <div className="ml-2">
                  <div className="h5 m-0">{author.name}</div>
                </div>
              </div>

              <DropdownButton
                id="dropdown-basic-button"
                title="..."
                className="rounded-circle"
              >
                <i className="fa fa--ellipsis-h"></i>
                <Dropdown.Item as={"button"} onClick={this.props.deletePost}>
                  Remove Post
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="card-body">
            <div className="text-muted h7 mb-2">
              <i className="fa fa-clock-o"></i>
              {post.time}
            </div>
            <p className="card-text">{post.description}</p>
          </div>
          <div>
            {post.imgUrl && <img src={post.imgUrl} style={{ width: "100%" }} />}
          </div>
          <div class="card-footer">
            <a href="#" className="card-link">
              <i className="fa fa-gittip"></i> Like
            </a>
            <a href="#" className="card-link">
              <i className="fa fa-comment">Comment</i>
            </a>
            <a href="#" className="card-link">
              <i className="fa fa-mail-forward"></i> Share
            </a>
          </div>
        </div>
      </Card>
    );
  }
}
export default Post;
