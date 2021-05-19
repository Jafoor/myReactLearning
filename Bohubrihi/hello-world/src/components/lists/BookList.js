import React from 'react';
import Book from '../representational/Book';

class BookList extends React.Component {

    constructor(props) {
        super(props);
        console.log("Booklist Constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("Booklist: Component will mount");
    }

    componentDidMount() {
        console.log("Booklist: Component Did Mount")
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("U booklist  componentWillReceiveProps ", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("U booklist shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log("U bookList componentWillUpdate")
    }

    componentDidUpdate(){
        console.log("U booklist componentDidUpdate");
    }

    render() {
        console.log("Booklist: Render");
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)}
                    />
                );
            })
        );
    }
    
}

export default BookList;