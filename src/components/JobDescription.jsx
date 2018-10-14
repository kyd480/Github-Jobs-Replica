import React, { Component } from 'react';

const defaultProps = {
    description: ''
}

class JobDescription extends Component {
    render() {
        return (
            <div className="content">
                {this.props.description}
            </div>
        );
    }
}

JobDescription.defaultProps = defaultProps;

export default JobDescription;