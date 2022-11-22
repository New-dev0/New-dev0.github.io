import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Portal do Servidor</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Portal do Servidor"/>
        <meta name="description" content="Trending News about Portal do Servidor" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Portal do Servidor</h1>
            <Image width={800} height={500} src="https://estado.rs.gov.br:443/upload/recortes/202211/21160945_2052994_GD.jpg" alt="Portal do Servidor"/>
            <h3>Recent News</h3>
            <a href='https://estado.rs.gov.br/com-participacao-da-ospa-tem-inicio-a-semana-do-servidor-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Com participação da Ospa, tem início a Semana do Servidor 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWhTGBuSaZuRaMUwqQspF0934ivCDpaM6dzJbus_CxGw_QRL6roG-56KFf5QLXbQsT5u6wEdYs" alt="Com participação da Ospa, tem início a Semana do Servidor 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Uma palestra com música e reflexão sobre os desafios enfrentados diariamente nas organizações e espaços de trabalho abriu na manhã desta segunda-feira&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}