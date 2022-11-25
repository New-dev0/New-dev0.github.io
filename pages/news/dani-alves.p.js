import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dani Alves</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dani Alves"/>
        <meta name="description" content="Trending News about Dani Alves" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dani Alves</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb14ca9dfc79b5e1b/63710051e1e6ad109040bee1/GettyImages-1244745070(1).jpg" alt="Dani Alves"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/de/meldungen/paris-saint-germain-brasilien-star-dani-alves-kylian-mbappe/blt7f9ebefb4ee0d8a7'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasilien-Star Dani Alves schießt gegen Kylian Mbappé von Paris ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUiLSPmF-QCM8u55rCOUh1mgVNdIBvn1crYdWeGM3rGwtacA8E8iS7-wz2kmtXBZ76NPTBI0RG" alt="Brasilien-Star Dani Alves schießt gegen Kylian Mbappé von Paris ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kylian Mbappé, Superstar von Paris Saint-Germain, bekommt von Dani Alves, einem Star aus Brasiliens Nationalmannschaft, eine klare Ansage.</p></div>
            </div>
        </a>
        </Template></>;
}