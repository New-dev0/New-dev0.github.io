import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Belchior</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Belchior"/>
        <meta name="description" content="Trending News about Belchior" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Belchior</h1>
            <Image width={800} height={500} src="https://www.ofuxico.com.br/wp-content/uploads/2022/11/fragner-no-conversa-com-bial.jpg" alt="Belchior"/>
            <h3>Recent News</h3>
            <a href='https://www.ofuxico.com.br/musica-e-shows/fagner-revela-como-foi-ultimo-encontro-com-belchior/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cantor Fagner se encontrou com Belchior, uma semana antes dele ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCff-DY1QhOcQDHN_RPBrfPFNkbS2YCFyt01oZbLyGMRtWSjNXKylbFAEu4V5ui4EKyjDSY8tn" alt="Cantor Fagner se encontrou com Belchior, uma semana antes dele ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fagner esteve na sexta-feira, 25 de novembro, no “Conversa com Bial”, da TV Globo, e comentou sobre o recém-lançado “Meu Parceiro Belchior”,&nbsp;...</p></div>
            </div>
        </a><a href='https://folhadefranca.com.br/variedades/fagner-diz-que-em-ultimo-encontro-com-belchior-eles-falaram-so-coisas-maravilhosas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fagner diz que, em último encontro com Belchior, eles falaram &#39;só ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRf93noMnkkQ2T4E_VaNZTfiLa0YnwB5wFPx6KS3GM59ScbyiMy7JcDN-OZiJTao6COOxBE4I9" alt="Fagner diz que, em último encontro com Belchior, eles falaram &#39;só ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SÃO PAULO, SP (FOLHAPRESS) – O cantor Raimundo Fagner falou sobre o último encontro que teve com Belchior em entrevista ao programa Conversa com Bial&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}