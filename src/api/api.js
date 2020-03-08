import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '314336a1260bdeca9f1fe6295aa17b92'
    }
});