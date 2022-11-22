import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cebraspe</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cebraspe"/>
        <meta name="description" content="Trending News about Cebraspe" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cebraspe</h1>
            <Image width={800} height={500} src="https://f.i.uol.com.br/fotografia/2022/11/21/1669058739637bd0b3e63b6_1669058739_3x2_rt.jpg" alt="Cebraspe"/>
            <h3>Recent News</h3>
            <a href='https://www1.folha.uol.com.br/mercado/2022/11/apos-falha-locais-de-prova-do-concurso-do-inss-devem-sair-nesta-terca.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após atraso, locais de prova do concurso do INSS devem sair nesta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdDDDVrQ0cvCKl-43QW8rb614rG20p0loemudaQp7QoxfjdMk8jmdevMwwDc8aB46n8d-3NuiQ" alt="Após atraso, locais de prova do concurso do INSS devem sair nesta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As provas objetivas terão a duração de 3 horas e 30 minutos. Segundo o edital, o candidato deverá comparecer com antecedência mínima de uma hora, com caneta&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/ap/amapa/trabalho-e-carreira/noticia/2022/11/21/inss-cebraspe-libera-aos-76-mil-candidatos-do-amapa-a-consulta-aos-locais-de-prova-do-concurso.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INSS: Cebraspe libera aos 7,6 mil candidatos do Amapá a consulta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3F7-aw1nOow9-68enT6_dvVCmR6E4sp9w3xHtjcQwJc6SKS5_r9ev0PpXHIVfFy1HElRov7eL" alt="INSS: Cebraspe libera aos 7,6 mil candidatos do Amapá a consulta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Salários chegam a R$ 5.905,79. Prova ocorrerá no próximo domingo (27). Por g1 AP — Macapá. 21/11/2022&nbsp;...</p></div>
            </div>
        </a><a href='https://diariodonordeste.verdesmares.com.br/papo-carreira/locais-de-prova-do-concurso-do-inss-serao-divulgados-nesta-segunda-21-1.3303037'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>INSS adia divulgação dos locais de prova do concurso; veja nova data</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSbGldHNuafFcEmvBQxahZ1CFDffXOinufdwDEBHmB85Mc7Ns7uAghsX9S8eo46uaHsht2qROoF" alt="INSS adia divulgação dos locais de prova do concurso; veja nova data" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Centro Brasileiro de Pesquisa em Avaliação e Seleção e de Promoção de Eventos (Cebraspe) adiou para esta terça-feira (22) a divulgação dos locais de prova&nbsp;...</p></div>
            </div>
        </a><a href='https://folhadirigida.com.br/concursos/noticias/inss-mig/concurso-inss-2022-locais-de-prova'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Concurso INSS: locais de prova saem nesta segunda, 21</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1UMVlPzyTeS60r4nQ4PNdrR9QCvpZoz4XscUgok-qWZbharJP9hYZO1yrgDtdFEhhcg0dSL26" alt="Concurso INSS: locais de prova saem nesta segunda, 21" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Como revelado no edital de convocação para as provas, os exames serão realizados no próximo domingo, 27, no turno da tarde, no período das 14h às 17h30. No dia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.direcaoconcursos.com.br/noticias/concurso-inss-locais-de-prova-22-novembro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Concurso INSS: locais de prova estarão disponíveis nesta terça ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTPp_sbDsDi0L_gWzyEH19uAmup3vJhYR2cqTHS04Ey1VY64sseImHi1PxTeXH3hqI_5o6RBP9e" alt="Concurso INSS: locais de prova estarão disponíveis nesta terça ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os locais de realização das provas do concurso INSS estarão disponíveis para consulta a partir de 22/11; veja o comunicado da banca!</p></div>
            </div>
        </a><a href='https://jornaldebrasilia.com.br/noticias/economia/apos-falha-locais-de-prova-do-concurso-do-inss-devem-sair-nesta-terca/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Após falha, locais de prova do concurso do INSS devem sair nesta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSgc3KI3LXipUwyuXQiDptnb1GxSCaWWXpKYkbFr_L5pKTrSttWd-ww07ryGh13LqjoSJCPF0R6" alt="Após falha, locais de prova do concurso do INSS devem sair nesta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Segundo o instituto, a Cebraspe precisou fazer ajustes nos locais das provas, para alterar a distribuição dos candidatos.</p></div>
            </div>
        </a><a href='https://fusne.com/web-stories/concurso-inss-2022-cebraspe-libera-consulta-aos-locais-de-prova'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Concurso INSS 2022: Cebraspe libera consulta aos locais de prova ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1Z3vKyPeWmyQeVAC0PgACmuGNm0ri3wBYD1KuHyBprmB-wlnJlivggQfnFr5rAxJY6uDhek_7" alt="Concurso INSS 2022: Cebraspe libera consulta aos locais de prova ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fica disponível para consulta, a partir desta segunda-feira (21), os locais de prova do concurso público do Instituto Nacional do Seguro Social (INSS).</p></div>
            </div>
        </a>
        </Template></>;
}