import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aston Villa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aston Villa"/>
        <meta name="description" content="Trending News about Aston Villa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aston Villa</h1>
            <Image width={800} height={500} src="https://bolavip.com/__export/1670533818069/sites/bolavip/img/2022/12/08/vandijk02_crop1670533817265.jpg_242310155.jpg" alt="Aston Villa"/>
            <h3>Recent News</h3>
            <a href='https://br.bolavip.com/prognostico/Aston-Villa-x-Liverpool-Prognosticos-e-palpites-para-o-retorno-da-Premier-League-20221208-0176.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aston Villa x Liverpool: Prognósticos e palpites para o retorno da ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHim0Ga3IUkeVZcYHY-1EnxcI8mtUqKtfnB2i_MSDnrEn8RBHxCKndwUDu4WBDA2t3pcaFofi7" alt="Aston Villa x Liverpool: Prognósticos e palpites para o retorno da ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Competição terá rodadas completas após o final da Copa do Mundo e não deixará os brasileiros sem futebol na virada do ano.</p></div>
            </div>
        </a>
        </Template></>;
}