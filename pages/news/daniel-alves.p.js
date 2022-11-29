import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Daniel Alves</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Daniel Alves"/>
        <meta name="description" content="Trending News about Daniel Alves" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Daniel Alves</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2022/11/28/16696609626385012263f09_1669660962_3x2_rt.jpg" alt="Daniel Alves"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/esporte/2022/11/militao-admite-surpresa-por-ter-sido-escolhido-em-detrimento-de-daniel-alves.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Militão admite surpresa por ter sido escolhido em detrimento de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSDgz4bN_WOdGhEkOBN0S0BirDzBMFCFwWfmQfS76oFfoi3CBMuWlQiIu5BqVlAXxqIM_H0KI6P" alt="Militão admite surpresa por ter sido escolhido em detrimento de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Improvisado na lateral direita, zagueiro deixa jogador da posição no banco da seleção.</p></div>
            </div>
        </a><a href='https://www.lance.com.br/fora-de-campo/se-daniel-alves-nao-veio-para-jogar-tite-desperdicou-a-convocacao-diz-galvao.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Se Daniel Alves não veio para jogar, Tite desperdiçou a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTN-1wFxjo0mJ_eweek03fc9VX1lN1m03mz9azablmN3eB0OoR_KQkhSOyFytJ3RJAH0qbURjQC" alt="&#39;Se Daniel Alves não veio para jogar, Tite desperdiçou a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 39 anos, o lateral não foi escalado como titular mesmo com a lesão de Danilo.</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/brasil/foi-tocar-pandeiro-neto-ironiza-daniel-alves-apos-lateral-nao-ser-escalado,f2d6e0d9770a0de2916dd7245c55bea66bnygojp.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Foi tocar pandeiro? Neto ironiza Daniel Alves após lateral não ser ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSPPIjKP3ltWtiG1qpx2uLURMeJz34SiBJd0lkrspjrD7Ry7-oFviZmVZ06iFNLehqQb5zHNCL9" alt="Foi tocar pandeiro? Neto ironiza Daniel Alves após lateral não ser ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seguidores do ex-jogador entraram na cornetada e &#39;agradeceram&#39; o Tite pela decisão.</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/colunas/alicia-klein/2022/11/28/escalacao-de-militao-mostra-que-daniel-alves-nao-foi-ao-qatar-para-jogar.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alicia Klein - Escalação de Militão mostra que Daniel Alves não foi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTuYqTpYkiY-kt-Km59gy7GER-u0zSscql2Zrz_0y4WzNY1879bBIWcsysTNXVkCilCZAIQzlxb" alt="Alicia Klein - Escalação de Militão mostra que Daniel Alves não foi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para surpresa de um total de poucas pessoas, Tite preferiu usar o zagueiro Militão na lateral direita para enfrentar a Suíça, diante da triste contusão do&nbsp;...</p></div>
            </div>
        </a><a href='https://esportes.r7.com/futebol/copa-do-mundo/daniel-alves-e-criticado-por-ficar-no-banco-contra-a-suica-foi-levado-para-tocar-pandeiro-28112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Daniel Alves é criticado por ficar no banco contra a Suíça: &#39;Foi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTAxe_eVj-fe50Z4-YmCQoHA9h8PM0wa0I8nRnJrzsN1TamZ4GU_c8KUq99xivPVZ32ABp3XGEjEg" alt="Daniel Alves é criticado por ficar no banco contra a Suíça: &#39;Foi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral-direito ficou no banco mesmo após a lesão de Danilo, titular da posição.</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/por-que-levar-daniel-alves-e-nao-coloca-lo-em-campo-130902604.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que levar Daniel Alves e não colocá-lo em campo?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRhv7P4J3l_zNHg0jONBQS4ClRLQ9Y3Ho4b7W7m0TgEcboAjn_QCcD7qUuZzWvw6Jqe7OxAiHIg" alt="Por que levar Daniel Alves e não colocá-lo em campo?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Daniel Alves, que é o lateral-direito reserva imediato, fica no banco. A escalação é Alisson; Éder Militão, Thiago Silva, Marquinhos e Alex Sandro; Casemiro,&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.r7.com/cidades/folha-vitoria/torcida-critica-daniel-alves-no-banco-contra-a-suica-foi-para-tocar-pandeiro-28112022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Torcida critica Daniel Alves no banco contra a Suíça: &#39;Foi para tocar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJV3O7E9w8OmO9XfauNUOgXzT1bnedRLXpCBdcFvfBJJcy-rW_V5r4kzU7UcArgcOd5Rz0ZGyd" alt="Torcida critica Daniel Alves no banco contra a Suíça: &#39;Foi para tocar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lateral-direito ficou no banco de suplentes mesmo após a lesão de Danilo, titular da posição.</p></div>
            </div>
        </a>
        </Template></>;
}