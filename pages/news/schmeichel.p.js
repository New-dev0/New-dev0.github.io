import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Schmeichel</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Schmeichel"/>
        <meta name="description" content="Trending News about Schmeichel" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Schmeichel</h1>
            <Image width={800} height={500} src="https://www.ogcnice-assets.com/images/articles/unes/2022/11/gardiens-nissarts.jpg" alt="Schmeichel"/>
            <h3>Recent News</h3>
            <a href='https://www.ogcnice.com/fr/article/123143/schmeichel-face-aux-bleus-ce-samedi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Schmeichel face aux Bleus ce samedi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjR33Qpn_Kw8sNcVbz_zqDznDrRUKaUcRSgpntfjtiMCiusImeVeew6wcMHRcALr7T76dC9Ngh" alt="Schmeichel face aux Bleus ce samedi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>L&#39;ancien et l&#39;actuel gardien de l&#39;OGC Nice s&#39;affronteront ce samedi au Qatar, pour le compte de la 2e journée de la phase de poules. D&#39;un côté Hugo Lloris,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}