import React, { useState} from 'react';
import '../App.css';
import Table from '../component/table';
import Pagination from "../component/pagination";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchForm from '../component/searchForm';
// import axios from 'axios';
import { useSelector } from "react-redux";
import { getPosts } from "../store/posts";
  

const Main = () => {
    const posts=useSelector(getPosts());
    // const [posts, setPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({ iter: "id", order: "asc" });
    // const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=48";
    const pageSize = 10;
    const [searchPost, setSearchPost] = useState("");
    
    // useEffect(() => {
    //     axios.get(POSTS_URL).then((res) => setPosts(res.data));
    // }, []);
    const handlePageChange = (pageIndex) => {
        if(pageIndex>=1 && pageIndex<=Math.ceil(posts.length/pageSize)){
            setCurrentPage(pageIndex);
        }
      };

    const handleSort = (item) => {
        if (sortBy.iter === item) {
            setSortBy((prevState)=>({
                ...prevState,
                order: prevState.order === "asc" ? "desc" : "asc"
            }))
        } else {
            setSortBy({ iter: item, order: "asc"})
        }
    };
    const handleChange = (e) => {
        setSearchPost(e.target.value.toLowerCase());
      };
    
    const sortedPosts = _.orderBy(
        posts,
        [sortBy.iter],
        [sortBy.order]
    );
    const allPost = paginate(sortedPosts, currentPage, pageSize);
    if (posts){
        const postsTable=searchPost?
        posts.filter((post)=>post.body.toLowerCase().includes(searchPost))
        :allPost
        return (
                <div className='main'>
                    <SearchForm
                        value={searchPost}
                        onChange={handleChange}
                    />
                    <Table posts={postsTable} onSort={handleSort} sortBy={sortBy}/>
                    {searchPost?null:<Pagination
                        itemsCount={posts.length}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />}
                </div>
            );
    } else {
        return(
            <h5>Loading...</h5>
        )
    }
    
}
 
export default Main;