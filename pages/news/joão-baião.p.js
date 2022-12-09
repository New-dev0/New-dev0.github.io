import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>João Baião</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,João Baião"/>
        <meta name="description" content="Trending News about João Baião" /></Head><Template>
            <h1 style={{fontSize: "30"}}>João Baião</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Flifestyle-sapo%2Ffacebook-overlay.png&epic=NmE5pID30c7bO4HFKNa5MUR3AwAWI0kp/o8vu61fK3QYk5Q56BAqwl+G6dmWzJmbu4krf5Ep1kbJ4s3AwxtkFrSWpXpCn0m0XFX2zyRBFfeO/DI=" alt="João Baião"/>
            <h3>Recent News</h3>
            <a href='https://lifestyle.sapo.pt/fama/noticias-fama/artigos/falso-joao-baiao-nega-noticias-de-que-um-hotel-seu-lesou-o-estado'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Falso&quot;. João Baião nega notícias de que um hotel seu lesou o Estado</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVhb5JRPoe_gj8T1_w_k6K5KJM2xFaMpAv8HByBWu8ZpZjzMnbRzy0kgtsCodaPAVLlyKs0Y0U" alt="&quot;Falso&quot;. João Baião nega notícias de que um hotel seu lesou o Estado" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O apresentador viu-se envolvido numa polémica que diz respeito a dívidas e prejuízos de milhões de euros para os cofre públicos.</p></div>
            </div>
        </a><a href='https://famashow.pt/nas-redes/joao-baiao-reage-a-noticia-a-seu-respeito-falso/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João Baião reage a notícia a seu respeito: &quot;Falso&quot; - Fama Show</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvoRw9-duxIcQZMwQrsYrt6SzZvG3B0tnX7yugvQS2-MxYtNBOxSgvecBubOlyNZWk5DOH7rhD" alt="João Baião reage a notícia a seu respeito: &quot;Falso&quot; - Fama Show" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O apresentador fez o esclarecimento nas redes sociais e a advogada Paula Varandas comentou.</p></div>
            </div>
        </a><a href='https://www.flash.pt/celebridades/nacional/detalhe/insolvencia-e-dividas-hotel-de-joao-baiao-leva-estado-a-perder-fortuna'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Insolvência e dívidas. Hotel que foi de João Baião leva estado a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOzzkggEtyKt5N2QwLPUvLkvQ9PMOXd2yXNQ0rO6M9jczVWb3h4XW9bU7UiBxeZ_12LUAzUSMQ" alt="Insolvência e dívidas. Hotel que foi de João Baião leva estado a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apresentador da SIC tinha o sonho de ter um hotel mas as coisas correram mal e agora o estado pode perder uma fortuna.</p></div>
            </div>
        </a><a href='https://www.cm-tv.pt/atualidade/detalhe/20221207-1211-estado-perde-fortuna-com-hotel-de-joao-baiao'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Estado perde fortuna com hotel de João Baião</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSa8rEEUi_Nq2O3mSJ4deOfjwAbN_EVA7hJVKG94aWS6WIqrZ4UIOfowvKAon_6Dpw_SAIvc3i4" alt="Estado perde fortuna com hotel de João Baião" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma unidade hoteleira no Cartaxo que pertenceu a João Baião foi declarada insolvente e irá ser vendida pelo Estado por 1,8 milhões de euros, num prejuízo de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.novagente.pt/joao-baiao-estado-perde-milhoes-de-euros-com-hotel-que-foi-do-apresentador'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João Baião - Estado perde milhões de euros com hotel que foi do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQelqkPxkvdbL8YPJFMuuKIUgNnngoPPXYDPrX7uehZ_XpCLJfK4VDxrsI8j6PTRrAbaTlvtMLw" alt="João Baião - Estado perde milhões de euros com hotel que foi do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Hotel Quinta das Pratas, que encerrou em 2014, e do qual João Baião foi um dos fundadores, está afundado em dívidas. A unidade hoteleira acabou por&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hiper.fm/oops-joao-baiao-desmente-noticias-a-seu-respeito-resultado-de-mau-jornalismo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oops! João Baião desmente notícias a seu respeito: “Resultado de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTEq_ngjUbXLXXaOgAOFveqgs9uyMZtHkrJcz1K58RAh0nIGROfoTKDaDSP3fTT68dh9bpKtRoP" alt="Oops! João Baião desmente notícias a seu respeito: “Resultado de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o Correio da Manhã, a unidade hoteleira no Cartaxo “irá ser vendida pelo Estado por 1,8 milhões de euros, num prejuízo de milhões para os cofres&nbsp;...</p></div>
            </div>
        </a><a href='https://infocul.pt/joao-baiao-arrasa-revista-resultado-de-mau-jornalismo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João Baião arrasa revista: “Resultado de mau jornalismo”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgFleRmyk0XUWDhW5kT1AtkFSDC3B4FdohYB0W2IPzvn3tybtWzhAYLQNr5xtuWsWTz1iQn1rn" alt="João Baião arrasa revista: “Resultado de mau jornalismo”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O hotel em questão foi comprado pelo apresentador da SIC em 2002, e posteriormente vendido em 2008 ao empresário Marcelino Gargalo. Acabou por ficar insolvente&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}