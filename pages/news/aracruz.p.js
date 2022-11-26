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
            <Image width={800} height={500} src="https://s2.glbimg.com/FSbDizxBOmusJtx7c-V-tvrb9dc=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/m/x/3XJjJPRciE3RVSlhytBg/whatsapp-image-2022-06-06-at-16.28.41.jpeg" alt="Aracruz"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/es/espirito-santo/noticia/2022/11/25/atentado-em-aracruz-fotos.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ataques em Aracruz; FOTOS</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvppzLwR53adztlmXqAq95JZ2Y7YjHvMYLDTd0m_c39kU1SYMvWpfKCKGJS3mwNIyGt7986cVI" alt="Ataques em Aracruz; FOTOS" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Disparos ocorreram na Escola Estadual de Ensino Fundamental e Médio (EEFM) Primo Bitti e em uma escola particular na mesma avenida.</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/geral/noticia/2022-11/seis-pessoas-permanecem-internadas-apos-ataque-em-aracruz'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seis pessoas permanecem internadas após ataque em Aracruz</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUUIS9u7tW3HgzFP58uDiiSTimwLSlemb873sm89YhK0HsxiucMzPQ_sJnsONFdux-W5y1psNK" alt="Seis pessoas permanecem internadas após ataque em Aracruz" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um estudante de 11 anos atingido no abdome e uma menina de 14 anos, ferida no crânio, estão internados em estado gravíssimo. Três professores estão em&nbsp;...</p></div>
            </div>
        </a><a href='https://noticias.uol.com.br/cotidiano/ultimas-noticias/2022/11/25/aracruz-pai-de-aluno-entrevista.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aracruz: Pai de alunos relata dia de pânico durante ataque em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPqLh2YVBE9T4gtg_ZxYLDeTp3j81quMDdgeTD5R-nHBhPWAhXpFARcOwRXBNJX7r5M1XColDF" alt="Aracruz: Pai de alunos relata dia de pânico durante ataque em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pais de alunos do Centro Educacional Praia de Coqueiral em Aracruz (ES) receberam com surpresa a notícia da morte de uma estudante após um ataque a mão&nbsp;...</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/cotidiano/2022/11/ataques-em-duas-escolas-em-aracruz-es-deixam-mortos-e-feridos.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ataques em duas escolas em Aracruz (ES) deixam 3 mortos e 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8yoZUmCnFLZeuZ143sUwhWYNQ4V865HI3bA81KgpmdljIuyNZ9nf3QZvS4XV2DmsAtHJ3ShNM" alt="Ataques em duas escolas em Aracruz (ES) deixam 3 mortos e 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-aluno e filho de PM, adolescente de 16 anos foi apreendido após o crime; atirador usava suástica no braço.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/brasil/aracruz-suspende-aulas-na-rede-municipal-apos-ataque-a-tiros-no-es'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aracruz suspende aulas na rede municipal após ataque a tiros no ES</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR112R9w_IbJ9Teoi5eorcXp6dYRqCG8-xdw-t9fBFSnf6YaXkyUqqYDy4zs3ypkUteeOfSXBZ1" alt="Aracruz suspende aulas na rede municipal após ataque a tiros no ES" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ao menos três pessoas morreram baleadas, na manhã desta sexta-feira (25/11), após tiroteio em duas escolas do município do ES.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/colunas/ronda-jc/2022/11/15128853-ataque-a-escolas-em-aracruz-saiba-quem-sao-as-vitimas-e-quem-e-o-atirador-de-aracruz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ATAQUE A ESCOLAS EM ARACRUZ: saiba quem são as vítimas e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5JnQQxEgbVTjVZ9BUiZnfDGyLVQ3vHYppltnSExExuyH8vAcXEm4cGDvqUtjr9YnhYqdUSkxY" alt="ATAQUE A ESCOLAS EM ARACRUZ: saiba quem são as vítimas e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ataques a tiros a duas escolas em Aracruz, Espírito Santo, deixaram ao menos três mortos e 11 feridos.</p></div>
            </div>
        </a>
        </Template></>;
}