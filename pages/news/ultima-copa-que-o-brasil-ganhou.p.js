import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ultima Copa que o Brasil ganhou</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ultima Copa que o Brasil ganhou"/>
        <meta name="description" content="Trending News about Ultima Copa que o Brasil ganhou" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ultima Copa que o Brasil ganhou</h1>
            <Image width={800} height={500} src="https://www.lance.com.br/files/og_image/uploads/2022/12/09/6393b46511564.jpeg" alt="Ultima Copa que o Brasil ganhou"/>
            <h3>Recent News</h3>
            <a href='https://www.lance.com.br/selecao-brasileira/quando-foi-a-ultima-vez-que-o-brasil-ganhou-a-copa-do-mundo.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Quando foi a última vez que o Brasil ganhou a Copa do Mundo?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTB5afrGdfluPvGc1mkDR6_Zuv19G0rvvCD0YlCS7fvZe4NOoYHXDG_SZBKM8KYaDbSI1FeyN59" alt="Quando foi a última vez que o Brasil ganhou a Copa do Mundo?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seleção Brasileira deu adeus ao torneio nesta sexta-feira, ao ser eliminada pela Croácia.</p></div>
            </div>
        </a>
        </Template></>;
}