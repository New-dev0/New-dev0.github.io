import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pierre Gasly</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pierre Gasly"/>
        <meta name="description" content="Trending News about Pierre Gasly" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pierre Gasly</h1>
            <Image width={800} height={500} src="https://famashow.pt/wp-content/uploads/2022/11/GettyImages-1244869067-1024x683.jpg" alt="Pierre Gasly"/>
            <h3>Recent News</h3>
            <a href='https://famashow.pt/famosos/kika-cerqueira-gomes-e-pierre-gasly-passeiam-juntos-e-mostram-se-apaixonados/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kika Cerqueira Gomes e Pierre Gasly passeiam juntos e mostram ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeuw-VI4h4o8ouE0zSg4AxBpz6Io9jBVSKr2BXiKC3M8SoWFw9PLWr4E4EQgLmbz2Fm1mdoer3" alt="Kika Cerqueira Gomes e Pierre Gasly passeiam juntos e mostram ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nos últimos dias têm surgido juntos, a passear, e não escondem o clima de romance. Segundo parece a filha de Maria Cerqueira Gomes tem acompanhado o francês em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.maria.pt/noticias-e-tv/namoro-assumido-kika-cerqueira-gomes-faz-furor-ao-lado-do-piloto-pierre-gasly-em-abu-dhabi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Namoro assumido: Kika Cerqueira Gomes faz furor ao lado do piloto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMai0kCmtF3dvOpL_XyKGzTKJOGCillFESNbfFYBT3HdsngrnbkFvCw8HJx1mOMzG7xzn-BKnD" alt="Namoro assumido: Kika Cerqueira Gomes faz furor ao lado do piloto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kika Cerqueira Gomes e Pierre Gasly assumiram a relação em Abu Dhabi, a propósito de várias provas de Fórmula 1 que estão a decorrer naquele país.</p></div>
            </div>
        </a><a href='https://www.atelevisao.com/famosos/apaixonados-francisca-cerqueira-gomes-apanhada-em-passeio-com-o-namorado/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Apaixonados! Francisca Cerqueira Gomes &#39;apanhada&#39; em passeio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSALPBNMHJG8cHaquKYhzqASYvbHlq3wFEt6RDzGc7tDlc_5HIfC46tyPWFv11EGV7hi3cPg0r7" alt="Apaixonados! Francisca Cerqueira Gomes &#39;apanhada&#39; em passeio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após vários meses de rumores a circular pela imprensa, chegou a confirmação. Francisca Cerqueira Gomes e Pierre Gasly estão apaixonados e já não escondem o.</p></div>
            </div>
        </a>
        </Template></>;
}