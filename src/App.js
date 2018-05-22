import React, { Component } from 'react';
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { LandingScreen } from './landing/components/LandingScreen';
import { ProjectsScreen } from './projects/components/ProjectsScreen';

class App extends Component {
    render() {
        return (
            <Router>
                <Main className="App">
                    <TopBar/>
                    <Header/>
                    <Route exact path="/" component={LandingScreen}/>
                    <Route path="/projects" component={ProjectsScreen}/>
                </Main>
            </Router>
        );
    }
}

const Main = styled.main`
    text-align: center;
    box-sizing: border-box;
    * {
        box-sizing: inherit;
    }
`;

export default App;
