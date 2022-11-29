import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Coates</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Coates"/>
        <meta name="description" content="Trending News about Coates" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Coates</h1>
            <Image width={800} height={500} src="https://www.abola.pt/img/fotos/abola2015/Mundial2022/FotosAP/PalhinhaCoates.jpg" alt="Coates"/>
            <h3>Recent News</h3>
            <a href='https://www.abola.pt/nnh/2022-11-28/portugal-nao-tive-grande-tempo-para-falar-com-ugarte-e-coates-nao-estavam-muito/966462'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Não tive grande tempo para falar com Ugarte e Coates, não ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRqY_b0KTKd2r76AtJ29q6kmncfW4K9ASrXe73If_HgyyoFz2RL5jmFAH5Sm5Lt5xnxoQJW2Dy5" alt="«Não tive grande tempo para falar com Ugarte e Coates, não ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Onde quer que o Cristiano Ronaldo vá, jogamos em casa, tem muitos fãs. Olhei para a bancada e vi muitas camisolas de Portugal, é importante. Ajuda-nos a ganhar&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}