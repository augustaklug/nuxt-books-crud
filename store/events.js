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
  }
}
