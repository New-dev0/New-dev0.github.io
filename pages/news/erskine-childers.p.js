import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Erskine Childers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Erskine Childers"/>
        <meta name="description" content="Trending News about Erskine Childers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Erskine Childers</h1>
            <Image width={800} height={500} src="https://www.anphoblacht.com/files/images/620/2022/Portraits-of-eight-of-those-executed.png" alt="Erskine Childers"/>
            <h3>Recent News</h3>
            <a href='https://www.anphoblacht.com/contents/28409'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dublin remembers executed Republicans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCyxOOEsqksRMTbx96x1lWoU29wwqPIHjWUPzs58Rcz8Y2rsaWJxI2vx28QlIwOX0QqF5kxe4h" alt="Dublin remembers executed Republicans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Erskine Childers &middot; Glasnevin, 20 November &middot; The Republican Plot &middot; Sharon Kelly (centre) relative of Peter Cassidy, one of the first four executed &middot; Dessie Ellis TD.</p></div>
            </div>
        </a>
        </Template></>;
}