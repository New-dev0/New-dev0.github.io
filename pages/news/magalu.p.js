import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Magalu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Magalu"/>
        <meta name="description" content="Trending News about Magalu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Magalu</h1>
            <Image width={800} height={500} src="https://www.cidademarketing.com.br/marketing/wp-content/uploads/2022/11/03_Felipao-640x360.jpg" alt="Magalu"/>
            <h3>Recent News</h3>
            <a href='https://www.cidademarketing.com.br/marketing/2022/11/25/magalu-lanca-filme-de-copa-com-sosia-de-mick-jagger-felipao-e-murtosa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magalu lança Filme de Copa com sósia de Mick Jagger, Felipão e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQm4-XvamF12lIP7SnuV-koL_bZQZ5ddHwoyE-VK5ZV3gcqmK4U2X3VOrCfNtQYFBleKyFeEJUX" alt="Magalu lança Filme de Copa com sósia de Mick Jagger, Felipão e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Para a campanha de Copa, o Magalu traz a perspectiva dos diferentes tipos de torcida, com sósias de grandes personalidades em contextos típicos do futebol que&nbsp;...</p></div>
            </div>
        </a><a href='https://trademap.com.br/agencia/empresa/magazine-luiza-mglu3-via-viia3-arena-trademap-copa-do-mundo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Magazine Luiza (MGLU3) ou Via (VIIA3)? Confira o segundo duelo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS5O3zR-CZAVUbl1TGpx-CB_2GA-TVtjcU6nYdCeTTApAAtA6yzFqDCc5MxcEUHprZ_t437ar4L" alt="Magazine Luiza (MGLU3) ou Via (VIIA3)? Confira o segundo duelo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No segundo episódio da Arena TradeMap, o duelo de gigantes do varejo brasileiro: Magazine Luiza (MGLU3) e Via (VIIA3). Confira quem vence!</p></div>
            </div>
        </a>
        </Template></>;
}