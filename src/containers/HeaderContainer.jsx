import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { get } from 'lodash';
import { generateQueryParams } from '../helpers';
import Header from '../components/Header';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        description: "",
        location: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const data = queryString.parse(get(this.props, 'location.search', ''));
    this.setState({
      description: data.description,
      location: data.location
    })
  }

  componentWillReceiveProps(nextProps) {
    const oldData = queryString.parse(get(this.props, 'location.search', ''));
    const data = queryString.parse(get(nextProps, 'location.search', ''));
    if (data.description !== oldData.description || data.location !== oldData.location) {
      this.setState({
        description: data.description,
        location: data.location
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const queryParams = {
      ...this.state
    }
    this.props.history.push(generateQueryParams(queryParams));
  }

  render() {
    return (
      <Header
        {...this.state}
        handleDescriptionChange={(e) => this.setState({ description: e.target.value })}
        handleLocationChange={(e) => this.setState({ location: e.target.value })}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(HeaderContainer);