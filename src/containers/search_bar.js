import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOxford, fetchWebster } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchOxford(this.state.searchTerm);
    this.props.fetchWebster(this.state.searchTerm);
    this.setState({ searchTerm: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Enter a word to define"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
      
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchOxford, fetchWebster}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
