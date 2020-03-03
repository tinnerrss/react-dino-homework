import React, { Component } from "react";
import "./styles.css";

let elems = {
  postTitle: "Dinosaurs are awesome",
  author: "By Stealthy Stegosaurous",
  content: [
    "Check out this body property",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ],
  comment: ["First!", "Second", "Third"]
};
class PostTitle extends Component {
  render() {
    return <h1>{this.props.postTitle}</h1>;
  }
}
class Author extends Component {
  render() {
    return <h3>{this.props.author}</h3>;
  }
}
class Content extends Component {
  render() {
    return <h1>{this.props.content}</h1>
  }
}
class Comment extends Component {
  render() {
    return <h3>{this.props.comment}</h3>;
  }
}
class Post extends Component {
  render() {
    return (
      <div>
        <PostTitle postTitle={elems.postTitle} />
        <Author author={elems.author} />
        <Content content={elems.content} />
        <Comment comment={elems.comment} />
      </div>
    );
  }
}
export default function App() {
  return <Post />;
}

