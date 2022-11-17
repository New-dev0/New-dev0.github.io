import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Харьков новости</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Харьков новости"/>
        <meta name="description" content="Trending News about Харьков новости" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Харьков новости</h1>
            <Image width={800} height={500} src="https://www.objectiv.tv/wp-content/uploads/2022/11/Screenshot-2022-11-16-192900.jpg" alt="Харьков новости"/>
            <h3>Recent News</h3>
            <a href='https://www.objectiv.tv/objectively/2022/11/16/v-harkove-ustanovyat-pamyatnik-kernesu-vdova-eks-mera-pokazala-proekt-foto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Харькове установят памятник Кернесу: вдова экс-мэра ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_JBamtSIK5kiJTgGQBTVm6ukAeN0uDGjmBU3nwb8O6GmbCmK3KyLeloNnHylMN7cNAMVSipx1" alt="В Харькове установят памятник Кернесу: вдова экс-мэра ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вдова бывшего Харьковского городского головы Геннадия Кернеса Оксана Гайсинская показала проект памятника, который установят на могиле покойного мэра.</p></div>
            </div>
        </a>
        </Template></>;
}