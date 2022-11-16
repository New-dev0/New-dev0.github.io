import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nkunku</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nkunku"/>
        <meta name="description" content="Trending News about Nkunku" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nkunku</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/6GFPBmwhdOCFmIAhCUjJy9XGeMk=/1200x/smart/filters:cover():strip_icc()/s01.video.glbimg.com/x720/11128448.jpg" alt="Nkunku"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/15/nkunku-da-franca-e-cortado-da-copa-do-mundo.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nkunku, da França, é cortado da Copa do Mundo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRifwKfl4s_X43D8p54fl4IGZYWjaD_fUGYazhThaxBy2dktSQsbocBCTfknfaPXy2N_I20UBmO" alt="Nkunku, da França, é cortado da Copa do Mundo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atacante sofreu lesão em treino nesta terça-feira e é o quarto desfalque da seleção para a Copa. Kolo Muani é o substituto, segundo imprensa local,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com.br/futebol/copa-do-mundo/artigo/_/id/11232989/artilheiro-bundesliga-nkunku-lesiona-treinamento-franca-fora-copa-do-mundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Artilheiro da Bundesliga, Nkunku se lesiona em treinamento com a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkV7tqlfikS6sQVHMx4YZP2eB3umrQSLQAuam75wY10snRu-aCXzR6Ws9uV_8vgCFNHYlZJ0Ks" alt="Artilheiro da Bundesliga, Nkunku se lesiona em treinamento com a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Federação Francesa anunciou que convocará um substituto para o atacante assim que o resultado dos exames for validado pela Fifa.</p></div>
            </div>
        </a><a href='https://tntsports.com.br/melhorfuteboldomundo/Franca-exames-apontam-lesao-e-Nkunku-e-cortado-da-Copa-do-Mundo-20221115-0022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>França: exames apontam lesão e Nkunku é cortado da Copa do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ19eS_By6rxXF1nse1kDwWidbujYs-kCIzzn9iueK-ISDP4P70kCrmK6t6id2mcotVzKB0bAVanQ" alt="França: exames apontam lesão e Nkunku é cortado da Copa do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A bruxa está solta na França. O atacante Christopher Nkunku, do RB Leipzig, foi cortado da seleção, nesta terça-feira (15), devido à uma lesão no joelho&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/nkunku-sofre-lesao-no-joelho-e-e-cortado-da-selecao-francesa-para-copa-do-mundo-do-catar,72347b0ab464d1f1a5c7e6d493592c670rlnojnx.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nkunku sofre lesão no joelho e é cortado da seleção francesa para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Nkunku sofre lesão no joelho e é cortado da seleção francesa para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A seleção francesa anunciou que o atacante Nkunku foi cortado da disputa da Copa do Mundo do Catar. O jogador sofreu um entorse no joelho esquerdo durante&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/ultimas-noticias/enm/2022/11/15/mais-um-apos-pancada-em-treino-franca-perde-nkunku-para-copa-do-mundo.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mais um! Após pancada em treino, França perde Nkunku para Copa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Mais um! Após pancada em treino, França perde Nkunku para Copa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nesta terça-feira (15), o repórter Fabrizio Romano confirmou que a França tem mais um desfalque para a disputa da Copa do Mundo, o meia Nkunku.</p></div>
            </div>
        </a><a href='https://www.esportesdp.com.br/noticias/futebol/internacional/2022/11/atacante-frances-nkunku-sofre-lesao-no-treino-e-fica-de-fora-da-copa-d.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atacante francês Nkunku sofre lesão no treino e fica de fora da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRldSAM4doVCsbcdTY_CMZy0iHh4ReAe_qO7779tmeUCsDmlqfeUqpXX-iEIT4P4BywulIwwq4z" alt="Atacante francês Nkunku sofre lesão no treino e fica de fora da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A França sofreu mais uma baixa em seu elenco para a Copa do Mundo de 2022. Após ter o zagueiro Kimpembe cortado da lista de convocados por não se recuperar&nbsp;...</p></div>
            </div>
        </a><a href='https://www.gazetaesportiva.com/times/franca/nkunku-sofre-lesao-no-joelho-durante-treinamento-da-franca-e-esta-fora-da-copa-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nkunku sofre lesão no joelho durante treinamento da França e está ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIoOt_44WZ3E1GexKb-Q_lBQOAa852jJMIQBIfcHFuGTdH9aVS10WFU64QjPd2n9_iyghBrKX7" alt="Nkunku sofre lesão no joelho durante treinamento da França e está ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Federação Francesa de Futebol (FFF) informou na noite desta terça-feira que o atacante Christopher Nkunku, do RB Leipzig, está fora da Copa do Mundo. O.</p></div>
            </div>
        </a>
        </Template></>;
}