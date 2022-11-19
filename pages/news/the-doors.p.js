import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Doors</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Doors"/>
        <meta name="description" content="Trending News about The Doors" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Doors</h1>
            <Image width={800} height={500} src="https://www.digitalfernsehen.de/wp-content/uploads/2022/11/The-Doors-Morrison-Hotel.jpg" alt="The Doors"/>
            <h3>Recent News</h3>
            <a href='https://www.digitalfernsehen.de/news/inhalte/fernsehen/arte-widmet-sich-heute-abend-der-legendaeren-band-the-doors-919908/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arte widmet sich heute abend der legendären Band &quot;The Doors&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWMcpkSNzWKBCdBtyLDu8uHEcsizDEY6yIW7ZOtojvrlCiUGwfaw_YMvT2b0v516UGUnfQc3TH" alt="Arte widmet sich heute abend der legendären Band &quot;The Doors&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Das Album &quot;Morrison Hotel&quot; von &quot;The Doors&quot; gilt als legendäres Rockalbum. Arte lässt die Entstehung dieser Platte heute Revue passieren.</p></div>
            </div>
        </a>
        </Template></>;
}