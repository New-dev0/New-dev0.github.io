import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fertagus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fertagus"/>
        <meta name="description" content="Trending News about Fertagus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fertagus</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/tsf/image.jpg?brand=TSF&type=generate&guid=5221868f-9596-4174-a8c2-f4c756287d9a&w=800&h=420&watermark=true&t=20221115195200" alt="Fertagus"/>
            <h3>Recent News</h3>
            <a href='https://www.tsf.pt/portugal/sociedade/avaria-provoca-atrasos-muito-significativos-na-circulacao-de-comboios-da-fertagus-15355446.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Tendência a normalizar.&quot; Resolvida avaria que provocou atrasos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSvWe0iPYuUguzXTFSwVYSOdmSEtW_9UH9_e1EQZnDlcC0pvRcQIedcwXH2tbIQGouDJ36irfw" alt="&quot;Tendência a normalizar.&quot; Resolvida avaria que provocou atrasos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A avaria que obrigou os comboios operados pela Fertagus, que ligam Lisboa e a margem Sul do Tejo, a circular em &quot;via única&quot; entre o Pragal e Campolide foi&nbsp;...</p></div>
            </div>
        </a><a href='https://expresso.pt/sociedade/2022-11-15-Comboios-lotados-e-com-atrasos-muito-significativos-na-ponte-25-de-abril-por-causa-de-avaria-b71ed329'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comboios lotados e com atrasos “muito significativos” na ponte 25 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ5Xpgs7e3Z2_li20Rbg6L7JP-QCHukPHblqvrJyo_z03DgNfo5MB4XYIPzuvPwrWUOrw0L7mW2" alt="Comboios lotados e com atrasos “muito significativos” na ponte 25 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Circulação entre a estação do Pragal e Lisboa feita em via única levou à acumulação de muitos passageiros nas carruagens durante bastante tempo.</p></div>
            </div>
        </a>
        </Template></>;
}