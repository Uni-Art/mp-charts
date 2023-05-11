import React from "react";
import {CommentOutlined} from "@ant-design/icons";
import {Button} from "antd";
import styles from "./comment.module.scss"

function BtnAddComment() {
    return (
        <Button type="text" onClick={() => console.log('click')} className={styles.btn}>
            <span className={styles.count}>3</span>
            <CommentOutlined key="comment-cc" className={styles.icon}/>
        </Button>
    );
}

export default BtnAddComment;