import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>China</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,China"/>
        <meta name="description" content="Trending News about China" /></Head><Template>
            <h1 style={{fontSize: "30"}}>China</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/WBstvaSjmrmRK0NzzPD60UjmqeQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/i/w/krU7K4TtG6e3cIG8n3zg/manifestante-segurando-um-pedaco-de-papel-em-branco.jpg" alt="China"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/mundo/noticia/2022/11/28/protestos-na-china-por-que-papeis-em-branco-viraram-simbolo-das-manifestacoes.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Protestos na China: por que papéis em branco viraram símbolo das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQw0o0-NVSsJkNNX2jJWAgWVToCS9MoaM8x-w3NLRIolTSdYy4x6lVEkw-AKaCW0Zg_oPpXsUaL" alt="Protestos na China: por que papéis em branco viraram símbolo das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enquanto a China reprime os protestos, os manifestantes recorrem a pedaços de papel em branco para representar tudo o que &#39;querem dizer, mas não podem&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mundo/2022/11/protestos-fora-da-china-aumentam-pressao-sobre-politica-de-covid-zero-de-xi.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Protestos fora da China aumentam pressão sobre política de Covid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQN0S28s25Ru_8cBZQ7JyiWVfzQjMva3PEuDOwU7JRqX18VeXUkA1QSSe2a8VKoEbFOiODu0EzG" alt="Protestos fora da China aumentam pressão sobre política de Covid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Diplomacia de Pequim nega conhecimento de atos no exterior e minimiza manifestações em âmbito doméstico.</p></div>
            </div>
        </a><a href='https://www.seudinheiro.com/2022/internacional/china-covid-zero-protestos-rsgp/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que, mesmo em meio a protestos, é improvável que a China ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMvflP7bW9sEFpIfSMInvrSvnpgvP8pWGZ4w6ld2ltNrnj0GJ8rPWg0Y1ZbEKGjzvcfyFcnFID" alt="Por que, mesmo em meio a protestos, é improvável que a China ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Autoridades locais relaxam restrições em algumas cidades da China, mas Pequim e Xangai intensificam segurança nas áreas onde houve protesto.</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/noticias/afp/2022/11/28/wall-street-fecha-em-baixa-preocupada-com-china-e-fed.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wall Street fecha em baixa, preocupada com China e Fed</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Wall Street fecha em baixa, preocupada com China e Fed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A bolsa de Nova York fechou em baixa nesta segunda-feira (28), preocupada com as consequências do movimento de protesto na China contra as políticas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.infomoney.com.br/colunistas/roberto-dumas-damas/china-a-escalada-de-tensao-apos-protestos-contra-lockdowns-alcancarem-dimensao-nacional/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China: a escalada de tensão após protestos contra lockdowns ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTfcsNv6gy0XgmjxaivqFevLHEt_G5Xd0jZTl4xeMJCYELvi4bO3PeP61M1PdOLm9lVxCoYm3Lx" alt="China: a escalada de tensão após protestos contra lockdowns ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por enquanto, os mercados e a geopolítica ainda terão de lidar com uma situação tensa como nunca vista desde o massacre de junho de 1989.</p></div>
            </div>
        </a><a href='https://g1.globo.com/mundo/noticia/2022/11/28/protestos-na-china-jornalista-da-bbc-e-detido-durante-cobertura.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Protestos na China: jornalista da BBC é detido durante cobertura</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR2p0bMwYHy1IHH_PgcwvCNHScc65aurvQG2xudkMTEiXlbXAA_eMEKX7CwPLY-qB0pxoANVFA2" alt="Protestos na China: jornalista da BBC é detido durante cobertura" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ed Lawrence foi espancado e preso pela polícia de Xangai enquanto cobria manifestações contra o governo.</p></div>
            </div>
        </a><a href='https://www.bbc.com/portuguese/internacional-63786773'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Como é a política de &#39;covid zero&#39; que tem causado protestos na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCMnBkZr4TCJ28PVGmiuBKWo3kmKvR2l_zMpQtIKSkYqrcWyirLx3cPOnIRrJ-hkdwzrC2EnHq" alt="Como é a política de &#39;covid zero&#39; que tem causado protestos na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A China tem um dos protocolos mais rigorosos de combate à covid do mundo, mas ultimamente as medidas têm levado cidadãos a se manifestarem nas ruas.</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/business/mercados-globais-comecam-semana-sob-tensao-com-protestos-na-china/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mercados globais começam semana sob tensão com protestos na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-ATvOKdFjIzU36-a8KtfRQQBhAGQknNnw3IFqNxwY_v_MBllHAocE9qofNkPEtfO1Im7EYb-C" alt="Mercados globais começam semana sob tensão com protestos na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele havia iniciado a sessão em queda de até 4,2%. O Hang Seng (HSI) China Enterprises Index, que acompanha o desempenho das empresas da China continental&nbsp;...</p></div>
            </div>
        </a><a href='https://economia.uol.com.br/noticias/reuters/2022/11/28/premie-britanico-diz-que-era-de-ouro-do-reino-unido-com-a-china-acabou.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premiê britânico diz que &#39;era de ouro&#39; do Reino Unido com a China ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT8x9EMmTXVQ71PgbFj--KoR4fqIWGV_QlKZ3epw-TlQXiHh1jumCb3iqAa1gGArPBPabu_ZjUV" alt="Premiê britânico diz que &#39;era de ouro&#39; do Reino Unido com a China ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O primeiro-ministro britânico, Rishi Sunak, disse nesta segunda-feira que a chamada &quot;era de ouro&quot; das relações com a China acabou, dizendo que o desafio&nbsp;...</p></div>
            </div>
        </a><a href='https://valor.globo.com/mundo/noticia/2022/11/28/xi-tem-poucas-boas-opcoes-para-encerrar-protestos-na-china.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Xi tem poucas boas opções para encerrar protestos na China</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7ILUI29DK3N1jWbKRlm2lc16CeyaX1_e1giJD2hWqx6frp_IAD-qL-FVLD0TKUWWUMCwUZaqm" alt="Xi tem poucas boas opções para encerrar protestos na China" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os protestos contra a estratégia de &quot;covid zero&quot; da China representam um dos desafios mais significativos do governo do Partido Comunista desde a crise da&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}