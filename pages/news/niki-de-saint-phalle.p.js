import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Niki de Saint Phalle</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Niki de Saint Phalle"/>
        <meta name="description" content="Trending News about Niki de Saint Phalle" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Niki de Saint Phalle</h1>
            <Image width={800} height={500} src="https://www.francetvinfo.fr/pictures/nPXjZqWAxdO3c5dP7z2olepDg6I/1500x843/2022/11/21/637be1f690e04_nicki-de-saint-phale.jpeg" alt="Niki de Saint Phalle"/>
            <h3>Recent News</h3>
            <a href='https://www.francetvinfo.fr/culture/arts-expos/sculpture/art-les-sculptures-de-niki-de-saint-phalle-entre-fantaisie-et-rebellion_5491653.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Art : les sculptures de Niki de Saint Phalle, entre fantaisie et rébellion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwT3BtoOEV3fWgQVGO4aRZlYO7MpuMSECaUivHZYRPIyy71m9TjjWuIbZMEVgGGwXniaA-ZU98" alt="Art : les sculptures de Niki de Saint Phalle, entre fantaisie et rébellion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Niki de Saint Phalle était une artiste chic, drôle et révolutionnaire qui a donné une place démesurée aux femmes et leurs représentations, les Nanas.</p></div>
            </div>
        </a>
        </Template></>;
}