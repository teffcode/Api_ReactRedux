import axios from 'axios';
 
export const FETCH_POSTS = 'fetch_posts';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export function fetchPosts() {
    return dispatch => {
        return axios.get(URL)
            .then(response => {
                //console.log(response)
                dispatch({
                    type: FETCH_POSTS,
                    payload: response.data
                })
            })
    };
}



