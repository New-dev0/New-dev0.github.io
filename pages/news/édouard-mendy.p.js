import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Édouard Mendy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Édouard Mendy"/>
        <meta name="description" content="Trending News about Édouard Mendy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Édouard Mendy</h1>
            <Image width={800} height={500} src="https://midianinja.org/files/2022/11/gg-1200x630.jpg" alt="Édouard Mendy"/>
            <h3>Recent News</h3>
            <a href='https://midianinja.org/news/edouard-mendy-da-quase-desistencia-do-futebol-para-se-tornar-o-melhor-goleiro-do-mundo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Édouard Mendy: Da quase desistência do Futebol para se tornar o ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgUpphwekE8g3Mo-AYg69YhvxxN8momlpfCZp-DtwKHfk-36MgIR0P697zwHOLSYamWC-0gUok" alt="Édouard Mendy: Da quase desistência do Futebol para se tornar o ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Monike Lourinho. Mendy, filho de mãe senegalesa e pai guineense, começou sua carreira aos 13 anos na Academia de juniores do Le Havre AC, com seu ótimo&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}