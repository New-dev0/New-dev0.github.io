import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Natura</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Natura"/>
        <meta name="description" content="Trending News about Natura" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Natura</h1>
            <Image width={800} height={500} src="https://classic.exame.com/wp-content/uploads/2022/10/IMG_1161.jpg?quality=70&strip=info&w=1024" alt="Natura"/>
            <h3>Recent News</h3>
            <a href='https://exame.com/esg/natura-anuncia-compromisso-antirracista-e-iniciativas-como-trainee-para-pessoas-negras/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Natura anuncia compromisso antirracista e iniciativas como trainee ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTy10Hh0VieaXqFiJfmkFTRD58WZuBIdSf-PdKjiwJiOZZvcIYiCFKgyHy-YCX7WHZl6me1CuXy" alt="Natura anuncia compromisso antirracista e iniciativas como trainee ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Natura passa a se comprometer com a promoção de meios para o aumento da renda de consultoras negras; em relação aos funcionários, as metas lançadas pela&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}