import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createPost} from "../actions";

class PostNew extends React.Component {
  renderField = ({input, label, meta}) => {
    const {touched, error} = meta;
    const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

    const displayError = (touched, error) => {
      return touched && error
        ?
        <div>
          <small className="text-danger">{error}</small>
        </div>
        : null
    };

    if (label) {
      return (
        <div className="form-group">
          <label>{label}</label>
          <input className={className}  {...input} autoComplete={'off'}/>
          {displayError(touched, error)}
        </div>
      )
    } else {
      return (
        <div className="form-group">
          <label>Content</label>
          <textarea {...input} className={className} rows="3"/>
          {displayError(touched, error)}
        </div>
      )
    }
  };

  onSubmit = (values) => {
    this.props.createPost(values)
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Category"
          name="categories"
          component={this.renderField}
        />
        <Field
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger ml-3" to={'/'}>Cancel</Link>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title !'
  }
  if (!values.categories) {
    errors.categories = 'Enter some category'
  }
  if (!values.content) {
    errors.content = 'Enter some content please'
  }

  return errors;
};

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, {createPost})(PostNew)
);