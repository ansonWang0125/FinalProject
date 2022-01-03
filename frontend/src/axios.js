import axios from 'axios';
const instance = axios.create({baseURL: 'http://localhost:4000/api/guess'})

const Save = async (name, point) => {
    await instance.post('/api/create-card', {
        name,
        point
    })
}

export {Save}