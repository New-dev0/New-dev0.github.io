import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Goleiro do Brasil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Goleiro do Brasil"/>
        <meta name="description" content="Trending News about Goleiro do Brasil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Goleiro do Brasil</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/6VBrtu2vV6M6rIfIXf7j7ELToYM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/r/H/2oKyFqQqS4XAOSqJDj2g/edson-cimento.jpg" alt="Goleiro do Brasil"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/pa/futebol/noticia/2022/12/02/livro-edson-cimento-o-melhor-goleiro-do-brasil-em-1977-sera-lancado-neste-sabado-dia-3.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Livro &quot;Edson Cimento – O melhor goleiro do Brasil em 1977&quot; será ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSr60BW-6ntkhCcCcODbsR20YU3V_Xi2vpQ6AyMpSAWyCL29Cb49h18cNRIANZE68Tlg0L52PDG" alt="Livro &quot;Edson Cimento – O melhor goleiro do Brasil em 1977&quot; será ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Obra conta história do ex-goleiro, que venceu o troféu Bola de Prata atuando pelo Remo. A biografia será lançada em Capanema, cidade natal de Edson e do&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}