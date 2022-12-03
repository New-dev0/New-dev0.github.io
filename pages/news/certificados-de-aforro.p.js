import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Certificados de Aforro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Certificados de Aforro"/>
        <meta name="description" content="Trending News about Certificados de Aforro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Certificados de Aforro</h1>
            <Image width={800} height={500} src="https://eco.imgix.net/uploads/2019/02/certeficados-de-aforro.png?mark64=aHR0cHM6Ly9lY28uaW1naXgubmV0L0VDT193YXRlcm1hcmsucG5nP2ZtPXBuZw%3D%3D&markscale=33&markalign=center,left&w=1200" alt="Certificados de Aforro"/>
            <h3>Recent News</h3>
            <a href='https://eco.sapo.pt/2022/12/02/taxa-de-juro-dos-certificados-de-aforro-supera-os-28/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Taxa de juro dos Certificados de Aforro supera os 2,8%</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSEn66RCwVEAAsPisA8bgFljj539Zd5d0IxEec0JToD1Iu6FeF8oYFWlL293oH_Uqk3MM22icth" alt="Taxa de juro dos Certificados de Aforro supera os 2,8%" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Desde o início do ano que a taxa de juro dos Certificados de Aforro foi multiplicada por sete vezes, passando de 0,41% em janeiro para 2,84% nas subscrições&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}