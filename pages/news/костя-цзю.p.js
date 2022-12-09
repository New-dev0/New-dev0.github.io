import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Костя Цзю</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Костя Цзю"/>
        <meta name="description" content="Trending News about Костя Цзю" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Костя Цзю</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/8/f6/4921293.jpg" alt="Костя Цзю"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/boxing/news-4921293-kostya-czyu-vyskazalsya-o-prichinah-pobudivshih-monsona-pereehat-v-rossiyu-iz-ssha.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Костя Цзю высказался о причинах, побудивших Монсона ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYHW7XVyG-AF4Q__mh90ZgzWTddvBdbeIE4t71VSaD_sEJKKFGIjll7Sfv2pyL-H9Z1aJSpOpj" alt="Костя Цзю высказался о причинах, побудивших Монсона ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший абсолютный чемпион мира Костя Цзю поделился мнением о том, что сподвигло уроженца США, ветерана смешанных единоборств Джеффа Монсона переехать в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.kz/news/kostya-tszyu-nazval-prichinu-pereezda-v-rossiyu-amerikanskogo-veterana-mma'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Костя Цзю назвал причину переезда в Россию американского ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPHIm0aLNPtMLOfbXPA1nkOK_8d_d6hX78OHYY1llhax4Obw5ZlnH35BJvuz3fadM4VZZ3fMz8" alt="Костя Цзю назвал причину переезда в Россию американского ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший абсолютный чемпион мира Костя Цзю поделился мнением о том, что подвигло уроженца США, ветерана смешанных единоборств Джеффа Монсона переехать в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}