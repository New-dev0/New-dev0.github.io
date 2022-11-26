import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Shubman Gill</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Shubman Gill"/>
        <meta name="description" content="Trending News about Shubman Gill" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Shubman Gill</h1>
            <Image width={800} height={500} src="https://english.cdn.zeenews.com/sites/default/files/2022/11/25/1121578-galleryshubmansaralead.jpg" alt="Shubman Gill"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/photos/sports/shubman-gill-scores-4th-odi-fifty-know-about-his-affair-with-sara-ali-khan-in-pics-2539839'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shubman Gill scores 4th ODI fifty: Know about his affair with Sara Ali ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfPE_f3PvrP2MgDljCNAMO87VYUA9cSxpTKwx9B4oOtKtU2araQSf4Dsgf4K8D7jeP2kwhFGWwOA" alt="Shubman Gill scores 4th ODI fifty: Know about his affair with Sara Ali ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shubman Gill continued his brilliant run of form in ODI cricket in 2022 season, scoring his fourth ODI fifty apart from a century this year.</p></div>
            </div>
        </a><a href='https://thesportsrush.com/cricket-news-shubman-gill-gf-are-sara-ali-khan-and-shubman-gill-dating/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shubman Gill GF: Are Sara Ali Khan and Shubman Gill dating?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSBTYur3AHR0iIHi04rCAEUWlhUmhAZN35RDDWLaClsXMw5-ky4rn2C4Ig0LHnzEGTe7N6EMYN" alt="Shubman Gill GF: Are Sara Ali Khan and Shubman Gill dating?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inda&#39;s young batter Shubman Gill is slowly growing his stature in international cricket. The batter from Punjab is called India&#39;s next prodigy and has been&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}