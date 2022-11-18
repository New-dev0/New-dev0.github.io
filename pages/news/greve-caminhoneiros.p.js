import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Greve caminhoneiros</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Greve caminhoneiros"/>
        <meta name="description" content="Trending News about Greve caminhoneiros" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Greve caminhoneiros</h1>
            <Image width={800} height={500} src="http://www.boatos.org/wp-content/uploads/2022/11/Greve-geral-de-todos-os-caminhoneiros-do-Brasil-vai-ser-deflagrada-em-18-11-2022-diz-boato.jpg" alt="Greve caminhoneiros"/>
            <h3>Recent News</h3>
            <a href='https://www.boatos.org/brasil/greve-geral-todos-caminhoneiros-brasil-vai-ser-deflagrada-18-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Greve geral de todos os caminhoneiros do Brasil vai ser deflagrada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfWzrgejcXRyvcYXyeMl1WoQjOIXYY72bLZGwWZGANj_aTWQ7uzFjI1CHuPpFE-cAlvhWeX0Ac" alt="Greve geral de todos os caminhoneiros do Brasil vai ser deflagrada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boato – Por causa de decisão de Alexandre de Moraes, os caminhoneiros de todo Brasil resolveram realizar uma greve geral no dia 18 de novembro de 2022.</p></div>
            </div>
        </a><a href='https://www.pontoevirgula.news/noticia/21226/urgente-apartir-desta-sexta-18-de-novembro-greve-geral-de-todos-os-caminhoneiros-do-brasil'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Boatos que apartir desta sexta greve geral de todos os ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTj3ku-j6TMHdC8lDD4TOcSAsvxOkF0BvEFKl4lpHO4b_XFWA7q2T_vBZEXF4PD56nGCXIadpBS" alt="Boatos que apartir desta sexta greve geral de todos os ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Boato – Por causa de decisão de Alexandre de Moraes, os caminhoneiros de todo Brasil resolveram realizar uma greve geral no dia 18 de novembro de 2022.</p></div>
            </div>
        </a>
        </Template></>;
}