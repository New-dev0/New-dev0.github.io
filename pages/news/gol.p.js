import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>GOL</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,GOL"/>
        <meta name="description" content="Trending News about GOL" /></Head><Template>
            <h1 style={{fontSize: "30"}}>GOL</h1>
            <Image width={800} height={500} src="https://aeromagazine.uol.com.br/media/_versions/boeing-737-800-pr-gxi-gol-smiles-bruno-bavose_widelg.jpg" alt="GOL"/>
            <h3>Recent News</h3>
            <a href='https://aeromagazine.uol.com.br/artigo/gol-e-smiles-apresentaram-novo-aviao-tematico.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gol e Smiles apresentaram novo avião temático</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTer2li3W1-dE8gRQNXAni3-vcLnGW8aXbDBDnSffyQbwA3dp6naG3wFX0AjyoDejvXqLG7NM1O" alt="Gol e Smiles apresentaram novo avião temático" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Gol Linhas Aéreas e o&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mercadoeeventos.com.br/noticias/aviacao/smiles-e-gol-apresentam-novo-aviao-com-tematica-de-somos-feitos-de-viagens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Smiles e GOL apresentam novo avião com temática de Somos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQwQ9aHR3Cxm_CZsutory7nLnYlFA4m_gZ_F6-lmvzmCL5AecCpiGFHSGPKmX4_S6sfdoSaTq8" alt="Smiles e GOL apresentam novo avião com temática de Somos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Apresentar uma nova aeronave com o conceito da campanha Somos Feitos de Viagens é mais uma conquista da maior campanha da Smiles até hoje. Este avião levará&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/25/viralizou-preocupacao-com-vovo-olimpico-e-revolta-com-gol-anulado-do-equador.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viralizou: preocupação com &quot;vovô olímpico&quot; e revolta com gol ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRmCd7V4RU-KPZ4J4rFAZxRTSKrxCjZxSiNKUAHCWXUpKBh6KqqScYyuFTYpfK4KdWlXydXykcn" alt="Viralizou: preocupação com &quot;vovô olímpico&quot; e revolta com gol ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viralizou: preocupação com &quot;vovô olímpico&quot; e revolta com gol anulado do Equador &middot; Veja o que fez sucesso nas redes sociais nesta sexta-feira de Copa do Mundo.</p></div>
            </div>
        </a><a href='https://www.panrotas.com.br/aviacao/empresas/2022/11/campanha-da-smiles-estampa-aviao-da-gol_193339.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Campanha da Smiles estampa avião da Gol</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4HQrHijsDHxJbOkeckY8yPbquYDscJXUjDTAKl2G24auhI0V9UK9nooXsbKezJPU6Zj6oPmdx" alt="Campanha da Smiles estampa avião da Gol" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Após lançar as aeronaves Cartão Gol Smiles e Clube Smiles, chegou o momento do programa de fidelidade ampliar os horizontes com Somos Feitos de Viagens. A&nbsp;...</p></div>
            </div>
        </a><a href='https://aeroin.net/revelado-mais-um-aviao-que-passa-a-voar-pelo-brasil-com-cor-especial-por-gol-e-smiles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Revelado mais um avião que passa a voar pelo Brasil com cor ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRaAkgt18jVYm1pLZmQ-lPkkU2EC-wQDTNY5t_6M5_YkXgNrnsZaCFyrDwsK5ieTuixb5Ps7ybe" alt="Revelado mais um avião que passa a voar pelo Brasil com cor ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A GOL Linhas Aéreas e a Smiles, programa de fidelidade da companhia, informam hoje, dia 25 de novembro, o lançamento do mais novo avião personalizado a voar&nbsp;...</p></div>
            </div>
        </a><a href='https://aviacaobrasil.com.br/novos-voos-da-gol-e-uma-aeronave-para-o-brasil/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novos voos da Gol e uma aeronave para o Brasil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ9rAD3CzS-RU5jiQWD7YIaXRBqK-367TCExoD6k-cgbO3WCVCz0bFtkaRGqNJwfzbKpXU9C1kR" alt="Novos voos da Gol e uma aeronave para o Brasil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Gol Linhas Aéreas criou novos voos e pintou uma de suas aeronaves em homenagem a seleção brasileira de futebol, que disputa a Copa do Mundo no Catar.</p></div>
            </div>
        </a><a href='https://www.cidademarketing.com.br/marketing/2022/11/25/smiles-e-gol-apresentam-mais-novo-aviao-com-tematica-de-somos-feitos-de-viagens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Smiles e GOL apresentam mais novo avião com temática de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2JXmsa41vwGhFl67baOjUkoEdzWRtq_bxEuMi_nqAC2Ljt4PGmP1B9TrYXIy8QSJqPllNgf1g" alt="Smiles e GOL apresentam mais novo avião com temática de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boeing 737-800SFP GOL Smiles com adesivagem francesa. Crédito: Bruno Bavose. A GOL Linhas Aéreas e a Smiles, programa de fidelidade com a mais completa&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}