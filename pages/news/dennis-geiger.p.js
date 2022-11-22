import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dennis Geiger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dennis Geiger"/>
        <meta name="description" content="Trending News about Dennis Geiger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dennis Geiger</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=e1613a30-67ef-42b6-984c-e0b24768aa34&w=800&h=420&watermark=true&t=20221121183500" alt="Dennis Geiger"/>
            <h3>Recent News</h3>
            <a href='https://www.ojogo.pt/futebol/1a-liga/benfica/noticias/benfica-tem-dennis-geiger-debaixo-de-olho-dizem-na-alemanha-15373993.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dennis Geiger não conta para o Benfica</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRV1Nlws4_6Ei9plvdl7RaYktpDyRD97mRqW2DbYNyyXz3FxeC1xxB9GgA8HhZPJpHplAmhlSmF" alt="Dennis Geiger não conta para o Benfica" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Médio do Hoffenheim estará a ser seguido pelo Benfica e pelo Everton, mas também por clubes alemães.</p></div>
            </div>
        </a><a href='https://bolanarede.pt/especial-bola-na-rede/ultima-hora/sl-benfica-colocado-na-orbita-de-dennis-geiger/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SL Benfica colocado na órbita de Dennis Geiger</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSmUE_y8HegQ5pkZ6yYPnj81YbZDunOtyiqbZzTtojP3OkYVjofZw1Bz17SWp42xvRtz4IDOI0w" alt="SL Benfica colocado na órbita de Dennis Geiger" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O médio alemão Dennis Geiger está a ser apontado ao SL Benfica. Além das águias, também o Everton FC está atento ao jogador.</p></div>
            </div>
        </a>
        </Template></>;
}