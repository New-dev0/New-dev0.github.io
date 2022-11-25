import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lucas Paquetá</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lucas Paquetá"/>
        <meta name="description" content="Trending News about Lucas Paquetá" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lucas Paquetá</h1>
            <Image width={800} height={500} src="https://www.ofuxico.com.br/wp-content/uploads/2022/11/selecao-lucas-paqueta.jpg" alt="Lucas Paquetá"/>
            <h3>Recent News</h3>
            <a href='https://www.ofuxico.com.br/esportes/copa-do-mundo-lucas-paqueta-o-paizao-que-carrega-o-meio-campo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Copa do Mundo: Lucas Paquetá, o paizão que carrega a responsa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZmnpE94eNugWX7kXMdBB5MD2fF_TFGjjLSKWDBJMFrSQ4ygWx_fIQEi-4WubERm4JGkn8XgKW" alt="Copa do Mundo: Lucas Paquetá, o paizão que carrega a responsa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O meio-campo, recém-contratado pelo West Ham, de Londres, conta com o apoio de 13 familiares, que estão no Catar acompanhando os jogos.</p></div>
            </div>
        </a>
        </Template></>;
}