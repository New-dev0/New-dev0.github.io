import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Futebol ao Vivo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Futebol ao Vivo"/>
        <meta name="description" content="Trending News about Futebol ao Vivo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Futebol ao Vivo</h1>
            <Image width={800} height={500} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPINFdvyG68yeMOg2JKVx5c6nRX-x5eHv4WRZkAesRgbq9Caa5VT-7CijHXhcGAQpb72umDCKPLbuTVf8y6W5tnByYPEuXHQkVZZ-hXPXfjZZ0MMMtLlQgHcXXxUh2mPO0cZkD4960wvLb_SuB2WSxmxDqcYZ_vcarPaBUqifWvJmhs5D34HP9yXOaeg/w1600/brazil-1200-1200-675-675-crop-000000.jpg" alt="Futebol ao Vivo"/>
            <h3>Recent News</h3>
            <a href='https://www.ouniversodatv.com/2022/11/mundial-de-futebol-toma-conta-do-vivo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial de Futebol toma conta do Vivo Play</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWfmbw8F61No4aMh_sEw-7Q9nfPhtkuJMw8cniSoBTP6YgoRLtFeoLwwfLe7qEdJS0r5Rv3zf2" alt="Mundial de Futebol toma conta do Vivo Play" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acompanhe as principais notícias sobre TV paga e ainda fica atualizado com as novidades das plataformas de streaming e da programação dos canais.</p></div>
            </div>
        </a>
        </Template></>;
}