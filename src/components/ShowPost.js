import React, {Component} from "react";

import { Link } from "react-router-dom";

export default class ShowPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      post: ""
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

    fetch(URL)
    .then(response => response.json())
    .then(data =>
      this.setState({name: data.name, title: data.title, post: data.blog}))
  }

  render() {
    return (
      <div id="post">
        <div className="list center post">
          <h1 className="spacing">{this.state.title}</h1>
          <h4 className="spacing author">{this.state.name}</h4>
          <p className="spacing">{this.state.post}</p>
          <Link to="/show" className="b2bl">Back To Blog List</Link>
        </div>
      </div>
    )
  }
}
