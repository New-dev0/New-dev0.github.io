import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Thermomix</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Thermomix"/>
        <meta name="description" content="Trending News about Thermomix" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Thermomix</h1>
            <Image width={800} height={500} src="https://www.leparisien.fr/resizer/THs7b_8cY3C88YOeWYVfiwLsVdA=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/JRU2MWRLXNGD7C4E3GSQYDK2KY.jpg" alt="Thermomix"/>
            <h3>Recent News</h3>
            <a href='https://www.leparisien.fr/guide-shopping/maison/voici-comment-obtenir-le-thermomix-tm6-de-vorwerk-a-moindre-cout-04-12-2022-MDPGQ3DERBASVDLH5CHTIRKWWA.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Voici comment obtenir le Thermomix TM6 de Vorwerk à moindre coût</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRR5db9YR5PXAJFDvYB3EPwcrcWQKWkeM9S1Vlf-q8COqlZWiPGrimU3Xovf-df19ymP8nYmAzE" alt="Voici comment obtenir le Thermomix TM6 de Vorwerk à moindre coût" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le Thermomix TM6 de Vorwerk fait partie des robots multifonctions les plus prisés, bien que son coût le rende inadapté aux personnes ayant un budget&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}