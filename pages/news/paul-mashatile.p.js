import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paul Mashatile</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paul Mashatile"/>
        <meta name="description" content="Trending News about Paul Mashatile" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paul Mashatile</h1>
            <Image width={800} height={500} src="https://www.dailymaverick.co.za/wp-content/uploads/2022/12/OD-Ferial-CR-fraser.jpeg?w=1280" alt="Paul Mashatile"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymaverick.co.za/article/2022-12-01-despite-arthur-frasers-evidence-labelled-as-hearsay-the-spymaster-checkmated-ramaphosa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Despite Arthur Fraser&#39;s evidence labelled as &#39;hearsay&#39;, the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQK66gmI72Pj1NM--9JknTS_-GxBSQoUgqukz12cWPiiMBgGZ3H2MeVBKbDkuWTPyzGVkoOS2Mi" alt="Despite Arthur Fraser&#39;s evidence labelled as &#39;hearsay&#39;, the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Judge Sandile Ngcobo says spy boss&#39;s evidence &#39;hearsay&#39;, but still makes damning findings. Ramaphosa disputes Phala Phala alleged video evidence.</p></div>
            </div>
        </a>
        </Template></>;
}