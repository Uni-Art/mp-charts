import React, {ReactNode} from "react";
import {Card} from "antd";
import styles from "./cardBox.module.scss"

interface CardGraphBoxProps {
    title: string;
    buttons: ReactNode | ReactNode[];
    graphIdContainer: string;
}

function CardGraphBox({title, buttons, graphIdContainer}:CardGraphBoxProps) {
    return (
        <Card
            title={title}
            actions={buttons}
            bodyStyle={{height: 400, overflowX: "scroll", overflowY: "hidden"}}
            className={styles.cardBox}
        >
            <div id={graphIdContainer}></div>
        </Card>
    );
}

export default CardGraphBox;