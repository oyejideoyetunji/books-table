import axios from "axios"
const baseUrl = 'https://www.anapioficeandfire.com/api/books'

export async function fetchBooks(page, filterValue) {
    try {
        const response = await axios.get(`${baseUrl}?page=${page}&name=${filterValue}`)
        return response
    } catch (error) {
        return error.response
    }
}