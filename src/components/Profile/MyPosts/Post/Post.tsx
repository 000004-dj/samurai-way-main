import classes from "./Post.module.css";
import React, {useState} from "react";



const Post = (props: any) => {

    const [like, setLike] = useState(0)

    return (
        <div className={classes.item}>
            <img className={classes.avatar}
                 src="https://cdn.vox-cdn.com/thumbor/W6YyHkPAoXd8VGz2OGMjqkWWM7E=/0x0:2370x1574/1400x1400/filters:focal(1185x787:1186x788)/cdn.vox-cdn.com/uploads/chorus_asset/file/20103707/Screen_Shot_2020_07_21_at_9.38.25_AM.png"
                 alt=""/>
            <span className={classes.text}>{props.message}</span>
            <div className={classes.like}>
                <span onClick = {() => setLike(like + 1)}> {props.likes !== 0 ? props.likes : like } likes</span>
            </div>

        </div>
    )
}
export default Post