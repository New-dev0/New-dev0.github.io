import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Encantada</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Encantada"/>
        <meta name="description" content="Trending News about Encantada" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Encantada</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/jfInRSwHVMp8PkOjL_yChbq2IpA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/8/L/HHaFKrTG240LpQAqed4Q/tucano1.jpg" alt="Encantada"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/sp/sao-carlos-regiao/noticia/2022/11/19/tucanos-sao-flagrados-em-arvore-em-frente-a-salao-de-beleza-de-sao-carlos-encantada-diz-maquiadora.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tucanos são flagrados em árvore em frente à salão de beleza de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcShxBNvioeD2aUmnxT8ZRBI4TSlNu9FInzIfd5ITIlfzd8UxmVEAK6pA8xC5j64BgrB6pOBEQoN" alt="Tucanos são flagrados em árvore em frente à salão de beleza de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Letícia Bianco disse ao g1 que aves costumam aparecer para comer pitangas de uma árvore plantada na avenida.</p></div>
            </div>
        </a>
        </Template></>;
}