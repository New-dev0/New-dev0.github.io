import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fleury</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fleury"/>
        <meta name="description" content="Trending News about Fleury" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fleury</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/z9Iv8DY5g0949v2F5voWN4pRGYk=/1200x/smart/filters:cover():strip_icc()/s02.video.glbimg.com/x720/11127801.jpg" alt="Fleury"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/sp/sao-paulo/noticia/2022/11/15/luiz-antonio-fleury-filho-ex-governador-de-sp-morre-aos-73-anos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luiz Antônio Fleury Filho, ex-governador de SP, morre aos 73 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXevXwxwMf3wIKFus8YyvMldr2xGDbBOCDjWPG8XEk-v4CdBRO0L-yZEyVuPTP8mSLs4B3Jl-3" alt="Luiz Antônio Fleury Filho, ex-governador de SP, morre aos 73 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Político governou o estado de São Paulo entre 1991 e 1994. Segundo a família, ele morreu em casa de insuficiência cardíaca.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/poder/2022/11/morre-aos-73-anos-luiz-antonio-fleury-filho-ex-governador-de-sp.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre aos 73 anos Luiz Antônio Fleury Filho, governador de SP de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIetnKx6890s3wdcCSPsPrjUgwFHTkm9rHVvS2UEVBnmfG-8pIVZWtmMmIGqb2q_0S8AdyvQFy" alt="Morre aos 73 anos Luiz Antônio Fleury Filho, governador de SP de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gestão ficou marcada pelo massacre do Carandiru; ele também foi promotor, secretário da Segurança e deputado federal.</p></div>
            </div>
        </a><a href='https://www.conjur.com.br/2022-nov-15/morre-ex-governador-sp-luiz-antonio-fleury-filho-aos-73-anos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre o ex-governador de SP Luiz Antônio Fleury Filho, aos 73 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBi4qq8lrommTTotHx5PwyixEcD6j9zo-gACys-r4ArUBWApop6c9i2Sv6j2pN2SgvE-0xrH0q" alt="Morre o ex-governador de SP Luiz Antônio Fleury Filho, aos 73 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luiz Antônio Fleury Filho, que foi governador de São Paulo entre 1991 e 1994, morreu nesta terça-feira (15/11), aos 73 anos de idade.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/colunas/leonardo-sakamoto/2022/11/15/com-fleury-morre-outra-chance-de-fazer-justica-pelo-massacre-do-carandiru.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leonardo Sakamoto - Com Fleury, morre outra chance de fazer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlCxetltn99qRGjWI-uXBbuBvmVtUtjtUd_yfhHs7q9cMyp22F7erQ_UTdFqP2PgC0F4fOff1J" alt="Leonardo Sakamoto - Com Fleury, morre outra chance de fazer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com a morte do ex-governador Luiz Antônio Fleury Filho, nesta terça (15), mais um envolvido no Massacre do Carandiru se vai sem ter prestado contas à&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/morre-luiz-antonio-fleury-filho-ex-governador-de-sao-paulo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morre Luiz Antônio Fleury Filho, ex-governador de São Paulo, aos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRKnNdr91MssW2JZqh_pBwHvOxYzxA1PGpDsNt5rHHmR-jihy2TsZ9dHvbZuDBOyUf1wAX95z8W" alt="Morre Luiz Antônio Fleury Filho, ex-governador de São Paulo, aos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nascido e criado em São José do Rio Preto e Porto Feliz, Luiz Antonio Fleury Filho tornou-se conhecido como membro do Ministério Público e professor de direito.</p></div>
            </div>
        </a>
        </Template></>;
}