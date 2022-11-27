import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Maria de lurdes Resende</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Maria de lurdes Resende"/>
        <meta name="description" content="Trending News about Maria de lurdes Resende" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Maria de lurdes Resende</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/tsf/image.jpg?brand=TSF&type=generate&guid=806ef57b-fb4e-4d34-9d13-cefdbcc29ce4&w=800&h=420&watermark=true&t=20221126094600" alt="Maria de lurdes Resende"/>
            <h3>Recent News</h3>
            <a href='https://www.tsf.pt/portugal/cultura/rainha-da-radio-morreu-a-canconetista-maria-de-lourdes-resende-15390272.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Rainha da Rádio.&quot; Morreu a cançonetista Maria de Lourdes Resende</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTHN-vb_u6OGkMOs-O3e_TRQ7X-eirVwii3QnNmk3s9g85ODvORA_GjJ-LexZkZaTl8yPWuObof" alt="&quot;Rainha da Rádio.&quot; Morreu a cançonetista Maria de Lourdes Resende" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cançonetista Maria de Lourdes Resende, de 95 anos, morreu na passada sexta-feira à noite, na sua residência, em Lisboa, disse este sábado o seu ex-agente&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/26/culturaipsilon/noticia/maria-lourdes-resende-19272022-eleita-duas-vezes-rainha-radio-2029314'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maria de Lourdes Resende (1927-2022), eleita duas vezes Rainha ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdkbry1Ev7XU03a8RU4o101rlAwFax5ejw2JdQK39TMJwGZ6VYcvW322dG8aVURO9_QVWphuJO" alt="Maria de Lourdes Resende (1927-2022), eleita duas vezes Rainha ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maria de Lourdes Resende projectava ser cantora lírica, mas gravou êxitos como Alcobaça, e foi eleita rainha do espectáculo, em 1956, e por duas vezes da&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/noticia/vida/2022/11/26/maria-de-lourdes-resende-rainha-da-radio-morre-aos-95-anos/309615/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maria de Lourdes Resende. &quot;Rainha da Rádio&quot; morre aos 95 anos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpunfgDWRswELfD4A-qlLZEmzrznFuesAGJ3FdmXq4DybGOC_GQUxm7yh83aLZvARIY2aUUxsC" alt="Maria de Lourdes Resende. &quot;Rainha da Rádio&quot; morre aos 95 anos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Alcobaça&quot; terá sido o mais popular êxito da &quot;Rainha da Rádio&quot; de 1955 e 1962, que projetava ser cantora lírica.</p></div>
            </div>
        </a><a href='https://www.noticiasdecoimbra.pt/morreu-maria-de-lourdes-resende-a-rainha-da-radio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morreu Maria de Lourdes Resende. A “Rainha da Rádio”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsEdz_VAnOMc1X0nPKqLetSlRxiXuTUVw8lZiGcsLL_2Jm4J0NNgBovSnFezc9KeEFFv-xPm7n" alt="Morreu Maria de Lourdes Resende. A “Rainha da Rádio”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maria de Lourdes Resende, falecida na sexta-feira aos 95 anos, projetava ser cantora lírica, mas gravou êxitos como “Alcobaça”, e foi eleita rainha do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}