import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FCP</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FCP"/>
        <meta name="description" content="Trending News about FCP" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FCP</h1>
            <Image width={800} height={500} src="https://agenciapara.com.br/midias/2022/pequenas/up_ag_39660_75c07c9d-72b5-669a-43e0-703e9173526b.jpg" alt="FCP"/>
            <h3>Recent News</h3>
            <a href='https://agenciapara.com.br/noticia/39660/casa-das-artes-realiza-webinario-com-artistas-contemplados-pelo-premio-fcp-de-incentivo-a-arte-e-a-cultura'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Casa das Artes realiza webinário com artistas contemplados pelo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS5Pxz7pFjDj2pxBw2W6U26tpeBxunkty_uYYO9PJVqTQYsitJEL-SoQGozcRoZgo7rT_HPl-69" alt="Casa das Artes realiza webinário com artistas contemplados pelo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Casa das Artes, por meio da Fundação Cultural do Pará, realizará o webinário “Pesquisa e Experimentação em Arte: Prêmio FCP de Incentivo à...</p></div>
            </div>
        </a>
        </Template></>;
}