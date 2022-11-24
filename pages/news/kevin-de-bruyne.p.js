import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kevin De Bruyne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kevin De Bruyne"/>
        <meta name="description" content="Trending News about Kevin De Bruyne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kevin De Bruyne</h1>
            <Image width={800} height={500} src="https://images.bstatic.de/kc4Cu2lXQqe_-eVdWuAJ5Gl0Kik=/1200x630/filters:focal(976x546:996x566)/images/c8691a86/4abb/446d/8bf6/00633f447aef.jpg" alt="Kevin De Bruyne"/>
            <h3>Recent News</h3>
            <a href='https://www.bunte.de/stars/star-news/belgien-star-kevin-de-bruyne-wurde-als-jugendlicher-von-gastfamilie-verstossen.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belgien-Star Kevin De Bruyne wurde als Jugendlicher von ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_KRORiGrh6Rx7x3fZv3hSP3Q6lmwP7cHlAUHDB8Kk9t7sWi3ELO7GION38yUZb1hy1Hzv0x_-" alt="Belgien-Star Kevin De Bruyne wurde als Jugendlicher von ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin de Bruyne ist ein Hoffnungsträger der WM 2022. Bevor er es in die belgische Nationalmannschaft schaffte, musste der Fußballer einen schweren&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}