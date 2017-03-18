import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo} from './actions/actions';
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import logo from './logo.svg';
import './App.css';

/*
 The App component is the root component of the app. Only root component should be aware of a redux.
 The important part to notice is the connect function which is used for connecting our root component App to the store.
 This function takes select function as an argument.
 The select function takes state from the store and returns the props (visibleTodos) that we can use in our components.
 */
class App extends Component {
    render() {
        const {dispatch, visibleTodos} = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ReactJS - Using Flux</h2>
                </div>
                <p className="App-intro">
                    <AddTodo onAddClick={ text =>
                        dispatch(addTodo(text))
                    }/>
                    <TodoList todos={visibleTodos}/>
                </p>
            </div>
        );
    }
}

function select(state) {
    return {
        visibleTodos: state.todos
    }
}

export default connect(select)(App);
