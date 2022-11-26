import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Полтаваобленерго</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Полтаваобленерго"/>
        <meta name="description" content="Trending News about Полтаваобленерго" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Полтаваобленерго</h1>
            <Image width={800} height={500} src="https://np.pl.ua/wp-content/uploads/2022/11/12.jpg" alt="Полтаваобленерго"/>
            <h3>Recent News</h3>
            <a href='https://np.pl.ua/2022/11/kol-tsentr-poltavaoblenerho-25-lystopada-ne-pratsiuvatyme-kilka-hodyn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кол-центр “Полтаваобленерго” 25 листопада не працюватиме ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBqzvvw8sujuu3lO2oKaK6q1itA0MOx1yAPb0EbIMCOd1JpSe9_iiqrRsp2ckgaH3JpJf-B4cH" alt="Кол-центр “Полтаваобленерго” 25 листопада не працюватиме ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 листопада з 10:00 до 14:00 з технічних причин не буде працювати кол-центр АТ “Полтаваобленерго”. Про це повідомили на фейсбук-сторінці АТ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}