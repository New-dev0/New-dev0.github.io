import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ana Paula arosio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ana Paula arosio"/>
        <meta name="description" content="Trending News about Ana Paula arosio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ana Paula arosio</h1>
            <Image width={800} height={500} src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/11/23/675x450/1_ana_paula_arosio-26908668.jpg?20221123152540?20221123152540" alt="Ana Paula arosio"/>
            <h3>Recent News</h3>
            <a href='https://www.correiobraziliense.com.br/diversao-e-arte/2022/11/5053915-ana-paula-arosio-ressurgem-em-ensaio-sem-maquiagem-aos-47-anos.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Paula Arósio ressurge em ensaio sem maquiagem aos 47 anos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEM5wPFowi2b_Hue0yBFzFlju26fSuV5xCeivu7Us0SFj6tTfb3cYiCHJUobx153fD6g9zmH4D" alt="Ana Paula Arósio ressurge em ensaio sem maquiagem aos 47 anos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz Ana Paula Arósio está afastada da televisão desde 2010, quando fez seu último trabalho na Globo.</p></div>
            </div>
        </a><a href='https://www.metropoles.com/colunas/leo-dias/reclusa-apos-abandonar-a-tv-ana-paula-arosio-ressurge-com-novo-visual'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reclusa após abandonar a TV, Ana Paula Arósio ressurge com ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnS0HQK2SVrUVslGLgGyQWEWQgCvAXmpkSQJ5ndcM50gKWbrSwXVySIpIZ87836PUGXkSLXCTr" alt="Reclusa após abandonar a TV, Ana Paula Arósio ressurge com ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atriz decidiu deixar a carreira há cerca de 12 anos, quando desistiu de protagonizar uma novela da TV Globo em horário nobre.</p></div>
            </div>
        </a><a href='https://gshow.globo.com/tudo-mais/tv-e-famosos/noticia/ana-paula-arosio-ressurge-sem-maquiagem-e-cabelos-curtos-em-ensaio-fotografico.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ana Paula Arósio ressurge sem maquiagem e cabelos curtos em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0lSsYVKMh_KpgCXvjSC_P3hgYx3tBKp1lXFH71uGF_UVxw5VJfhUxHxwqhemmsVSy4yWfDvBq" alt="Ana Paula Arósio ressurge sem maquiagem e cabelos curtos em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A atriz, que não atua desde 2010, posou para as lentes do fotógrafo Jairo Goldflus.</p></div>
            </div>
        </a><a href='https://noticiasdatv.uol.com.br/noticia/celebridades/reclusa-ana-paula-arosio-aparece-em-foto-rara-com-visual-totalmente-diferente-93191'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reclusa, Ana Paula Arósio aparece em foto rara com visual ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQxyCP4m8Wcy6ncfI7NQT9_XT5ZcJ1NiRXmXN1qQk0LySaHCGZy2DtpQyneXdqbAgIvEPxjRZ_r" alt="Reclusa, Ana Paula Arósio aparece em foto rara com visual ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ana Paula Arósio fez parte de uma série do fotógrafo Jairo Goldflus, que reúne imagens de mulheres sem maquiagem, sem filtros e em preto e branco.</p></div>
            </div>
        </a><a href='https://revistaquem.globo.com/noticias/noticia/2022/11/ana-paula-arosio-ressurge-em-ensaio-de-famosas-sem-maquiagem.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Belíssima! Aos 47, Ana Paula Arósio posa para ensaio de cara ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRErtM5J4RIxy48C01jdG6xKO20R26Bg2ATLE14_G8XXrBAGJ2xRmvpqlW-cdLNBTjTdqq3D9G8" alt="Belíssima! Aos 47, Ana Paula Arósio posa para ensaio de cara ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Livro Singular, do fotógrafo Jairo Goldflus, traz imagens de 130 mulheres e busca celebrar a beleza natural.</p></div>
            </div>
        </a><a href='https://www.em.com.br/app/noticia/saude-e-bem-viver/2022/11/23/interna_bem_viver,1424766/beleza-real-ana-paula-arosio-e-outras-celebridades-posam-sem-maquiagem.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Beleza real: Ana Paula Arósio e outras celebridades posam sem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzCMLyw7WITKW-OV5zGOQpOp5bKEec6BAAi-BbRuugI_6TShOdN9lU04UkYMBjSadAP_TDmJy1" alt="Beleza real: Ana Paula Arósio e outras celebridades posam sem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fotógrafo Jairo Goldflus define Singular, livro em que retrata 130 mulheres, entre famosas e anônimas, com um diferencial: a ausência completa de maquiagem.</p></div>
            </div>
        </a><a href='https://br.noticias.yahoo.com/lembra-dela-veja-como-esta-a-sosia-mirim-de-ana-paula-arosio-155110567.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lembra dela? Veja como está a sósia mirim de Ana Paula Arósio</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtN1qqI4bhijDAMTYoUFoyH1U9mbHo5o7e0FT3DLPyO1UwIbRmIy5S4jWEYVYgUe2HhRaxntZJ" alt="Lembra dela? Veja como está a sósia mirim de Ana Paula Arósio" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 47 anos, a atriz ressurgiu de cara limpa em ensaio fotográfico de Jairo Goldflus para o livro &quot;Singular&quot;. Sem maquiagem e com fios brancos, ela mostrou como&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}