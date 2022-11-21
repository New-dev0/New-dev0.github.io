import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Camille Lellouche</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Camille Lellouche"/>
        <meta name="description" content="Trending News about Camille Lellouche" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Camille Lellouche</h1>
            <Image width={800} height={500} src="https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/11/star-academy-camille-lellouche-choquee-de-revoir-son-casting-rate-2.jpg" alt="Camille Lellouche"/>
            <h3>Recent News</h3>
            <a href='https://mcetv.ouest-france.fr/mon-mag-buzz/tele-realite/star-academy-camille-lellouche-choquee-de-revoir-son-casting-rate-20112022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Academy: Camille Lellouche choquée de revoir son casting raté !</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRkuZjNQNpjTeGqtpdbacn3WE0jJQ6BFE17uXvrI9Do_j0LrdSeX6VJnCx_dIfoTDVIEEEKnC0Y" alt="Star Academy: Camille Lellouche choquée de revoir son casting raté !" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avant de participer à The Voice, Camille Lellouche a tenté sa chance dans la Star Academy. Malheureusement, elle a raté son casting.</p></div>
            </div>
        </a><a href='https://www.nextplz.fr/people/289571-camille-lellouche-revele-avoir-tente-casting-star-academy-dit-tout'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Camille Lellouche : Elle révèle avoir tenté le casting de la Star ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1XEyBCaXA73DJGLPd1PTVsxnPEhusn5NestCKid8rKL79WUAZaEvHdskfrdU20myw0CmFNne1" alt="Camille Lellouche : Elle révèle avoir tenté le casting de la Star ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Camille Lellouche au casting de la Star Academy ? Ça aurait pu être réel ! La chanteuse révèle avoir tenté les auditions... On vous dit tout.</p></div>
            </div>
        </a>
        </Template></>;
}