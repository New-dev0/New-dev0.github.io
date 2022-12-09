import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bank Of Baroda share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bank Of Baroda share price"/>
        <meta name="description" content="Trending News about Bank Of Baroda share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bank Of Baroda share price</h1>
            <Image width={800} height={500} src="https://images.moneycontrol.com/static-hindinews/2022/12/BOB-8-Dec-770x433.jpg" alt="Bank Of Baroda share price"/>
            <h3>Recent News</h3>
            <a href='https://hindi.moneycontrol.com/news/markets/hotstocks/bank-of-baroda-share-price-are-up-what-should-investors-do-5-928841.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Of Baroda Share Price: खरीदने का मूड है तो रणनीति समझ लें</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR_mFo0W50RND5rhf5ZUnG8xiIcDYeg1EXlsXvHF4geuxYgjl0PiaYf0WUc5w3zO-hZHabMF2Me" alt="Bank Of Baroda Share Price: खरीदने का मूड है तो रणनीति समझ लें" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bank Of Baroda Stock में आज खरीदारी का मौका नज़र आ रहा है या नहीं इसी पर लें Expert की राय,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}