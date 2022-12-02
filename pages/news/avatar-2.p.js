import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Avatar 2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Avatar 2"/>
        <meta name="description" content="Trending News about Avatar 2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Avatar 2</h1>
            <Image width={800} height={500} src="" alt="Avatar 2"/>
            <h3>Recent News</h3>
            <a href='https://ovicio.com.br/avatar-2-stephen-lang-diz-como-quartich-retorna-como-navi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar 2 | Stephen Lang diz como Quartich retorna como Na&#39;vi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRqUNijuMhcHLFp_AIdO2Y1GvqsgM5N8s8qq9DULw8BCB67odVrOL2hu07F4ZzPQGSe_aW0tf1m" alt="Avatar 2 | Stephen Lang diz como Quartich retorna como Na&#39;vi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Falando com a Empire, o ator disse que o personagem que ele vai interpretar no novo filme não é exatamente o Quartich, mas um Na&#39;vi com suas memórias, emoções e&nbsp;...</p></div>
            </div>
        </a><a href='https://estacaonerd.com/avatar-2-stephen-lang-revela-como-seu-personagem-ira-retornar-para-a-franquia-confira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Avatar 2 | Stephen Lang revela como seu personagem irá retornar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxWqkwfueiGLMVl2CCd_306xChV70rY2wsAK3T5Ucdo4zAFw1XbZA5q4zhnMbrMWPkwpg2jsfd" alt="Avatar 2 | Stephen Lang revela como seu personagem irá retornar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em entrevista a Empire, Stephen Lang revelou como seu personagem irá retornar à franquia Avatar. Confira: “Ele é um avatar autônomo geneticamente modificado&nbsp;...</p></div>
            </div>
        </a><a href='https://thenexus.one/revelado-como-o-vilao-do-avatar-de-stephen-lang-retorna-em-forma-de-agua/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Revelado como o vilão do avatar de Stephen Lang retorna em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRx1azYU2vdHqUG841_UHXYifHChXhlbqSpCVtmA_C5JFE04N8yJvJ1GLmkOVhjAcU_gLT9ToFe" alt="Revelado como o vilão do avatar de Stephen Lang retorna em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Avatar: O Caminho da Água A estrela Stephen Lang explica como seu personagem vilão Quaritch é trazido de volta dos mortos para a tão esperada sequência. O&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}