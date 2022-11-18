import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Menu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Menu"/>
        <meta name="description" content="Trending News about The Menu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Menu</h1>
            <Image width={800} height={500} src="https://cdn.unitycms.io/images/C7FbvdecKwr9CBBzagt6kW.jpg?op=ocroped&val=1200,1200,1000,501,262,0&sum=G33a3EevC7Q" alt="The Menu"/>
            <h3>Recent News</h3>
            <a href='https://www.tagesanzeiger.ch/krass-grandios-das-halten-zwei-zuercher-chefkoeche-von-the-menu-535844362160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«The Menu» in Zürich: Das halten die Starköche Heilemann und ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSITLk-i3VNQM8pH-5w3W07kmFOOySOVdy3Q-iFxJgP8cyfiVwrjMtUYG2_5Qy7cFqfLsaHHVhS" alt="«The Menu» in Zürich: Das halten die Starköche Heilemann und ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stefan Heilemann vom «Widder» und Markus Stöckle vom «Rosi» schauen sich «The Menu» an und machen sich Gedanken über ihre Branche.</p></div>
            </div>
        </a>
        </Template></>;
}