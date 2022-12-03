import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dani Alves</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dani Alves"/>
        <meta name="description" content="Trending News about Dani Alves" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dani Alves</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/esporte/90/2022/12/01/daniel-alves-durante-coletiva-de-imprensa-da-selecao-brasileira-1669903194518_v2_615x300.jpg" alt="Dani Alves"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/colunas/milly-lacombe/2022/12/01/coletiva-indica-que-convocacao-de-dani-alves-esta-na-dimensao-da-devocao.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milly Lacombe - Coletiva indica que convocação de Dani Alves está ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ3ns97x1m6Vur-Nl1QryO2wKh5HKryUl4prRSLlfuR3sbVfIdawOHae62ULSyMBwIRu12x06Bl" alt="Milly Lacombe - Coletiva indica que convocação de Dani Alves está ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Missão e transcendência foram conceitos usados respectivamente por Daniel Alves e Tite para seguir explicando o que o lateral direito está fazendo ali.</p></div>
            </div>
        </a><a href='https://schoje.news/2022/12/02/dani-alves-se-prepara-para-novo-recorde-com-a-selecao-brasileira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dani Alves se prepara para novo recorde com a Seleção Brasileira ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSfDUMBxtz0HVCiiknQsegp6NVtR15LPRseQtNq85SB9dA3sixZ7OwXQ2UCC-buFOjHqYED3YVU" alt="Dani Alves se prepara para novo recorde com a Seleção Brasileira ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 39 anos de idade, lateral será o capitão da Seleção Brasileira na partida contra Camarões e se tornará o jogador mais experiente a vestir a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/br/not%C3%ADcias/no-cascudao-do-brasil-dani-alves-e-os-meninos-jogam-para-confundir/blt47aaafa1da56011d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No &#39;Cascudão&#39; do Brasil, Dani Alves e os meninos jogam para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRI0lejnnOTaslvfUY43nEMitcoMvE2XRvlIv4DZqdDRWpYeIcwnbjrWiQ1frcXWhi-luTqVm5V" alt="No &#39;Cascudão&#39; do Brasil, Dani Alves e os meninos jogam para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Se Daniel Alves conseguir ser um construtor de boas jogadas poderá ficar mais claro o porquê de ter sido incluído na lista de Tite.</p></div>
            </div>
        </a><a href='https://jornaldebrasilia.com.br/torcida/dani-alves-ve-derrota-do-brasil-como-alerta/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dani Alves vê derrota do Brasil como alerta</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHGUCDMJAelOC1Vq5-RWsqI_XDB-OKh1Jp3zVX99odGZOu8ZDR1oRu3wn8Xg8tsmXmCyCd7fWB" alt="Dani Alves vê derrota do Brasil como alerta" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniel Alves vê a derrota do Brasil para Camarões como alerta para a segunda fase da Copa do Mundo Qatar 2022. Já classificado para as oitavas de final,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correio24horas.com.br/noticia/nid/e-um-toque-de-atencao-afirma-dani-alves-apos-derrota-do-brasil/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;É um toque de atenção&#39;, afirma Dani Alves após derrota do Brasil</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFS5Daphwufi-F432sFhtQZ8N1SisDrSIzSjNwosxL-MyTL9Mvm4lyTpkdxiGLbnxJX-7PpHDO" alt="&#39;É um toque de atenção&#39;, afirma Dani Alves após derrota do Brasil" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral ganhou oportunidade no time titular e reforçou que agora não há espaço para erros.</p></div>
            </div>
        </a><a href='https://sportbuzz.uol.com.br/noticias/futebol/dani-alves-se-torna-o-jogador-mais-velho-defender-o-brasil-em-copas.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dani Alves se torna o jogador mais velho a defender o Brasil em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_Vapb5igR0l_OeR-obiIPYDvHPrqJ5eSvKA5G27hKdvhWO8M2GvCi7PBrGcoJ-UZ0WtrjDJ6L" alt="Dani Alves se torna o jogador mais velho a defender o Brasil em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniel Alves entrou em campo como titular da Seleção Brasileira contra Camarões e se tornou o jogador mais velho a vestir a camisa do Brasil em Copas do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}