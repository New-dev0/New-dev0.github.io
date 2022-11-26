import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Станислав Говорухин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Станислав Говорухин"/>
        <meta name="description" content="Trending News about Станислав Говорухин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Станислав Говорухин</h1>
            <Image width={800} height={500} src="https://n1s2.hsmedia.ru/8e/06/b1/8e06b1e436896d6ad04ed160f4dcacc3/1200x630_0xac120003_12196918721669391480.png" alt="Станислав Говорухин"/>
            <h3>Recent News</h3>
            <a href='https://www.starhit.ru/novosti/vdova-stanislava-govorukhina-pogibla-pri-pozhare-v-novoi-moskve-851322/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вдова Станислава Говорухина погибла при пожаре в Новой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_nG35tfxKglWmnIw6OVFxl-5pPlYFjyEd4ou17DSRnOYmumR3rl_V-TXnHGat6vjCQc28GLNt" alt="Вдова Станислава Говорухина погибла при пожаре в Новой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Журналисты сообщили трагическую новость — не стало Галины Борисовны, вдовы Станислава Говорухина. Женщина погибла при пожаре в возрасте 74 лет.</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/society/news/2022/11/25/952229-pri-pozhare-pogibla'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>При пожаре погибла вдова режиссера Станислава Говорухина ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRquCaECqfkZ1LbyWx9Wn8fFdL36Y9uNuzAZIRx-IrewxOEoPu3Xnv1Pdsjqdx9ukriKF264LXi" alt="При пожаре погибла вдова режиссера Станислава Говорухина ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Галина Говорухина, вдова режиссера и актера Станислава Говорухина, погибла в результате пожара в коттеджном поселке Лесное Озеро в новой Москве,&nbsp;...</p></div>
            </div>
        </a><a href='https://kazanreporter.ru/news/52586_pri-pozare-pogibla-vdova-rezissera-stanislava-govoruhina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>При пожаре погибла вдова режиссёра Станислава Говорухина</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRwIzDQtuyz1VCs0szAAVKajlpzWdeI48l6vGMPyXL6OE7gr4M50R8mlSAdapedyg06PhtOzovy" alt="При пожаре погибла вдова режиссёра Станислава Говорухина" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вдова режиссера Станислава Говорухина – Галина, погибла при пожаре в частном доме в поселке Лесное озеро (Новая Москва). По информации ТАСС, пожар произошел&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/lifestyle/538534-vdova-izvestnogo-rossiyskogo-rezhissera-i-aktera-stanislava-govoruhina-pogibla-na-pozhare'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вдова известного российского режиссера и актера Станислава ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcScNYrakC7l2PlhaVWhP4vkHUtMRfY_czKjKSTUzGxiZYsaM-v-iE8zDgBebT6uY7Kg_oesmIMC" alt="Вдова известного российского режиссера и актера Станислава ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пожар произошел в коттеджном поселке Лесное Озеро в Новой Москве в частном доме с мансардой. В доме с Галиной Говорухиной находилась ее помощница, ей удалось&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/25/71847398/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ТАСС: Вдова режиссера Станислава Говорухина погибла при ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTB37F3Y6cfY9q8KbGjAJ-SrQezSc_KYJVG9mXRWveKJ8-qEzXa9V8k34iKLRN7IekXRm6YkCI7" alt="ТАСС: Вдова режиссера Станислава Говорухина погибла при ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вдова режиссера и актера Станислава Говорухина Галина погибла при пожаре в поселке Лесное Озеро в Новой Москве. Об этом 25 - Происшествия - 25 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-25/vdova-rezhissera-stanislava-govoruhina-pogibla-pri-pozhare-v-novoy-moskve'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вдова режиссера Станислава Говорухина погибла при пожаре в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJjiCwfQumSbj5d-30fy0jetyyOgzPtx54BNUNT8oZeh2cUpqKo3_momAN_gxZYAzouPCjFpnl" alt="Вдова режиссера Станислава Говорухина погибла при пожаре в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Возгорание в коттедже произошло в пятницу в поселке Лесное Озеро.</p></div>
            </div>
        </a><a href='https://www.vokrug.tv/article/show/16693963081/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, что в пожаре сгорела вдова Станислава ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ097yr6jz8HMluSux_jgT3xW5yEl0B4Q4Wc2OFOnumA7X2O7rjaVtEsrDLjaX9GO7XMZepv6xW" alt="Стало известно, что в пожаре сгорела вдова Станислава ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня стало известно о смерти супруги Станислава Сергеевича Говорухина. Галина Борисовна сгорела в крупном пожаре в собственном загородном доме.</p></div>
            </div>
        </a>
        </Template></>;
}