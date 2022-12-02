import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Canada</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Canada"/>
        <meta name="description" content="Trending News about Canada" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Canada</h1>
            <Image width={800} height={500} src="https://i.cbc.ca/1.6667521.1669699720!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/john-and-adam-hug.jpg" alt="Canada"/>
            <h3>Recent News</h3>
            <a href='https://www.cbc.ca/news/canada/irish-family-citizenship-trans-transgender-lgbtq-limbo-saga-1.6666415'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Irish family fights to stay in Canada after 9-year dream of citizenship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5j6L9uv5Fo74KAW3M-guFXJQFmzDTozgCjE03mK8MZ5IeSQLgL9_r6v2OEwzTdFeQNtJPwaoJ" alt="Irish family fights to stay in Canada after 9-year dream of citizenship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An Irish family of five says they are desperate to stop Canada from deporting their transgender teen, all while fighting to extricate themselves from a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}