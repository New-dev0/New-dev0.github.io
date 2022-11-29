import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Richarlison</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Richarlison"/>
        <meta name="description" content="Trending News about Richarlison" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Richarlison</h1>
            <Image width={800} height={500} src="https://assets-de.imgfoot.com/media/cache/1200x675/photo-sans-3-637fde5ada00b.jpg" alt="Richarlison"/>
            <h3>Recent News</h3>
            <a href='https://www.fussballtransfers.com/a4337999258207373571-richarlison-wm-als-sprungbrett-nach-madrid'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Richarlison: WM als Sprungbrett nach Madrid?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnxLhL-tzm1BKwVgQj4EvzJ2UhyHcDEt2HOdX7VDy7uzdoYhcNZUREuvLcN3Oq8F-a5gm1IwA3" alt="Richarlison: WM als Sprungbrett nach Madrid?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Der Fokus in der brasilianischen Offensive lag vor der WM natürlich vor allem auf Neymar und Vinicius Junior. Im ersten Spiel war es dann aber Ri (...)</p></div>
            </div>
        </a><a href='https://sportbild.bild.de/fussball/international/fussball-international/wm-2022-benzema-nachfolger-real-madrid-hat-brasilien-star-im-visier-82087472.sport.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WM 2022: Benzema-Nachfolger? Real Madrid hat Brasilien-Star im ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSLbGxmkE9x-PHe0z881Q1hfXjuHtYBNiCJ4NdPS80MibYxR-E4ShTM3b2ieJycaECEAdwmbZd" alt="WM 2022: Benzema-Nachfolger? Real Madrid hat Brasilien-Star im ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Die WM ist das größte Schaufenster im Weltfußball. Und offenbar schauen auch die Bosse von Real Madrid derzeit sehr aufmerksam nach Katar.</p></div>
            </div>
        </a>
        </Template></>;
}