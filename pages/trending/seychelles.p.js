import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Seychelles</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Seychelles"/>
        <meta name="description" content="Trending News about Seychelles" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Seychelles</h1>
            <Image width={800} height={500} src="https://www.africa-newsroom.com/files/large/7ef6ac7a7b0a5cb" alt="Seychelles"/>
            <h3>Recent News</h3>
            <a href='https://african.business/2022/11/apo-newsfeed/seychelles-charge-d-affairs-en-pied-e-p-of-the-republic-of-indonesia-presents-letters-of-credentials/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seychelles: Chargé d &#39;Affairs en Pied (e.p.) of the Republic of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTE-jqGyRcr2aU4S3wWGPEO7ceX7CZKHqaXxPU81V5EagpnMxveyOXJ0hyN61vxoyZK6VjD7ahQ" alt="Seychelles: Chargé d &#39;Affairs en Pied (e.p.) of the Republic of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Download logoThe Principal Secretary for Foreign Affairs, Ambassador Vivianne Fock Tave, accepted the credentials of the new Chargé d&#39;Affaires e.p of the.</p></div>
            </div>
        </a>
        </Template></>;
}