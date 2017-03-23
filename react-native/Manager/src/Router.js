
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

export default RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 64 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>

            <Scene key="main">
                <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    );
};
