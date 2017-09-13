import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "../styles/App.css";

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <div><NavLink to="/" className="nav_1">PollyBlog</NavLink></div>
          <div><NavLink to="/create" className="nav_2">Create Post</NavLink></div>
          <div><NavLink to="/show" className="nav_2">Show All Posts</NavLink></div>
        </nav>

        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
