import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Holodomor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Holodomor"/>
        <meta name="description" content="Trending News about Holodomor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Holodomor</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1125%3Anowe%3A0%3A15%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F26070518%2F39821076.jpg" alt="Holodomor"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/26/mne-agradece-a-portugal-por-ter-definido-holodomor-como-genocidio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>MNE agradece a Portugal por ter definido Holodomor como genocídio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQCuuNHeRS2EpDFr1R5y-LUQxfCFiwQeK4cqMUSOy1Jf1iRJ6XrjsTvYIDy-vjT0Hq9271zQ39K" alt="MNE agradece a Portugal por ter definido Holodomor como genocídio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Governo ucraniano agradeceu a solidariedade de Portugal por ter, em 2017, aprovado uma resolução a classificar como genocídio o &quot;Holodomor&quot;, a fome que há&nbsp;...</p></div>
            </div>
        </a><a href='https://24.sapo.pt/atualidade/artigos/90-anos-do-holodomor'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>90 anos do Holodomor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1lTWD7kFOLelC2HWC3H3ohCr3uri29BPFx4EsbfDsiW90srvHDZ2eG6jLeXAZDOJKrdnCUvXP" alt="90 anos do Holodomor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O 90.º aniversário do Holodomor, a fome causada pelo regime de Estaline na década de 1930, adquiriu novo impacto desde a invasão russa da Ucrânia.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/mundo/2121818/holodomor-um-dos-momentos-emocionantes-de-homenagem-as-vitimas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Holodomor. Um dos momentos emocionantes de homenagem às ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTrSm0XTXZGW_FNSyePvLN36OmBDoLdb3zyt33N9maAtDw79H93HAk5We0A0bVgpTTJa38_pkebOw" alt="Holodomor. Um dos momentos emocionantes de homenagem às ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Reflexão com o presidente Volodymyr Zelensky e a ministra dos Negócios Estrangeiros [da Bélgica] Hadja Lahbib diante da crueldade sem limites de ontem e hoje&quot;,&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mundo/2022/11/ucrania-acusa-russia-de-reviver-taticas-do-holodomor-sovietico-em-meio-a-guerra.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ucrânia acusa Rússia de reviver táticas do Holodomor soviético em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT42yIw_Y9oHN9_y00t2X78xi2Z6RIUkyp8ibxsrPBE7vT5yUGAHHcHuZFVWgyeF--vb2zbvMG7" alt="Ucrânia acusa Rússia de reviver táticas do Holodomor soviético em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Ucrânia fez parte da União Soviética, mas declarou independência em 1991. Parte da justificativa do presidente russo, Vladimir Putin, para a invasão&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sabado.pt/mundo/detalhe/russia-pagara-por-vitimas-da-fome-do-holodomor-diz-ucrania'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rússia pagará por vítimas da fome do Holodomor, diz Ucrânia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSrlwsypBdU_Jq7DjA912u69N62eq-qOEJVEpN-QWOHSZSASVpMnZ6yrKVEd7mWiLZAWlOijc2B" alt="Rússia pagará por vítimas da fome do Holodomor, diz Ucrânia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Garantia foi dada por chefe de gabinete da presidência ucraniana, que também referiu as vítimas da guerra.</p></div>
            </div>
        </a><a href='https://g1.globo.com/mundo/noticia/2022/11/26/em-aniversario-de-90-anos-do-holodomor-ucrania-recebe-promessas-de-apoio.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em aniversário de 90 anos do Holodomor, Ucrânia recebe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQAwmRdMlooKfGylfy87A-cdYcNLrIVPuLY9mUCIdITen8m19w1_WfSH1XXOWFIa7TAdjnKO59I" alt="Em aniversário de 90 anos do Holodomor, Ucrânia recebe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 1932 e 1933, cerca de 3,5 milhões de ucranianos morreram no &quot;Holodomor&quot;, quando Stalin lançou uma campanha de &quot;coletivização&quot; forçada pela qual apreendeu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/mundo/kiev-acusa-moscovo-de-usar-tatica-genocidas-da-era-de-estaline-15391553.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kiev acusa Moscovo de usar tática &quot;genocidas&quot; da era de Estaline</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQO691xM4hESEmtF0m7NrfemwVsCZgIspFFhRQPzT_bLE4tOkMHro8trSqxsS2l6kF6-I1kMrbb" alt="Kiev acusa Moscovo de usar tática &quot;genocidas&quot; da era de Estaline" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Volodymyr Zelensky comparou flagelo cometido por regime estalinista há 90 anos com a guerra que a Rússia trava atualmente em território ucraniano.</p></div>
            </div>
        </a>
        </Template></>;
}