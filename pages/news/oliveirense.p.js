import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Oliveirense</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Oliveirense"/>
        <meta name="description" content="Trending News about Oliveirense" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Oliveirense</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/12/08/639238af0783d.jpeg" alt="Oliveirense"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/futebol-internacional/rodrigo-moreira-destaca-grande-fase-da-ud-oliveirense-mas-ressalta-a-necessidade-de-seguirem-focados.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rodrigo Moreira destaca grande fase da UD Oliveirense, mas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR341Voxro6_Ik03ETElpf1oyvFBegdEcmHFg-Si9wGpw09lC8X51kcPKh_lT8m3C5obF_Dyv1L" alt="Rodrigo Moreira destaca grande fase da UD Oliveirense, mas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral-direito, o jovem Rodrigo Moreira é peça chave do time português, que no último final de semana goleou em jogo válido pela Taça sub-17.</p></div>
            </div>
        </a>
        </Template></>;
}