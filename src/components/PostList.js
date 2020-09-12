/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {deletePost, editPost, isEditing} from '../actions/index';
import {Btn} from '../styles/btn';
import EditPostForm from '../components/EditPostForm';

const mapDispatchToProps = dispatch => { //ge get dispatch func from redux "magic"
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        // editPost: post => dispatch(editPost(post)),
        isEditing: post => dispatch(isEditing(post))
    }
}

const mapStateToProps = state => {
    return {posts: state.posts}
}

const ConnectedPostList = ({posts, kakor, deletePost, editPost, isEditing}) => { //es6 destruct of props
    return (
        <div>
            <h1>Posts</h1>
       
        <ul>
           {posts.map((post) => {
               return(
               post.isEditing ?
               <EditPostForm post={post} />
                : 
            <li key={post.id}>
                {post.title}
                <Btn onClick={() => deletePost(post.id)}> DEL </Btn>
                <Btn onClick={() => isEditing(post)} > Edit </Btn>
            </li>
            )
        })}
        <h2>Legacy posts</h2>
          <div>
        {kakor.map(kaka => {
        return <p>{kaka}</p>
        })}
        </div>
        </ul>
        </div>
    )
}

const PostList = connect(mapStateToProps, mapDispatchToProps)(ConnectedPostList);

export default PostList;