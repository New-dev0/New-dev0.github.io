import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Feirao Limpa Nome</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Feirao Limpa Nome"/>
        <meta name="description" content="Trending News about Feirao Limpa Nome" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Feirao Limpa Nome</h1>
            <Image width={800} height={500} src="https://imagens.ebc.com.br/qGL0yC0iN-JfoWwjj8Lefdj5YKs=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/dinheiro_caixa_mcajr_abr_2907221125.jpg?itok=GFzzd93G" alt="Feirao Limpa Nome"/>
            <h3>Recent News</h3>
            <a href='https://agenciabrasil.ebc.com.br/economia/noticia/2022-11/caixa-e-enel-participam-do-feirao-limpa-nome-da-serasa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caixa e Enel participam do Feirão Limpa Nome da Serasa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWFaVTvfA3cHzMGibqtlRANnyP8liyo_EQeEdvq1h5_KokHCjBHu8RxczyxiKqKw9AKNL0hlR7" alt="Caixa e Enel participam do Feirão Limpa Nome da Serasa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Número de inadimplentes no país está em alta pelo 9º mês consecutivo e alcança 68,39 milhões de pessoas. Feirão Limpa Nome da Serasa negociou,&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mercado/2022/11/feirao-limpa-nome-da-serasa-ja-fecha-mais-acordos-que-no-ano-passado.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Feirão Limpa Nome da Serasa já fecha mais acordos que no ano ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRlwNiJ8trs3I3zm7gYa2ScARx_ZT8NrTUVFFh8X6-V2ScDWsxtyCPyBRst2tRV0EkHK7k3oNI0" alt="Feirão Limpa Nome da Serasa já fecha mais acordos que no ano ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Feirão tem atendimento presencial em São Paulo, Rio de Janeiro e Belo Horizonte até este sábado.</p></div>
            </div>
        </a><a href='https://fdr.com.br/2022/11/29/serasa-realiza-nova-edicao-do-feirao-limpa-nome-veja-como-participar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serasa realiza nova edição do FEIRÃO LIMPA NOME. Veja como ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQFUuQ6mbNIFb6ex8Tzu3OO5S1nJ0QbNYr4otARcvOfRiVejiljfReLgND3lGGt8scrK8B8ojj" alt="Serasa realiza nova edição do FEIRÃO LIMPA NOME. Veja como ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dezenas de capitais brasileiras estão recebendo os moradores de forma presencial, a ideia é alcançar mais inadimplentes dispostos a quitar suas dívidas.</p></div>
            </div>
        </a><a href='https://www.contabeis.com.br/noticias/53841/serasa-realiza-novo-feirao-limpa-nome-com-participacao-da-caixa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serasa realiza novo feirão Limpa Nome com participação da Caixa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOvCryhRnsXxld8IjepC5vX_0f3bt7IYDhVIISZWDI0ZmJY7OsGdtjslFvQE9mzAfPwjrwjmhf" alt="Serasa realiza novo feirão Limpa Nome com participação da Caixa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pela primeira vez a Caixa Econômica Federal participará de um feirão de renegociação de dívidas da Serasa, que começa nesta terça-feira (29).</p></div>
            </div>
        </a><a href='https://g1.globo.com/ro/rondonia/noticia/2022/11/29/feirao-limpa-nome-comeca-nesta-terca-29-no-tudo-aqui-com-desconto-de-ate-90percent-nas-dividas.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Feirão Limpa Nome começa nesta terça (29) no Tudo Aqui com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxVxvu4jodXsWdHiFxbjSQRyghQSbZge-TlI-Ze8UD5Xxi1QYE3hnrG9dsj2K1fdLGBU6Bd7rb" alt="Feirão Limpa Nome começa nesta terça (29) no Tudo Aqui com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atendimento será feito até a quinta-feira, 1º de dezembro. Energisa é uma das empresas participantes do Feirão. Por g1 RO. 29/11/2022&nbsp;...</p></div>
            </div>
        </a><a href='https://rondonia.ro.gov.br/feirao-limpa-nome-em-rondonia-busca-recuperar-credito-da-populacao-com-negociacao-de-dividas-ate-dia-1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Feirão Limpa Nome em Rondônia busca recuperar crédito da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcScDGx5Wy4TLIJklMGDuN7tO_R6_5SVOB4KNYY-NU_xnYL1A1ZU0Ko54d10TUpngKYIjzYkHnJg" alt="Feirão Limpa Nome em Rondônia busca recuperar crédito da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O endividamento da população brasileira é acompanhada com atenção por instituições financeiras e pelo Poder Público. Estudos apontam para o enfraquecimento&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}