import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mahmut Tuncer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mahmut Tuncer"/>
        <meta name="description" content="Trending News about Mahmut Tuncer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mahmut Tuncer</h1>
            <Image width={800} height={500} src="https://i.sonhaberler.com/2/1280/720/storage/files/images/2022/11/19/mahmut-tuncer-Ktut_cover.jpg" alt="Mahmut Tuncer"/>
            <h3>Recent News</h3>
            <a href='https://www.sonhaberler.com/mahmut-tuncer-kimdir-aslen-nerelidir-esi-kimdir-mahmut-tuncer-biyografisi-haber-886178'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mahmut Tuncer kimdir, aslen nerelidir, eşi kimdir? (Mahmut Tuncer ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQTdIGZE2Dwl-wGKOB826-h8McexALIigJ1H2MEQi9b4dJguUKGLlM3d7KC07k0OhJuKjJQVLq" alt="Mahmut Tuncer kimdir, aslen nerelidir, eşi kimdir? (Mahmut Tuncer ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mahmut Tuncer, TRT 1&#39;de yayınlanan &quot;Gönül Dağı&quot; dizisinde ortaya çıktı. Dizide düğüne davet edilen Mahmut Tuncer, diziye renk kattı.</p></div>
            </div>
        </a>
        </Template></>;
}