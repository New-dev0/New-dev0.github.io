import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sefaz</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sefaz"/>
        <meta name="description" content="Trending News about Sefaz" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sefaz</h1>
            <Image width={800} height={500} src="" alt="Sefaz"/>
            <h3>Recent News</h3>
            <a href='https://www.ceara.gov.br/2022/11/21/conecte-se-online-sefaz-ceara-discute-parcerias-publico-privadas-no-piaui-na-quarta-feira-23/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Conecte-se Online: Sefaz Ceará discute “Parcerias Público ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmJ1n9zzFHe4RZNSwgqbhge1x7wrbTCVwQfaQz9SXexN_5zwnrTk3I2A1Y1v9UoaZH6ij8g152" alt="Conecte-se Online: Sefaz Ceará discute “Parcerias Público ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Titular da Sefaz Ceará, Fernanda Pacobahyba será a debatedora do evento com transmissão ao vivo pelo YouTube. A Secretaria da Fazenda do Ceará (Sefaz-CE)&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}