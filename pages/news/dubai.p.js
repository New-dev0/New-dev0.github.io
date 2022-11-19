import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dubai</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dubai"/>
        <meta name="description" content="Trending News about Dubai" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dubai</h1>
            <Image width={800} height={500} src="https://hrportugal.sapo.pt/wp-content/uploads/2022/11/emiratescabincrew.jpg" alt="Dubai"/>
            <h3>Recent News</h3>
            <a href='https://hrportugal.sapo.pt/gostava-de-viver-no-dubai-com-alojamento-pago-salario-isento-de-impostos-e-varios-outros-beneficios-emirates-esta-novamente-a-recrutar-em-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gostava de viver no Dubai, com alojamento pago, salário isento de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtd9Qb_gJpsNsppokIY-dBHcNJSZHxWSTshhmLf_Nt2STG7GZw_98vD9UkXil6-5oea5LwyxtE" alt="Gostava de viver no Dubai, com alojamento pago, salário isento de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Emirates está à procura de candidatos portugueses para se juntarem à sua equipa internacional de tripulação de cabina, e estará presente em duas cidades&nbsp;...</p></div>
            </div>
        </a><a href='https://aeromagazine.uol.com.br/artigo/red-arrows-voam-ao-lado-do-a380-em-dubai.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Red Arrows voam ao lado do A380 em Dubai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSTRt7mHmEgAs9_O3N9_TmNLzg-cAxGDhqD4UZRp5yODfDGHTWRH-sV0zKn1H5ellYEADJuSBW" alt="Red Arrows voam ao lado do A380 em Dubai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um Airbus A380 da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}