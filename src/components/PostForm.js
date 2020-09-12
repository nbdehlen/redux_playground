import React, {useState} from 'react';
import {Btn} from '../styles/btn';
import {connect} from 'react-redux';
import {addPost} from '../actions/index';

const mapDispatchToProps = (dispatch) => { //can replace all of this with 
    return {
        addPost: (post) => dispatch(addPost(post))
    }
}

const ConnectedPostForm = (props) => {
    const [post, setPost] = useState('');

    const postHandler = (e) => {
        setPost(e.target.value)
    }

    const postSubmit = (e) => {
        e.preventDefault();
        console.log('in postSubmit')
        const id = Math.random()
        const title = post;
        const isEditing = false;
        props.addPost({id, title, isEditing})
        console.log({id, title, isEditing})
        setPost('');
    }

   return(
       <form onSubmit={postSubmit}>
            <input type="text" value={post} onChange={postHandler}/>
           <Btn type="submit">Save</Btn>
       </form>
   )
}

const PostForm = connect(null, mapDispatchToProps)(ConnectedPostForm)

export default PostForm;