import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Will Smith</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Will Smith"/>
        <meta name="description" content="Trending News about Will Smith" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Will Smith</h1>
            <Image width={800} height={500} src="https://images.impresa.pt/expresso/2022-11-21-Sem-titulo.jpg-01419205/1.91x1?wm=true&outputFormat=jpeg" alt="Will Smith"/>
            <h3>Recent News</h3>
            <a href='https://expresso.pt/blitz/2022-11-21-Willow-Smith-filha-de-Will-Smith-junta-se-aos-Smashing-Pumpkins-para-cantar-Cherub-Rock-veja-aqui-5319f610'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Willow Smith, filha de Will Smith, junta-se aos Smashing Pumpkins ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRqZ9VYbZFF6JS8w3J_JiU4l05Z6xh9Xj-DrHy7wdnYqGsRQtiRTr0LkZIeE-FI_qMNat_sOHz" alt="Willow Smith, filha de Will Smith, junta-se aos Smashing Pumpkins ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aconteceu durante um concerto em Los Angeles, no passado sábado: os Smashing Pumpkins receberam Willow Smith em palco para tocar um velho clássico.</p></div>
            </div>
        </a><a href='https://www.tenhomaisdiscosqueamigos.com/2022/11/21/smashing-pumpkins-willow-guitarra-video/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Smashing Pumpkins recebe WILLOW para tocar guitarra em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT9HyamVWs_2VMn_a6vmQ7_FwmLLDkTO-0DFmoMkfxyYvF-DwpOpT2CEvFGDoXw1-jNMbrSQEay" alt="Smashing Pumpkins recebe WILLOW para tocar guitarra em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Smashing Pumpkins convidou WILLOW ao palco para tocar guitarra ao lado da banda na execução de “Cherub Rock” durante show em Los Angeles .</p></div>
            </div>
        </a>
        </Template></>;
}