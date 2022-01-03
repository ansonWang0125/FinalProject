import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:4000' })

const Save = async (name, point) => {
    await instance.post('/api/save-game', {
        name,
        point
    })
}

export { Save }