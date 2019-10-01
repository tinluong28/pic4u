import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 45f49abfc0c9e97488bf39539feb798bbef7bc0a057156ea55da6b90b9000613'
    }
})
