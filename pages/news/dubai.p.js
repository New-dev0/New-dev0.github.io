import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dubai</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dubai"/>
        <meta name="description" content="Trending News about Dubai" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dubai</h1>
            <Image width={800} height={500} src="https://aeroin.net/wp-content/uploads/2022/11/Doha-HAmad-AIrport-as.jpg" alt="Dubai"/>
            <h3>Recent News</h3>
            <a href='https://aeroin.net/copa-2022-um-voo-a-cada-30-minutos-entre-doha-e-dubai-para-atender-a-grande-demanda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa 2022: um voo a cada 30 minutos entre Doha e Dubai para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtgQIBB9wNaay3OK083HyOl8xdR4xxY3wWAsazyz9eeAvaPmCXI3_Ae296o-A-Ax6S1oEJ-i8R" alt="Copa 2022: um voo a cada 30 minutos entre Doha e Dubai para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Flydubai é a empresa, fora a Qatar Airways, que mais voos agendou durante o torneio. De acordo com seu sistema de reservas, a empresa operará 33 voos por dia&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}