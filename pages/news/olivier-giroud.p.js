import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Olivier Giroud</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Olivier Giroud"/>
        <meta name="description" content="Trending News about Olivier Giroud" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Olivier Giroud</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=307d9387-ee86-4c19-a2da-5a00dc124bd6&w=800&h=420&watermark=true&t=20221122232500" alt="Olivier Giroud"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/internacional/mundial-2022/noticias/giroud-iguala-henry-e-atira-titi-estou-a-chegar-15378287.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Giroud iguala Henry e atira: &quot;Titi, estou a chegar!&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT4Pcw51tQKsJ143rEJs5_2OlpfH4gnWcTz4RVfDZrTMyenxqL2J-Bg6usA89fK0onTIOqczCpM" alt="Giroud iguala Henry e atira: &quot;Titi, estou a chegar!&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Com um bis, chegou aos 51 golos pela França, os mesmos que o antigo internacional. Atrás deles estão Griezmann (42), Platini (41), Benzema (37) e Trezeguet&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}