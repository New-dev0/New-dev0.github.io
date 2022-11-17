import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Euronews</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Euronews"/>
        <meta name="description" content="Trending News about Euronews" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Euronews</h1>
            <Image width={800} height={500} src="https://static.euronews.com/articles/stories/07/19/47/22/1000x563_cmsv2_0f7251fb-3de5-5e56-8ef0-ceae75286af1-7194722.jpg" alt="Euronews"/>
            <h3>Recent News</h3>
            <a href='https://pt.euronews.com/2022/11/16/declinio-demografico-uma-dor-de-cabeca-em-italia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Declínio demográfico: uma dor de cabeça em Itália</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNN8E82i0IBmACn8fz1qRdyHpExBHG2QySQ2lfWYEE5PV3KcUrcdj-qzT8eLO17nJ6R_qt-VW9" alt="Declínio demográfico: uma dor de cabeça em Itália" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No conjunto da União Europeia (UE), Itália é o país que tem a maior parte da população com mais de 65 anos. De acordo com os especialistas, o declínio&nbsp;...</p></div>
            </div>
        </a><a href='https://pt.euronews.com/my-europe/2022/11/16/croacia-romenia-e-bulgaria-devem-fazer-parte-do-espaco-schengen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Croácia, Roménia e Bulgária &quot;devem fazer parte&quot; do espaço ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRwH_GEZLi08c9Ex9hGUg8ibRRnat3FsKXxCfT7wpVdJII4swvjCOp0qzGC2_U5tmhHcRANpGb-" alt="Croácia, Roménia e Bulgária &quot;devem fazer parte&quot; do espaço ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A decisão terá de ser tomada por unanimidade pelo Conselho Europeu - que reúne os 27 chefes de Estado e de governo -, em princípio até ao final do ano.</p></div>
            </div>
        </a>
        </Template></>;
}