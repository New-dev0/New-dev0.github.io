import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chaves Copa do Mundo de 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chaves Copa do Mundo de 2022"/>
        <meta name="description" content="Trending News about Chaves Copa do Mundo de 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chaves Copa do Mundo de 2022</h1>
            <Image width={800} height={500} src="https://imagens.ne10.uol.com.br/veiculos/_midias/jpg/2022/11/23/615x300/1_000_32qc8jb-22067214.jpg" alt="Chaves Copa do Mundo de 2022"/>
            <h3>Recent News</h3>
            <a href='https://interior.ne10.uol.com.br/esportes/2022/11/15131187-tabela-da-copa-do-mundo-2022-veja-o-chaveamento-das-oitavas-de-final-e-os-confrontos-do-mata-mata.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TABELA DA COPA DO MUNDO 2022: Veja o CHAVEAMENTO DAS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS2y_NmKcKEaaK2JJVaYGIqsPI5_1XfcZUeup6ECvpz2rGlvpxkqF70l-hBdudZ9l4FfaPDeIrF" alt="TABELA DA COPA DO MUNDO 2022: Veja o CHAVEAMENTO DAS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avançam para as oitavas de final os dois melhores colocados de cada grupo.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/28/copa-2022-chega-a-ultima-rodada-com-tres-classificados-e-27-na-briga-veja-as-contas-nos-oito-grupos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa 2022 chega à última rodada com três classificados e 27 na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQAQgsCI6QFgrEJ-d7l4JOXCSLVlIRE5573SvkRmOlJSEp9bMxjui0A24s8B3gv9Dv7wqse606d" alt="Copa 2022 chega à última rodada com três classificados e 27 na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brasil, Portugal e França já estão nas oitavas, enquanto Catar e Canadá só cumprem tabela; com cenários desenhados, simule quem vai ser o campeão.</p></div>
            </div>
        </a><a href='https://placar.abril.com.br/copa-do-mundo/quais-sao-os-confrontos-das-oitavas-de-final-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quais são os confrontos das oitavas de final da Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgWZJbjO64hAsaJrLTFBzHFEzddNbkPz4nh0hI3YZYCIlpvCNuh0GHQqUSC4TGcwNiPNl2EF9a" alt="Quais são os confrontos das oitavas de final da Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com o fim da fase de grupos, jogos e possíveis enfrentamentos da fase eliminatória já começam a ser definidos; confira.</p></div>
            </div>
        </a><a href='https://olympics.com/pt/noticias/criterios-de-desempate-fase-de-grupos-copa-do-mundo-fifa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confira os critérios de desempate na fase de grupos da Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTPqnxputFLjdRSeDcQRHwhfvuv3DB87w8DVjxU1yZC4Z5bSkQHg-nxKFoZKXL-H62-Za-_rQIH" alt="Confira os critérios de desempate na fase de grupos da Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os pontos e a diferença de gols são os principais fatores que determinam quais equipes avançam para as oitavas de final da Copa no Catar.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/esporte/2022/11/brasil-e-franca-ja-estao-nas-oitavas-da-copa-veja-datas.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil e outros seis já estão nas oitavas da Copa; veja datas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZW9uuOGj1YwvLVtFN0ESTHkedCWR6ajXKbDUcsIvmbZwH94LF07-0a0gkY53SGo_S6K1uSOR8" alt="Brasil e outros seis já estão nas oitavas da Copa; veja datas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Começam a tomar forma as oitavas de final da Copa do Mundo. Brasil, França e Portugal, únicos times que venceram suas duas primeiras partidas,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/28/copa-do-mundo-oitavas-possiveis-confrontos.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi x Mbappé e surpresas: as oitavas da Copa se a 1ª fase ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT84ppGYuJvGbcXfh61QGWJz5ikei1UK0HgmjVNTFzK4tUlRG88hSEn-i7wI8ziQ-YuYHmnpGtO" alt="Messi x Mbappé e surpresas: as oitavas da Copa se a 1ª fase ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Confira como ficariam as oitavas de final da Copa do Mundo do Qatar 2022 se a fase de grupos terminasse hoje.</p></div>
            </div>
        </a>
        </Template></>;
}