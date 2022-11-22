import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bimba e Lola</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bimba e Lola"/>
        <meta name="description" content="Trending News about Bimba e Lola" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bimba e Lola</h1>
            <Image width={800} height={500} src="https://www.nit.pt/wp-content/plugins/madmen-opengraph-image-v2/madmen-opengraph-image.php?post_id=986079&ts=20221121161112" alt="Bimba e Lola"/>
            <h3>Recent News</h3>
            <a href='https://www.nit.pt/compras/lojas-e-marcas/carteiras-mais-procuradas-da-bimba-y-lola-estao-com-descontos-ate-50'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As carteiras mais procuradas da Bimba y Lola estão com descontos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDKwpHbSPOfP6L5ZsmFZrN-QrROt3eWBTWoLZtHN3GI-BjljdlOY1W5I3M_A03YW9hy67m6v7u" alt="As carteiras mais procuradas da Bimba y Lola estão com descontos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar de existirem modelos de luxo incontornáveis, de marcas como a Hermès, Louis Vuitton e Chanel, também é possível encontrar propostas irresistíveis em&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}