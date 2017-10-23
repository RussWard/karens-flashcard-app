import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class Flashcard extends React.Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
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

  render() {
    return (
      <div>
        <Link to='/'>Back to Search</Link>
          <form>
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
              label="Definition"
              name="def"
              component={this.renderField} 
            />
            <Field
              label="Tags"
              name="tags"
              component={this.renderField}
            />
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

export default connect(mapStateToProps)(reduxForm({
  validate,
  form: 'FlashcardNewForm'
  })(Flashcard));
  
