import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pedro Abrunhosa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pedro Abrunhosa"/>
        <meta name="description" content="Trending News about Pedro Abrunhosa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pedro Abrunhosa</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-12-04-281825279_5243723269074766_7790494541423613738_n.jpg-4cdc02b9/1.91x1?wm=true&outputFormat=jpeg" alt="Pedro Abrunhosa"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-12-04-Jose-Carlos-Malato-insurge-se-contra-anuncio-com-cancao-de-Pedro-Abrunhosa-O-dinheiro-afinal-compra-tudo-6a5515a4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>José Carlos Malato insurge-se contra anúncio com canção de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFjTPkTTqWu--5I1Ar8xIRq9-NwAZnXSU9Ba_Gwqo1x_Xb5C3VYDGsqcKgGjdsxXPuO1pkLgVq" alt="José Carlos Malato insurge-se contra anúncio com canção de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Não sei o que pode fazer com que um músico venda o hino de uma geração”, considera o apresentador de televisão José Carlos Malato, referindo-se à utilização&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nit.pt/cultura/musica/o-dinheiro-compra-tudo-malato-critica-pedro-abrunhosa-por-causa-de-anuncio-da-galp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“O dinheiro compra tudo”. Malato critica Pedro Abrunhosa por causa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvbqOZIktoVILiTmABkFTQtMC8YE0vQwVmulcNdTUaJ8_UzJFtWhWuOQBxlgW8noUv0R-wxr5d" alt="“O dinheiro compra tudo”. Malato critica Pedro Abrunhosa por causa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Há pouco mais de 10 dias, a Galp deu a conhecer uma nova garrafa Pluma através de um anúncio com tom humorístico, com uma nova versão da conhecida música&nbsp;...</p></div>
            </div>
        </a><a href='https://famashow.pt/nas-redes/jose-carlos-malato-lanca-critica-a-pedro-abrunhosa-o-dinheiro-afinal-compra-tudo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>José Carlos Malato lança crítica a Pedro Abrunhosa: “O dinheiro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8zIIbWecKG5-ZOEQOQmO1lgb1BHHkeOcFbXwGApZFaJsGgzEtdvr9QXfBbqmF3hFb88f5Gimv" alt="José Carlos Malato lança crítica a Pedro Abrunhosa: “O dinheiro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O apresentador mostrou a sua indignação nas redes sociais.</p></div>
            </div>
        </a><a href='https://www.hiper.fm/arraso-jose-carlos-malato-deixa-duras-criticas-a-pedro-abrunhosa-o-dinheiro-afinal-compra-tudo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arraso! José Carlos Malato deixa duras críticas a Pedro Abrunhosa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJ4ocm5J9T2_mamCyyswSq_N1nKJwLxIJU-iJuP4rqzq0OXg5dpjq-cmL57Z4J0vLzho6ULbhL" alt="Arraso! José Carlos Malato deixa duras críticas a Pedro Abrunhosa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>José Carlos Malato tem estado muito ativo nas redes sociais nos últimos tempos. O apresentador da RTP, conhecido por não deixar nada por dizer,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}