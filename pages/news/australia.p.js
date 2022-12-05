import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Australia"/>
        <meta name="description" content="Trending News about Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Australia</h1>
            <Image width={800} height={500} src="https://www.abola.pt//img/fotos/ABOLA2015/NNH/2022/Australiagoalkeepe20377138AP.jpg" alt="Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-12-04/australia-doi-muito-mas-voltarei-mais-forte/967228'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Dói muito mas voltarei mais forte»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3MI8PZ-RIrAbEHw0OZCw4DSbcdpL84XZpDuOyrAQS-xLh2tfI1sm1AcUPapQYkBCMOTg7HhXE" alt="«Dói muito mas voltarei mais forte»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Argentina chegou ao 2-0 frente à Austrália (o jogo terminaria 2-1) graças a um erro colossal de Mathew Ryan e o guarda-redes ficou marcado.</p></div>
            </div>
        </a>
        </Template></>;
}