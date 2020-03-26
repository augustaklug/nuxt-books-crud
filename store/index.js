import EventService from '@/services/EventService.js'

export const state = () => ({
  books: [],
  book: {}
})
export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books
  },
  SET_BOOK(state, book) {
    state.book = book
  },
  ADD_BOOK: (state, book) => {
    state.books.push(book)
  },
  DELETE_BOOK: (state, id) => {
    const index = state.books.findIndex((book) => book.id === id)
    state.books.splice(index, 1)
  },
  GET_BOOK(state, book) {
    state.book = Object.assign({}, state.book, book)
  }
}
export const actions = {
  fetchBooks({ commit }) {
    return EventService.getBooks().then((response) => {
      commit('SET_BOOKS', response.data)
    })
  },
  fetchBook({ commit }, id) {
    return EventService.getBook(id).then((response) => {
      commit('SET_BOOK', response.data)
    })
  },
  addBook({ commit }, book) {
    return EventService.createBook(book).then((response) => {
      commit('ADD_BOOK', book)
    })
  },
  deleteBook({ commit }, id) {
    return EventService.removeBook(id).then((response) => {
      commit('DELETE_BOOK')
    })
  },
  putBook({ state }, id) {
    EventService.putBook(id, state.book)
  }
}
