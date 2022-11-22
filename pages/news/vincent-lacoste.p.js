import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vincent Lacoste</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vincent Lacoste"/>
        <meta name="description" content="Trending News about Vincent Lacoste" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vincent Lacoste</h1>
            <Image width={800} height={500} src="https://www.radiofrance.fr/s3/cruiser-production/2022/11/bfdc6f3f-ec8d-40ff-978d-e32c32b610cb/1200x630_vincent-lacoste.jpg" alt="Vincent Lacoste"/>
            <h3>Recent News</h3>
            <a href='https://www.radiofrance.fr/franceinter/podcasts/c-est-encore-nous/c-est-encore-nous-du-lundi-21-novembre-2022-4475627'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Le comédien Vincent Lacoste</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3xfBya12oTD1B7jC2hbYgk2foU4WRuZcqpyGbq_qZbhedeX328O1F8NK_D5U2plngWD1Lywcl" alt="Le comédien Vincent Lacoste" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bonjour la France Inter ! Aujourd&#39;hui, Charline Vanhoenacker et Thomas Croisière reçoivent Vincent Lacoste !</p></div>
            </div>
        </a>
        </Template></>;
}