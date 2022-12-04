import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Paises Baixos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Paises Baixos"/>
        <meta name="description" content="Trending News about Paises Baixos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Paises Baixos</h1>
            <Image width={800} height={500} src="https://www.diplomaciabusiness.com/wp-content/uploads/2022/12/embaixador-dos-paises-baixos-no-brasil.jpg" alt="Paises Baixos"/>
            <h3>Recent News</h3>
            <a href='https://www.diplomaciabusiness.com/embaixador-dos-paises-baixos-no-brasil-faz-visita-oficial-a-pernambuco/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Embaixador dos Países Baixos no Brasil faz visita oficial a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcREw_6BQWBJI35lMUG0EwjXL9mHKk2NbH17XJY9EnFzIreQ2SNrLQharWnYL-dIPSfjelnn9lpz" alt="Embaixador dos Países Baixos no Brasil faz visita oficial a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“Temos desenvolvido relações econômicas com esse representante do continente europeu. Recentemente, firmamos acordo com a empresa holandesa Van Oord para a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}