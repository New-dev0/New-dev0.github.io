import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vitinha</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vitinha"/>
        <meta name="description" content="Trending News about Vitinha" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vitinha</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/6368d8610cf2ea367d575339/og/maisfutebol" alt="Vitinha"/>
            <h3>Recent News</h3>
            <a href='https://maisfutebol.iol.pt/mundial-2022/selecao/vitinha-se-agarrei-o-lugar-cabe-ao-selecionador'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitinha: «Se agarrei o lugar? Cabe ao selecionador»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ6JRDpbvrYejPpkTtUtvrNfb1RGNoB2w18FgrJ5hJddV6gLY-JP29Mf9OU_FXyOmv9Hu6-4iv3" alt="Vitinha: «Se agarrei o lugar? Cabe ao selecionador»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médio fez a estreia em Mundiais com a seleção nacional na derrota contra a Coreia do Sul.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/internacional/selecao/noticias/vitinha-nunca-e-igual-queremos-ganhar-nem-que-seja-a-feijoes-15417682.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitinha: &quot;Nunca é igual, queremos ganhar nem que seja a feijões&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRH2Z9LKC1DGiNOX6Ap48nicrwnHD4a2w86CBSYIQt7k5jcdI-CSb69CVm0GqckviA__Q_Wgb0-" alt="Vitinha: &quot;Nunca é igual, queremos ganhar nem que seja a feijões&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Vitinha, após o Coreia do Sul-Portugal (2-1), na terceira jornada do Grupo H do Mundial do Catar. Análise: &quot;Perdemos por erros nossos,&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/mundial-qatar-2022/2022/12/02/vitinha-nunca-e-igual-perder-ou-ganhar/310390/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitinha: &quot;Nunca é igual perder ou ganhar&quot; - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTO19PC_YbNh1mQ56G5x9_Vb2nWwN0kx-flHMDxMyFG1GlgQHMg-veqyYQwUlt6pvkeLtq3jto7" alt="Vitinha: &quot;Nunca é igual perder ou ganhar&quot; - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar de Portugal ter passado no primeiro lugar aos oitavos de final, Vitinha não esconde que a derrota frente à Coreia do Sul tem impacto.</p></div>
            </div>
        </a><a href='https://tribuna.expresso.pt/mundial-2022/2022-12-02-A-pausa-e-o-criterio-de-Vitinha-o-homem-da-geometria-pensante-do-meio-campo-79aefbbf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A pausa e o critério de Vitinha, o homem da geometria pensante do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdpZ0J61gOFm2GVbnE7rh3NBrqTx8zxxp1biVzFf3u-4qRhXJRzRHClUoDTG4YAuLtxV4j0XIB" alt="A pausa e o critério de Vitinha, o homem da geometria pensante do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em estreia absoluta num Mundial, o médio do PSG foi assumindo a batuta da circulação de bola, saindo da claridade das suas ideias e do perfume dos seus pés&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodesantotirso.pt/vitinha-titular-pela-primeira-vez-no-campeonato-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitinha titular pela primeira vez no Campeonato do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTpJq8NRsbW2nU-Raqn5ltjbt-EbzTmMw3J1AYzkV1XKtcClBGSyUuYyYnn1Bz2I-3uM1-rm8yI" alt="Vitinha titular pela primeira vez no Campeonato do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Também Diogo Costa, o outro jogador da seleção que tem raízes em Vila das Aves, é titular da equipa de Fernando Santos. No último dia da fase de grupos do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.futebol365.pt/artigo/290329-vitinha-vamos-preparar-os-oitavos-de-final-da-melhor-forma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitinha: «Vamos preparar os oitavos de final da melhor forma»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9Ju6bGMGiX4PIgA92DKE8JTQJB5hZPYNcQdTp6TcWV21_XtznNU6Rb57tdAWaIqg0jLu2-q2Q" alt="Vitinha: «Vamos preparar os oitavos de final da melhor forma»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Vitinha, jogador de Portugal, na zona de entrevistas rápidas após o Coreia do Sul-Portugal (2-1), jogo da terceira jornada do Grupo H do&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-02/portugal-nao-defendemos-bem/966972'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Não defendemos bem»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRerM9E_air_JQOpyif8NZ-TTdBH5Ygjuf-EfCkFbuGYGOKO_eD-rI9lSq5Aaeu1F9b-GrUtHxz" alt="«Não defendemos bem»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vitinha reconheceu que a equipa revelou alguns problemas em termos defensivos e acabaram por sair derrotados no duelo frente à Coreia do Sul (1-2).</p></div>
            </div>
        </a><a href='https://www.slbenfica.pt/pt-pt/agora/noticias/2022/12/02/futebol-benfica-jogo-portugal-coreia-do-sul-3-jornada-grupo-h-mundial-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial: António Silva e João Mário titulares na Seleção</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThgrWtp6OhVSGHGKlfoWIQhSIxZs04sHRqxPWe3NgEmgqH2EnQu98tPymVOOynzPVamiAnCPnE" alt="Mundial: António Silva e João Mário titulares na Seleção" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Futebol. 3.ª jornada. Grupo H. Campeonato do Mundo. Jogo entre Portugal e a Coreia do Sul.</p></div>
            </div>
        </a>
        </Template></>;
}