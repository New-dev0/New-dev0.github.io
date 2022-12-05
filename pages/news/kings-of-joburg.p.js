import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kings of Joburg</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kings of Joburg"/>
        <meta name="description" content="Trending News about Kings of Joburg" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kings of Joburg</h1>
            <Image width={800} height={500} src="https://s5.cdn.memeburn.com/wp-content/uploads/2021/09/blood-and-water-season-2-trailer.jpg" alt="Kings of Joburg"/>
            <h3>Recent News</h3>
            <a href='https://memeburn.com/2022/12/netflixs-festive-lineup-connie-ferguson-in-kings-of-joburg-blood-and-water/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix&#39;s festive lineup: Connie Ferguson in Kings of Joburg, Blood ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7qhx4_XX90DmOzNnchNJZEPOrFuAA06rpX5s369ZJoDau_ttg5kVjn7Hp0BkSA7bqPme1TC3r" alt="Netflix&#39;s festive lineup: Connie Ferguson in Kings of Joburg, Blood ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maybe they should call it kings and a queen of Joburg. What ever the name, viewers can expect to see a compelling sequel.</p></div>
            </div>
        </a>
        </Template></>;
}