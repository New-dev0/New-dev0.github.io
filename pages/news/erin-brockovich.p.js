import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Erin Brockovich</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Erin Brockovich"/>
        <meta name="description" content="Trending News about Erin Brockovich" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Erin Brockovich</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/erin-brockovich-seule-contre-tous-julia-roberts.jpg?ver=1" alt="Erin Brockovich"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/erin-brockovich-cet-oubli-embarrassant-de-julia-roberts-lors-de-son-discours-aux-oscars-5509888/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erin Brockovich : cet oubli embarrassant de Julia Roberts lors de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRikB-A7NJF1bvboSf-Kjg2CWlC2QK5nnG-LfM9QwTOucfb1G9L2WmtYw2ZDRfOCkRLLYxuxqKo" alt="Erin Brockovich : cet oubli embarrassant de Julia Roberts lors de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pendant son discours aux Oscars où elle a été récompensée pour &quot;Erin Brockovich, seule contre tous&quot;, Julia Roberts a fait un oubli remarqué.</p></div>
            </div>
        </a><a href='https://www.nouvelobs.com/teleobs/20221128.OBS66491/erin-brockovich-seule-contre-tous-david-contre-goliath.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>« Erin Brockovich, seule contre tous », David contre Goliath</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQut9DzXPOG1KnHGy5UnGJ5O-0bBI3FCVLkI0VhBg3HNVothwk_O8cJmCElIJL0ZXyZH0MJj-gT" alt="« Erin Brockovich, seule contre tous », David contre Goliath" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Le portrait d&#39;une battante qui réussit à mettre à terre une multinationale coupable de pollution. Avec Julia Roberts, dans l&#39;un de ses plus beaux rôles.</p></div>
            </div>
        </a>
        </Template></>;
}