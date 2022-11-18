import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ministro da Defesa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ministro da Defesa"/>
        <meta name="description" content="Trending News about Ministro da Defesa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ministro da Defesa</h1>
            <Image width={800} height={500} src="https://uploads.metropoles.com/wp-content/uploads/2022/11/16143135/comprova-enganoso-stf-ministro-da-defesa.jpg" alt="Ministro da Defesa"/>
            <h3>Recent News</h3>
            <a href='https://www.metropoles.com/projeto-comprova/noticia-crime-contra-ministro-da-defesa-nao-foi-pedida-pelo-stf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notícia-crime contra ministro da Defesa não foi pedida pelo STF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTG0TACLRloNg_ucRIMku8NrvHmir9hDAz_UfS5odCw7P1sfn1ehsvShTrjQmDJnTmbKX5-mRcl" alt="Notícia-crime contra ministro da Defesa não foi pedida pelo STF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Esta checagem foi realizada por jornalistas que integram o Projeto Comprova, criado para combater a desinformação, do qual o Metrópoles faz parte.</p></div>
            </div>
        </a><a href='https://www.poder360.com.br/justica/moraes-envia-a-pgr-pedido-de-afastamento-de-ministro-da-defesa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Moraes envia à PGR pedido de afastamento de ministro da Defesa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJjLwRJRRsvAg5v2AgTinw8wgejPVSMLiDuW-6kYIF5iXAXIJgIGiYoLwk0YttG1MHaa7cBWtS" alt="Moraes envia à PGR pedido de afastamento de ministro da Defesa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pedido feito pelo deputado Marcelo Calero, que listou falas de Nogueira contra o sistema eleitoral; Procuradoria tem 5 dias para se manifestar.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/politica/mendonca-e-sorteado-relator-de-pedido-de-impeachment-contra-ministro-da-defesa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mendonça é sorteado relator de pedido de impeachment contra ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQrtrDvtHcV3irVWnyo0JvBEm0zlpJm6TRYGnFMr-dY38YORaY3GWGyE8lp97VevwdPK-FulGt" alt="Mendonça é sorteado relator de pedido de impeachment contra ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na petição anexada ao inquérito que investiga as milícias digitais no Supremo, o deputado afirmou que o ministro da Defesa deve ser investigado por crime de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.brasildefato.com.br/2022/11/17/pedido-de-impeachment-do-ministro-da-defesa-na-pgr-bolsonaro-furou-o-teto-em-r-795-bi-e-mais'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedido de impeachment do ministro da Defesa na PGR; Bolsonaro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3sGd73brkUF32UIlo0is3CuqzUV6IxwD9ucoQoXo3AgGP5waTXh4r_OpCRM0bkpw9V7LK4uz9" alt="Pedido de impeachment do ministro da Defesa na PGR; Bolsonaro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alexandre de Moraes determinou que a Procuradoria Geral da República se manifeste sobre a solicitação em até cinco dias.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/politica/ultimas-noticias/2022/11/17/andre-mendonca-relator-impeachment-ministro-defesa.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mendonça é sorteado relator de pedido de impeachment de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvu8m6SUPXfgEVin6e8Db4urZr5kMsIZkqKJ68f7MlQmdQZG0h0U5bj846t2zWYFVKRg8o5c2U" alt="Mendonça é sorteado relator de pedido de impeachment de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além disso, os advogados sugerem que o STF intime o ministro, os comandantes das Forças Armadas e o presidente Jair Bolsonaro (PL) para prestarem depoimento&nbsp;...</p></div>
            </div>
        </a><a href='https://revistaoeste.com/brasil/andre-mendonca-sera-relator-de-pedido-de-afastamento-contra-ministro-da-defesa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mendonça vai relatar ação contra ministro da Defesa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRndkl-_Fx1Ah_ibTGQbTJojXtlMndshYkaMNNicy3SIupiOQzzjGnTxAUYT1FbffST7MyzLBD7" alt="Mendonça vai relatar ação contra ministro da Defesa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ministro da Defesa, general Paulo Sérgio Nogueira, foi acusado de suposto crime de responsabilidade. Clique aqui.</p></div>
            </div>
        </a><a href='https://www.sociedademilitar.com.br/2022/11/ministro-da-defesa-ja-responde-a-acao-civil-publica-com-base-em-acusacoes-dos-proprios-subordinados.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ministro da Defesa já responde a Ação Popular com base em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkRIdYDtcc-Ak5NHZjUnpxnYngi22JLiwejg9XLZjBFRoSXW09dm16I8xl6vLsL9ZslHhtvdzM" alt="Ministro da Defesa já responde a Ação Popular com base em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Menciona que “em fria análise, percebe-se que os atos lesivos à Moralidade Administrativa permeiam todo o Processo Seletivo, de forma sistêmica e generalizada”.</p></div>
            </div>
        </a>
        </Template></>;
}