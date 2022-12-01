import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruce Springsteen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruce Springsteen"/>
        <meta name="description" content="Trending News about Bruce Springsteen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruce Springsteen</h1>
            <Image width={800} height={500} src="https://www.leparisien.fr/resizer/f_yF5VK92xYv1q3T1-1rQ_74mjA=/1200x675/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/PYFHYHNVAJGA7HI2R7TLCYUXMU.jpg" alt="Bruce Springsteen"/>
            <h3>Recent News</h3>
            <a href='https://www.leparisien.fr/culture-loisirs/tv/programme-tv-du-mercredi-30-novembre-faut-pas-rever-taxi-5-bruce-springsteen-notre-selection-30-11-2022-MRSZCRIEKVBHFGFZJULQN6LETI.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Programme TV du mercredi 30 novembre : «Faut pas rêver», «Taxi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRUMtMaQAuIc_u-tSA8rPLrIwBTQJ3PIcNnUf3pwb52BsvqRqcIaQW3n_mqMFosebxqhk9VRnS" alt="Programme TV du mercredi 30 novembre : «Faut pas rêver», «Taxi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Une balade sous le soleil du Midi, un «Taxi» rajeuni par Franck Gastambide, un voyage rock&#39;n&#39;roll avec Bruce Springsteen… Voici nos suggestions pour votre&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}