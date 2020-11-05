import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import './styles.css';

import { webUpdate, webClickedListUpdate } from '../../actions';


class User extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleSubmit(event) {
    event.preventDefault();
    const web = event.target.value;
    if (web) {
        // window.open('//' + web, '_blank', 'noopener, noreferrer');
        let today = new  Date()
        let lastClicked =  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.props.webClickedListUpdate(web, this.props.webHistory, lastClicked)
        this.props.webUpdate({ prop: 'web', value: '' })
    }
  }

  render() {
    return (
        <div className="webCard">
        <Card className="text-center">
            <Card.Header>Welcome To Click Web Counter!!</Card.Header>
            <Card.Body>
                <Form >
                    <div >
                        <Form.Group onSubmit={this.handleSubmit}>
                            <Form.Control
                                className = 'webInput'
                                type="text"
                                placeholder="Enter website address"
                                value = {this.props.web}
                                onChange={value => this.props.webUpdate({ prop: 'web', value: value.target.value })}
                            />
                            <Button variant="primary" value={this.props.web} onClick={this.handleSubmit}>Go</Button>
                        </Form.Group>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        </div>


    );
  }
}


const mapStateToProps = (state) => {
    const { web, webHistory } = state.website
    return { web, webHistory }
};

export default connect(mapStateToProps, { webUpdate, webClickedListUpdate })(User);
