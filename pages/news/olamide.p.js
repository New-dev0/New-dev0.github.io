import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Olamide</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Olamide"/>
        <meta name="description" content="Trending News about Olamide" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Olamide</h1>
            <Image width={800} height={500} src="https://cdn.punchng.com/wp-content/uploads/2022/12/02213530/OLAMIDE-AND-PRODUCER.jpg" alt="Olamide"/>
            <h3>Recent News</h3>
            <a href='https://punchng.com/olamides-producers-turned-hitmakers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Olamide&#39;s producers-turned-hitmakers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDhSWoJcyMB_vPYWOqGgcGl5bgTlMzXwauEXdxLWDGgyS9dMU_acwXpBnnRYxfp23Qt6Wzi0V1" alt="Olamide&#39;s producers-turned-hitmakers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For those that are familiar with the music industry, the phrase, &#39;Pheelz, the Mr Producer&#39; had long been associated with popular rapper and singer, Olamide,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}