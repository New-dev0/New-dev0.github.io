import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eriksen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eriksen"/>
        <meta name="description" content="Trending News about Eriksen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eriksen</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/iq5_vcZybQGuN7x_gFzI8vE7lKM=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11157655.jpg" alt="Eriksen"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/copa-do-mundo/noticia/2022/11/26/pedrinho-recorda-dia-em-que-deu-chapeu-em-eriksen-da-dinamarca.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedrinho recorda dia em que deu chapéu em Eriksen, da Dinamarca</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmSneOYBF9-g1pUil9nBosS6nxZP9QSkRxS0EkkMYA8DcQrFLenu97scHXTvHpyi-9IIhJaSWNHw" alt="Pedrinho recorda dia em que deu chapéu em Eriksen, da Dinamarca" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Veio com muita fome, não me conhecia&quot;, se diverte o comentarista do SporTV, que enfrentou o astro dinamarquês num amistoso entre Vasco e Ajax, em 2013.</p></div>
            </div>
        </a><a href='https://esportes.yahoo.com/noticias/pedrinho-lembra-de-chapeu-que-deu-em-eriksen-da-dinamarca-182731462.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedrinho lembra de chapéu que deu em Eriksen, da Dinamarca</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRz1bLBJuB3nNkqgVE6r7T-0MAxmYo3gcMXpkyajtvpYW3aLohpZtxv_AfBJjIib_Y2QhKROVfu" alt="Pedrinho lembra de chapéu que deu em Eriksen, da Dinamarca" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na ocasião, o agora comentarista do SporTV estava em sua despedida do Vasco e disputava uma partida contra o Ajax. O dinamarquês tinha só 21 anos e foi com tudo&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/esporte/futebol/copa-do-mundo/2022/11/26/pedrinho-chapeu-eriksen.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedrinho relembra chapéu em Eriksen em transmissão de França x ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRhPQR-K4OdNE7G3umjs1zvIur1snAw3XegpZIcE0iV3N7uUiuHbBKyi74laT7wkvp8HWtU26LI" alt="Pedrinho relembra chapéu em Eriksen em transmissão de França x ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comentarista do Sportv na Copa do Mundo do Qatar, Pedrinho relembrou um lance icônico, envolvendo um dos jogadores mais conhecidos que estão na partida&nbsp;...</p></div>
            </div>
        </a><a href='https://www.supervasco.com/noticias/pedrinho-relembra-lencol-em-eriksen-da-dinamarca-355761.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pedrinho relembra lençol em Eriksen, da Dinamarca</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNrPX9bm9R7sRrDR05-pv0DSF2giVZYFnSVdm6sy3czKgcPoF90ulUqPcM477fyiQIG7vOgD3U" alt="Pedrinho relembra lençol em Eriksen, da Dinamarca" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comentando França x Dinamarca no sportv Pedrinho relembrou o dia em que deu um balãozinho em Eriksen O drible aconteceu justamente em sua&nbsp;...</p></div>
            </div>
        </a><a href='https://br.bolavip.com/futebol/Qatar-2022-Ele-nao-me-conhecia-Pedrinho-relembra-de-lance-memoravel-pelo-Vasco-contra-craque-da-Dinamarca-20221126-0128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar 2022: “Ele não me conhecia”; Pedrinho relembra de &#39;lance ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZhhN0qoQ92emW8iY55Cx678-jK5nf_J47VATbyv1Jqvv3xH_fLogN00biS2Hrwu-0snYwQ0le" alt="Qatar 2022: “Ele não me conhecia”; Pedrinho relembra de &#39;lance ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Os franceses venceram por 2 a 1. Enquanto Kylian Mbappé marcou os dois gols da atual Campeã Mundial, Andreas Christensen descontou para os dinamarqueses. Porém,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}