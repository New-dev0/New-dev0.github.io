import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Metaverso</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Metaverso"/>
        <meta name="description" content="Trending News about Metaverso" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Metaverso</h1>
            <Image width={800} height={500} src="https://infocredi360.com.br/images/a/1853/b2ap3_thumbnail_WhatsApp-Image-2022-11-30-at-10.58.08.jpeg" alt="Metaverso"/>
            <h3>Recent News</h3>
            <a href='https://infocredi360.com.br/exclusivos/a-influencia-do-metaverso-na-transformacao-do-setor-bancario'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A influência do Metaverso na transformação do setor bancário</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGC0aWKWwmR0WzOtrcjt19tUJEbnaxs-ZhzOMCUzN2Xu_oPvYogUzObEU4hGvwQbecU6SurSSu" alt="A influência do Metaverso na transformação do setor bancário" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Discussões em âmbito global, investimentos de empresas de diversos setores e a crescente aceitação da população fazem dele um ambiente tecnológico promissor&nbsp;...</p></div>
            </div>
        </a><a href='https://www.spacemoney.com.br/geral/por-que-axie-infinity-e-o-futuro-do-metaverso-e-o-que-isso-significa/187656/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que Axie Infinity é o futuro do metaverso e o que isso significa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgurSRvfhyuW8xb98kN0bQe2nvF6fDnCZtGUItm1gldyzY53t5_2cC_Mdexa9bOvP5tB5sGXyG" alt="Por que Axie Infinity é o futuro do metaverso e o que isso significa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BIG faturou mais de US$ 10 milhões durante sua pré-venda e está tentando esmagar sua concorrência e terminar o ano mais forte do que nunca.</p></div>
            </div>
        </a>
        </Template></>;
}