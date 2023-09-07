import logo from '../src/images/tictoac.jpeg';
import './home.css';
import App from './App';
import { Routes, Route, Link } from "react-router-dom";
import About from './About';

const Home = ( props ) => {

    const footerHeight= 125;
    // const about = 'about';
    // const helpRoute = window.location.href+about;
  
    return (
            <>
                {
                    props.game ? 
                        <App runGame={ props.runGame }/>
                    :
                    <div className="home" style={{height: window.innerHeight - footerHeight}}>
                        <div className="leftContainer">
                            <img className="myLogo" src={logo} alt={'logo'}/>
                        </div>               
                        <div className="rightContainer" >
                            <div className="content" >
                                <div className='description'> Welcome To NickTacToe </div>
                                <div className='playButton' onClick={ () => { props.runGame( true ) } }> Let'S Play </div>
                            </div>
                            <div className='details'>
                                {/* <div className='help' onClick={()=> window.location.href = helpRoute}>  */}
                                <div className='help'> 
                                    <Link to="/about"> Help? </Link>
                                    <Routes>
                                        <Route exact path='/about' element={ <About /> } />
                                    </Routes> 
                                </div>
                            </div>
                        </div>
                        </div>
                } 
            </>

    );
}
  
  export default Home;