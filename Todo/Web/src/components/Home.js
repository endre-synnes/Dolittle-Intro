import React, { Component } from 'react';
import { Guid } from '@dolittle/core';
import { CommandCoordinator } from '@dolittle/commands';
import { QueryCoordinator } from '@dolittle/queries';
import { QueryForTodoAll } from "../utils/QueryForTodoAll"

class Home extends Component {

    constructor(props){
        super(props);

    }

    getAll(){
        let query = new QueryForTodoAll();
        QueryCoordinator.apiBaseUrl = "http://localhost:5000";

        QueryCoordinator.execute(query).then(result => {
            if (result.success) {
                console.log("QueryForTodoAll", result);
                const sortItems = result.items;
                this.societies = [...sortItems];
            } else {
                console.error(result);
                this.formError = `Error getting national societies: ${result}`;
            }

        });
    }



    render(){
        return (
            <div>
            </div>
        )
    }
}


export default Home