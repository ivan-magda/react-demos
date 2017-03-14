import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

//ReactDOM.render(<App />, document.getElementById('app'));
//setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
        </Route>
    </Router>
), document.getElementById('app'))
