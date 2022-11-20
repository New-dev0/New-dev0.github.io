import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lousã</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lousã"/>
        <meta name="description" content="Trending News about Lousã" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lousã</h1>
            <Image width={800} height={500} src="https://www.campeaoprovincias.pt/wp-content/uploads/2022/11/lousa-768x285.png" alt="Lousã"/>
            <h3>Recent News</h3>
            <a href='https://www.campeaoprovincias.pt/noticia/lousa-incubadora-social-promove-empreendedorismo-e-empregabilidade'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lousã: Incubadora social promove empreendedorismo e ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRh3_qL0cFhOOTvmh1hqFSyd5BN_mfhDS4DNh57MpCtR8GlnwOGuYk71rxqK_dv0m13oHLBdi8j" alt="Lousã: Incubadora social promove empreendedorismo e ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Microninho+IN – Incubadora Social e de Inovação, da Lousã, vai promover, nos dias 28 e 29, sessões de “capacitação intensiva” em modo virtual dirigidas ao&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}