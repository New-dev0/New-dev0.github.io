import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earthquake</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earthquake"/>
        <meta name="description" content="Trending News about Earthquake" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earthquake</h1>
            <Image width={800} height={500} src="https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=114" alt="Earthquake"/>
            <h3>Recent News</h3>
            <a href='https://www.reuters.com/world/asia-pacific/earthquake-magnitude-57-strikes-northern-sumatra-indonesia-emsc-2022-09-30/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake of magnitude 5.7 strikes northern Sumatra, Indonesia ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5C-nF70PRqxwjqRE5vooqH2MJMkvplsL7bi03-zzXIX81SlBhszBE0LTfLk8ri6wR8n679U-O" alt="Earthquake of magnitude 5.7 strikes northern Sumatra, Indonesia ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An earthquake of magnitude 5.7 struck Northern Sumatra province in Indonesia on Saturday, European Mediterranean Seismological Centre said.</p></div>
            </div>
        </a><a href='https://www.latimes.com/california/story/2022-09-30/earthquake-3-4-quake-reported-near-palm-springs-calif'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magnitude 3.4 earthquake reported near Palm Springs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfT6qkyWzgemdBcw94Wibl9Me44gqFdveZ3GoM0KAM62RSPd3TeiYtnUUv3erJrvJI_83da30w" alt="Magnitude 3.4 earthquake reported near Palm Springs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. Geological Survey reports a magnitude 3.4 earthquake occurred at 4:50 a.m. Friday nine miles from Palm Springs.</p></div>
            </div>
        </a>
        </Template></>;
}