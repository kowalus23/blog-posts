import _ from 'lodash'
import React from 'react';
import '../../style/components/App.css';
import { connect} from "react-redux";
import { fetchPosts} from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  };

  render() {
    console.log(this.props.posts)
    return (
      <React.Fragment>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts}
};

export default connect(mapStateToProps, {fetchPosts})(PostList);


