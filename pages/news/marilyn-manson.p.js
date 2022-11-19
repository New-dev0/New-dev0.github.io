import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marilyn Manson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marilyn Manson"/>
        <meta name="description" content="Trending News about Marilyn Manson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marilyn Manson</h1>
            <Image width={800} height={500} src="https://www.metal-hammer.de/wp-content/uploads/2022/11/18/10/marilynmanson-11-von-14_binary_624018.jpg" alt="Marilyn Manson"/>
            <h3>Recent News</h3>
            <a href='https://www.metal-hammer.de/marilyn-manson-beklagt-das-ende-seiner-karriere-1992747/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Marilyn Manson beklagt das „Ende“ seiner...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgA0j9O5GeN8rTC02RtneNUwG9J03ptJGW6vlTii1u1jHWsvn3nvM69y1JqtZZ8PebUmXm74L7" alt="Marilyn Manson beklagt das „Ende“ seiner..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Drei seiner Anklägerinnen, darunter Ex-Freundin Ashley Morgan Smithline, &#39;Game Of Thrones&#39;-Darstellerin Esmé Bianco und Schauspielerin Evan Rachel Wood, haben&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}