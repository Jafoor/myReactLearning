import React from 'react';

class NewBook extends React.Component {

    constructor(props){
        super(props);
        this.state={
            bookName : "",
            writer : "",
            description : ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({

           [name] : value

        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    // componentDidUpdate() {
    //     //console.log(this.state);
    // }
    render(){
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <br/>
                    <input type="text" name="bookName" value={this.state.bookName} onChange= {this.handleInput } />
                    <br/>
                    <label>Writer: </label>
                    <br/>
                    <input type="text" name="writer" value= {this.state.writer} onChange= { this.handleInput } />
                    <br/>
                    <label>Description: </label>
                    <br/>
                    <input type="text" name="description"  value={this.state.description} onChange= {event => this.handleInput(event) } />
                    <br/>
                    <input type="submit" value="submit" />
    
                </form>
            </div>
        );
    }
    
}

export default NewBook;