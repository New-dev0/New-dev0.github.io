import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ângelo Rodrigues</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ângelo Rodrigues"/>
        <meta name="description" content="Trending News about Ângelo Rodrigues" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ângelo Rodrigues</h1>
            <Image width={800} height={500} src="https://cdn.flash.pt/images/2022-08/img_1200x676$2022_08_30_11_00_18_315700_im_637974541041813602.png" alt="Ângelo Rodrigues"/>
            <h3>Recent News</h3>
            <a href='https://www.flash.pt/celebridades/nacional/detalhe/angelo-rodrigues-muda-de-vida-aos-35-anos-ator-ensina-ingles-para-comer'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ângelo Rodrigues muda de vida aos 35 anos. Ator ensina inglês ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS6-1-R8A2j6o2sUZbZhHRxHIjitihermf2o7FIyNQNXDYX-9Nmjjn3MkBPo6tRArGDD8bBFH1G" alt="Ângelo Rodrigues muda de vida aos 35 anos. Ator ensina inglês ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator trocou as novelas e os compromissos que elas acarretam por viagens e voluntariado pelo mundo.</p></div>
            </div>
        </a>
        </Template></>;
}