import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Good Luck to You, Leo Grande</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Good Luck to You, Leo Grande"/>
        <meta name="description" content="Trending News about Good Luck to You, Leo Grande" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Good Luck to You, Leo Grande</h1>
            <Image width={800} height={500} src="https://img-s1.onedio.com/id-6391f4e0d47ddaff2bb3e2fb/rev-0/raw/s-20990ef5490b026a6291b78727c6ddb33879503b.jpg" alt="Good Luck to You, Leo Grande"/>
            <h3>Recent News</h3>
            <a href='https://onedio.com/haber/orgazm-dolu-sahneleriyle-2022-ye-damga-vurup-en-cok-konusulan-erotik-dizi-ve-filmler-1112900'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Orgazm Dolu Sahneleriyle 2022&#39;ye Damga Vurup En Çok ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMEW0X6eTik3SickKxkmyS5fX2ZH8_UoN3_7-QJXSthFj5nZ7Ou8bIjxktcbmBFc63OMnQrrpm" alt="Orgazm Dolu Sahneleriyle 2022&#39;ye Damga Vurup En Çok ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sevişme sahneleriyle sinema dünyasına damga vurup 2022&#39;de en çok konuşulan dizi ve filmler Onedio&#39;da içeriğimizde!</p></div>
            </div>
        </a>
        </Template></>;
}