import React, { Component } from 'react'
import axios from "axios"
  class Home extends Component {
    state={
        posts:[ ]
        
      }
      
       componentDidMount(){
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(response=>{
             this.setState({
             posts:response.data.slice(0,10)
           })
         })   
       }
      render(){
       const { posts}=this.state
       const postlist = posts.length ? (
           posts.map(post=>{
               return(
                   <div className="card blue-grey" key={post.id}>
                       <div className="card-content">
                           <div className="card-title center">{post.title}</div>
                           <p className="center"> {post.body}</p>
                       </div>
                   </div>
               )
           })
       ):(
           <div className="center">No Any POsts Yet </div>

       )
    return (
       <div>
           {postlist}
       </div>
    )
      }
}
export default Home


