import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lionel Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lionel Messi"/>
        <meta name="description" content="Trending News about Lionel Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lionel Messi</h1>
            <Image width={800} height={500} src="https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/11/24/879620176-637a4f068e9e8.jpeg" alt="Lionel Messi"/>
            <h3>Recent News</h3>
            <a href='https://www.terra.com.br/esportes/lionel-messi-faz-tratamento-antes-de-treino-da-argentina,dddba04b44488fd386c7b8d2109839f0twzmqqfl.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi faz tratamento antes de treino da Argentina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvV3IaWnY--q5yVU36R2nQRbjN_KCaQcWYxamCmpF1ooghba9Yo64X8h_FcbFpjI2cZrxV6XgM" alt="Lionel Messi faz tratamento antes de treino da Argentina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi passou por um tratamento antes do treinamento da Argentina nesta quinta-feira. De acordo com o &quot;TyC Sports&quot;, o atleta realizou uma kinesiologia&nbsp;...</p></div>
            </div>
        </a><a href='https://jovemnerd.com.br/nerdbunker/pubg-mobile-conteudos-de-messi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conteúdos de Lionel Messi já estão disponíveis em PUBG Mobile ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlNww8WJVJGocFz4NBOg1qayKjYQDYeHU65I-sN4j5TFl7CVEQC4zfUoV80lWkI2xcKTRo9y1I" alt="Conteúdos de Lionel Messi já estão disponíveis em PUBG Mobile ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em clima de Copa do Mundo, o PUBG Mobile anunciou na última quarta-feira (23) uma parceria com Lionel Messi, que traz conteúdos especiais do jogador de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}