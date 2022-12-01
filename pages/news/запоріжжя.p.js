import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Запоріжжя</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Запоріжжя"/>
        <meta name="description" content="Trending News about Запоріжжя" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Запоріжжя</h1>
            <Image width={800} height={500} src="" alt="Запоріжжя"/>
            <h3>Recent News</h3>
            <a href='https://vesti.ua/uk/zaporozhe-uk/v-vozduhe-zaporozhya-vyyavili-prevyshenie-kontsentratsii-vrednyh-veshhestv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У повітрі Запоріжжя виявили перевищення концентрації ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQNJw9OrdJftW8_3lJqJ4u3ABgoYvpEaYoRE4SDP8GKQBwh1_norK6V7b_UBleitEfKLhzSQFSc" alt="У повітрі Запоріжжя виявили перевищення концентрації ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У запорізькому повітрі спеціалісти мобільної лабораторії моніторингу виявили відхилення від норми. Про це повідомили у Запорізькій обласній військовій&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}