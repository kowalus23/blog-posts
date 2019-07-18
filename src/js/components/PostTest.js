import React from 'react';
import {Link} from "react-router-dom";

class PostTest extends React.Component {

  renderPost = () => {
    return (
      <div className="card mt-3">
        <div className="card-header text-center">
          <h3 className="m-0">Testing Title for Offline (Service Workers)</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ipsum, non.
            Alias maiores natus, nesciunt pariatur placeat porro quibusdam sunt!
          </p>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between align-items-center">
          <div><span className="span-text-custom">Category:</span> Test, Offline</div>
        </div>
      </div>
    )
  };

  render() {
    const arrow = '<---';
    return (
      <div className="pt-3">
        <div>
          <Link className="arrow-back-main py-2" to={'/'}><span className="arrow-back">{arrow}</span>Back to list </Link>
        </div>
        {this.renderPost()}
      </div>
    );
  }
}

export default PostTest;