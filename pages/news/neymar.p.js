import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Neymar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Neymar"/>
        <meta name="description" content="Trending News about Neymar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Neymar</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=c4ceec74-77c5-4ff9-a162-b5cb19273ce1&w=800&h=420&watermark=true&t=20221124221000" alt="Neymar"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/neymar-com-o-mundial-em-risco-e-muito-cedo-para-dizer-isso-15385773.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Neymar com o Mundial em risco? É muito cedo para dizer isso...&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQXbFqhXaHE88NHuKQvGofqntZZUGHRPtPBPiQVX3tjUV-slO1f_m8pomcCKMfNuX6Zf5ZJ9-i8" alt="&quot;Neymar com o Mundial em risco? É muito cedo para dizer isso...&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar lesionou-se no Brasil-Sérvia e foi substituído com queixas no tornozelo direito. O médico da seleção brasileira não adiantou muitos pormenores sobre&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/internacional/competicoes-de-selecoes/mundial/mundial-2022/detalhe/medico-do-brasil-confirma-lesao-no-tornozelo-direito-de-neymar?ref=HP_Ultimas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Médico do Brasil não descarta fim do Mundial para Neymar e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXLMVU_aQnzw2pkVZedw8OSrG221S3-0cEvuXtqF-pKSpVOmNeOBhZRrG7A4qTjJFMMm0RASxT" alt="Médico do Brasil não descarta fim do Mundial para Neymar e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O fim da prova não está descartado. &quot;Ele acabou de ter uma entorse no tornozelo direito, que já inchou um pouco. É importante ver como ele vai responder. Já&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/desporto/mundial2022-neymar-tem-lesao-no-tornozelo-mas-e-cedo-para-perceber-a-gravidade-15385803.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mundial2022: Neymar tem lesão no tornozelo, mas é cedo para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRLnVetwCXEIMmmznA2qj4Y8rT2fPp149Iy4SqKlSjwXxiiwnNCKTb9zHXaUQrx_WrF2i43aLVR" alt="Mundial2022: Neymar tem lesão no tornozelo, mas é cedo para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tornozelo direito da estrela da seleção brasileira inchou após entrada dura, mas médico da canarinha diz que &quot;é muito cedo para dizer se tem o Mundial em&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/vivabem/noticias/redacao/2022/11/24/neymar-machucado-o-que-e-entorse-lesao-que-tirou-astro-da-selecao-do-jogo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar machucado: o que é entorse, lesão que tirou astro da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvu-taajS33gyTeK3tOUQ2WXz-ZGBqsnMTraRNlKstF1oX7dCy165xUVmkNw-WQ4d1DfFA0TL_" alt="Neymar machucado: o que é entorse, lesão que tirou astro da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar foi substituído no segundo tempo da vitória por 2 a 0 do Brasil sobre a Sérvia, na estreia da Copa do Mundo do Qatar,</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/futebol-internacional/2022/11/24/brasil-em-alerta-neymar-lesionado/309457/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil em alerta. Neymar lesionado - Renascença</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHcIpfqKkG4Px6VzJxGDFpYMZ3rYWimaBV-cHdbsjt5qfpYzorrc_YkdNbdlY4bTtfUh3OY1GK" alt="Brasil em alerta. Neymar lesionado - Renascença" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médico do escrete, Rodrigo Lasmar, já falou sobre a situação do jogador do PSG. “Sofreu uma entorse, o tornozelo inchou, já iniciou tratamento. Temos de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}