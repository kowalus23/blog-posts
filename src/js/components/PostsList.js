import _ from 'lodash'
import React from 'react';
import '../../style/components/App.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPosts} from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
        <Link key={post.id} className="list-group-item custom" to={`/posts/${post.id}`}>
          <li>
            {post.title}
          </li>
        </Link>
      )
    })
  };

  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-between p-3">
          <h3>Posts List</h3>
          <Link to={'/posts/new'} className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <ul className="list-group">
          {this.renderPosts()}
          <Link key="123456" className="list-group-item custom" to={`/test`}>
            <li>
              Lorem ipsum dolor sit amet. (Offline test)
            </li>
          </Link>
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
};

export default connect(mapStateToProps, {fetchPosts})(PostList);


