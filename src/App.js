import React from 'react';
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from './theme';
import MainContainer from './features/main-container';
import {store} from './store';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <MainContainer/>
            </MuiThemeProvider>
        </Provider>
    );
}

export default App;
