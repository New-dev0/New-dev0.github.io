import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maite Kelly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maite Kelly"/>
        <meta name="description" content="Trending News about Maite Kelly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maite Kelly</h1>
            <Image width={800} height={500} src="https://heute-at-prod-images.imgix.net/2022/01/11/24270900-d62b-41f5-b76f-e4f878e0b07e.jpeg?rect=0%2C137%2C2956%2C1478&w=1280&auto=format" alt="Maite Kelly"/>
            <h3>Recent News</h3>
            <a href='https://www.heute.at/s/maite-kelly-trifft-toene-nicht-sie-reagiert-auf-insta-100242164'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maite Kelly trifft Töne nicht, sie reagiert auf Insta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRm4e1KlMT81_Xh8_7TXgYCsVYNDO38x6ZUqGqgQFI5c1QDFSV15tj680s7n8x32Q05nXvJma6N" alt="Maite Kelly trifft Töne nicht, sie reagiert auf Insta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Im Netz geht ein altes Video von Maite Kelly viral. Die Schlagersängerin meldete sich nun auf Insta zu Wort.</p></div>
            </div>
        </a>
        </Template></>;
}