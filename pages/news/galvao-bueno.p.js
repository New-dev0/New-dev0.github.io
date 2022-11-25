import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Galvao Bueno</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Galvao Bueno"/>
        <meta name="description" content="Trending News about Galvao Bueno" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Galvao Bueno</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/11/22/637cd49e815d3.jpeg" alt="Galvao Bueno"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/copa-do-mundo/galvao-bueno-de-volta-saiba-quem-vai-narrar-o-jogo-do-brasil-na-copa-e-onde-assistir.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galvão Bueno de volta? Saiba quem vai narrar o jogo do Brasil na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTHoh1ejxG-2DEQYfmHVUlz_di48qVfFjsBeCaUa27xs0seywnIOC7xzm-qoaSckm7F7AcBLC49" alt="Galvão Bueno de volta? Saiba quem vai narrar o jogo do Brasil na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Falta pouco para a estreia da Seleção Brasileira na Copa do Mundo 2022! Contra a Sérvia, no Lusail Stadium, o Brasil entra em campo às 16h (de Brasília),&nbsp;...</p></div>
            </div>
        </a><a href='https://noticiasdatv.uol.com.br/noticia/copa-na-tv/galvao-bueno-manda-recado-na-copa-e-web-ve-indireta-para-bolsonaro-murro-93300'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galvão Bueno manda recado na Copa, e web vê indireta para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvaK4xeVVTuiYco6MUsbUWQs7ctWprme9BkZz2nr9DeTC4GiSElcX3-HpPC8ymOTPv7BPvD343" alt="Galvão Bueno manda recado na Copa, e web vê indireta para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Galvão Bueno mandou um recado sobre a camisa da Seleção na estreia do Brasil na Copa que foi vista na web como indireta a Bolsonaro.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/colunas/futebol_etc/galvao-bueno-vira-estrela-nesta-copa-com-mais-publicidade-que-neymar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galvão Bueno vira estrela nesta Copa, com mais publicidade que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmP2FlXUxvc8a5xnni4IpocS5bfaV3t46rpNTSKcIE-CoVyfXbHeWxag55jZ5WvK6bNiMQhkxZ" alt="Galvão Bueno vira estrela nesta Copa, com mais publicidade que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liberado pela Globo para fazer propaganda, o narrador só fica atrás de Vinícius Júnior em número de clientes.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/24/copa-2022-estreia-de-galvao-tem-olodum-e-show-de-rrricharlison.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa 2022: estreia de Galvão tem Olodum e show de &quot;RRRicharlison&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-B0J4r1kJECOgMII1w8UGvXtpoX64PNGa9yURxi9Gdxlh7mnU7IiRKle3vBXBTLqSVp1ncevG" alt="Copa 2022: estreia de Galvão tem Olodum e show de &quot;RRRicharlison&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Narrador comanda a vitória da seleção brasileira sobre o Sérvia por 2 a 0 e mobiliza internet com frases; veja reações.</p></div>
            </div>
        </a><a href='https://www.goal.com/br/not%C3%ADcias/quais-jogos-galvao-bueno-vai-narrar-na-copa-do-mundo/bltbf9a2484d671e5b9'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quais jogos Galvão Bueno vai narrar na Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTa21lmbW6xiKc8HtDhYjjL7m95b3RptHvNlJFm9L6tzMU98DPGe-4EYNabXVu4l3zb7gJE_7OP" alt="Quais jogos Galvão Bueno vai narrar na Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de 36 anos, Galvão esteve de fora da abertura da Copa do Mundo 2022, mas estará em todos os jogos do Brasil na competição.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/24/e-do-brasil-inteiro-diz-galvao-bueno-sobre-camisa-amarela-da-selecao.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;É nossa, é do Brasil inteiro&quot;, diz Galvão Bueno sobre camisa da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT3A6QeqtOlDSUmrDIMlKNxDXe7FHmDp3eEPPRJK5c3LKHYfCcGSMuwf5gsMdlFIESZa77x5WjA" alt="&quot;É nossa, é do Brasil inteiro&quot;, diz Galvão Bueno sobre camisa da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante a transmissão da partida entre Brasil e Sérvia, pela primeira rodada da fase de grupos da Copa do Mundo, Galvão Bueno exaltou a camisa da.</p></div>
            </div>
        </a>
        </Template></>;
}