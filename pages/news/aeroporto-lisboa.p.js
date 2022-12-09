import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aeroporto Lisboa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aeroporto Lisboa"/>
        <meta name="description" content="Trending News about Aeroporto Lisboa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aeroporto Lisboa</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/6391b7b70cf27230dc1c3a18/og/cnn" alt="Aeroporto Lisboa"/>
            <h3>Recent News</h3>
            <a href='https://cnnportugal.iol.pt/videos/vejam-vejam-a-loucura-nem-o-aeroporto-de-lisboa-escapou-as-inundacoes/6391b63b0cf255d6e13f43e3'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Vejam, vejam a loucura”. Nem o aeroporto de Lisboa escapou às ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQwCmJnWQ8kv8it2ztGVTr3h2AXJLn4blddrV7WPuij1zcIQDRw_0ZvN65E4szT10znFBach_zd" alt="“Vejam, vejam a loucura”. Nem o aeroporto de Lisboa escapou às ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O aeroporto Humberto Delgado, em Lisboa, também foi atingido pelas inundações em Lisboa. Em vídeos partilhados nas redes sociais, os passageiros mostram-se&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}