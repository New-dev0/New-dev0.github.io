import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gabriel Jesus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gabriel Jesus"/>
        <meta name="description" content="Trending News about Gabriel Jesus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gabriel Jesus</h1>
            <Image width={800} height={500} src="https://contigo.uol.com.br/media/_versions/2022novembro/suposta-crise-no-namoro-de-grabriel-jesus_widelg.jpg" alt="Gabriel Jesus"/>
            <h3>Recent News</h3>
            <a href='https://contigo.uol.com.br/noticias/exclusivas/entre-altos-e-baixos-romance-de-gabriel-jesus-vive-suposta-crise-vesperas-da-copa-do-mundo-entenda.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entre altos e baixos, romance de Gabriel Jesus vive crise às ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQVmKCGpq--QMSEDe5lB0Nk4-mNJtXW6CL1zd7DSj9Mld_Z6p0EeQuwZJ_wlCjZIpn42XI0UbwI" alt="Entre altos e baixos, romance de Gabriel Jesus vive crise às ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O romance de Gabriel Jesus e Raiane Lima pode estar enfrentando momentos difíceis após o casal parar de se seguir na web; saiba a história.</p></div>
            </div>
        </a>
        </Template></>;
}