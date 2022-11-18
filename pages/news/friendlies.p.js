import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Friendlies</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Friendlies"/>
        <meta name="description" content="Trending News about Friendlies" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Friendlies</h1>
            <Image width={800} height={500} src="https://editorial.uefa.com/resources/027b-169ceb4552a4-e9a4df906300-1000/eq.jpeg" alt="Friendlies"/>
            <h3>Recent News</h3>
            <a href='https://www.uefa.com/european-qualifiers/news/027b-169ceb4552a5-43a75183c184-1000--where-to-watch-november-s-international-friendlies-tv-broadcast/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Where to watch November&#39;s international friendlies: TV broadcast ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRD5-HnnNA9ow4KqpwMyr8PIZ9VNga2s5zFc93y-AyJolD0IdutyMHHPufm_hsWmqVqj4oOrBmJ" alt="Where to watch November&#39;s international friendlies: TV broadcast ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow all the latest European Qualifiers news from the official UEFA.com site. Includes latest news stories, videos, match reports and much more.</p></div>
            </div>
        </a>
        </Template></>;
}