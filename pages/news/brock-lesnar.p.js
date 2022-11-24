import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brock Lesnar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brock Lesnar"/>
        <meta name="description" content="Trending News about Brock Lesnar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brock Lesnar</h1>
            <Image width={800} height={500} src="https://cdn.givemesport.com/wp-content/uploads/2022/11/cropped-Collage-Maker-23-Nov-2022-11.43-AM-1.jpg" alt="Brock Lesnar"/>
            <h3>Recent News</h3>
            <a href='https://www.givemesport.com/88087178-wwe-brock-lesnars-daughter-looks-so-much-like-him-its-actually-quite-scary'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WWE: Brock Lesnar&#39;s daughter looks so much like him it&#39;s actually ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT1leGJBx_52bqItlCyOAEG-Gfnd7WWINFOf1vfuTjPAk9isftW1X9i78EhqXCMBLVfuyF1upMO" alt="WWE: Brock Lesnar&#39;s daughter looks so much like him it&#39;s actually ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brock Lesnar is one of the most legitimately terrifying wrestlers to ever step foot inside a WWE ring. But perhaps even more frightening than that is the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}