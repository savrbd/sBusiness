import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=48";

const postsSlice = createSlice({
    name: "posts",
    initialState:{
        entities:null,
    },
    reducers: {
        postsReceved(state, action){
            state.entities=action.payload
        },
    }
})
const { reducer: postsReducer, actions} = postsSlice;
const { postsReceved } = actions
export const loadPosts = () => async (dispatch)=>{
    try{
        let content = [] 
        await axios.get(POSTS_URL).then((res) => content = res.data)
        dispatch(postsReceved(content))
    } catch(error){
        console.log(error.message)
    }
};
export const getPosts = () => (state)=>state.posts.entities
export default postsReducer;