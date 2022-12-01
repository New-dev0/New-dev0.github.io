import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chico Buarque</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chico Buarque"/>
        <meta name="description" content="Trending News about Chico Buarque" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chico Buarque</h1>
            <Image width={800} height={500} src="https://imagens.publico.pt/imagens.aspx/1756673?tp=UH&db=IMAGENS&type=JPG&share=1&o=BarraFacebook_Ipsilon.png" alt="Chico Buarque"/>
            <h3>Recent News</h3>
            <a href='https://www.publico.pt/2022/11/30/culturaipsilon/noticia/chico-buarque-actua-portugal-2023-ha-quatro-datas-lisboa-porto-2029855'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chico Buarque actua em Portugal em 2023. Há quatro datas em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS9NnWusFH0ceo5RqPY4z_AGFxpoUVc043Kan2wCDb04uhgsaHMyD3rULVzl4saCYxnwUqaJ8wd" alt="Chico Buarque actua em Portugal em 2023. Há quatro datas em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O músico sobe ao palco do Super Bock Arena nos dias 26 e 27 de Maio e actua no Campo Pequeno, nos dias 1 e 2 de Junho.</p></div>
            </div>
        </a><a href='https://observador.pt/2022/11/30/dois-dias-no-porto-e-outros-tantos-em-lisboa-chico-buarque-anuncia-datas-para-concertos-em-2023/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dois dias no Porto e outros tantos em Lisboa. Chico Buarque ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBHuVb67AwtnPLnXZbR1c2shnip_HLdtUx6ygtX4tH6OlY-eMh4OHYRS_lTNX5y41-YmMVwZRG" alt="Dois dias no Porto e outros tantos em Lisboa. Chico Buarque ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Se desde 2018 espera por um concerto de Chico Buarque novamente em Portugal, pode olhar já para a agenda do próximo ano e reservar uma das quatro datas&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dn.pt/cultura/chico-buarque-da-quatro-espetaculos-em-portugal-no-proximo-ano-15408525.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chico Buarque dá quatro espetáculos em Portugal no próximo ano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRk8lXS1QzDVW5wlam3ruhxia0OCb7pk6EC_kRk6dC2BNwp7xn4i0ZUdDi4cJIqv828xgVjR77i" alt="Chico Buarque dá quatro espetáculos em Portugal no próximo ano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O escritor, compositor e cantor brasileiro vai subir ao palco do Super Bock Arena, nos dias 26 e 27 de maio, e irá atuar no Campo Pequeno, nos dias 1 e 2 de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rtp.pt/noticias/cultura/chico-buarque-vem-a-portugal-em-2023-para-receber-o-premio-camoes_v1450782'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chico Buarque vem a Portugal em 2023 para receber o Prémio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQn0BI29Q-z0-AnzM6H_bVhKfCiAJlQinieaDYV3OpWpSzFcIplYpT3_nbZu4SfZrLh5rFisibR" alt="Chico Buarque vem a Portugal em 2023 para receber o Prémio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chico Buarque vem a Portugal em 2023. O cantor-compositor e escritor brasileiro tem quatro concertos marcados, para Porto e Lisboa.</p></div>
            </div>
        </a><a href='https://thresholdmagazine.pt/2022/11/chico-buarque-da-quatro-concertos-em-portugal-em-2023.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chico Buarque dá quatro concertos em Portugal em 2023</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT-vkaXnIVfvnB0xJ2BTI-MERqaDGAjO_OIDpJSnzCN47U2k7xVVEVD2iSFUzRfMGDgY_Fh8L78" alt="Chico Buarque dá quatro concertos em Portugal em 2023" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Que tal um Samba? é a digressão que levará o autor de “Construção” ao palco da Super Bock Arena, no Porto, nos dias 26 e 27 de maio, descendo depois até ao&nbsp;...</p></div>
            </div>
        </a><a href='https://comunidadeculturaearte.com/chico-buarque-da-quatro-concertos-em-portugal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chico Buarque dá quatro concertos em Portugal</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ25UJa3-QS9dBZoXwVYHKFsBo41lP3yBNKw80I84Jxgs2L4weWluBhD6gfmaDTm1rskNsHIqHE" alt="Chico Buarque dá quatro concertos em Portugal" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vencedor do Prémio Camões em 2019, Chico Buarque vem a Portugal receber o prémio e apresentar “Que tal um Samba” com quatro datas no Porto e em Lisboa.</p></div>
            </div>
        </a>
        </Template></>;
}