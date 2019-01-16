import React, { Component } from "react";
import { QueryCoordinator } from '@dolittle/queries';
import { QueryForTodoAll } from "../dolittle/Todo/QueryForTodoAll";
import { environment } from "../env/environment";
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
    }

    render() {
        return (
            <div className="container">
                <br/>
                <h1>Welcome to Todos</h1>
                <div className="button-container">
                    <button onClick={this.queryAll}>Refrech</button>
                    <button onClick={() => this.setState({inCreate : true})}>Create Todo</button>
                </div>
                
                {this.state.inCreate 
                ? <TodoForm successfulyCreated={this.queryAll} errorMsg={(error) => this.setState({errorMsg : error})}/>
                : <div/>
                }

                {this.state.todos 
                ? <div className="todos-container">{
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
}

export default Home