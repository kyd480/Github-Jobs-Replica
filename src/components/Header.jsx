import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const defaultProps = {
    description: "",
    location: ""
}

class Header extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">GitHub Jobs App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <form>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    value={this.props.description}
                                    onChange={(e) => this.props.handleDescriptionChange(e)}
                                    placeholder="Enter description..." />
                                {' '}
                                <FormControl
                                    type="text"
                                    value={this.props.location}             
                                    onChange={(e) => this.props.handleLocationChange(e)}   
                                    placeholder="Enter location..." />
                                {' '}
                                <Button type="submit" onClick={(e) => this.props.handleSubmit(e)}>Search</Button>
                            </FormGroup>
                        </form>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Header.defaultProps = defaultProps;

export default Header;