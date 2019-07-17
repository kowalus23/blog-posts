import _ from 'lodash'
import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createPost} from "../actions";

const FIELDS = {
  title: {},
  categories: {},
  content: {},
};

class PostNew extends React.Component {
  renderField = ({input, label, meta}) => {
    const {touched, error} = meta;
    const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

    return (
      <div className="form-group">
        <label>{label}</label>
        {label !== 'Content'
          ? <input className={className} {...input} autoComplete={'off'}/>
          : <textarea {...input} className={className} rows="5"/>
        }
        {touched && error
          ? <small className="text-danger">{error}</small>
          : null
        }
      </div>
    )
  };

  onSubmit = (values) => {
    this.props.createPost(values).then(() => {
      this.props.history.push('/')
    })
  };

  render() {
    return (
      <div>
        <h3 className="py-3 m-0">Create Post</h3>
        <div className="card p-4">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field label="Title" name="title" component={this.renderField}/>
            <Field label="Category" name="categories" component={this.renderField}/>
            <Field label="Content" name="content" component={this.renderField}/>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="btn btn-danger ml-3" to={'/'}>Cancel</Link>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter any ${field}`
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, {createPost})(PostNew)
);