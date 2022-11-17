import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alan Jackson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alan Jackson"/>
        <meta name="description" content="Trending News about Alan Jackson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alan Jackson</h1>
            <Image width={800} height={500} src="https://i0.wp.com/www.whiskeyriff.com/wp-content/uploads/Alan-Jackson-gets-pranked-YouTube.png?fit=1111%2C668&ssl=1" alt="Alan Jackson"/>
            <h3>Recent News</h3>
            <a href='https://www.whiskeyriff.com/2022/11/16/alan-jackson-got-pranked-into-thinking-he-had-to-do-a-fully-nude-movie-scene-in-the-90s/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alan Jackson Got Pranked Into Thinking He Had To Do A Fully Nude ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTD9Zi9-lLM5tKLmnJvJtPhEVAAGADDdIoQj3uqWdsWWDHzKj8bPPoSAj_-GdaYL0kmeWbA42y6" alt="Alan Jackson Got Pranked Into Thinking He Had To Do A Fully Nude ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>You gotta love a good old fashioned hidden-camera prank. This was all well before my time so I&#39;m gonna do my best to put all the pieces together,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}