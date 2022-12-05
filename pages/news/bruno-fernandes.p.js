import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bruno Fernandes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bruno Fernandes"/>
        <meta name="description" content="Trending News about Bruno Fernandes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bruno Fernandes</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=62bcc09f-fcfe-4905-be26-c8543fe45ebd&w=800&h=420&watermark=true&t=20221204134500" alt="Bruno Fernandes"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/selecao/noticias/bruno-fernandes-como-novo-grande-lider-lideres-sao-todos-15426270.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bruno Fernandes como novo grande líder? &quot;Líderes são todos...&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVHslRfyAfvW4XpwHsVVQmTdzBoGPuY-Bwq159evuuDiVSBK0xaBmQeKVBG7PDGLe6gRsxk1Kl" alt="Bruno Fernandes como novo grande líder? &quot;Líderes são todos...&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Declarações de William Carvalho, médio da Seleção Nacional, em conferência de imprensa de antevisão ao jogo com a Suíça, na terça-feira (19h00),&nbsp;...</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/mundial-2022/selecao/william-bruno-fernandes-ou-cristiano-ronaldo-lideres-sao-todos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>William: «Bruno Fernandes ou Cristiano Ronaldo? Líderes são todos»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHnfZr1PpaQ90r-BDthNAMDWJLT8d0iqddVIYSBcwWhcEwKEg0ktFtVcqMz1qSfsQ3Hws5Q43a" alt="William: «Bruno Fernandes ou Cristiano Ronaldo? Líderes são todos»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Médio falou do último episódio com o capitão da Seleção no jogo com a Coreia do Sul e das exibições do jogador do Manchester United.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-04/portugal-bruno-fernandes-novo-lider-lideres-somos-todos/967243'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Bruno Fernandes novo líder? Líderes somos todos»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTghqkwXWAGdsicqCwOVO-KXieodnLy70falGz-QrQMIwExZJqBiJP8b_v7Es5AT4F4CGjBPgeG" alt="«Bruno Fernandes novo líder? Líderes somos todos»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«É um grande jogador e já o tem demonstrado. Joguei com ele no Sporting. Está a fazer uma excelente época no Manchester United. Se é o novo grande líder?</p></div>
            </div>
        </a>
        </Template></>;
}