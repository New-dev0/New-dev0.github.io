import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jogadores de seleção francesa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jogadores de seleção francesa"/>
        <meta name="description" content="Trending News about Jogadores de seleção francesa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jogadores de seleção francesa</h1>
            <Image width={800} height={500} src="https://conteudo.imguol.com.br/c/entretenimento/44/2022/10/31/selecao-francesa-na-uefa-nations-league-1667241773279_v2_615x300.jpg" alt="Jogadores de seleção francesa"/>
            <h3>Recent News</h3>
            <a href='https://www.uol.com.br/esporte/colunas/milly-lacombe/2022/12/04/sem-imigrantes-a-franca-seguiria-sendo-uma-nanica-no-futebol.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milly Lacombe - Sem imigrantes, a França seguiria sendo uma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ55HIoWNQ4ecTwfjYFBmT3zCj0AyNWmZCc7uB262NeLMZ2ZkqCa0j96iKPiU4lBRsrugFUyuVr" alt="Milly Lacombe - Sem imigrantes, a França seguiria sendo uma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em 2018, logo depois do título mundial francês, o comediante sul-africano Trevor Noah disse na TV que a África tinha vencido a Copa do Mundo de futebol&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}