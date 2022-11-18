import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nuno Mendes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nuno Mendes"/>
        <meta name="description" content="Trending News about Nuno Mendes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nuno Mendes</h1>
            <Image width={800} height={500} src="https://goalpoint.pt/wp-content/uploads/2022/11/GoalPoint-FIFA-23-TOTW-Otavio-Djalo-Mendes.jpg" alt="Nuno Mendes"/>
            <h3>Recent News</h3>
            <a href='https://goalpoint.pt/fifa-23-otavio-djalo-mendes-totw_156403'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA 23 | Otávio, Nuno Mendes e Djaló na equipa da semana ⭐️</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSEI_UB4_IRFrbDAEMOEM5FR_e3HJuKKnoWmiJkbVbWc-6tB8A84ACHe5r1R1DLkIH2_rl3iAV" alt="FIFA 23 | Otávio, Nuno Mendes e Djaló na equipa da semana ⭐️" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>São eles Otávio Monteiro, do FC Porto, Nuno Mendes, do Paris Saint-Germain, e Tiago Djaló, do Lille. Pelo meio alguns outros que já actuaram na Liga portuguesa,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}