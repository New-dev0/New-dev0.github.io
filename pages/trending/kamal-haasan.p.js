import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kamal Haasan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kamal Haasan"/>
        <meta name="description" content="Trending News about Kamal Haasan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kamal Haasan</h1>
            <Image width={800} height={500} src="https://ajnews.andhrajyothy.com/appimg/galleries/1822092611024617/09262022110447n76.jpg" alt="Kamal Haasan"/>
            <h3>Recent News</h3>
            <a href='https://www.andhrajyothy.com/telugunews/kamal-haasan-mrgs-national-1822092611024617'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kamal Haasan: తమిళ గడ్డపై బాంబుల సంస్కృతి అనుమతించం..</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSe0uR9XSHfDd25rzkPXCB_7kQRJTZrIHvvP3RsXcCka5yptDXSXxKRzSapfrKBXWGrNvzHoIY5" alt="Kamal Haasan: తమిళ గడ్డపై బాంబుల సంస్కృతి అనుమతించం.." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ప్రశాంతంగా ఉన్న రాష్ట్రంగా పేరుపొందిన తమిళనాడులో బాంబుల సంస్కృతిని అనుమతించే&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}