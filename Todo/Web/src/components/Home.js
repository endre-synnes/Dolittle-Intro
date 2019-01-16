import React, { Component } from "react";

class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            todos : null,
            errorMsg: null
        }
    }

    render() {
        return (
            <div>
                <h2>Welcome to Todos</h2>
            </div>
        )
    }
}

export default Home