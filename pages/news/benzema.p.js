import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Benzema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Benzema"/>
        <meta name="description" content="Trending News about Benzema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Benzema</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5273082743351fea/6386265308c63c714fd42652/G50_Lewandowski_vs_Benzema_16x9.jpg" alt="Benzema"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/de/meldungen/goal50-robert-lewandowski-vs-karim-benzema/bltd6bbb822e87f1dfb'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>GOAL50: Robert Lewandowski vs. Karim Benzema</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQoEw4rA_qDXjckb1ezqqZ6pHwuHYt6L48-VMgGCzmj0K_AgvtPtyExPsoofwghoWq0spyQSE3R" alt="GOAL50: Robert Lewandowski vs. Karim Benzema" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sie sind die besten Stürmer der Welt, aber wird Robert Lewandowski oder Karim Benzema Eure Stimme bei den GOAL50 bekommen?</p></div>
            </div>
        </a>
        </Template></>;
}