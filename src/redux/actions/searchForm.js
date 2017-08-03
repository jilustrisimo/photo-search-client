import axios from 'axios'
import Unsplash from 'unsplash-js'

const id = process.env.REACT_APP_API_ID
const secret = process.env.REACT_APP_API_SECRET
const callback = process.env.REACT_APP_CALLBACK
const url = 'https://api.unsplash.com/search/photos/'

export const performSearch = query => {

}