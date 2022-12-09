import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Philippe Caverivière</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Philippe Caverivière"/>
        <meta name="description" content="Trending News about Philippe Caverivière" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Philippe Caverivière</h1>
            <Image width={800} height={500} src="" alt="Philippe Caverivière"/>
            <h3>Recent News</h3>
            <a href='https://www.gala.fr/l_actu/news_de_stars/video-marine-le-pen-hilare-philippe-caveriviere-debarque-avec-son-chat-en-direct_508186'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VIDÉO – Marine Le Pen hilare : Philippe Caverivière débarque avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlpDpVpAQC3lItRLVPgyVCE2YPr1GoXOU-Ld0JrHC-VpnoA6lWWlnqikO9wQJe-FWJ0OqXSPsH" alt="VIDÉO – Marine Le Pen hilare : Philippe Caverivière débarque avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marine Le Pen était l&#39;invitée de RTL, ce jeudi 8 décembre. L&#39;ex-présidente du Rassemblement national était présente lors de la chronique de Philipp...</p></div>
            </div>
        </a><a href='https://www.rtl.fr/actu/debats-societe/philippe-caveriviere-etre-enterre-avec-son-animal-prefere-une-bonne-nouvelle-pour-les-zoophiles-7900213751'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Philippe Caverivière : &quot;Être enterré avec son animal préféré, une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR2uO6QpumC5CqlVoB__2iQketyjQGUVt5PoEOfvjHzA1pQkNjyLaq4KZtiBJ1G5giDGnW-UUQb" alt="Philippe Caverivière : &quot;Être enterré avec son animal préféré, une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pour sa chronique du jeudi 8 décembre, Philippe Caverivière faisait face à Marine Le Pen.</p></div>
            </div>
        </a>
        </Template></>;
}