import React from 'react';

class App extends React.Component {

    state = {
        count: 0
    };

    intervalID = null

    incrimentCount = () => {
        this.setState({count: this.state.count + 1 })
    };

    decrimentCount = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1 })
        }
    };

    startTimer = () => {
        if(this.state.count > 0 && !this.intervalID){
            this.intervalID = setInterval(() => {

                this.setState({count: this.state.count - 1 }, () => {
                    if(this.state.count === 0){
                        alert('Timer Finished');
                        clearInterval(this.intervalID);
                        this.intervalID = null;
                    }
                } )
            }, 1000);
        }
    }

    stopTimer = () => {
        if(this.intervalID){
            clearInterval(this.intervalID);
            this.intervalID = null;
        }
    }

    resetTimer = () => {
        if(this.intervalID){
            clearInterval(this.intervalID);
            this.intervalID = null;
        }
        this.setState({count: 0});
    }

    render() {
        
        return(
            <div className = 'App'>
                <h1 className='heading'> Timer </h1>
                <div className='Container'>
                    <button className='Btn' onClick={this.decrimentCount}>
                        -
                    </button>
                        <span className='Text'> { this.state.count}</span>
                    <button className='Btn' onClick={this.incrimentCount}>
                        +
                    </button>
                </div>

                <div className='Container'>
                    <button className='Btn' onClick={this.startTimer}>
                        Start
                    </button>

                    <button className='Btn' onClick={this.stopTimer}>
                        Stop
                    </button>

                    <button className='Btn' onClick={this.resetTimer}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }

}

export default App;

