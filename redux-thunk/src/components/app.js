import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser({id, name, email}) {
    return (
      <li className="list-group-item" key={id}>
        <span className="label label-defualt label-pill pull-xs-right">
          <a href={email}>{email}</a>
        </span>
        {name}
      </li>
    );
  }

  render() {
    return (
      <div>
        <h4>Email Directory</h4>
        <ul className="list-group">
          {this.props.users.map(this.renderUser)}
        </ul>
      </div>
    );
  }

}

// Connects a React component to a Redux store. connect is a facade around
// connectAdvanced, providing a convenient API for the most common use cases.
// It does not modify the component class passed to it; instead, it returns a new,
// connected component class for you to use.
// https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
//
// (state => state) Inject dispatch and every field in the global state.
export default connect((state => state), actions)(App);
