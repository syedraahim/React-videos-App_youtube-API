import axios from 'axios';

const KEY = 'AIzaSyCmSfzHg-Lm5hM5E9bU6YHejwhWXAH8zcU';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResult : 5,
        key : KEY
        
    }
});