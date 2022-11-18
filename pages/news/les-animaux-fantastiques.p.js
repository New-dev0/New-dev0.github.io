import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Les Animaux Fantastiques</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Les Animaux Fantastiques"/>
        <meta name="description" content="Trending News about Les Animaux Fantastiques" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Les Animaux Fantastiques</h1>
            <Image width={800} height={500} src="https://resize.prod.femina.ladmedia.fr/rblr/1401,978/img/var/2022-11/les-animaux-fantastiques.jpg" alt="Les Animaux Fantastiques"/>
            <h3>Recent News</h3>
            <a href='https://www.femina.fr/article/les-animaux-fantastiques-10-references-a-harry-potter-que-vous-avez-certainement-manque'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Les Animaux Fantastiques » : 10 références à « Harry Potter » que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcThiyx4-bXe49HmMyKuWorbq6v-Rcm36x3AXQsoM1J5krmHZDZPziQ6BY3L_Uz8TL197WMihSVB" alt="« Les Animaux Fantastiques » : 10 références à « Harry Potter » que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1. LestrangeDans Les Animaux Fantastiques, Norbert Dragonneau nous emmène dans sa cabane où il cache toutes les créatures qu&#39;il a recueillies. Apparaî...</p></div>
            </div>
        </a>
        </Template></>;
}