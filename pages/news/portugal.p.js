import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portugal"/>
        <meta name="description" content="Trending News about Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portugal</h1>
            <Image width={800} height={500} src="https://socientifica.com.br/wp-content/uploads/2022/11/ex-colonias-de-Portugal.jpg" alt="Portugal"/>
            <h3>Recent News</h3>
            <a href='https://socientifica.com.br/as-5-ex-colonias-de-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As 5 ex-colônias de Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfR0Nstd42bPGiZqKHTEWyGBFW0QIpYEpJCiUOOOd5UGwhF4--X5LXb395qw_ulN_tBPSwRNcn" alt="As 5 ex-colônias de Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Além disso, as práticas realizadas nesse ciclo influenciaram a cultura europeia e ajudaram na introdução do colonialismo em todo o mundo, representando o início&nbsp;...</p></div>
            </div>
        </a><a href='https://www.correiobraziliense.com.br/opiniao/2022/11/5053417-artigo-um-grande-portugal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artigo: Um grande Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvpVuTkbfxUDzwWl8TFZQfzbCVop0FRRanNd6WPKGApbifNSwNl76lY61fH-h28FVjLgpJGj6W" alt="Artigo: Um grande Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ANDRÉ GUSTAVO STUMPF - Jornalista (andregustavo10@terra.com.br). Há 12 anos, quando o então presidente Lula entregou a faixa presidencial para sua aliada Dilma&nbsp;...</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/portugal/noticia/2022/11/22/zagueiro-de-portugal-comenta-possivel-duelo-com-o-brasil-se-acontecer-estamos-preparados.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zagueiro de Portugal comenta possível duelo com o Brasil: &quot;Se ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQONdUBJLiDMl3QQrr3auL-pI__2BdpR0VmXYdSXUfnkFOoMzi0agWP-z4-lwWpiq87rdy2YxS2" alt="Zagueiro de Portugal comenta possível duelo com o Brasil: &quot;Se ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rúben Dias comenta chance de encontrar a seleção brasileira já nas oitavas de final e volta a dizer que tema Cristiano Ronaldo está encerrado no time&nbsp;...</p></div>
            </div>
        </a><a href='https://www.lance.com.br/copa-do-mundo/portugal/rivais-na-estreia-da-copa-portugal-tem-selecao-quatro-vezes-mais-valiosa-do-que-gana.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rivais na estreia da Copa, Portugal tem seleção quatro vezes mais ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSonmDek-I4K-IFmPQ4ckkyLivMudh8DkHpK_M0V4aKQEBbvHXYlPDTXLqx_Mc89zl1jvceKBOC" alt="Rivais na estreia da Copa, Portugal tem seleção quatro vezes mais ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com uma de suas melhores gerações, Portugal vai para o Qatar com a esperança de conquistar o inédito título da Copa do Mundo. A seleção portuguesa é a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/ultimas-noticias/gazeta-esportiva/2022/11/22/zagueiro-de-portugal-minimiza-possivel-encontro-com-brasil-nao-ha-o-que-pensar.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zagueiro de Portugal minimiza possível encontro com Brasil na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIlctaUB-GVD1i033wWbTlJ5PaLzvOdhPulnYxZsDzUQs8A_RiUup9_j_lkUH5YZtMEMpTO_YM" alt="Zagueiro de Portugal minimiza possível encontro com Brasil na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um encontro precoce entre brasileiros e portugueses acontecerá no primeiro confronto eliminatório caso uma das equipes lidere seu grupo na primeira fase e a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/portugal/ruben-dias-diz-que-portugal-deve-pensar-na-copa-e-nao-em-cristiano-ronaldo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ruben Dias diz que Portugal deve &quot;pensar na Copa e não em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQX9zSS9f-l2SdgJHeOBLrvUOyPz-79FP2CdiYmLU-nFX_QZhgtT04egzGDCLS_pPHeYHgibLET" alt="Ruben Dias diz que Portugal deve &quot;pensar na Copa e não em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O zagueiro Ruben Dias, da seleção de Portugal, declarou nesta terça-feira, dois dias antes da estreia de sua equipe na Copa do Mundo contra Gana, que é.</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/ultimas-noticias/rfi/2022/11/22/a-ambicao-cautelosa-de-portugal-para-ganhar-a-copa-do-mundo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>A ambição cautelosa de Portugal para ganhar a Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="A ambição cautelosa de Portugal para ganhar a Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antes da sessão de treinos de Portugal, no Centro Al Shahaniya distante 30 km de Doha, o zagueiro Rúben Diaz mostrou mais uma vez o clima de confiança da equipe&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/zagueiro-de-portugal-nao-se-assusta-com-possivel-encontro-com-o-brasil-na-copa-do-mundo,a7df7cc85d9a32d492bba8f23c2430f83s94st6k.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zagueiro de Portugal &#39;não se assusta&#39; com possível encontro com o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQW2jy_qbQzPNDU8ZcLbiZ4DPz10JYy530xK6nPqX4ZIxOGrTx9sJxqljSGNLv0fvidArK7WSoM" alt="Zagueiro de Portugal &#39;não se assusta&#39; com possível encontro com o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A estreia da seleção de Portugal na Copa do Mundo do Qatar acontecerá nesta quinta-feira, diante de Gana, às 13h (de Brasília).</p></div>
            </div>
        </a><a href='https://www.acorianooriental.pt/noticia/beto-ve-capacidade-e-talento-em-portugal-para-bater-gana-344848'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beto vê capacidade e talento em Portugal para bater Gana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpcjL34t8tdFHIgu76eozM6PHcqKVO9o7ZkmC9za_S11-rHEvIB3TsOFXmfUYW9E96I1wD8lWN" alt="Beto vê capacidade e talento em Portugal para bater Gana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acima de tudo, e na teoria, Portugal tem uma seleção e jogadores de nível superior. Por isso, temos tudo para fazer um grande jogo e começar muito bem”, avaliou&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}