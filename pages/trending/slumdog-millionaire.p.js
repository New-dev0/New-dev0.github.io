import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Slumdog Millionaire</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Slumdog Millionaire"/>
        <meta name="description" content="Trending News about Slumdog Millionaire" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Slumdog Millionaire</h1>
            <Image width={800} height={500} src="" alt="Slumdog Millionaire"/>
            <h3>Recent News</h3>
            <a href='https://www.mapsofindia.com/my-india/quiz/kbc-2022-which-of-these-films-was-cited-as-an-inspiration-by-danny-boyle-for-the-oscar-winning-film-slumdog-millionaire'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KBC 2022| Which of these films was cited as an inspiration by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTzLzrMcCRB6jz-u9azRe8JHTz4ur74l14Ot5KKz7Lp6y97JgU0213zw-ZbPedT-RdkiKxicO-D" alt="KBC 2022| Which of these films was cited as an inspiration by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ques: Which of these films was cited as an inspiration by Danny Boyle for the Oscar-winning film Slumdog Millionaire? A. Baazigar. B. Black Friday. C. Shool. D.</p></div>
            </div>
        </a><a href='https://newsd.in/kbc-14-which-of-these-films-was-cited-as-an-inspiration-by-danny-boyle-for-slumdog-millionaire/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KBC 14: Which of these films was cited as an inspiration by Danny ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzRw3s5662pYRg-z67TNKj3lBLREAbI9EhjHfHKAm-BLTff_c9YqbAnqj2ufL1UwDqaxtKDZs9" alt="KBC 14: Which of these films was cited as an inspiration by Danny ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>KBC 14: Which of these films was cited as an inspiration by Danny Boyle for the Oscar-winning film Slumdog Millionaire?</p></div>
            </div>
        </a>
        </Template></>;
}