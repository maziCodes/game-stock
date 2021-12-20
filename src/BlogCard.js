import React from "react"
import { dumplogs } from "./Utils";
import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    // state = {
    //     likeCount: 0
    // }

    // let likeCount = 0;
    // const onLikebtnClicked = () => {
        // this.setState((prevState, prevProps) => {
        //     return {likeCount: ++prevState.likeCount}
        // })
    // }

    // render () {

    // }
        dumplogs(props)
        return (
            <div className={classes.BlogCard}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                Like Count: <span>{props.likeCount}</span><br></br>
                <button onClick={props.likeBtnClick}>Like</button>
            </div>
        )
}

export default BlogCard;