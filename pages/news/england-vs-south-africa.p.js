import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England vs South Africa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England vs South Africa"/>
        <meta name="description" content="Trending News about England vs South Africa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England vs South Africa</h1>
            <Image width={800} height={500} src="https://eu-cdn.rugbypass.com/wp/wp-content/uploads/2022/11/GettyImages-1444792305-1-1200x630.jpg?id=262620" alt="England vs South Africa"/>
            <h3>Recent News</h3>
            <a href='https://www.rugbypass.com/news/england-player-ratings-vs-south-africa-autumn-nations-series/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England player ratings vs South Africa | Autumn Nations Series</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkC8mU2fz1rC0obyzaV1jPSkITEirtH9fzTGTFgqUAXcXOtHInwS1zka6SEQa47GSLbu9N_Ami" alt="England player ratings vs South Africa | Autumn Nations Series" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England player ratings live from Twickenham: A deja vu scenario, but with quite a damaging outcome for England on this occasion.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/rugby-union/news/england-vs-south-africa-live-stream-tv-channel-lineups-2022/thnukdgyg6deqnvfddefpods'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England vs. South Africa result, highlights and analysis as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnjOqGwdiqciztAEbPqFqY14adeMGDZhn5QxSB1t4Z86gWa76FIbClFVHHPPz_Sn52WLvktevL" alt="England vs. South Africa result, highlights and analysis as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Africa produced a gold-standard performance at Twickenham to dispatch England in the final international rugby match of 2022, with the Springboks a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/rugby/springboks/live-england-v-springboks-20221126-7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RECAP | Powerful Springboks demolish England pack to silence ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyfZKvPColold_YYZUsQEKt-s9LA4U6lgiAB7rkL2wzfJ6PQyx0laCP7Qt00N6toZmaGTgzQ2r" alt="RECAP | Powerful Springboks demolish England pack to silence ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LIVE scoring and interactive commentary on the Test between England and South Africa from Twickenham.</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/sport/rugby/rugby-union/england-south-africa-live-stream-score-result-b2233529.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>England vs South Africa LIVE rugby: Final score and result as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSoZAI9nIEyvV096yecesskksmJelStulBaHhlYc0aVzUggNlIqvihc5AKaPkUyDlV6GoJG3oYi" alt="England vs South Africa LIVE rugby: Final score and result as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England 13-27 South Africa: Thomas Du Toit sent off but Springboks cruise to a win that completes a poor autumn for England.</p></div>
            </div>
        </a>
        </Template></>;
}