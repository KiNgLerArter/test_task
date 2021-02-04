import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-task-chat-4tmzp.ondigitalocean.app/'
});

export default instance;