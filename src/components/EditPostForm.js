import React, {useState} from 'react';
import {Btn} from '../styles/btn';
import {connect} from 'react-redux';
import {editPost, cancelEdit} from '../actions/index';

const mapDispatchToProps = (dispatch) => { //can replace all of this with redux-requests?
    return {
        editPost: (post) => dispatch(editPost(post)),
        cancelEdit: (post) => dispatch(cancelEdit(post)),
    }
}

    const ConnectedEditPostForm = ({post, editPost, cancelEdit}) => {
    const [editPostTitle, setEditPostTitle] = useState(post.title);

    const postHandler = (e) => {
        setEditPostTitle(e.target.value)
    }

    const editSubmit = (e) => {
        const id = post.id
        const title = editPostTitle;
        const isEditing = false;
        editPost({id, title, isEditing})
        setEditPostTitle('');
    }

    const cancelSubmit = (e) => {
        const id = post.id;
        const title = post.title;
        const isEditing = false;
        cancelEdit({id, title, isEditing});
        setEditPostTitle('');
    }

   return(
       <form onSubmit={editSubmit}>
            <input type="text" value={editPostTitle} onChange={postHandler}/>
            <Btn type="submit">Confirm</Btn>
            <Btn type="button" onClick={cancelSubmit}>Cancel</Btn>
       </form>
   )
}

const EditPostForm = connect(null, mapDispatchToProps)(ConnectedEditPostForm)

export default EditPostForm;