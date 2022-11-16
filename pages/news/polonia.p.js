import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Polonia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Polonia"/>
        <meta name="description" content="Trending News about Polonia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Polonia</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/PCXzD_xHnzYPwXQPjPclxoSpoz4=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11128003.jpg" alt="Polonia"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/mundo/ucrania-russia/noticia/2022/11/15/misseis-russos-atingem-polonia-e-causam-duas-mortes-diz-inteligencia-dos-eua.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Míssil russo mata 2 na Polônia, país-membro da Otan, após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZqt9gymeVRQOmqs9-Sl3w7uQU5Mt3osqzYx32tGJzy_XrNRtQT2JRd2-FtJhVmvXrU1lQTgPf" alt="Míssil russo mata 2 na Polônia, país-membro da Otan, após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vítimas eram do leste polonês, próximo à fronteira com a Ucrânia. Ministério de Relações Exteriores da Polônia confirmou que foguete foi fabricado na Rússia&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/mundo/2022/11/g20-vai-debater-explosao-na-polonia-dizem-lideres-europeus.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G20 se volta para explosão na Polônia, e Biden diz ser incerto que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5nnj-B4j7aw3DYwUq6yTkgBXgbI_EDhdLrIWoct4c29oiY-4yqfHLVE0dPdJjVzPgcNbqy8iU" alt="G20 se volta para explosão na Polônia, e Biden diz ser incerto que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A hipótese de um ataque feito pela Rússia contra o país que é membro da Otan, a aliança militar ocidental, fez aumentar a tensão e a possibilidade de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/internacional/polonia-afirma-que-explosao-foi-causada-por-missil-de-fabricacao-russa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia afirma que explosão foi causada por míssil de fabricação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTy2dhtae87P-XZA1rSqTg8GGL4bBHGQACaR6k3T2W6HUVWoS8lN9pb0EJSMRBAFFqDdg31tUW_" alt="Polônia afirma que explosão foi causada por míssil de fabricação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Ministério das Relações Exteriores da Polônia declarou, nesta terça-feira (15), que a queda de um “míssil de fabricação russa” foi a causa da explosão na&nbsp;...</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/mundo/noticia/2022/11/polonia-confirma-que-seu-territorio-foi-atingido-por-missil-de-fabricacao-russa-claj06smq006l01g2y23xpp3g.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia confirma que seu território foi atingido por míssil &quot;de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_XUrfyTLKYlxoaftMEA4FA_S-8wjwzdMpDtGEEQkGEIUiEt-F7fwmgO-KP641FwBQuWq2kefO" alt="Polônia confirma que seu território foi atingido por míssil &quot;de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O embaixador russo em Varsóvia foi convocado para dar &quot;explicações detalhadas&quot; sobre o ocorrido.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/mundo/polonia-convoca-embaixador-russo-para-falar-sobre-explosao-que-matou-dois/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polônia convoca embaixador russo para falar sobre explosão que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTVkZySxRsl8YKkkvbR198Bey_xl4zjbRTV2x80fuE7EIb2nWFpCPFoch2MkGN3SAgTHdQkXnoP" alt="Polônia convoca embaixador russo para falar sobre explosão que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Andrzej Duda, presidente da Polônia, afirmou que é muito provável que o país acione o Artigo 4 da Otan em uma reunião nesta quarta-feira.</p></div>
            </div>
        </a><a href='https://valor.globo.com/mundo/noticia/2022/11/15/msseis-russos-atingem-vila-na-polnia-fronteira-com-a-ucrnia-diz-fonte-dos-eua.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Míssil russo atinge vila na Polônia e eleva tensão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbmVeONnt9DT2t8-AjRu6WR7utXjDiFjWLMGHpRhkTGCvqf5npo2XNnhMGEFxk9Hjz3y76ZPb9" alt="Míssil russo atinge vila na Polônia e eleva tensão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Nenhum ataque a alvos perto da fronteira ucraniana-polonesa foi feito por meios russos de destruição”, escreveu o ministério em seu canal Telegram,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}