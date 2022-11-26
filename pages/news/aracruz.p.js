import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aracruz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aracruz"/>
        <meta name="description" content="Trending News about Aracruz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aracruz</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/ZOINDa6AUGRkVjDQbmy_kWEqItQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/h/N/LMczfDTQWc4VKaMtY1IA/es1-reg-pgm-novembro-25-11-vivo-ataque.mov-snapshot-01.14.074.jpg" alt="Aracruz"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/es/espirito-santo/noticia/2022/11/25/aulas-na-rede-municipal-de-aracruz-sao-suspensas-apos-ataques-em-escolas-no-es.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aulas na rede municipal de Aracruz são suspensas após ataques ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTqevyJ_j8Bz343C65GX07DYfcWK53rp5ORj06z4jLLJkP3RHAtu97WZ5sYiGtIsGanZ-Pbmqvl" alt="Aulas na rede municipal de Aracruz são suspensas após ataques ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por meio da Secretaria Municipal de Educação (Semed), a prefeitura disse que, com a chegada da notícia, pais e responsáveis de alunos de todas as escolas do&nbsp;...</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/geral/noticia/2022-11/policia-prende-suspeito-de-ser-atirador-no-espirito-santo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polícia prende suspeito de ser atirador em Aracruz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUUIS9u7tW3HgzFP58uDiiSTimwLSlemb873sm89YhK0HsxiucMzPQ_sJnsONFdux-W5y1psNK" alt="Polícia prende suspeito de ser atirador em Aracruz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sem dar detalhes, a Polícia Militar do Espírito Santo informou que prendeu um suspeito de ser o autor do ataque a tiros na cidade de Aracruz (ES).</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/cotidiano/ultimas-noticias/2022/11/25/atiradores-invadem-e-atacam-2-escolas-no-es-policia-confirma-mortes.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aracruz: Atentado a tiros em duas escolas no ES deixam ao menos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPqLh2YVBE9T4gtg_ZxYLDeTp3j81quMDdgeTD5R-nHBhPWAhXpFARcOwRXBNJX7r5M1XColDF" alt="Aracruz: Atentado a tiros em duas escolas no ES deixam ao menos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Polícia busca homem que invadiu duas escolas em Aracruz (ES), na manhã desta sexta-feira (25), com roupas camufladas e capuz.</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/radioagencia-nacional/geral/audio/2022-11/ataque-tiros-em-escolas-de-aracruz-es-deixa-mortos-e-feridos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ataque a tiros em escolas de Aracruz (ES) deixa mortos e feridos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUUIS9u7tW3HgzFP58uDiiSTimwLSlemb873sm89YhK0HsxiucMzPQ_sJnsONFdux-W5y1psNK" alt="Ataque a tiros em escolas de Aracruz (ES) deixa mortos e feridos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atirador entrou em uma escola estadual e outra escola particular efetuando disparos. A Polícia Militar do Espírito Santo informou que ainda não sabe quem é&nbsp;...</p></div>
            </div>
        </a><a href='https://www.agazeta.com.br/es/politica/prefeitura-de-aracruz--suspende-aulas-na-rede-municipal-apos-ataques-a-escolas-1122'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prefeitura de Aracruz suspende aulas na rede municipal após ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRiASc-EKUfYWm7Xsj2NdHq3DuS_3oNR-_MHTLPlTSZSbC28rB04UTbfqTYoXjDyhqIz2BG-_Xw" alt="Prefeitura de Aracruz suspende aulas na rede municipal após ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ataques a tiros ocorreram na manhã desta sexta-feira (25) e deixou três mortos e 13 feridos em duas escolas, uma pública da rede estadual e outra&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/cotidiano/2022/11/ataques-em-duas-escolas-em-aracruz-es-deixam-mortos-e-feridos.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ataques em duas escolas em Aracruz (ES) deixam 3 mortos e 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8yoZUmCnFLZeuZ143sUwhWYNQ4V865HI3bA81KgpmdljIuyNZ9nf3QZvS4XV2DmsAtHJ3ShNM" alt="Ataques em duas escolas em Aracruz (ES) deixam 3 mortos e 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-aluno e filho de PM, adolescente de 16 anos foi apreendido após o crime; atirador usava suástica no braço.</p></div>
            </div>
        </a>
        </Template></>;
}