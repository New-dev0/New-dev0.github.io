import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Metro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Metro"/>
        <meta name="description" content="Trending News about Metro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Metro</h1>
            <Image width={800} height={500} src="https://portocanal.sapo.pt/uploads/noticias/noticia_00316489-580x464.jpg" alt="Metro"/>
            <h3>Recent News</h3>
            <a href='https://portocanal.sapo.pt/noticia/316489'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Metro do Porto: Construção de uma nova ponte era “evitável”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRSXJQi9tZu8LrNguVwU3y7TWFBv2t1wURmOnae6hR9xviefC1WtftVGUnybFid_g3KUfkI7FHb" alt="Metro do Porto: Construção de uma nova ponte era “evitável”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O alerta é deixado pelo fundador do Centro de Investigação do Território, Transportes e Ambiente. Paulo Pinho diz que era “possível evitar” a construção de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.onoticiasdatrofa.pt/folha-liberal-adeus-metro-ate-a-trofa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Folha Liberal – Adeus Metro até à Trofa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtzt5faiTPZ-BezPq2cPGx_TxCBMdDT7ct4olUP9jOu_td1kMhAgRJ2ZCDdcF0aNaz5IFQFGl1" alt="Folha Liberal – Adeus Metro até à Trofa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O comboio acabou por ser substituído por autocarros, no troço onde não se concretizou o Metro (Trofa-ISMAI), e pelas intermináveis filas de trânsito. Isto&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}