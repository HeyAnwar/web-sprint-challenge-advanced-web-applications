import axios, { axiosWithAuth } from 'axios'

export const fetchColor = () => {
    axiosWithAuth()
    .get('/colors')
    .then((res) => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}