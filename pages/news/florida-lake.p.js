import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florida Lake</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florida Lake"/>
        <meta name="description" content="Trending News about Florida Lake" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florida Lake</h1>
            <Image width={800} height={500} src="http://www.thesouthafrican.com/wp-content/uploads/2022/12/flood-123200_1920-1200x900-1.jpg" alt="Florida Lake"/>
            <h3>Recent News</h3>
            <a href='https://www.thesouthafrican.com/news/offbeat/breaking-news-trending-twitter-video-shows-scary-footage-of-massive-flooding-florida-lake/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trending Twitter video: Scary footage of massive flooding near ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTLXJRKn9YgE2gTwAQlEG_Zir_pa8eN1TByswWD5si1svbo5KSqP9LK3r3MY0pWmVWEHF0RMobW" alt="Trending Twitter video: Scary footage of massive flooding near ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Searching for the latest trending videos on Twitter can be frustrating as everyone tries to ride the hashtag wave.</p></div>
            </div>
        </a>
        </Template></>;
}