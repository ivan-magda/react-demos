import React from 'react';
import ReactDOM from 'react-dom';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
        header: "Header from state...",
        content: "Content from state...",
        data: [
            {
                "id": 1,
                "name": "Foo",
                "age": "20"
            }, {
                "id": 2,
                "name": "Bar",
                "age": "30"
            }, {
                "id": 3,
                "name": "Baz",
                "age": "40"
            }
        ],
        array: [],
        number: 0,
        formData: "Initial data..."
    }

    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    this.setNewNumber = this.setNewNumber.bind(this);
    this.updateFormData = this.updateFormData.bind(this);
  }

  setStateHandler() {
    var item = "setState...";
    var array = this.state.array;
    array.push(item);
    this.setState({array: array});
  };

  forceUpdateHandler() {
    this.forceUpdate();
  };

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
  };

  setNewNumber() {
    this.setState({number: this.state.number + 1});
  };

  updateFormData(e) {
    this.setState({formData: e.target.value})
  };

  render() {
    return (
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          {this.props.children}

          <ReactCSSTransitionGroup transitionName = "example"
             transitionAppear = {true} transitionAppearTimeout = {500}
             transitionEnterTimeout={500}
             transitionLeaveTimeout={300}
             transitionEnter = {true} transitionLeave = {false}>
             <h1>React JS</h1>
          </ReactCSSTransitionGroup>

          <Header header = {this.state.header} />
            <table>
              <tbody>
                {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
              </tbody>
            </table>
          <Content content = {this.state.content} />
          <h3>Array: {this.props.propArray}</h3>
          <h3>Bool: {this.props.propBool ? "True..." : "False..."}</h3>
          <h3>Func: {this.props.propFunc(3)}</h3>
          <h3>Number: {this.props.propNumber}</h3>
          <h3>String: {this.props.propString}</h3>
          <h3>Object: {this.props.propObject.objectName1}</h3>
          <h3>Object: {this.props.propObject.objectName2}</h3>
          <h3>Object: {this.props.propObject.objectName3}</h3>
          <div id = "component_api">
            <button onClick = {this.setStateHandler}> SET STATE </button>
            <h4>State Array: {this.state.array}</h4>
            <button onClick = {this.forceUpdateHandler}> FORCE UPDATE </button>
            <h4>Random number: {Math.random()}</h4>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
          </div>
          <div>
            <button onClick = {this.setNewNumber}> INCREMENT </button>
            <Number number = {this.state.number} />
          </div>
          <TextForm data = {this.state.formData} onChange = {this.updateFormData}/>
        </div>
      );
    }
}

App.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
}

App.defaultProps = {
    propArray: [
        1, 2, 3, 4, 5
    ],
    propBool: true,
    propFunc: function(e) {
        return e
    },
    propNumber: 1,
    propString: "String value...",
    propObject: {
        objectName1: "objectValue1",
        objectName2: "objectValue2",
        objectName3: "objectValue3"
    }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.header}</h1>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

class Content extends React.Component {
    render() {
        return (
          <div >
            <h2>{this.props.content}</h2>
          </div>
        );
    }
}

class Number extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNumber: this.props.number
    };
  }

  componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return this.state.currentNumber != newProps.number;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

class TextForm extends React.Component {
  render() {
    return (
      <div>
        <input type = "text" value = {this.props.data} onChange = {this.props.onChange} />
        <h4>{this.props.data}</h4>
      </div>
    )
  }
}

export default App;
