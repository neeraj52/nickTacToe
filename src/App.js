import './App.css';
import { useState , createRef } from "react";
import { createFileName, useScreenshot } from 'use-react-screenshot';
import classNames from "classnames";

const App = ( props ) => {
  
  const [ box, setBox ] = useState(Array(9).fill(''));
  const [ value, setValue ] = useState('');
  const [ won, setWon ] = useState('');
  const [ player1, setPlayer1 ] = useState(0);
  const [ player2, setPlayer2 ] = useState(0);

  // for screenshot
  const ref = createRef(null);
  const[ image, takeScreenShot ] = useScreenshot({
                                        type: 'image/jpeg',
                                        quality: 1.0
                                    });
  const [buttonVisibility, setButtonVisibility] = useState(false);

  // dynamic className
  const boxClass = classNames( 'boxes', {
		  'boxesDisable': buttonVisibility === true
	} );


  const download = (image, {name='myImg', extension='jpg'}= {}) => {
      const a = document.createElement('a');
            a.href = image;
            a.download = createFileName(extension,name);
            a.click();
  }

  const downloadScreenshot = () => {
    takeScreenShot(ref.current).then(download);

    // if(buttonVisibility === true) {
    //     setTimeout(function(){
    //       window.location.reload();
    //     }, 3000);
    // }
  }

  const yourTurn = ( index ) => {

    box.map((myVal, ind) => {
        if(ind === index) {
          // to restrict when it is already filled
          if( box[ind] === "") {

              if( value === '' || value ===  'O' ) {
                setValue('X');
              }else {
                setValue('O');
              }
          }

          // console.log('count',value)

          const newBox = box.fill(value, index, index+1 );
          setBox(newBox);

              // Possiblities
              // if( ((box[0] === 'X' && box[3] === 'X' && box[6] === 'X') || (box[0] === 'O' && box[3] === 'O' && box[6] === 'O')) || 
              //     ((box[1] === 'X' && box[4] === 'X' && box[7] === 'X') || (box[1] === 'O' && box[4] === 'O' && box[7] === 'O')) ||
              //     ((box[2] === 'X' && box[5] === 'X' && box[8] === 'X') || (box[2] === 'O' && box[5] === 'O' && box[8] === 'O')) ||
              //     ((box[0] === 'X' && box[1] === 'X' && box[2] === 'X') || (box[0] === 'O' && box[1] === 'O' && box[2] === 'O')) ||
              //     ((box[3] === 'X' && box[4] === 'X' && box[5] === 'X') || (box[3] === 'O' && box[4] === 'O' && box[5] === 'O')) ||
              //     ((box[6] === 'X' && box[7] === 'X' && box[8] === 'X') || (box[6] === 'O' && box[7] === 'O' && box[8] === 'O')) ||
              //     ((box[0] === 'X' && box[4] === 'X' && box[8] === 'X') || (box[0] === 'O' && box[4] === 'O' && box[8] === 'O')) ||
              //     ((box[2] === 'X' && box[4] === 'X' && box[6] === 'X') || (box[2] === 'O' && box[4] === 'O' && box[6] === 'O')) ){
                  
              //       setWon("you Won!!!!! 😇🥳");

              // }

              if( ((box[0] === 'X' && box[3] === 'X' && box[6] === 'X') ) || 
                    ((box[1] === 'X' && box[4] === 'X' && box[7] === 'X') ) ||
                    ((box[2] === 'X' && box[5] === 'X' && box[8] === 'X') ) ||
                    ((box[0] === 'X' && box[1] === 'X' && box[2] === 'X') ) ||
                    ((box[3] === 'X' && box[4] === 'X' && box[5] === 'X') ) ||
                    ((box[6] === 'X' && box[7] === 'X' && box[8] === 'X') ) ||
                    ((box[0] === 'X' && box[4] === 'X' && box[8] === 'X') ) ||
                    ((box[2] === 'X' && box[4] === 'X' && box[6] === 'X') ) ){
                  
                    setWon("X Won!!!!! 😇🥳");
                    setButtonVisibility(true);
                    setPlayer1(player1 + 1);
              }
              else if( ( (box[0] === 'O' && box[3] === 'O' && box[6] === 'O')) || 
                      ( (box[1] === 'O' && box[4] === 'O' && box[7] === 'O')) ||
                      ( (box[2] === 'O' && box[5] === 'O' && box[8] === 'O')) ||
                      ( (box[0] === 'O' && box[1] === 'O' && box[2] === 'O')) ||
                      ( (box[3] === 'O' && box[4] === 'O' && box[5] === 'O')) ||
                      ( (box[6] === 'O' && box[7] === 'O' && box[8] === 'O')) ||
                      ( (box[0] === 'O' && box[4] === 'O' && box[8] === 'O')) ||
                      ( (box[2] === 'O' && box[4] === 'O' && box[6] === 'O')) ){

                        setWon("O Won!!!!! 😇🥳");
                        setButtonVisibility(true);
                        setPlayer2(player2 + 1);
              }   
             else {
               // draw check
                const drawCondition = box.filter((element) => element !== '' && box )
                if( drawCondition.length === 9  ) {
                  setWon("Draw!!!!! 😱😩");
                  setButtonVisibility(true);
                }
             }
        }
    })

  }

  return (
    <div ref={ref} className="App">
      
      <div className='title'> Tic Tac Toe </div>
      
      <div className='app-container'>
          { box.map((val, index) => { 
            return  <div className={boxClass} onClick={()=> yourTurn( index ) } >
                      { val }
                    </div>
          })}
      </div>
      
      <div className='playersInfo'>
        <div className='player1'>Player 1 : <span>{ player1 }</span></div>
        <div className='player2'>Player 2 : <span>{ player2 }</span></div>
      </div>

      <div className='winning'>{won}</div>

      <div className='actions'>
        <div className='exit' onClick={ () => { props.runGame( false ) } }> Exit </div>  
        { buttonVisibility ? 
            <div className='takeScreenshot' onClick={() => { downloadScreenshot()} }> Take Screenshot </div> 
                          : 
           null
        }
         <div className='reset' onClick={ () => {  
                                                  setBox(Array(9).fill('')); 
                                                  setWon("");
                                                  setButtonVisibility(false);
                                                  } }
          > { buttonVisibility ? 'Play Again' : 'Reset' } </div>  
        </div>

    </div>  
  );
}

export default App;
