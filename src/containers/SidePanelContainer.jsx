import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { get } from 'lodash';
import queryString from 'query-string';
import SidePanel from '../components/SidePanel';
import { generateQueryParams } from '../helpers';

class SidePanelContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected_id: ""
        }

        this.handleIdChange = this.handleIdChange.bind(this);
    }

    componentWillMount() {
        this.setState({ selected_id: queryString.parse(get(this.props, 'location.search', '')).id });
    }

    componentDidUpdate(prevProps) {
        const prevId = queryString.parse(get(prevProps, 'location.search', '')).id
        const newId = queryString.parse(get(this.props, 'location.search', '')).id
        if (prevId !== newId) {
            this.setState({ selected_id: newId });
        }
    }

    handleIdChange(id) {
        const queryParams = { ...queryString.parse(get(this.props, 'location.search', '')), id };
        this.props.history.push(generateQueryParams(queryParams));
    }

    render() {
        return (<SidePanel
                list={this.props.jobs}
                selected_id={this.state.selected_id}
                handleIdChange={this.handleIdChange} />);
    }

}

function mapStateToProps({ jobs }) {
    return { jobs: jobs.listing };
}

export default withRouter(connect(mapStateToProps)(SidePanelContainer));