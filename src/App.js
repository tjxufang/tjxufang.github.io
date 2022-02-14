import './App.css';
import ScrollToTop from 'Utils/ScrollToTop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Header from 'Components/Layout/Header';
import Footer from 'Components/Layout/Footer';
import Homepage from 'Views/Homepage';
import About from 'Views/About';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop/>
                <Header/>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            classNames="fade"
                            timeout={300}>
                            <Switch>
                                <Route path="/" exact component={Homepage}/>
                                <Route path="/about" exact component={About}/>
                                {/*<Route path="/projects" exact component={Work}/>*/}
                                {/*<Route path="/careers" exact component={Careers}/>*/}
                                {/*<Route path="/contact" exact component={Contact}/>*/}
                                {/*<Route path="/Terms" exact component={Terms}/>*/}
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
