import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aurea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aurea"/>
        <meta name="description" content="Trending News about Aurea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aurea</h1>
            <Image width={800} height={500} src="https://img.iol.pt/preset/62bdbd1c0cf2ea367d4395d5/og/selfie" alt="Aurea"/>
            <h3>Recent News</h3>
            <a href='https://selfie.iol.pt/aurea/conta-me/em-lagrimas-aurea-declara-se-as-pessoas-mais-importantes-da-vida-da-cantora-quero-muito-honrar-o-que-me-deram/20221126/63824d6e0cf2254fb284d277'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Em lágrimas, Aurea declara-se às &quot;pessoas mais importantes&quot; da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ7E49QsbWXwe_ZgumJdLgeDbM5dKGnAmwhTmMKPybVRwyXPEbkkEQujRLq8Vs45hW_7vFr4sxm" alt="Em lágrimas, Aurea declara-se às &quot;pessoas mais importantes&quot; da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora Aurea concedeu uma entrevista a Manuel Luís Goucha, no programa &quot;Conta-me&quot;, e falou sobre as pessoas mais importantes na vida da artista.</p></div>
            </div>
        </a><a href='https://www.vip.pt/aurea-apaixonada-e-com-vontade-de-ser-mae-o-diogo-da-me-uma-seguranca-incrivel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Áurea apaixonada e com vontade de ser mãe: &quot;O Diogo dá-me uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWEeEtZaDweaKGjnYt1yH9-5I6F8mrYhh52qRGYFGdFK6nifW41MtQZWmOu6XC38htBGU6LiQS" alt="Áurea apaixonada e com vontade de ser mãe: &quot;O Diogo dá-me uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Áurea, de 35 anos, assume que finalmente encontrou a estabilidade emocional que tanto procurava ao lado do ator Diogo Martins, de 30. Em entrevista a Manuel&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}