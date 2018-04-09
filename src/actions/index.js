export function selectBook(book) {
  //select book is an action creator, returns action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
