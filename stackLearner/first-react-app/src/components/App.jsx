import React from 'react';
import Profile from './profile';
import Skills from './profile/Skills';
import MyProps from './props';

class Child extends React.Component {
    render () {
        this.props.func(this);
        return <h1>I am Child</h1>;
    }
}

const ChildComponent = props => (
    <div>
        <h3> I am Child Component</h3>
        <p>I don't know what to do</p>
        {props.children}
    </div>
)

class App extends React.Component {

    getContetext (context) {
        console.log(context);
    }

    render() {
        this.getContetext(this);
        return(
            <div className = 'App'>
                <Profile/>

             {/* <Child func={this.getContetext}/>  */}

            <ChildComponent>
                <h2>Hello, i am from Parent</h2>
                <h4>I am Child of Child Component</h4>
            </ChildComponent>
            </div>
        );
    }

}

export default App;

