import React, { Component } from "react";
import { CommandCoordinator } from '@dolittle/commands';
import { QueryCoordinator } from '@dolittle/queries';
import { QueryForTodoAll } from "../dolittle/Todo/QueryForTodoAll";
import { environment } from "../env/environment";
import { CommandCreateTodo } from "../dolittle/Todo/CommandCreateTodo";
import TodoForm from "./sub/TodoForm";
import  Todo  from "./sub/Todo";

class Home extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            todos : null,
            errorMsg: null,
            inCreate: false
        }

    }

    componentDidMount(){
        this.queryAll();
        //this.createTodo();
    }

    render() {
        return (
            <div>
                <h2>Welcome to Todos</h2>
                <button onClick={this.queryAll}>Refrech</button>
                <button onClick={() => this.setState({inCreate : true})}>Create Todo</button>
                
                {this.state.inCreate 
                ? <TodoForm successfulyCreated={this.queryAll} errorMsg={(error) => this.setState({errorMsg : error})}/>
                : <div/>
                }

                {this.state.todos 
                ? <div>{
                    this.state.todos.map(todo => {
                        return <Todo key={todo.id} id={todo.id} delete={this.deleteTodo} text={todo.text} category={todo.category}/>
                    })
                }</div>
                : <div></div>
                }

                
                {this.state.errorMsg
                   ? <h3>{this.state.errorMsg}</h3>
                   : <div/>
                }
            </div>
        )
    }

    deleteTodo = (id) => {
        console.log(id);
        console.log("delete this shit");
    } 

    queryAll = () => {
        this.setState({errorMsg: null})

        QueryCoordinator.apiBaseUrl = environment.api;
        let queryCoordinator = new QueryCoordinator();
        console.log(queryCoordinator.apiBaseUrl);
        let query = new QueryForTodoAll();

        queryCoordinator.execute(query)
        .then(response => {
            console.log(response);
            this.setState({todos: response.items})
        })
        .catch(err => {
            console.log(err);

        })
    }

    createTodo = () => {
        this.setState({errorMsg: null})
        let create = new CommandCreateTodo();
        create.id = '00000000-0000-0000-0000-000000000011';
        create.text = 'From frontend';
        create.category = 'Yeey';
        create.status = false;

        CommandCoordinator.apiBaseUrl = environment.api;
        let cmd = new CommandCoordinator();
        console.log(cmd);

        cmd.handle(create)
        .then(response => {
            console.log(response);
            if( response.status === "success"){
                console.log("Successfuly created Todo");
                this.queryAll();
            } else {
                this.setState({errorMsg: "Error while creating todo"})
            }
        })
        .catch(err => {
            console.log(err);
            this.setState({errorMsg: "Error while creating todo"})
        })
    }
}

export default Home