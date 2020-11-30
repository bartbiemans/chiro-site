import './App.css';
import React from "react";
import {Router, Switch} from 'react-router';
import {Route} from 'react-router-dom';
import {Home} from "./components/home/Home";
import {createBrowserHistory} from 'history';
import {Header} from "./components/header/Header";
import { LeidingsploegContainer } from './main/leidingsploeg/LeidingsploegContainer';
import {JeneverAvond} from "./main/jeneveravond/JeneverAvond";
import {Chiro} from "./main/chiro/Chiro";
import {Inschrijven} from "./main/inschrijven/Inschrijven";
import {Verhuur} from "./main/verhuur/Verhuur";
import {MaandprogrammaUpload} from "./main/maandprogramma/MaandprogrammaUpload";
import {Brieven} from "./main/brieven/brieven";
import {MaandprogrammaDownload} from "./main/maandprogramma/MaandprogrammaDownload";
import {MaandProgrammaContainer} from "./main/maandprogramma/MaandProgrammaDownloadContainer";


const browserHistory = createBrowserHistory();


function App() {
    return (
        <div>
            <Router history={browserHistory}>
                {renderRouting()}
            </Router>
        </div>
    );
}

const renderRouting = () => {
    return (
        <>
            <Header/>
            <div style={{paddingTop:'7vh'}}>
                <Switch>
                    <Route exact path={'/chiro'} component={Chiro}/>
                    <Route exact path={'/leidingsploeg'} component={LeidingsploegContainer}/>
                    <Route exact path={'/jeneveravond'} component={JeneverAvond}/>
                    <Route exact path={'/inschrijven'} component={Inschrijven}/>
                    <Route exact path={'/verhuur'} component={Verhuur}/>
                    <Route exact path={'/upload'} component={MaandprogrammaUpload}/>
                    <Route exact path={'/maandprogramma'} component={MaandProgrammaContainer}/>
                    <Route exact path={'/brieven'} component={Brieven}/>
                    <Route exact path={'/'} component={Home}/>
                </Switch>
            </div>
        </>
    )
}

export default App;
