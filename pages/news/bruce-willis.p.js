import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Willis</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Willis"/>
        <meta name="description" content="Trending News about Bruce Willis" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Willis</h1>
            <Image width={800} height={500} src="https://i.dailymail.co.uk/1s/2022/12/02/16/65180089-0-image-a-13_1669999877533.jpg" alt="Bruce Willis"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymail.co.uk/tvshowbiz/article-11495809/Bruce-Willis-keeps-casual-grabs-drink-friends-Malibu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruce Willis keeps it casual as he grabs a drink with friends in Malibu</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9mi3p3zAmh3LE9zpEsVoERFFOE6VApEEGrMYr1HfAlZicFJwXMEBMbVSQyC9jSal44BQEgbjm" alt="Bruce Willis keeps it casual as he grabs a drink with friends in Malibu" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He was spotted grabbing a drink with friends at SunLife Organics in Malibu on Thursday. The famed actor, 67, bundled up in a navy zip-up jacket and a black&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}