import './about.css';

const About = () => {
  
    return (
      <div className="about">
        <div className="aboutTitle"> NickTacToe </div>
        <div className="aboutDescription"> 
            NickTacToe is a two-player game in which the objective is to take turns and mark the correct spaces in a 3x3 (or larger) grid.Think on your feet but also be careful, as the first player who places three of their marks in a horizontal, vertical or diagonal row wins the game! How many rounds in a row can you win? Make sure to give 5x5 and 7x7 grid a try while you're at it.
        </div>
        <div className='instruction'>
           <b className='heading'>How to play: <br/></b> 
            Place mark - Left mouse button
        </div>
        <div className="creator">
        <b className='heading'> About the creator: <br/></b> 
            NickTacToe is created by NickTacToe.
        </div>
      </div>
    );
}
  
  export default About;