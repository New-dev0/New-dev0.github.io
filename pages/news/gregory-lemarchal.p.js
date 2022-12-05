import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gregory Lemarchal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gregory Lemarchal"/>
        <meta name="description" content="Trending News about Gregory Lemarchal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gregory Lemarchal</h1>
            <Image width={800} height={500} src="https://cdn-s-www.ledauphine.com/images/70B45C3A-1A29-4F7A-8660-5DAD0F2E713A/FB1200/photo-1556298760.jpg" alt="Gregory Lemarchal"/>
            <h3>Recent News</h3>
            <a href='https://www.ledauphine.com/culture-loisirs/2022/12/03/le-groupe-scolaire-officiellement-nomme-gregory-lemarchal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Savoie. Grégory Lemarchal : une école porte désormais le nom du ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSFcX3pwaFKdaXliLVcVyNiRrm_e9NOh4nkXDSyE1aqVP9qNkFW2YvmNLWT-k2NriUppQGE5qWK" alt="Savoie. Grégory Lemarchal : une école porte désormais le nom du ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vendredi, le groupe scolaire de Domessin a été baptisé Grégory-Lemarchal. Un nom choisi par les élus du conseil municipal jeunes.</p></div>
            </div>
        </a>
        </Template></>;
}