import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      this.setState({posts: data});
    });
  }

  render() {

    let posts = this.state.posts.map((post) => {
      return (

        <Link to={`/show/${post._id}`} key={post._id} className="posts">{post.title}</Link>
      )
    });

    return (
      <div className="container center">
        <div>
          <p className="list">{posts}</p>
        </div>
      </div>
    );
  }
}
