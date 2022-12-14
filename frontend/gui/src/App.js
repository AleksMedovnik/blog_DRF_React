import './App.css';
import 'antd/dist/antd.min.css';
import CustomLayout from './containers/Layout';
import BaseRouter from './routes';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth'
import { useEffect } from 'react';

function App(props) {
    
    useEffect(() => {
        props.onTryAutoSignUp()
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <CustomLayout {...props}>
                    <BaseRouter />
                </CustomLayout>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
