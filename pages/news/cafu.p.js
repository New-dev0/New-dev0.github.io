import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cafu</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cafu"/>
        <meta name="description" content="Trending News about Cafu" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cafu</h1>
            <Image width={800} height={500} src="https://www.mktesportivo.com/wp-content/uploads/2022/11/cafu_Easy-Resize.com_.jpg" alt="Cafu"/>
            <h3>Recent News</h3>
            <a href='https://www.mktesportivo.com/2022/11/cafu-estreia-podcast-sobre-a-copa-do-mundo-na-redetv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cafu estreia podcast sobre a Copa do Mundo na RedeTV! - MKT ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSB9CoyN-V61Ma8EwR3D1c6qClsjIAZJ7lV7VwK0es1D-YERQL04ire1NFMOtpU307HCnd0NoIM" alt="Cafu estreia podcast sobre a Copa do Mundo na RedeTV! - MKT ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Capitão na conquista do pentacampeonato mundial pela Seleção Brasileira, em 2002, Cafu estreia um podcast no canal do YouTube da RedeTV! trazendo as&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}