import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Djerba</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Djerba"/>
        <meta name="description" content="Trending News about Djerba" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Djerba</h1>
            <Image width={800} height={500} src="https://media-manager.noticiasaominuto.com/1280/naom_63778a0b103f0.jpg" alt="Djerba"/>
            <h3>Recent News</h3>
            <a href='https://www.noticiasaominuto.com/mundo/2115832/migracoes-policia-tunisina-impede-protestos-de-manifestantes-em-djerba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Migrações. Polícia tunisina impede protestos de manifestantes em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQR-tV3g9jhEcRw83JMnsoxvRvGkHrZAjRFRaVxdnOk6LMCZ6EnGdo_2mSnw4ihWGKXdzhO5i0R" alt="Migrações. Polícia tunisina impede protestos de manifestantes em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Centenas de manifestantes mobilizados para saber o paradeiro de migrantes tunisinos desaparecidos há quase dois meses foram hoje impedidos pela polícia de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}