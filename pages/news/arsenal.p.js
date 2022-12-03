import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal"/>
        <meta name="description" content="Trending News about Arsenal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal</h1>
            <Image width={800} height={500} src="https://media.tribunadointerior.com.br/2022/12/de14a437-armas-apreendidas.jpg" alt="Arsenal"/>
            <h3>Recent News</h3>
            <a href='https://www.tribunadointerior.com.br/policial/mulheres-sao-detidas-com-arsenal-de-armas-caseiras-na-regiao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mulheres são detidas com arsenal de armas caseiras na região</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSDXJ-tFyHNonKTgtcgeqqWvUAbfMm5A7tOQy0mIs-137nBXbXXvD8Mz41xSGjsJgHxef5QL2oX" alt="Mulheres são detidas com arsenal de armas caseiras na região" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Duas mulheres, elas não tiveram a identidade divulgada, foram presas pela Polícia Civil de Engenheiro Beltrão. Com a dupla, os policiais apreenderam um arsenal&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}