import React from 'react';
import {connect} from "react-redux";
import {fetchPost} from "../actions";

class PostsShow extends React.Component {
  componentDidMount() {
    const {id} = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  renderPost = ({title, category, content}) => {

    return (
      <div className="card">
        <div className="card-header">
          {title}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{content}</p>
            <footer className="blockquote-footer">{category}<cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>
    )
  };

  render() {
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