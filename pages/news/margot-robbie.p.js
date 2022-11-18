import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Margot Robbie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Margot Robbie"/>
        <meta name="description" content="Trending News about Margot Robbie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Margot Robbie</h1>
            <Image width={800} height={500} src="https://media.vogue.fr/photos/6375ed74a076de65f913447c/16:9/w_1280,c_limit/1442012581" alt="Margot Robbie"/>
            <h3>Recent News</h3>
            <a href='https://www.vogue.fr/mode/article/margot-robbie-pantalon-bottega-veneta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie porte le pantalon Bottega Veneta pour lequel on va ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBM5tJx0WnxWSeuRTQ-zqtWXGbWIRRwlEVscPPonjf6Sr2qvJ0nPcT1Jm8GQie6u56zP25oUzB" alt="Margot Robbie porte le pantalon Bottega Veneta pour lequel on va ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Blue jeans (en trompe l&#39;œil), blazer noir et escarpins à bout pointu : la quintessence du chic selon Margot Robbie. Dans le quartier de Tribeca à New York,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}