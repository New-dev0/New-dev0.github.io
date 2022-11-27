import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DJ Sumbody funeral</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DJ Sumbody funeral"/>
        <meta name="description" content="Trending News about DJ Sumbody funeral" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DJ Sumbody funeral</h1>
            <Image width={800} height={500} src="https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_437,w_700/sutl3ngorr5omdtjlacz" alt="DJ Sumbody funeral"/>
            <h3>Recent News</h3>
            <a href='https://ewn.co.za/2022/11/26/people-of-pretoria-don-t-respect-a-black-life-malema-at-dj-sumbody-s-funeral'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;People of Pretoria don&#39;t respect a black life&#39;: Malema at DJ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8q0Xwdv14EfqJ7D6g7_BZ01DYyg193DyfWGwWYD4Ro4KOUU0Bf09W9CO8c6g4-K1-Q-Nm2ZzV" alt="&#39;People of Pretoria don&#39;t respect a black life&#39;: Malema at DJ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The EFF leader was speaking at the Amapiano hitmaker, real name Oupa Sefoka&#39;s funeral in Ga Masemola, Limpopo, on Saturday.</p></div>
            </div>
        </a>
        </Template></>;
}