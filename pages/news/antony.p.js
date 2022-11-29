import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Antony</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Antony"/>
        <meta name="description" content="Trending News about Antony" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Antony</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/11/28/638529e9c350a.jpeg" alt="Antony"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/selecao-brasileira/antony-revela-que-nao-foi-o-unico-jogador-da-selecao-a-ter-sintomas-de-gripe.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>​Antony revela que não foi o único jogador da Seleção a ter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTIzUWA5I2br2dgYx5IH84VwYIfbqL3KdlX8_oMNtfljosscWz7ApkA65PH93UBuSizJoj9FOfB" alt="​Antony revela que não foi o único jogador da Seleção a ter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atacante, que perdeu dois dias de treino na semana por sintomas de mal-estar, afirmou que outros atletas do elenco também se sentiram mal durante a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/selecao-brasileira/artigo/_/id/11295736/antony-explica-problema-saude-atingiu-ate-neymar-selecao-brasileira-antes-vitoria-contra-suica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antony explica problema de saúde que atingiu até Neymar na ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQuMyLQ7JJgosZRo8wZK-SyzQUdspPR_YDlS8dW06jmwiMTvRr7GOtzBkb4bkjrjzMfKRHIE8SX" alt="Antony explica problema de saúde que atingiu até Neymar na ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de desfalcar a seleção brasileira em dois treinos no Qatar por conta de um mal-estar, o atacante Antony voltou a campo nesta segunda-feira (28) na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/28/apos-gripe-antony-cita-ar-condicionado-e-diz-logo-estarei-100.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após gripe, Antony cita ar-condicionado e diz: &#39;logo estarei 100%&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ0WVCxzLNeut0RDejQ-1PoEIDboybLuMwnCrBc0E6Gk6GVLePCTWlfbGmPc-LbVggO5kUmQv5u" alt="Após gripe, Antony cita ar-condicionado e diz: &#39;logo estarei 100%&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antony ainda não está 100% após apresentar sintomas gripais e perder dois treinamentos. Mesmo assim, o atacante entrou na vitória por 1 a 0 sobre a Suíça.</p></div>
            </div>
        </a><a href='https://www.bnews.com.br/noticias/esporte/copa-do-mundo-paqueta-antony-e-neymar-estao-gripados-neymar-tem-quadro-de-febre.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo: Paquetá, Antony e Neymar estão gripados; camisa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPGiiHa_rmAgzf-6BvY6W81CwHLpzsDy8hBUIMZoqSlId6OalsPk6DV8ixURluXm9oDB4RwhHN" alt="Copa do Mundo: Paquetá, Antony e Neymar estão gripados; camisa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Três jogadores da sele&nbsp;...</p></div>
            </div>
        </a><a href='https://www.metropoles.com/esportes/futebol/alem-de-paqueta-e-antony-neymar-apresenta-sintomas-de-gripe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Além de Paquetá e Antony, Neymar apresenta sintomas de gripe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVByfwsrZWYmcfm5GzejwP-zon28qhMPNo-ZrQ6meXd9oMmllfQ2jFF29Lw7PlEUqkj-M4ur1z" alt="Além de Paquetá e Antony, Neymar apresenta sintomas de gripe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na zona mista, Vinícius Júnior revelou que Neymar teve febre antes da delegação sair para o jogo contra a Suíça, nesta segunda-feira (28/11)</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/blogs/torcedor/2022/11/15130691-surto-na-selecao-brasileira-para-a-copa-do-mundo-2022-neymar-antony-e-paqueta-preocupam-para-os-jogos-do-brasil-na-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SURTO NA SELEÇÃO BRASILEIRA PARA A COPA DO MUNDO ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsCz6u2d9QejTQtkKQ_1K3r7Hr88VxHoaNBoWeE7cjF9qKusHGLUawTysiKDpKqhz0WOOorPh4" alt="SURTO NA SELEÇÃO BRASILEIRA PARA A COPA DO MUNDO ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Outro atleta que apresentou sintomas foi o atacante Antony, que perdeu dois treinos da seleção brasileira por causa dos mesmos sintomas de Neymar. O atleta só&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}