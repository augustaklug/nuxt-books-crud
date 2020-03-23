import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:8081`,
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
  }
}
