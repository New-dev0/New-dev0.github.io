import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Antony</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Antony"/>
        <meta name="description" content="Trending News about Antony" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Antony</h1>
            <Image width={800} height={500} src="https://uploads.metropoles.com/wp-content/uploads/2022/11/24160105/Foto-157.jpg" alt="Antony"/>
            <h3>Recent News</h3>
            <a href='https://www.metropoles.com/colunas/leo-dias/reaproximacao-antony-da-selecao-volta-a-seguir-ex-affair-cavallin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Reaproximação? Antony, da Seleção, volta a seguir ex-affair Cavallin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzT7huzsmW3rYuy58Y_pM4cB3UyGugwF1IfPVUYhjbOXqRg-WZxyNfokiGUMc_49O2we6XftBD" alt="Reaproximação? Antony, da Seleção, volta a seguir ex-affair Cavallin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enquanto isso, a coluna LeoDias segue atenta à discreta (ou nem tanto) vida dos jogadores convocados para defender o Brasil no Qatar. Nas redes sociais, por&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/esportes/futebol/copa-2022/criancas-de-osasco-onde-antony-estudou-escrevem-cartas-para-craques-da-selecao,2dc73d2a55bccde785df75ba448fec73edm5a7le.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Crianças de Osasco, onde Antony estudou, escrevem cartas para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtF1F2Cg-28aIIpbIudrVqY8sXva5YDDrbbXj4yK1bmMKiEcsQRUzrp5jHYe4idnhbjP0wRtdc" alt="Crianças de Osasco, onde Antony estudou, escrevem cartas para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Na mesma quadra em que o atacante Antony iniciou a carreira, crianças aproveitam o intervalo da aula na Escola Municipal Etiene Sales Campelo, em Osasco,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}