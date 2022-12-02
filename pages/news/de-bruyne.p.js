import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>De Bruyne</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,De Bruyne"/>
        <meta name="description" content="Trending News about De Bruyne" /></Head><Template>
            <h1 style={{fontSize: "30"}}>De Bruyne</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/E35mKuUVMzJSEl2XbtV6qxNKUPs=/1200x/smart/filters:cover():strip_icc()/s03.video.glbimg.com/x720/11170742.jpg" alt="De Bruyne"/>
            <h3>Recent News</h3>
            <a href='https://ge.globo.com/futebol/selecoes/belgica/noticia/2022/12/01/atuacoes-da-belgica-de-bruyne-vai-bem-mas-lukaku-abusa-das-chances-perdidas-e-e-o-vilao.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atuações da Bélgica: De Bruyne vai bem, mas Lukaku abusa das ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRCNd75SwI0kqOghIFLTvVeRC20N5B9E7BkDC5dvF1_CrqBdwJvvsFThXcqGj9VD_O05snuywGm" alt="Atuações da Bélgica: De Bruyne vai bem, mas Lukaku abusa das ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Courtois (GOL): depois ser pouco exigido no primeiro tempo, fez algumas boas defesas na segunda etapa. Nota: 6,5. Meunier (LAD): se apresentou com&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}