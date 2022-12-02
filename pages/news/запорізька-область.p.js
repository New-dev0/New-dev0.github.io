import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Запорізька область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Запорізька область"/>
        <meta name="description" content="Trending News about Запорізька область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Запорізька область</h1>
            <Image width={800} height={500} src="https://mig.com.ua/wp-content/uploads/2022/11/2022-08-10t101208z_1662578600_rc2gtv9x6q4o_rtrmadp_3_ukraine-crisis-kharkiv-region-830x500-1.jpg" alt="Запорізька область"/>
            <h3>Recent News</h3>
            <a href='https://mig.com.ua/voienkor-u-zaporizkij-oblasti-artdueli-staly-duzhe-intensyvnymy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Воєнкор: у Запорізькій області артдуелі стали дуже ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRScJ8gysJTgn-6yr-TjNq8wzYsYykq7db3NxYp6VmlALl0zk_wWVz0SnhazlKr7qzf19UoO37y" alt="Воєнкор: у Запорізькій області артдуелі стали дуже ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Цими днями Запоріжжя та Запорізький район (особливо прибережні території, біля Дніпра) чують гучні потужні звуки. Моніторингові ТГ-канали повідомляють,&nbsp;...</p></div>
            </div>
        </a><a href='http://iz.com.ua/zaporoje/na-zaporizkomu-napryamku-intensivnist-boyiv-ta-artdueley-bude-tilki-zrostati'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Запорізькому напрямку інтенсивність боїв та артдуелей буде ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsSe4R551d82lfPUxOcEMfqk2KFMsBMoI29VlzcRUhorS_0bysUwcW_kUGaBKmd2Jo39X8Ucs-" alt="На Запорізькому напрямку інтенсивність боїв та артдуелей буде ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як повідомляє військовий журналіст Богдан Мірошніков, у Запорізькій області продовжуються бої у напрямках Костянтинівки та П&#39;ятихаток.</p></div>
            </div>
        </a>
        </Template></>;
}