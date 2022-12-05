import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Micaela</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Micaela"/>
        <meta name="description" content="Trending News about Micaela" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Micaela</h1>
            <Image width={800} height={500} src="https://sic.pt/wp-content/uploads/2022/12/3-2.png" alt="Micaela"/>
            <h3>Recent News</h3>
            <a href='https://sic.pt/programas/altadefinicao-programas/longe-do-estrelato-e-a-trabalhar-nas-limpezas-filho-de-micaela-reagiu-mae-tenho-tanto-orgulho-em-ti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Longe do estrelato e a trabalhar nas limpezas, filho de Micaela ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXRIl_TcendKh80VK6qGKoVBI3U7P0BEMqeXu98fwhLVNzbrPlp35_fCfeHpz5TrZWSVQU99DY" alt="Longe do estrelato e a trabalhar nas limpezas, filho de Micaela ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A cantora esteve emigrada dois anos em Londres onde trabalhou nas limpezas e no supermercado. Reveja mais um momento emocionante desta entrevista, do ano de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}