import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Seleção Dinamarca</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Seleção Dinamarca"/>
        <meta name="description" content="Trending News about Seleção Dinamarca" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Seleção Dinamarca</h1>
            <Image width={800} height={500} src="https://veja.abril.com.br/wp-content/uploads/2022/11/GettyImages-1442313877-1.jpg?quality=70&strip=info" alt="Seleção Dinamarca"/>
            <h3>Recent News</h3>
            <a href='https://veja.abril.com.br/esporte/skov-olsen-a-promessa-de-gols-da-dinamarca-que-quase-largou-o-futebol/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Skov Olsen: a promessa de gols da Dinamarca que quase largou o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoOGm5gD62hHNRJksOTsaeETseL2oszlQKMy5SZytnV_-N_Ervj_YgcuIdbrXd8PUnBetmb-sP" alt="Skov Olsen: a promessa de gols da Dinamarca que quase largou o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Artilheiro do país nas Eliminatórias, jovem atacante é destaque do surpreendente Brugge e precisou de cirurgia de risco aos 14 anos para seguir no esporte.</p></div>
            </div>
        </a>
        </Template></>;
}