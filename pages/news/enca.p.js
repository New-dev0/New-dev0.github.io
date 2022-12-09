import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>eNCA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,eNCA"/>
        <meta name="description" content="Trending News about eNCA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>eNCA</h1>
            <Image width={800} height={500} src="https://www.enca.com/sites/default/files/styles/facebook/public/2021-09/PRISON.jpeg?h=f8f57793&itok=TX21yPpe" alt="eNCA"/>
            <h3>Recent News</h3>
            <a href='https://www.enca.com/news/prison-stabbing-inmates-attack-three-officials'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Prison stabbing | Inmates attack three officials</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJCFp_RaTy66WRjdAw3jS_HTQ0ksrYO6NnNSqbD-Ypzm3E9a902jZ7s09FKdLVljMH3LjltoCf" alt="Prison stabbing | Inmates attack three officials" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two inmates attacked and stabbed three prison officials at the St Albans Correctional Centre in Gqeberha on Wednesday morning.</p></div>
            </div>
        </a>
        </Template></>;
}