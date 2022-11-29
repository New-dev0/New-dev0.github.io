import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Milwaukee Bucks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Milwaukee Bucks"/>
        <meta name="description" content="Trending News about Milwaukee Bucks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Milwaukee Bucks</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/63849e259813eb4fc545979e/0x0.jpg?format=jpg&width=1200" alt="Milwaukee Bucks"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/briansampson/2022/11/28/milwaukee-bucks-like-to-experiment-with-different-lineups/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milwaukee Bucks Like To Experiment With Different Lineups</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRXw4gsaTamsKlx0PbZgAAWLSiBjsgJM0scYm6fvOAhKfwX1Kv1BF9JU2mz6jY5EPOuJVv2icfV" alt="Milwaukee Bucks Like To Experiment With Different Lineups" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>By far, the most-used combination has been the typical starters: Jrue Holiday, Jevon Carter, Grayson Allen, Giannis Antetokounmpo and Brook Lopez. They&#39;ve&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}