import React from 'react';

class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.count = 0;
    //     this.state = {
    //         count: 0
    //     }
    // }

    state = {
        count: 0
    };

    render() {
        
        //console.log(this.count)
        return(
            <div className = 'App'>
                <h1>Why do we need state?</h1>
                <h1>COunt = {this.state.count}</h1>
                <button onClick={() => {
                    this.setState(
                        prev => {
                            return {
                                count: prev.count + 1
                            }
                        },
                        () => {
                            console.log('Clicked --- ', this.state.count);
                        }
                    );


                    }}> Add One</button>
            </div>
        );
    }

}

export default App;

