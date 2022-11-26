import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cadeira gamer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cadeira gamer"/>
        <meta name="description" content="Trending News about Cadeira gamer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cadeira gamer</h1>
            <Image width={800} height={500} src="https://static1-br.millenium.gg/articles/6/12/86/6/@/144573-cadeiras-gamers-black-friday-article_image_t-1.jpg" alt="Cadeira gamer"/>
            <h3>Recent News</h3>
            <a href='https://br.millenium.gg/noticias/12866.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Black Friday: 3 cadeiras gamer com descontos que chegam a R$700!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1wbROzeFUFgsL4GzN4E7zyKv_pzv7GxT5JsAlaoHtjVv5rUnt67SEwkNZTPZlwvl1Xx7Wf5Pg" alt="Black Friday: 3 cadeiras gamer com descontos que chegam a R$700!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cadeira gamer é o item de desejo de muitos da comunidade gamer. Afinal, conforto é uma necessidade quando se passa longas horas em frente ao PC.</p></div>
            </div>
        </a>
        </Template></>;
}