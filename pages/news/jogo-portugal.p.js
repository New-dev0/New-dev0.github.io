import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogo Portugal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogo Portugal"/>
        <meta name="description" content="Trending News about Jogo Portugal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogo Portugal</h1>
            <Image width={800} height={500} src="https://wm.observador.pt/wm/obs/l/https%3A%2F%2Fbordalo.observador.pt%2Fv2%2Frs%3Afill%3A770%3A403%2Fc%3A2000%3A1125%3Anowe%3A0%3A19%2Fq%3A85%2Fplain%2Fhttps%3A%2F%2Fs3.observador.pt%2Fwp-content%2Fuploads%2F2022%2F11%2F15160337%2F39834922.jpg" alt="Jogo Portugal"/>
            <h3>Recent News</h3>
            <a href='https://observador.pt/2022/11/16/onde-pode-ver-os-jogos-de-portugal-e-todos-os-outros-encontros-do-mundial/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Onde pode ver os jogos de Portugal e todos os outros encontros do ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFVNA0nHrMhdq8NZREIw7kffPG6csJNJszLqjeyf_a48BeJK8s5nbVOyswl4S4UzQLEREjJ1lm" alt="Onde pode ver os jogos de Portugal e todos os outros encontros do ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Sport TV transmite todos os jogos, mas vendeu 36 jogos em sinal aberto aos três canais em sinal aberto, RTP, SIC e TV. Cada um vai passar um dos jogos de&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}