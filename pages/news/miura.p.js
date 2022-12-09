import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Miura</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Miura"/>
        <meta name="description" content="Trending News about Miura" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Miura</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=d9b1d41b-2019-409f-a5dc-67a1ba06f8c4&w=800&h=420&watermark=true&t=20221207205500" alt="Miura"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/futebol/2a-liga/noticias/noticia-no-japao-miura-o-jogador-mais-velho-do-mundo-ruma-a-oliveirense-15446497.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Notícia no Japão: Miura, o jogador mais velho do Mundo, ruma à ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRmQxqj90TqaXpB2tMTv_TB_lYOA4nrr0hiE5frrM9UMRdh4vNheiGWeOrxe9EvbyLs_OSv34z7" alt="Notícia no Japão: Miura, o jogador mais velho do Mundo, ruma à ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kazuyoshi Miura, atualmente com 55 anos, está a ser apontado como reforço da formação de Oliveira de Azeméis.</p></div>
            </div>
        </a><a href='https://www.zerozero.pt/news.php?id=426451'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por esta não esperava: aos 55 anos, Kazu Miura, lenda japonesa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1vXCoeyuy3YoEF8wmwo6lrKz9pgvzBtOJOHGw81rP8r4_zmecwAMGq1X0ATD_tBW8JuNM3O9U" alt="Por esta não esperava: aos 55 anos, Kazu Miura, lenda japonesa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Já bateu recordes do Guinness por jogar e marcar no futebol japonês com mais de 50 anos - entre outros feitos - e é, sem sombra de dúvida, uma lenda viva no&nbsp;...</p></div>
            </div>
        </a><a href='https://www.record.pt/futebol/futebol-nacional/2--liga/ud-oliveirense/detalhe/jogador-mais-velho-do-mundo-esta-a-caminho-da-oliveirense-avancam-japoneses'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogador mais velho do Mundo está a caminho da Oliveirense ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTx0u4lKpM5ES_zz-dG9UDMKfe1FZ-V38rpPs_VtzMRCxr4hAD9_W4Aow7lh5CleLjk2IPDbFQp" alt="Jogador mais velho do Mundo está a caminho da Oliveirense ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O portal japonês &#39;Nikkan Sports&#39;, o mais importante do país, adianta que o veteraníssimo Kazuyoshi Miura, conhecido por ser o jogador mais velho do Mundo,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/desporto/jogador-de-55-anos-perto-de-reforcar-a-oliveirense-15446506.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogador de 55 anos perto de reforçar a Oliveirense</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJz_Cy6uo4xxVrh2tOaWUYInuLOd96ml_BseMrFwWL5_l26dtn31AXyE_Qvn--Ecg8s_d4UwLS" alt="Jogador de 55 anos perto de reforçar a Oliveirense" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Está no livro de recordes do &quot;Guinness&quot; por ser o futebolista mais velho do Mundo ainda no ativo. O japonês Kazuyoshi Miura tem 55 anos e estará a caminho&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-12-07/liga-2-jogador-mais-velho-do-mundo-a-caminho-da-oliveirense-avancam-no-japao/967756'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogador mais velho do Mundo a caminho da Oliveirense, avançam ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeRldkxPFyUaAQPBOIfqNuiNKsBrWLLjVWymfBJuJ7XdmMnuLUJcvXXnNcqczfbQFjTI0IpYsU" alt="Jogador mais velho do Mundo a caminho da Oliveirense, avançam ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trata-se de Kazu Miura, que, segundo o jornal nipónico Nikkan Sport, embarcou esta quarta-feira rumo a Portugal, publicando mesmo fotografia do jogador no&nbsp;...</p></div>
            </div>
        </a><a href='https://tntsports.com.br/melhorfuteboldomundo/Centroavante-japones-de-55-anos-esta-perto-de-assinar-com-clube-da-2-divisao-portuguesa-20221207-0020.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Centroavante japonês de 55 anos está perto de assinar com clube ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUptI0N_nJkw9iuZD_i59CMqix6ZDlSjzuctLYJ9F6QOXEMWZOBTFeDyySs04eSN2Fi--tpKKs" alt="Centroavante japonês de 55 anos está perto de assinar com clube ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kazuyoshi Miura tem uma longa trajetória no futebol, inclusive com passagens por clubes brasileiros nas décadas de 80 e 90, como Santos, CRB e Coritiba. Futebol&nbsp;...</p></div>
            </div>
        </a><a href='https://bolanarede.pt/especial-bola-na-rede/ultima-hora/jogador-mais-velho-do-mundo-a-caminho-de-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jogador mais velho do Mundo a caminho de Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-51m21wG5-sBH5m4WA9P-XQwZUvIEnFMs4qSVhLa0y7nNp1tKBCcSqFHoIE9OtTWGMX1UYgYr" alt="Jogador mais velho do Mundo a caminho de Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chama-se Kazuyoshi Miura e, aos 55 anos de idade, é o jogador mais velho do Mundo. Agora, está muito perto de jogar em Portugal.</p></div>
            </div>
        </a>
        </Template></>;
}