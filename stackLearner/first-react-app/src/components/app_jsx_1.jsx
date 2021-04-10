import React from 'react'

const MyComponent = () => <h1>My Componenet</h1>;

class App extends React.Component {

    // Data and Logic Layer (Optional)
    /**
     * 1. State
     * 2. variables or Properties
     * 3. Function or Methods
     * 4. Life cycle Methods
     */

     // Representation Layer (Required)
     /**
      * 5. JSX
      */

    render() {

        const obj = {
            title: 'Test Title',
            id: 'myh1'
        };

        const bio = (
            <div>
                <h3>Programmer, Developer</h3>
            </div>
        );

        return(
            <div className='App'>
            <h1 {...obj}>Hello React, You Are Awesome</h1>
            <p> { new Date().toISOString()} </p>
            <MyComponent/>

            {bio}
            </div>
        );
    }

}

export default App;

/**
 * There are two different ways to create React Component
 * 1. Class Based Component / Stateful Component / Smart Component
 * 2. Functional Component / Stateless Component / Dump Component
 * */

 /**
  * For dummy div we can use Fragment
    <React.Fragment className="app">
        <h1> Name <h1>
    </React.Fragment>
  */