import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './parent.css';
import logo from '../src/images/tic-tac-toe.jpeg';
import Home from './Home';
import About from './About';
import React, { useState } from "react";

const Parent = () => {

    const [ game, runGame ] = useState(false);

    const selectedTab = (e) => {
            // console.log('my',e.target.__reactProps$pyc9a3lktz);
    }
    
    return (
        <Router>
            <div className="parent">
                <div className="parent-header">
                    <a href={window.location.origin}><img className="logo" src={logo} alt={'logo'} onClick={ () => { runGame( false ) } }/> </a>
                        <div className="tabs">
                            <Link  to="/"    onClick={(e)=>{
                                                runGame(false)
                                                selectedTab(e)
                                            }}
                            >Home</Link>
                            
                            <Link to="/about"   onClick={(e)=>{
                                                        selectedTab(e)
                                                }}
                            >AboutUs</Link>
                        </div>    
                </div>
                <Routes>
                    <Route exact path='/' element={ <Home  runGame = { runGame } game={ game }/> } />
                    <Route exact path='/about' element={ <About /> } />
                </Routes>
                <div className="footer">@NickTacToe</div>
            </div>
        </Router>
    );
}
  
  export default Parent;