import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thanksgiving Parade</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thanksgiving Parade"/>
        <meta name="description" content="Trending News about Thanksgiving Parade" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thanksgiving Parade</h1>
            <Image width={800} height={500} src="https://pagesix.com/wp-content/uploads/sites/3/2022/11/Keltie-Knight-thanksgiving-day-parade-2022-0053.jpg?quality=75&strip=all&w=1200" alt="Thanksgiving Parade"/>
            <h3>Recent News</h3>
            <a href='https://pagesix.com/2022/11/24/inside-keltie-knights-thanksgiving-day-parade-glam/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>All the details on Keltie Knight&#39;s Thanksgiving Day Parade glam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRq329Sm5k3_w0hiZBVJUlBZRhR53-EANQOSVDzudfzlNM4CmlbtezQXabzH1qnVRSjNiz-rgDK" alt="All the details on Keltie Knight&#39;s Thanksgiving Day Parade glam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Macy&#39;s Thanksgiving Day Parade host Keltie Knight exclusively takes Page Six Style behind-the-scenes of how she got ready for the event in New York City.</p></div>
            </div>
        </a>
        </Template></>;
}