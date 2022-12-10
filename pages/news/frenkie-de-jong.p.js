import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Frenkie de Jong</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Frenkie de Jong"/>
        <meta name="description" content="Trending News about Frenkie de Jong" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Frenkie de Jong</h1>
            <Image width={800} height={500} src="https://cdn.resfu.com/media/img_news/agencia-efe_multimedia_4213363.multimedia.photos.16406196.file.jpg" alt="Frenkie de Jong"/>
            <h3>Recent News</h3>
            <a href='https://pt.besoccer.com/noticia/se-de-jong-for-para-o-united-seria-um-passo-atras-1210676'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Se De Jong for para o United, seria um passo atrás&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWU4cQIBvQPNnU1RenbrXgIJWk7ZeTvjigPig3tVgrMG_z6YHDjd9kK6IaX8hYtNP5H6DbR2cO" alt="&#39;Se De Jong for para o United, seria um passo atrás&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ryan Babel deu um conselho a seu compatriota Frenkie de Jong. O ex-jogador internacional lhe disse que sair do Barcelona e ir para o Manchester United seria&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}