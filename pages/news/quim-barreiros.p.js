import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Quim Barreiros</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Quim Barreiros"/>
        <meta name="description" content="Trending News about Quim Barreiros" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Quim Barreiros</h1>
            <Image width={800} height={500} src="https://maissemanario.pt/wp-content/uploads/2022/12/transferir.jpg" alt="Quim Barreiros"/>
            <h3>Recent News</h3>
            <a href='https://maissemanario.pt/noite-de-comedia-e-quim-barreiros-nas-festas-de-santa-luzia-em-navais/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Noite de comédia e Quim Barreiros nas festas de Santa Luzia em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjdE3lU7Wl7xmGDbicXxRSHh_z7xI-2LwXl8RLAe8IkJFXrJjVRmOQTPddHtBq5PvF4PMPZZl1" alt="Noite de comédia e Quim Barreiros nas festas de Santa Luzia em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No programa religioso, o dia de domingo, 11 de dezembro, pelas 11 horas será celebrada uma missa e pelas ruas da freguesia durante a tarde vai circular a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}