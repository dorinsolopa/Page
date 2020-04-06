import React, { PureComponent } from "react";
import Feed from "./feed/feed";
import Post from "./post/post";
import Meetings from "../Component/content/meetings";
import ProfileComp from "./profil/profil";
import Card from "react-bootstrap/Card";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          description: "",
          imgUrl: require("../assets/img/1.jpg"),
          time: "10 min"
        }
      ]
    };
  }

  addPost = post => {
    const newPosts = [...this.state.posts, post];
    this.setState({ posts: newPosts });
    localStorage.setItem("posts", JSON.stringify(newPosts));
  };

  componentDidMount() {
    const posts = JSON.parse(localStorage.getItem("posts"));
    if (posts) {
      this.setState({
        posts: posts
      });
    }
  }

  deletePost = ind => {
    const filteredPost = this.state.posts.filter((post, index) => {
      return index !== ind;
    });
    this.setState({ posts: filteredPost });
    localStorage.setItem("posts", JSON.stringify(filteredPost));
  };

  render() {
    const { user } = this.props;
    return (
      <Card>
        <div className="container d-flex">
          <div style={{ width: "25%", margin: "10px" }}>
            <ProfileComp user={this.props.user} />
          </div>
          <div className="flex-fill" style={{ width: "50%", margin: "10px" }}>
            <Feed
              createPost={post => {
                // console.log("new Post", post);
                this.addPost(post);
              }}
            />
            {this.state.posts.map((post, index) => {
              return (
                <Post
                  post={post}
                  author={user}
                  deletePost={() => {
                    console.log("Detele post", index);
                    this.deletePost(index);
                  }}
                />
              );
            })}

          </div>
          <div style={{ width: "25%", margin: "10px" }}>
            <Meetings />
          </div>
        </div>
      </Card>
    );
  }
}

export default HomePage;
