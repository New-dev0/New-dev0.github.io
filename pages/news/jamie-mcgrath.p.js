import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jamie McGrath</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jamie McGrath"/>
        <meta name="description" content="Trending News about Jamie McGrath" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jamie McGrath</h1>
            <Image width={800} height={500} src="https://www.independent.ie/sport/soccer/international-soccer/54db9/42159618.ece/AUTOCROP/w1240h700/SD7_0667" alt="Jamie McGrath"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.ie/sport/soccer/international-soccer/its-been-a-tough-year-jamie-mcgrath-happy-to-be-back-in-green-jersey-42159619.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;It&#39;s been a tough year&#39; – Jamie McGrath happy to be back in green ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuNtIW5pQVdsSAyT4fcmshbYQM6mERQP-PKcXXOT65Ryeu5rrw_p203JzkPZRaQg2d-pz6KPHo" alt="&#39;It&#39;s been a tough year&#39; – Jamie McGrath happy to be back in green ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamie McGrath reflected on the ups and downs of football after he made his Ireland return following a strange year in his club career.</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/sport/soccer/arid-41011121.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;No classic&#39; as Jamie McGrath admits improvement needed from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ21Pe3sXxUV52BKDJHtXlaBoH0Rqp3sTljLV0y-55RbflGzX9J9l8Y-fL4f6DDOtbJyvPe6qDA" alt="&#39;No classic&#39; as Jamie McGrath admits improvement needed from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stephen Kenny was glad of the clean sheet as the Boys in Green won narrowly in Malta.</p></div>
            </div>
        </a>
        </Template></>;
}