import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gillingham fc</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gillingham fc"/>
        <meta name="description" content="Trending News about Gillingham fc" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gillingham fc</h1>
            <Image width={800} height={500} src="https://www.gillinghamfootballclub.com/siteassets/image/community-images/202223/development-centres/recruit-coaches.png" alt="Gillingham fc"/>
            <h3>Recent News</h3>
            <a href='https://www.gillinghamfootballclub.com/news/2022/november/coaches-wanted-for-maidstone-and-folkestone-dev-centres/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Coaches wanted for Maidstone and Folkestone development centres</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS99tn4h2vqwUAU1o1OoWm4kw_jsacEeSBF8CRUL79J7JkEau3DTv5psBoV4fW-gJv1NzX3DJ8l" alt="Coaches wanted for Maidstone and Folkestone development centres" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Become a part of the development centre coaching setup at Gillingham Football Club.</p></div>
            </div>
        </a>
        </Template></>;
}