import './App.css';
import ScrollToTop from 'Utils/ScrollToTop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Header from 'Components/Layout/Header';
import Footer from 'Components/Layout/Footer';
import Homepage from 'Views/Homepage';
import About from 'Views/About';
import Contact from 'Views/Contact';

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
                            timeout={500}>
                            <Switch>
                                <Route path="/" exact component={Homepage}/>
                                <Route path="/about" exact component={About}/>
                                <Route path="/contact" exact component={Contact}/>
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
