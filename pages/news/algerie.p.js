import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Algerie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Algerie"/>
        <meta name="description" content="Trending News about Algerie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Algerie</h1>
            <Image width={800} height={500} src="https://information.tv5monde.com/sites/info.tv5monde.com/files/assets/images/Capture_decran_2022-11-17_a_17.33.23.png" alt="Algerie"/>
            <h3>Recent News</h3>
            <a href='https://information.tv5monde.com/afrique/sommet-de-la-francophonie-pourquoi-l-algerie-ne-veut-pas-d-une-adhesion-l-oif-478881'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sommet de la Francophonie : pourquoi l&#39;Algérie ne veut pas d&#39;une ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSo-EfTwpOMVMQT1bBVB8ZxsTZg9uTocxd2KLI3q9eDfYVUMIF1wjl8CIUUVMmRcVrzF85EMrm2" alt="Sommet de la Francophonie : pourquoi l&#39;Algérie ne veut pas d&#39;une ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entretien. L&#39;Algérie est le troisième pays francophone dans le monde, avec un peu moins de 15 millions de locuteurs. Pourtant, le pays...</p></div>
            </div>
        </a><a href='https://www.jeuneafrique.com/1393686/politique/algerie-vers-une-restriction-du-droit-de-greve/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Algérie : vers une restriction du droit de grève ?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7ixmOHjmslOmaPHePTMlgC4FE4Y_kwjwbdvcy54MlpVAioIwcyZYaJ6_ltt1bifGKgSb2iPdo" alt="Algérie : vers une restriction du droit de grève ?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Les syndicats seront-ils bientôt réduits au silence ? C&#39;est la crainte du président du Syndicat autonome des travailleurs de l&#39;éducation et de la formation&nbsp;...</p></div>
            </div>
        </a><a href='https://www.courrierinternational.com/article/hegemonie-culturelle-l-introduction-de-l-anglais-en-primaire-ravive-les-querelles-linguistiques-en-algerie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>L&#39;introduction de l&#39;anglais en primaire ravive les querelles ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTiTuLtHwomuDbdBp-lEAz4TTpJvhvdaG7gd_86eztfAqAzcgv0b4wIxFY_YxKekQwLD9NZjTzR" alt="L&#39;introduction de l&#39;anglais en primaire ravive les querelles ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Twala” interroge la discrète bataille linguistique qui se mène entre l&#39;anglais, considéré comme une langue neutre, et le français, encore chargé d&#39;une&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}