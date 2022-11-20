import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vitoria</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vitoria"/>
        <meta name="description" content="Trending News about Vitoria" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vitoria</h1>
            <Image width={800} height={500} src="https://cdn-images.rtp.pt/icm/noticias/images/f7/f72ff8bfe5fdb5426cc3cff7d2c60178?w=860&q=90&rect=0,110,1233,676&auto=format" alt="Vitoria"/>
            <h3>Recent News</h3>
            <a href='https://www.rtp.pt/noticias/futebol-nacional/vilafranquense-e-vitoria-de-guimaraes-empatam-sem-golos-na-taca-da-liga_d1448282'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vilafranquense e Vitória de Guimarães empatam sem golos na Taça ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRrhYIE7FKxuGc_qAJwzDwPlcKsmhrjZwFDEpe0iuZNx1YlZdJNKblJkMAg5RcPg42jTeV-_uf5" alt="Vilafranquense e Vitória de Guimarães empatam sem golos na Taça ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Vitória de Guimarães e o Vilafranquense empataram sem golos em jogo referente à primeira jornada do Grupo F da Taça da Liga de futebol, disputado hoje no&nbsp;...</p></div>
            </div>
        </a><a href='https://vitoriasc.pt/2022/11/19/boletim-clinico-ud-vilafranquense-vitoria-sc/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boletim clínico: UD Vilafranquense - Vitória SC - Vitória Sport Clube</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsJ_6B77UKX8SF8veRrUdGALuwvZkthXxhs5yuSQtuOhxl6DXiQn2emR5-WA3V2WINrM75taPK" alt="Boletim clínico: UD Vilafranquense - Vitória SC - Vitória Sport Clube" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O boletim clínico do Vitória SC conta com Tomás Händel (lesão muscular na coxa esquerda), Miguel Maga (fratura da clavícula direita), Jorge Fernandes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jornalnordeste.com/noticia/vitoria-caseira-coloca-cab-na-lideranca'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitória caseira coloca CAB na liderança</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJoC7Ij4rOBOSu2SXauVOq6Im_5Uk8FIil1rYVOGkW-MQTOITMKCNW1LQVqGrnnt1jHUyYcAZD" alt="Vitória caseira coloca CAB na liderança" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Clube Académico de Bragança deu mais um importante na qualificação para o nacional de voleibol ao vencer, esta tarde, o AVC Famalicão por 3-0,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.diariodominho.pt/2022/11/19/vitoria-sc-queremos-chegar-a-final-four/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vitória SC. «Queremos chegar à final-four» - DM</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9nmKaR_xmmRJk32TmqJrcd_c_Lo56yxgeghNNo6ziqJoOshWkuIH0fMQPE-79BcjdJbWsKWBS" alt="Vitória SC. «Queremos chegar à final-four» - DM" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Moreno Teixeira conta com várias ausências na deslocação de hoje ao recinto do Vilafranquense. Luís Filipe Silva. 19 Nov 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-19/vitoria-de-guimaraes-equipa-alguma-se-superiorizou-resultado-e-justo/965404'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Equipa alguma se superiorizou: resultado é justo»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTwk9nAgsWmU1pNtMw0exBp0swyEdIOd12vJN8yb_Q3zLagTKNz6h6q5JpxL-YpemFP9odIzwt3" alt="«Equipa alguma se superiorizou: resultado é justo»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}><b>Vitória</b> de Guimarães 19.11.2022 23:50. Por Redação. Por Redação. O treinador do V. Guimarães, Moreno Teixeira, considerou justo o empate 0-0 da equipa que orienta, na noite deste sábado, no Estádio Municipal de Rio Maior, diante do Vilafranquense (Liga&nbsp;...</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/desporto/2116732/o-resumo-do-vilafranquense-vitoria-sc-em-apenas-60-segundos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O resumo do Vilafranquense-Vitória SC em apenas 60 segundos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRO8wd0jdCJmVcbx1ME9BQZWSEne8p7P0xCXrBhpLB0bMiUdxRgBNAU4xhYuQ26E3ZKU0PXXg6b" alt="O resumo do Vilafranquense-Vitória SC em apenas 60 segundos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vilafranquense e Vitória SC empataram (0-0), este sábado, na jornada inaugural da Taça da Liga, em jogo a contar para o grupo F da prova.</p></div>
            </div>
        </a><a href='https://www.ojogo.pt/futebol/taca-liga/noticias/rui-borges-apos-nulo-frente-ao-v-guimaraes-acreditamos-que-podiamos-sair-vencedores-15369466.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rui Borges após nulo frente ao V. Guimarães: &quot;Acreditámos que ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7jGbJ83qlHhsggADVk9AaClfY_sxRIj9ev5fbvHFLTB3PuvQ9mTUezo3ibVz-LTipTtY50wLe" alt="Rui Borges após nulo frente ao V. Guimarães: &quot;Acreditámos que ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de Rui Borges, treinador ribatejano, após o Vilafranquense - Vitória de Guimarães (0-0), jogo da primeira jornada do Grupo F da Taça da Liga.</p></div>
            </div>
        </a>
        </Template></>;
}