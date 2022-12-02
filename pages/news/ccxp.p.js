import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>CCXP</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,CCXP"/>
        <meta name="description" content="Trending News about CCXP" /></Head><Template>
            <h1 style={{fontSize: "30"}}>CCXP</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/UztaiBEwIZG5O4ZFtBGl7f5ejv0=/1200x/smart/filters:cover():strip_icc()/s04.video.glbimg.com/x720/11171643.jpg" alt="CCXP"/>
            <h3>Recent News</h3>
            <a href='https://gshow.globo.com/tudo-mais/pop/noticia/ccxp-2022-pedro-pascal-faz-plateia-delirar-lindo-tesao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Na CCXP 2022, Pedro Pascal causa frisson e plateia delira: &#39;Lindo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR8c235tBkfWnq6TyDXSibebvEyZpQATx1JFsgVPSzeqYwL_RANZg_w-z8najq28YVdwQIxysyr" alt="Na CCXP 2022, Pedro Pascal causa frisson e plateia delira: &#39;Lindo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator chileno e estrela da série &#39;The Mandalorian&#39; fez a alegria da plateia no primeiro dia do evento de cultura pop.</p></div>
            </div>
        </a><a href='https://www.techtudo.com.br/noticias/2022/12/ccxp-2022-veja-programacao-do-evento-nesta-quinta-feira-1-streaming.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CCXP 2022: veja programação do evento nesta quinta-feira (1)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSLm0q_xScYK87dlcTCsVfh-1c8OyTNaBcYG6ZJhGGZ4u4SrXmpuLTzG1TXrMJOeXA2IHwwpcSf" alt="CCXP 2022: veja programação do evento nesta quinta-feira (1)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Comic Con Experience retorna ao formato presencial após dois anos sendo realizada remotamente; veja as grandes atrações do primeiro dia.</p></div>
            </div>
        </a><a href='https://veja.abril.com.br/cultura/de-wandinha-a-avatar-ccxp-volta-ao-presencial-com-estrelas-gringas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>De &#39;Wandinha&#39; à &#39;Avatar&#39;: CCXP volta ao presencial com estrelas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJnSVHuuT1iSVAn48cefgDFG6PImcWPT_eRqKzKKDG5ZqoN9St3eMWGxCP7ToZd9l7dLBRq5sx" alt="De &#39;Wandinha&#39; à &#39;Avatar&#39;: CCXP volta ao presencial com estrelas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Começa oficialmente nesta quinta-feira, 1º, a nona edição da Comic Con Experience (CCXP), maior evento de cultura pop da América Latina que vai até domingo,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.publishnews.com.br/materias/2022/12/01/editoras-e-artistas-reforcam-potencial-da-ccxp-para-conquistar-novos-leitores'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Editoras e artistas reforçam potencial da CCXP para conquistar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRb9AT2YcAOyKSZegPpIlwLu8bgRD9kaeQWGVlFCG6NoOMrp1dvPMjOdolb7eyEBaTirXJ2u7Bh" alt="Editoras e artistas reforçam potencial da CCXP para conquistar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Edição 2022 do maior evento de cultura pop do país começa nesta quinta-feira (1) com espaço para quadrinhos, mangás e outras áreas do mercado.</p></div>
            </div>
        </a><a href='https://propmark.com.br/ccxp-2022-o-que-as-marcas-preparam-para-a-volta-do-evento/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CCXP 2022: o que as marcas prepararam para a volta do evento?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQSY047XjuRIU0hQ1IzKUjeXUfbVOaA_RRAP5IlA5CIEG_J_1qikLevgQ7OnANmcWHgmxnluAx8" alt="CCXP 2022: o que as marcas prepararam para a volta do evento?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Durante os quatro dias de evento, mais de 100 marcas de 25 segmentos diferentes irão ocupar o espaço de 115 mil m². A Comic Con Experience 2022 (CCXP22)&nbsp;...</p></div>
            </div>
        </a><a href='https://vermelho.org.br/2022/12/01/ccxp-2022-comeca-em-sp-nesta-quinta-1-confira-a-programacao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CCXP 2022 começa em SP nesta quinta (1); confira a programação ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSr17vWFENz29hRmQ2f5w-x9WhBZAd5D_0J5mfZs1lVsfzt4Zi7Mk_1JKPIy3eU13WOfjhlx5fJ" alt="CCXP 2022 começa em SP nesta quinta (1); confira a programação ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maior evento de cultura pop do Brasil, festival retorna a São Paulo após duas edições virtuais, no que promete ser a maior Comic Com Experience já feita.</p></div>
            </div>
        </a><a href='https://www.omelete.com.br/ccxp/perifacon-ccxp22-quebrada'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PerifaCon + CCXP: O Corre Coletivo é o amplificador de voz da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTiLDPBWjdjs88aoF8x_vezyO6JsH8l31WkeO1ZIGP9fCHlE3Zidz4aj0C3QXVwfC0i1RkA7QAS" alt="PerifaCon + CCXP: O Corre Coletivo é o amplificador de voz da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quando se fala de periferia, é importante ressaltar que a favela consome e produz arte, principalmente audiovisual. Um dos objetivos da PerifaCon,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/2022/12/01/lindo-e-gostosao-o-pai-espacial-favorito-de-star-wars-esquentou-a-ccxp.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Lindo e gostosão!&#39;: o pai espacial favorito de Star Wars esquenta a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTzlFI3qHsh5nxP0lnKHzqqN3eFIRWyJYWBZ-Sjgfv6WyktSsBVx_e-FcXyha7YoU4GkaREVrrU" alt="&#39;Lindo e gostosão!&#39;: o pai espacial favorito de Star Wars esquenta a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O ator Pedro Pascal surgiu de surpresa no painel de &quot;The Mandalorian&quot; neste primeiro dia de CCXP. Intérprete do personagem-título da série do Disney+,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.promoview.com.br/blog/redacao/brand-experience/outback-estaurante-oficial-ccxp.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Outback é restaurante oficial da CCXP</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSUUgLBfVheIT5T6rkwsppD7ujjI1sL4T-R7_X_kyKWT6io_h-eI9B4lwC3rYoGcOBwpu9hkC4E" alt="Outback é restaurante oficial da CCXP" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Marca participa pela terceira vez do maior evento de cultura pop do mundo e reforça estratégia de se manter relevante dentro do universo geek.</p></div>
            </div>
        </a><a href='https://gshow.globo.com/tudo-mais/pop/noticia/ccxp-veja-fotos-do-primeiro-dia-de-evento.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>CCXP 2022: veja fotos do primeiro dia do evento de cultura pop</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpnRBYnFPX9wqrmNV76ZkXirUqNcHmYq1XnvtHANPGki_SUQsP5RF2Zp-_Agvsj70PW62wHZVn" alt="CCXP 2022: veja fotos do primeiro dia do evento de cultura pop" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cosplays, famosos, muitos painéis; confira o que rolou na abertura.</p></div>
            </div>
        </a>
        </Template></>;
}