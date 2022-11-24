import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rüdiger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rüdiger"/>
        <meta name="description" content="Trending News about Rüdiger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rüdiger</h1>
            <Image width={800} height={500} src="https://derivates.kicker.de/image/upload/c_crop,x_0,y_93,w_4000,h_2250/w_1200,q_auto/v1/2022/11/23/cc0a6f4d-a780-4571-9df7-5441f4b39300.jpeg" alt="Rüdiger"/>
            <h3>Recent News</h3>
            <a href='https://www.kicker.de/klare-worte-von-ruediger-das-2-1-ist-lachhaft-926950/video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Klare Worte von Rüdiger: &quot;Das 2:1 ist lachhaft&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVUCqciX1h4Cp0f5WqZpmS5AfHfHiZhsSwG0muVh1JQs6c8mWdQk3rvci-0OqYqIxQNgSpUixv" alt="Klare Worte von Rüdiger: &quot;Das 2:1 ist lachhaft&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Video: Beiden deutschen Gegentoren bei der 2:1-Niederlage gingen mangelhaftes Abwehrverhalten voraus. Antonio Rüdiger bemängelt die Passivität der deutschen&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}