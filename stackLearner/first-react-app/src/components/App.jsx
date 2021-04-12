import React from 'react';
import Button from './style/button.jsx'
import './style/buttonA.css'

const myHeader = {
    color: 'blue',
    fontFamily: 'Arial',
    fontSize: '36px'
}

class App extends React.Component {

    render() {
        
        return(
            <div className = 'App'>
                <h1 style={myHeader} >How to style React App</h1>
                <h1 style={{
                    color: 'blue',
                    fontFamily: 'Arial',
                    fontSize: '36px'
                }}>Another style</h1>
                <Button> Click me </Button>

                <button className='button'> new class </button>

            </div>
        );
    }

}

export default App;

/**
 * There are four main method to style react app
 * - Inline CSS
 * - CSS Module
 * - CSS CSS Class
 * - JSS (Styled COmponent)
 */