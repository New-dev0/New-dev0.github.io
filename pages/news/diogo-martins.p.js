import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Diogo Martins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Diogo Martins"/>
        <meta name="description" content="Trending News about Diogo Martins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Diogo Martins</h1>
            <Image width={800} height={500} src="https://www.vip.pt/wp-content/uploads/2022/11/Destaque-VIP-31-1.jpg" alt="Diogo Martins"/>
            <h3>Recent News</h3>
            <a href='https://www.vip.pt/aurea-apaixonada-e-com-vontade-de-ser-mae-o-diogo-da-me-uma-seguranca-incrivel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Áurea apaixonada e com vontade de ser mãe: &quot;O Diogo dá-me uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWEeEtZaDweaKGjnYt1yH9-5I6F8mrYhh52qRGYFGdFK6nifW41MtQZWmOu6XC38htBGU6LiQS" alt="Áurea apaixonada e com vontade de ser mãe: &quot;O Diogo dá-me uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Áurea, de 35 anos, assume que finalmente encontrou a estabilidade emocional que tanto procurava ao lado do ator Diogo Martins, de 30. Em entrevista a Manuel&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}