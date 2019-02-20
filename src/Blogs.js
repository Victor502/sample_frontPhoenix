import React from "react";
// import axios from "axios";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { SocketContextConsumer } from "./SocketContext";


class Blogs extends React.Component {
  constructor() {
    super();
    this.state = { blogs: [] };
  }

  componentWillMount() {
    // axios
    //   .get("http://localhost:4000/api/blogs")
    //   .then(response => {
    //     this.setState({ blogs: response.data.blogs });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }

  render() {
    const posts = this.state.blogs.map((blog, index) => (
      <BlogCard
        key={index}
        title={blog.title}
        subtitle={blog.subtitle}
        image={blog.image}
        link={blog.link}
        author={blog.author}
      />
    ));

    const chat = () => (
      <SocketContextConsumer>
          {context => (
            <div>
              <ul id="msg-list" className="row">
                {context.state.payLoadInfo.map((p, i) => (
                  <li key={i}>
                    {p.name}: {p.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </SocketContextConsumer>
    )

    return (
      <div>
        <div
          className="is-primary is-large"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "10px 15px",
            background: "#00D1B2",
            color: "#FFFFFF"
          }}
        >
          <Link to="/create" style={{ color: "white" }}>
            Create Blog Post
          </Link>
        </div>
        <div
          className="is-primary is-large"
          style={{
            position: "absolute",
            top: "80px",
            right: "10px",
            padding: "10px 15px",
            background: "#00D1B2"
          }}
        >
          <Link to="/update" style={{ color: "white" }}>
            Edit Blog Post
          </Link>
        </div>
        <div
          className="is-primary is-large"
          style={{
            position: "absolute",
            top: "150px",
            right: "10px",
            padding: "10px 15px",
            background: "#00D1B2"
          }}
        >
          <Link to="/home" style={{ color: "white" }}>
            Add Chat
          </Link>
        </div>
        {posts}
        {chat()}
      </div>
    );
  }
}
export default Blogs;
