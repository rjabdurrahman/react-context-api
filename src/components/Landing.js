import React, { Component } from 'react'
import LoginContext from './LoginContext';

class Landing extends Component {
    static contextType = LoginContext
    render() {
        let [name] = this.context;
        return (
            <div>
                Landing {name}
            </div>
        )
    }
}

export default Landing;