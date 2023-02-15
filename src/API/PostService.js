import axios from 'axios'




export default class PostService {

    static async getAll(limit = 10, page = 1) {
        try{

        }catch (e){
            console.log(e);
        }
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts' , {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        return response;
    }

    
    static async getById(id) {

        try{

        }catch (e){
            console.log(e);
        }
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id) 
        return response;
        
    }

    static async getCommentByPostId(id) {

        try{

        }catch (e){
            console.log(e);
        }
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`) 
        return response;
        
    }
} 