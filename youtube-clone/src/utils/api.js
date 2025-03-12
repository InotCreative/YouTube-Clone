import axios from 'axios'

export const request = axios.create({
  baseURL: 'youtube.googleapis.com',
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
})