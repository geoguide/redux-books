import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class Booklist extends React.Component {

  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={ () => this.props.selectBook(book) }>{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
     books: state.books
  }
}

//Anything returned from this ends up in the booklist container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed
  //to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
