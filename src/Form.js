import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      image: "",
      link: "",
      author: ""
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:4000/api/blogs", {
      headers: { "Content-Type": "application/json" },
      blogs: {
        title: this.state.title,
        subtitle: this.state.subtitle,
        image: this.state.image,
        link: this.state.link,
        author: this.state.author
      }
    });
  }
  handleTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }
  handleImage(event) {
    this.setState({ image: event.target.value });
  }
  handleLink(event) {
    this.setState({ link: event.target.value });
  }
  handleAuthor(event) {
    this.setState({ author: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.title}
                onChange={this.handleTitle.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Subtitle</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.subtitle}
                onChange={this.handleSubtitle.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Image URL"
                onChange={this.handleImage.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Link</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.link}
                onChange={this.handleLink.bind(this)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Author</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={this.state.author}
                onChange={this.handleAuthor.bind(this)}
              />
            </div>
          </div>
          <button type="submit" value="Submit" className="button is-primary">
            Submit
          </button>
        </form>
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
          <Link to="/" style={{ color: "white" }}>
            Back
          </Link>
        </div>
      </div>
    );
  }
}
export default Form;
