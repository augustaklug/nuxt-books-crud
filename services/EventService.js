import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://crud-books-api.herokuapp.com/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getBooks() {
    return apiClient.get('/books')
  },
  getBook(id) {
    return apiClient.get('/books/' + id)
  },
  createBook(book) {
    return apiClient.post('/books', book)
  },
  removeBook(id) {
    return apiClient.delete('/books/' + id)
  },
  putBook(id, book) {
    return apiClient.put('/books/' + id, book)
  }
}
