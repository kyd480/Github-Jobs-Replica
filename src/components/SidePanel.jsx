import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const defaultProps = {
    list: [],
    selected_id: ""
}

class SidePanel extends Component {

    render() {
        return (
            <ListGroup>
                {this.props.list.map((job) => (
                    <ListGroupItem
                        key={job.id}
                        active={this.props.selected_id === job.id}
                        onClick={() => this.props.handleIdChange(job.id)}>
                        <div className="flex-row">
                            {job.company_logo ? 
                                <div className="scaled-img"><img alt={"img"} src={job.company_logo}/></div> :
                                <div className="img-filler" >No Image</div>
                            }
                            <div className="details">
                                <h5>{`${job.title} (${job.type})`}</h5>
                                <h6>{`${job.company} - ${job.location}`}</h6>
                            </div>
                        </div>
                    </ListGroupItem>
                ))}
            </ListGroup>
        )
    }
}

SidePanel.defaultProps = defaultProps;

export default SidePanel;