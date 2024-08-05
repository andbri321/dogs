import React from "react";
import PhotoCommentsForm from "./PhotoCommentsForm";
// import styles from './PhotoContent.module.css';
// import { Link } from "react-router-dom";
import {UserContext} from '../../UserContext';
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
    const [comments,setCommments] = React.useState(()=> props.comments)
    const commentsSection = React.useRef(null);
    const {login} = React.useContext(UserContext);

    React.useEffect(()=>{
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    },[comments]);

    return (
        <>
            <ul ref={commentsSection}
                className={`${styles.comments} ${props.single ? styles.single : ''}`} >
                {comments.map(comment=> <li key={comment.comment_ID}>
                    <b>{comment.comment_author}: </b>
                    <span>{comment.comment_content}</span>
                </li>)}
            </ul>
            {login && <PhotoCommentsForm 
                single={props.single}
                id={props.id}
                setCommments={setCommments} />}
        </>
    );
};

export default PhotoComments;
