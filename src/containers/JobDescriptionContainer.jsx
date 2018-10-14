import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import JobDescription from '../components/JobDescription';

class JobDescriptionContainer extends Component {

  render() {
    return (
      <JobDescription
        description={(<div dangerouslySetInnerHTML={{__html: get(this.props, 'job.description', '')}}/>)} />
    );
  }

}

function mapStateToProps({ jobs }) {
  return { job: jobs.selected };
}

export default connect(mapStateToProps)(JobDescriptionContainer);