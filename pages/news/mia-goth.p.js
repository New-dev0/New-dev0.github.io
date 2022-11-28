import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mia Goth</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mia Goth"/>
        <meta name="description" content="Trending News about Mia Goth" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mia Goth</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Flifestyle-sapo%2Ffacebook-overlay.png&epic=MmU5OLT7gdDMhYPQFw1ojjDxsP5m/sGUWPYyrWyvw1jtywokbTFjJupIQLJfyKoxq3dJMXRb6VGdqApljXX+zQ71IW6QRuug0wNJ1Wc+lv+svZk=" alt="Mia Goth"/>
            <h3>Recent News</h3>
            <a href='https://lifestyle.sapo.pt/fama/noticias-fama/artigos/shia-labeouf-e-mia-goth-em-rara-aparicao-com-a-filha-recem-nascida'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Shia LaBeouf e Mia Goth em rara aparição com a filha recém-nascida</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSUHwc57LoGmt4rMK9jY_tjosn_InffezvM36HKXqnICuwByVXBie7DxI-ukmMOvLD-ld6CojZH" alt="Shia LaBeouf e Mia Goth em rara aparição com a filha recém-nascida" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tem apenas 8 meses e, aparentemente, uma legião de paparazzis ansiosos por dá-la a conhecer. As imagens foram conseguidas, em exclusivo, pelo Page Six,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}