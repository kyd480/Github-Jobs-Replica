import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Row, Col } from 'react-bootstrap';
import queryString from 'query-string';
import { get } from 'lodash';
import SidePanelContainer from '../containers/SidePanelContainer';
import JobDescriptionContainer from '../containers/JobDescriptionContainer';
import { fetchJobs, fetchDetailedJob } from '../actions/jobs';
import '../styles/jobs-page.scss';
import HeaderContainer from '../containers/HeaderContainer';

class JobsPage extends Component {

    componentDidMount() {
        this.getData();
    }
    
    componentDidUpdate(prevProps) {
        // update this to prevent too many network calls
        if (get(prevProps, 'location.search', '') !== get(this.props, 'location.search', '')) {
            this.getData();
        }
    }

    getData() {
        const data = queryString.parse(get(this.props, 'location.search', ''));
        this.props.fetchJobs(data);
        this.props.fetchDetailedJob(data.id)
    }

    render() {

        return (
            <div className="jobs-page">
                <div className="header">
                    <HeaderContainer />
                </div>
                <div className="body">
                    <Grid>
                        <Row className="show-grid">
                            <Col sm={4}>
                                <div className="job-side-panel">
                                    <SidePanelContainer />
                                </div>
                            </Col>
                            <Col sm={8}>
                                <div className="job-description">
                                    <JobDescriptionContainer />
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchJobs, fetchDetailedJob }, dispatch);
}

export default connect(null, mapDispatchToProps)(JobsPage);