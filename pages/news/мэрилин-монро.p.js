import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Мэрилин Монро</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Мэрилин Монро"/>
        <meta name="description" content="Trending News about Мэрилин Монро" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Мэрилин Монро</h1>
            <Image width={800} height={500} src="https://static.kinoafisha.info/upload/articles/532922143899.jpg" alt="Мэрилин Монро"/>
            <h3>Recent News</h3>
            <a href='https://www.kinoafisha.info/articles/merilin-monro-stesnyalas-etoy-chasti-tela-vy-budete-v-smyatenii-ot-ee-kompleksov_id42033_a14975876/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мэрилин Монро стеснялась этой части тела: вы будете в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ7NElffP7fe3F4xpR-jZzBeg7yPk4f-E5qiiNvVtkEZEpf1DKqAw3GPHvUtBXwTkmUoO17gR-F" alt="Мэрилин Монро стеснялась этой части тела: вы будете в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Голливудская блондинка Мэрилин Монро до сих пор будоражит умы мужчин. Она считается одним из идеалов красоты и женственности. Модницы повторяют ее макияж и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}