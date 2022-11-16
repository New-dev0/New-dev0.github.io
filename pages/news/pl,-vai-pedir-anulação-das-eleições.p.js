import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>PL, vai pedir anulação das eleições</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,PL, vai pedir anulação das eleições"/>
        <meta name="description" content="Trending News about PL, vai pedir anulação das eleições" /></Head><Template>
            <h1 style={{fontSize: "30"}}>PL, vai pedir anulação das eleições</h1>
            <Image width={800} height={500} src="https://cdn.oantagonista.com/uploads/2022/03/Valdemar-Costa-Neto-Jair-Bolsonaro-1024x576.jpg" alt="PL, vai pedir anulação das eleições"/>
            <h3>Recent News</h3>
            <a href='https://oantagonista.uol.com.br/brasil/exclusivo-pl-vai-pedir-anulacao-das-eleicoes-de-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Exclusivo: PL vai pedir anulação das eleições de 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSt4zCzeZMRJJ_reGY23TMak938ChNIwLS95GqW__ceBc-3px0MdOePeqWCmnGflIa5-_NzLDR" alt="Exclusivo: PL vai pedir anulação das eleições de 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Auditoria contratada pelo partido de Jair Bolsonaro diz ser impossível &quot;validar os resultados gerados nas urnas de 2009, 2010, 2011, 2013 e 2015&quot;.</p></div>
            </div>
        </a><a href='https://revistaoeste.com/politica/pl-vai-pedir-a-anulacao-da-eleicao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PL vai pedir a anulação da eleição</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQnN8Ffxk-pFwz3V8Z6qJoyZGjRMdYu9neTvPNmFrCWxAqxwXCg96YH2vrrpdMra9ST7p9MMb97" alt="PL vai pedir a anulação da eleição" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Partido Liberal (PL), do presidente Jair Bolsonaro, vai pedir ao Tribunal Superior Eleitoral (TSE) a anulação da eleição.</p></div>
            </div>
        </a><a href='https://www.maranhaohoje.com/destaque/partido-de-jair-bolsonaro-vai-pedir-anulacao-da-eleicao-por-uma-suposta-parcialidade-do-tse/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Partido de Jair Bolsonaro vai pedir anulação da eleição por uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_1CMcHVuMFhmhuC5ysbkjVf-qMPuHg4BexRnke5_zWMZRilYZPqCbbSny5xdGrfv03k58SiqH" alt="Partido de Jair Bolsonaro vai pedir anulação da eleição por uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O partido do presidente Jair Bolsonaro, PL, vai pedir ao Tribunal Superior Eleitoral a anulação das eleições de 2022. A ação leva em conta ao menos duas&nbsp;...</p></div>
            </div>
        </a><a href='https://jovempan.com.br/noticias/politica/pl-deve-pedir-ao-tse-anulacao-das-eleicoes-de-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PL deve pedir ao TSE anulação das eleições de 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTO4jN9AuldvhCIRHCc74_UXBVp1MIyTq7PGo_cstzoCvAIYg1fqwEOd-gCUjA-V4JiTFFolQtL" alt="PL deve pedir ao TSE anulação das eleições de 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Documento elaborado pela auditoria do Instituto Voto Legal diz que não é possível validar o resultado das urnas.</p></div>
            </div>
        </a><a href='https://schoje.news/2022/11/15/pl-vai-pedir-anulacao-das-eleicoes-de-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PL vai pedir anulação das eleições de 2022 | SC Hoje News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR_I0-SfydIF15UNingmEf_ksBNoEzU4wT8MIlPngirLOK3yJ1oA_-Q8XldRm73_nIBcm7pKnEO" alt="PL vai pedir anulação das eleições de 2022 | SC Hoje News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com reportagem publicada nesta terça-feira(15) pelo Portal O Antagonista, O partido Liberal(PL) vai pedir ao Tribunal Superior&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}