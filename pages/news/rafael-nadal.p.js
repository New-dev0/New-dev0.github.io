import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rafael Nadal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rafael Nadal"/>
        <meta name="description" content="Trending News about Rafael Nadal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rafael Nadal</h1>
            <Image width={800} height={500} src="https://www.tennisnet.com/fileadmin/_processed_/5/1/csm_moya_trainingMatch_7db87c3fea.jpg" alt="Rafael Nadal"/>
            <h3>Recent News</h3>
            <a href='https://www.tennisnet.com/news/carlos-moya-ueber-rafael-nadal-trainingsleistung-nicht-im-match-gezeigt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Moya über Rafael Nadal - Trainingsleistung nicht im Match ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKQ2YzTpQX6Fwal9BEB53toWsMNWzg9zyC9q2fw-aD3FUGXfhcD0OagRlhUDZEWTwk0horpzVE" alt="Carlos Moya über Rafael Nadal - Trainingsleistung nicht im Match ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Moya hat nach dem enttäuschenden Gruppenaus seines Schützlings Rafael Nadal bei den Nitto-ATP-Finals in Turin eine differenzierte Bilanz gezogen.</p></div>
            </div>
        </a>
        </Template></>;
}