import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tvi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tvi"/>
        <meta name="description" content="Trending News about Tvi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tvi</h1>
            <Image width={800} height={500} src="https://www.novagente.pt/sites/default/files/styles/facebook_imagem/public/images/noticia/2022/2022-11/2022-11-24/nova-gente-98533-noticia-ator-este-natal-tvi-vai-deixa-lo-jantar-com-o-seu-idolo-saiba-como.jpg&t=780960596" alt="Tvi"/>
            <h3>Recent News</h3>
            <a href='https://www.novagente.pt/tvi-este-natal-pode-jantar-com-o-seu-idolo-saiba-como'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TVI - Este natal pode jantar com o seu ídolo. Saiba como!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQW1FIW0oTN7_Jh_63ltE8svfVibJA4BcQWIEgNMrWKE5TkxEPIV7Mev53Pu-Hd5ciTizZIRIQW" alt="TVI - Este natal pode jantar com o seu ídolo. Saiba como!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A TVI desafia-o a escolher três dos seus atores ou atrizes preferidos e, com sorte, a jantar com eles. A estação quer &quot;mudar a vida de uma família&quot; este&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}