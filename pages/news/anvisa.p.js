import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Anvisa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Anvisa"/>
        <meta name="description" content="Trending News about Anvisa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Anvisa</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/SNp9pm8meVXf_lTKWkelKN4Cs2E=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/g/v/CkWeHbRCyxqAQO05CPBA/reuters.jpg" alt="Anvisa"/>
            <h3>Recent News</h3>
            <a href='https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/anvisa-aprova-venda-do-medicamento-paxlovid-em-farmacias'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anvisa aprova venda do medicamento Paxlovid em farmácias</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Anvisa aprova venda do medicamento Paxlovid em farmácias" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Medicamento para tratamento da Covid-19 só pode ser vendido com receita. Prazo de validade também foi ampliado.</p></div>
            </div>
        </a><a href='https://g1.globo.com/saude/noticia/2022/11/21/paxlovid-anvisa-aprova-venda-em-farmacias-de-remedio-da-pfizer-contra-covid.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paxlovid: Anvisa aprova venda em farmácias de remédio da Pfizer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMAaDLMlKA_1mQd3cezX6gLo1fYmuK4q9ArUb_f4PUwC-SQ1L1DKOiaDDBgHHfff4XKyiidek1" alt="Paxlovid: Anvisa aprova venda em farmácias de remédio da Pfizer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O remédio consiste em dois medicamentos antivirais em conjunto: o nirmatrelvir e o ritonavir, que quando combinados bloqueiam uma enzima que o vírus da Covid-19&nbsp;...</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/saude/anvisa-aprova-medicamento-contra-a-covid-19-para-venda-em-farmacias/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anvisa aprova medicamento contra a Covid-19 para venda em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0h_0DaWn5yqygzeCxbgRTpoVRgIQXHdawZ4yrdzs8O0D0woPxM6GYDKVMjGkFJtL_PfkK243B" alt="Anvisa aprova medicamento contra a Covid-19 para venda em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trata-se do Paxlovid, fabricado pela Pfizer, que deve priorizar o abastecimento para o programa do Sistema Único de Saúde (SUS)</p></div>
            </div>
        </a><a href='https://www.cnnbrasil.com.br/saude/entenda-como-funciona-o-paxlovid-liberado-pela-anvisa-para-venda-em-farmacias/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entenda como funciona o Paxlovid, liberado pela Anvisa para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYpUnrfVeEimIs-yc3FsOA6QmNaQmnUsO_rsIkpD20EZnbBg_pxWNOfAj70jlu9E3IxtQ3w1kZ" alt="Entenda como funciona o Paxlovid, liberado pela Anvisa para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Agência Nacional de Vigilância Sanitária (Anvisa) autorizou a venda do medicamento Paxlovid, utilizado no tratamento da Covid-19, em farmácias do país.</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/saude/noticia/2022-11/anvisa-aprova-venda-de-paxlovid-para-tratar-covid-19'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anvisa aprova venda de Paxlovid para tratar covid-19</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSv0KYvf8hYYIOxDdat-kdmZLhiV0acCvQTTCmeeifdYscodV331-RivU2H2OJRsl5Q1AgwILM6" alt="Anvisa aprova venda de Paxlovid para tratar covid-19" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A venda do Paxlovid (nirmatrelvir + ritonavir), utilizado no tratamento da covid-19, para farmácias e hospitais particulares do país foi aprovada,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.direcaoconcursos.com.br/noticias/concurso-anvisa-previsto-2023'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Concurso Anvisa: edital será uma das prioridades em 2023; entenda!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSM0eIR75x_Kati-7A_u0ydhE3WozvzBYOwqQZgpr1PiyAC-Ja2J7Zb8HKc-8OjP5_j1acU3pHu" alt="Concurso Anvisa: edital será uma das prioridades em 2023; entenda!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Analista Administrativo: 15 vagas; Técnico em Regulação e Vigilância Sanitária: 5 vagas; Técnico Administrativo: 44 vagas. Já em setembro de 2022, o diretor da&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/equilibrioesaude/2022/11/anvisa-aprova-venda-em-farmacias-de-remedio-da-pfizer-para-tratar-covid.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Anvisa aprova venda em farmácias de remédio da Pfizer para tratar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTZDH0o7-f_MytrxECtj7YbfKzlY_KCnZj4MXj0_zV8QrhPTA-IGYqHbiUZ6Frn3PqNntKy0CAc" alt="Anvisa aprova venda em farmácias de remédio da Pfizer para tratar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paxlovid teve seu uso emergencial aprovado no Brasil em março deste ano e já foi incorporado ao SUS.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/colunas/painel/2022/11/concurso-para-anvisa-e-ans-esta-entre-prioridades-da-transicao.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Concurso para Anvisa e ANS está entre prioridades da transição</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSv8e_515IikQI7qmOGhUGKvNK4oaCu_PeLej7FwyIovaXvaPHpvjPcwAsUxkrGRMy-e03nDO_5" alt="Concurso para Anvisa e ANS está entre prioridades da transição" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coordenador do grupo de trabalho da Saúde no gabinete de transição de governo, o senador Humberto Costa (PT-PE) estabeleceu como uma das prioridades metas&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}