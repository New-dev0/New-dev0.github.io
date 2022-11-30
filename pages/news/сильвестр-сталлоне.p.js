import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Сильвестр Сталлоне</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Сильвестр Сталлоне"/>
        <meta name="description" content="Trending News about Сильвестр Сталлоне" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Сильвестр Сталлоне</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/345/tsn-90ef87392779da7417a975ee734335dc/thumbs/1200x630/52/c8/064368817fe954d287ebbb61f444c852.jpeg" alt="Сильвестр Сталлоне"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/lady/news/show-biznes/zrobiv-plastiku-chi-prosto-pogolivsya-76-richniy-silvestr-stallone-prodemonstruvav-pomolodiliy-viglyad-2211520.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зробив пластику чи просто поголився: 76-річний Сильвестр ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZBMylX6UimMcjDCmahrIA7Gq-R6k-km-ttdw-_H0PGeqkZ7Wc4mRaDxXSaTk1_YnuDYwve33J" alt="Зробив пластику чи просто поголився: 76-річний Сильвестр ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Папараці заскочили Сильвестра Сталлоне на вулицях Лос-Анджелеса. Актор виймав із багажника автомобіля свої покупки. Сталлоне приємно здивував своїм&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/lady/news/show-biznes/sdelal-plastiku-ili-prosto-pobrilsya-76-letniy-silvestr-stallone-prodemonstriroval-pomolodevshiy-vid-2211520.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сделал пластику или просто побрился: 76-летний Сильвестр ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQZBMylX6UimMcjDCmahrIA7Gq-R6k-km-ttdw-_H0PGeqkZ7Wc4mRaDxXSaTk1_YnuDYwve33J" alt="Сделал пластику или просто побрился: 76-летний Сильвестр ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Папарацци подловили Сильвестра Сталлоне на улицах Лос-Анджелеса. Актер вынимал из багажника автомобиля свои покупки. Сталлоне приятно удивил своим&nbsp;...</p></div>
            </div>
        </a><a href='https://meta.ua/showbiz/glamur/60501-viglyadit-na-20-let-mladshe-silvestr-stallone-porazil-svoim-vneshnim-vidom-foto/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Выглядит на 20 лет младше: Сильвестр Сталлоне поразил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwh5bbFwpM5ZvJDH5xrh6vK08XFQxt9f9blkAa-u-u2Q3hjwN33oxmP_EVmJBNGCRRP3vPcRkF" alt="Выглядит на 20 лет младше: Сильвестр Сталлоне поразил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Папарацци подловили Сильвестра Сталлоне на улицах Лос-Анджелеса когда актер вынимал из багажника автомобиля свои покупки.Актер был одет в черную футбо…</p></div>
            </div>
        </a>
        </Template></>;
}