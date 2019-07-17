import React from 'react';
import {connect} from "react-redux";
import {fetchPost, deletePost} from "../actions";
import {Link} from "react-router-dom";

class PostsShow extends React.Component {
  componentDidMount() {
    if (!this.props.post) {
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick = () => {
    const {id} = this.props.match.params;
    this.props.deletePost(id).then(() => {
      this.props.history.push('/')
    })
  };

  renderPost = ({title, categories, content}) => {
    return (
      <div className="card mt-3">
        <div className="card-header text-center">
          <h3 className="m-0">{title}</h3>
        </div>
        <div className="card-body">
          <p className="card-text">{content}</p>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between align-items-center">
          <div><span className="span-text-custom">Category:</span> {categories}</div>
          <button onClick={this.onDeleteClick} className="btn btn-danger">Delete</button>
        </div>
      </div>
    )
  };

  render() {
    const arrow = '<---';
    if (!this.props.post) {
      return (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="loader"/>
        </div>
      )
    }
    return (
      <div className="pt-3">
        <div>
          <Link className="arrow-back-main py-2" to={'/'}><span className="arrow-back">{arrow}</span>Back to list </Link>
        </div>
        {this.renderPost(this.props.post)}
      </div>
    );
  }
}

const mapStateToProps = ({posts}, ownProps) => {
  return {post: posts[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);