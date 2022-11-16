import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rúben Amorim</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rúben Amorim"/>
        <meta name="description" content="Trending News about Rúben Amorim" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rúben Amorim</h1>
            <Image width={800} height={500} src="https://images.rr.sapo.pt/3618006314345019e321_socialshare.JPG" alt="Rúben Amorim"/>
            <h3>Recent News</h3>
            <a href='https://rr.sapo.pt/bola-branca/noticia/sporting/2022/11/15/ruben-amorim-nao-vetou-contratacao-de-cristiano-ronaldo-nunca-esteve-em-cima-da-mesa/308190/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Rúben Amorim não vetou contratação de Cristiano Ronaldo, nunca ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0lxqv1y0zYcMu9qWFmidOXXofk6Uljf1OGwtYxIop6P3rc1I5WCVP0zN2gxFvNQayof86WkdP" alt="“Rúben Amorim não vetou contratação de Cristiano Ronaldo, nunca ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Varandas garante, entretanto, que Rúben Amorim &quot;vai cumprir contrato até 2024&quot; e tem proposta para renovar.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-15/hoje-pagaria-15-milhoes-por-ruben-amorim/964858'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Hoje pagaria 15 milhões por Rúben Amorim»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiGRRUqtXzVVMnz_nzSGiYHJWQiUMTUlDfdDfYY7_ZTc-1RlqYtkk1x8Nfw4IsBgNF4jBWCFTt" alt="«Hoje pagaria 15 milhões por Rúben Amorim»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No que concerne à continuidade e renovação de contrato com o treinador Rúben Amorim, Frederico Varandas desdobrou-se em elogios e não deixou margem para&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-15/sporting-ruben-amorim-descansa-no-dubai/964840'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rúben Amorim descansa no Dubai</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzBYBhJsNvHj7DTBY9lfafrs54wVRQ2Qu-nfBtdsaBk1-hXWf1ckjbXhYwAO6P3cefXCWWlxNO" alt="Rúben Amorim descansa no Dubai" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O plantel sportinguista está a gozar uns dias de férias e o treinador Rúben Amorim aproveitou esta pausa competitiva também para descansar, antes de voltar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/futebol/futebol-nacional/liga-bwin/sporting/detalhe/varandas-admite-renovacao-ja-transmitimos-ao-ruben-amorim-o-que-queremos-para-alem-de-2024?ref=HP_Ultimas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Varandas admite renovação: «Já transmitimos ao Rúben Amorim o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTVWIbUB0sMT2DKHBXynEINlgMWSZfXbrbRPROo_ISgTYQnnGqNCEWKzSXDwtVYsUlZiKEOgmht" alt="Varandas admite renovação: «Já transmitimos ao Rúben Amorim o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frederico Varandas revelou em entrevista à RTP 3 que o Sporting já fez notar a Rúben Amorim os planos que tem para lá de 2024, o ano no qual a ligação entre&nbsp;...</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/16/frederico-varandas-ha-tres-anos-paguei-10-milhoes-de-euros-pelo-ruben-amorim-hoje-pagaria-15/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Frederico Varandas: &quot;Há três anos paguei 10 milhões de euros pelo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTOIFIProc4eiU9aaAIVZGuu0wQEOByYXTB8C8v40r4Jbwabd2I8I7xmHvSpu1vs1e_ZbAXvjI" alt="Frederico Varandas: &quot;Há três anos paguei 10 milhões de euros pelo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Presidente do Sporting mantém confiança em Rúben Amorim e diz que treinador pode ficar para lá de 2024. Explicou saída de Mateus Nunes e diz que nunca houve&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/sporting/liga/varandas-o-ruben-amorim-sabe-o-que-pretendemos-para-alem-de-2024'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Varandas: «O Ruben Amorim sabe o que pretendemos para além ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFAT8zZFAajNp7O9TR40J0rac-PYg_30E9gHzuM9HoQG_bwWGAYwmmkK1PonWbRzzqBRueUpBo" alt="Varandas: «O Ruben Amorim sabe o que pretendemos para além ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Frederico Varandas, em entrevista à RTP3, garantiu que a continuidade de Ruben Amorim no Sporting nunca esteve em causa e diz mesmo que, depois de ter pago&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/desporto/entrevista-rtp-frederico-varandas-quer-renovar-contrato-com-ruben-amorim_v1447377'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entrevista RTP. Frederico Varandas quer renovar contrato com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRWFwn8-K-Su9v3d8tC34Zk7bEJbGcmXjIwOZEvAKMKJmhRcDn86QbB2xOMAeLfrsq8vM3JyFWt" alt="Entrevista RTP. Frederico Varandas quer renovar contrato com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Presidente do Sporting revelou que pretende renovar contrato com Ruben Amorim. Numa entrevista exclusiva à RTP, Frederico Varandas disse ainda que nunca&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/1a-liga/sporting/noticias/matheus-nunes-nao-tinha-de-ser-vendido-mas-precisavamos-de-80-milhoes-15355863.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Se Rúben Amorim ficasse satisfeito por perder Matheus Nunes, era ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxZK4ztMcJMu5dmwfcJivGx3wChKRV6I2mz5enbVGBnDYAdD9zQgtmAHAD3zCS5cNNA4DQ6aoL" alt="&quot;Se Rúben Amorim ficasse satisfeito por perder Matheus Nunes, era ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Frederico Varandas, presidente do Sporting, em entrevista à RTP3 na noite desta terça-feira.</p></div>
            </div>
        </a>
        </Template></>;
}