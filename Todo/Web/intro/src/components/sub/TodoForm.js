import React, { Component } from "react";
import { Guid } from '@dolittle/core';
import { CommandCoordinator } from '@dolittle/commands';
import { environment } from "../../env/environment";
import { CommandCreateTodo } from "../../dolittle/Todo/CommandCreateTodo";

class TodoForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            id: null,
            text: null,
            category: null,
            error: null
        }
    }

    render() {
        return(
            <div>
                <h2>Insert data:</h2>
                <form onSubmit={this.handleSubmit} className="form-grid">
                <label>
                    <h4>Text:</h4>
                    <input type="text" name="text" onChange={this.handleChange}/>
                </label>
                <label>
                    <h4>Category:</h4>
                    <input type="text" name="category" onChange={this.handleChange}/>
                </label>

                <button type="submit">Create</button>
                </form>
            </div>
        )
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let create = new CommandCreateTodo();
        create.id = Guid.create();
        create.text = this.state.text;
        create.category = this.state.category;
        create.status = false;

        CommandCoordinator.apiBaseUrl = environment.api;
        let cmd = new CommandCoordinator();
        console.log(cmd);

        cmd.handle(create)
        .then(response => {
            console.log(response);
            if(response.success){
                console.log("Successfuly created Todo");
                this.props.successfulyCreated();
            } else {
                this.props.errorMsg("Error while creating todo");
            }
        })
        .catch(err => {
            console.log(err);
            this.props.errorMsg("Error while creating todo");
        })
    }
}

export default TodoForm