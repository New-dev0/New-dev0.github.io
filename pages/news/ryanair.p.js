import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ryanair</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ryanair"/>
        <meta name="description" content="Trending News about Ryanair" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ryanair</h1>
            <Image width={800} height={500} src="https://www.nit.pt/wp-content/plugins/madmen-opengraph-image-v2/madmen-opengraph-image.php?post_id=986671&ts=20221122131152" alt="Ryanair"/>
            <h3>Recent News</h3>
            <a href='https://www.nit.pt/fora-de-casa/viagens/nova-promocao-na-ryanair-pode-viajar-para-os-melhores-mercados-de-natal-por-7e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nova promoção na Ryanair: pode viajar para os melhores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTThWBrTlu170m3EybqP8tRLHlcWccsYo5HAvJVsxE8wcX7Xyght2uc9A3uNJPZq2ORGdRgf5vL" alt="Nova promoção na Ryanair: pode viajar para os melhores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carregue na galeria para descobrir sugestões de viagens para ir às compras nos melhores mercados de Natal da Europa.</p></div>
            </div>
        </a><a href='https://zap.aeiou.pt/ryanair-dezenas-voos-descontos-509092'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ryanair lança Cyber Week com dezenas de voos com descontos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTjqgwNXrL0ouWBsguM2uPtj27mrztdv7831UFGrmCBbGyyyve185okziSjA3E3oQSfRiFAckrc" alt="Ryanair lança Cyber Week com dezenas de voos com descontos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Todos os dias, a Ryanair vai anunciar promoções relativas à Cyber Week. Esta teçra-feira, há voos ao sábado a partir de 19,99 euros.</p></div>
            </div>
        </a>
        </Template></>;
}