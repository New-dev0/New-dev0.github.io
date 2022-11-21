import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cdm</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cdm"/>
        <meta name="description" content="Trending News about Cdm" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cdm</h1>
            <Image width={800} height={500} src="https://assets-fr.imgfoot.com/media/cache/1200x675/robert-pires.jpg" alt="Cdm"/>
            <h3>Recent News</h3>
            <a href='https://www.footmercato.net/a4420121076642810614-cdm-2022-robert-pires-juge-lequipe-de-france'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cdm 2022 : Robert Pirès juge l&#39;équipe de France</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR27isDx9jlzEEw1xKo_ZxaiuEZGilTjT90r0ZI10Eg0TuQo5mBU2jGj1Ne51wwsRKaKV98O0RX" alt="Cdm 2022 : Robert Pirès juge l&#39;équipe de France" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vainqueur de la Coupe du monde 1998, Robert Pirès sera de la partie pour la Coupe du monde 2022 au Qatar. L&#39;ancien milieu de terrain de l&#39;équipe (.</p></div>
            </div>
        </a>
        </Template></>;
}