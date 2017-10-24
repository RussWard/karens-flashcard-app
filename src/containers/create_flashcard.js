import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createFlashcard } from '../actions';

class CreateFlashcard extends React.Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className + field.className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          value={field.value}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderLargeField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className + field.className}>
        <label>{field.label}</label>
        <textarea
          className="form-control"
          type="text"
          value={field.value}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createFlashcard(values, () => {
      this.props.history.push('/');
    })
  }

  render() {
    return (
      <div>
        <div className="text-sm-right">
          <Link to='/' >Back to Search</Link>
        </div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Word"
            name="word"
            component={this.renderField}
          />
          <Field
            label="Part of Speech"
            name="type"
            component={this.renderField} 
          />
          <Field
            className="large-field"
            label="Definition"
            name="def"
            component={this.renderLargeField} 
          />
          <Field
            label="Tags"
            name="tags"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Create Flashcard</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.word) {
    errors.word = 'Please enter a word';
  }

  return errors;
}

function mapStateToProps({ newCard }, ownProps) {
  return {
    initialValues: newCard,
    word: ownProps.match.params.word,
    type: ownProps.match.params.type,
    def: ownProps.match.params.def
  }
}

export default connect(mapStateToProps, { createFlashcard })(reduxForm({
  validate,
  form: 'FlashcardNewForm'
  })(CreateFlashcard));
  
