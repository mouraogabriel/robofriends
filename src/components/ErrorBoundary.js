import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        return this.state.hasError ?
        <h1>Ooooops. Something Went Wrong!</h1> :
        this.props.children;
    }
}

export default ErrorBoundary;