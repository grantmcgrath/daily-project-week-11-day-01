import React, {Component} from "react";

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
      this.setState({name: data.name, title: data.title, post: data.post}))
  }

  render() {
    return (
      <div className="list">
        <h1>{this.state.title}</h1>
        <h4>{this.state.name}</h4>
        <p>{this.state.post}</p>
      </div>
    )
  }
}
