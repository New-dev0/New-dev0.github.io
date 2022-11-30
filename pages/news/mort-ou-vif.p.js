import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mort ou vif</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mort ou vif"/>
        <meta name="description" content="Trending News about Mort ou vif" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mort ou vif</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/mort-ou-vif-leonardo-dicaprio-sam-raimi.jpg?ver=1" alt="Mort ou vif"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/mort-ou-vif-leonardo-dicaprio-na-pas-apprecie-son-baiser-avec-sharon-stone-5510451/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort ou vif : Leonardo DiCaprio n&#39;a pas apprécié son baiser avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZfMtL5ZGh5tWjuNmevG_MZeDKORg4C6Ar0XmEdOHdmkR7Xd7EutZEG5q1tEoP9P-Cf43yHRoS" alt="Mort ou vif : Leonardo DiCaprio n&#39;a pas apprécié son baiser avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leonardo DiCaprio ne garde pas un excellent souvenir de son baiser avec Sharon Stone dans &quot;Mort ou vif&quot;, le western de Sam Raimi.</p></div>
            </div>
        </a><a href='https://www.premiere.fr/Cinema/News-Cinema/Mort-ou-vif-Le-blind-test-de-Sam-Raimi-en-1995'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mort ou vif : Le blind-test de Sam Raimi, en 1995</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHqJ1pLf8HdBz7vd8YO5_Q4BkzWZI0Dfu23g0V53P-REhx7mVWetftUx5AhkvXq2Df6tfp9Csb" alt="Mort ou vif : Le blind-test de Sam Raimi, en 1995" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>En 1995, le réalisateur se prêtait à un jeu de cinéphile &quot;spécial western&quot; dans Première.</p></div>
            </div>
        </a><a href='https://www.allocine.fr/article/fichearticle_gen_carticle=1000004058.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sans cette célèbre actrice, Leonardo DiCaprio n&#39;aurait jamais pu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSPUmROPX7UxzjICFSlyMqQnCV2RUnTKVBROMiYnJeEcS5Plx_QdxI10oHd_b-3lbHE1Jftadpw" alt="Sans cette célèbre actrice, Leonardo DiCaprio n&#39;aurait jamais pu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Si Leonardo DiCaprio a pu jouer dans l&#39;excellent western &quot;Mort ou vif&quot; de Sam Raimi, c&#39;est en grande partie grâce à une célèbre actrice qui a insisté pour&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}