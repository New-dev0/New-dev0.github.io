import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Margarida Corceiro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Margarida Corceiro"/>
        <meta name="description" content="Trending News about Margarida Corceiro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Margarida Corceiro</h1>
            <Image width={800} height={500} src="https://thumbs.web.sapo.io/?W=1200&H=630&delay_optim=1&tv=1&crop=center&bottom_overlay=https%3A%2F%2Fmag.sapo.pt%2Fassets%2Fimg%2Flifestyle-sapo%2Ffacebook-overlay.png&epic=YTVijk14P8sP5NCnPIDGbPTqL3StAASLhfX12b6FDY9lizRDh5N3kY6jUEG5zxIBL2AgvmFO1U1VhGIlVLIs9eysPfIJ+RqpcDux0ohV3sBvcKE=" alt="Margarida Corceiro"/>
            <h3>Recent News</h3>
            <a href='https://lifestyle.sapo.pt/fama/noticias-fama/artigos/o-felix-vai-marcar-margarida-corceiro-mostra-visual-e-fas-brincam'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;O Félix vai marcar&quot;. Margarida Corceiro mostra visual e fãs brincam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAP2lRvfkiAeSuAL578izW8u3B6xPo-v5XdjiLZlfehEFwxIkUVHuXfeaZVRbiDSC9X6j-erZr" alt="&quot;O Félix vai marcar&quot;. Margarida Corceiro mostra visual e fãs brincam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>E não é que Félix marcou mesmo? Um bocadinho de gossip por dia, nem sabe o bem que lhe fazia. Subscreva a newsletter do SAPO Lifestyle.</p></div>
            </div>
        </a>
        </Template></>;
}