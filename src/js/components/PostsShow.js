import React from 'react';
import {connect} from "react-redux";
import {fetchPost} from "../actions";

class PostsShow extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  renderPost = ({title, categories, content}) => {
    return (
      <div className="card text-center mt-5">
        <div className="card-header">
          {title}
        </div>
        <div className="card-body">
          <p className="card-text">{content}</p>
        </div>
        <div className="card-footer text-muted">
          {categories}
        </div>
      </div>
    )
  };

  render() {
    if (!this.props.post) {
      return (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="loader"/>
        </div>
      )
    }
    return (
      <div>
        {this.renderPost(this.props.post)}
      </div>
    );
  }
}

const mapStateToProps = ({posts}, ownProps) => {
  return {post: posts[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchPost})(PostsShow);