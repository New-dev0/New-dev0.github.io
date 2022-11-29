import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joao felix</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joao felix"/>
        <meta name="description" content="Trending News about Joao felix" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joao felix</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A4096%3A2306%3Anowe%3A0%3A379%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F26224452%2FGettyImages-1245058823-1-scaled.jpg" alt="Joao felix"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/especiais/joao-felix-o-artista-incompreendido-que-ainda-anda-a-procura-de-museu-para-brilhar-o-que-espera-depois-do-qatar/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>João Félix recordado por quem começou a jogar com ele</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRi2pr5bPoEFlplWfTSbyloclbfyfmYvy1QuZ4jUjcO2acjO348V4xXwHZzuj2NDanBlhG0W2II" alt="João Félix recordado por quem começou a jogar com ele" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Começou no FC Porto, brilhou no Benfica, saltou para o Atlético e nunca foi feliz com Simeone. Félix — uma das surpresas de Fernando Santos contra o Gana&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}