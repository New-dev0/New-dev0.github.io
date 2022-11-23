import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sainte cecile</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sainte cecile"/>
        <meta name="description" content="Trending News about Sainte cecile" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sainte cecile</h1>
            <Image width={800} height={500} src="https://www.radiofrance.fr/s3/cruiser-production/2022/11/276526e9-5c30-4f9e-a4a8-1c93093e97c6/1200x630_nicolas-poussin-sainte-cecile.jpg" alt="Sainte cecile"/>
            <h3>Recent News</h3>
            <a href='https://www.radiofrance.fr/francemusique/podcasts/allegretto/allegretto-du-mardi-22-novembre-2022-8074402'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ode à Sainte Cécile</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxhp8M4luW2CaYyKGOfFbYUO5OCUWDcprxZyHG7mG-NzVX82xuV6xjlbMNmlSAq36onXAL1CNo" alt="Ode à Sainte Cécile" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patronne des musiciens et de la musique sacrée, Sainte Cécile est célébrée tous les 22 novembre. Elle inspire les compositeurs depuis des siècles,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}