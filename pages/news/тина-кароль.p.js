import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тина Кароль</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тина Кароль"/>
        <meta name="description" content="Trending News about Тина Кароль" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тина Кароль</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/649/tsn-15890496c3fba55a55e21f0ca3090d06/thumbs/1200x630/37/a2/adf2cd465428485769893cb63a5da237.jpeg" alt="Тина Кароль"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/glamur/tina-karol-bez-makiyazhu-ta-u-sportivnomu-vbranni-podililasya-zamriyanim-foto-zi-studiyi-zvukozapisu-2210899.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тіна Кароль без макіяжу та у спортивному вбранні поділилася ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLw1NrAeRMH8xCgibmM9u3FFWdoRTw1eJMlV1FF5kMIsxK-c6cC5Nwi2wgyTklTuU0YjV2Ckvj" alt="Тіна Кароль без макіяжу та у спортивному вбранні поділилася ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У спортивному образі Тіна Кароль поділилася фото зі студії звукозапису та натякнула на підготовку до нової пісні.</p></div>
            </div>
        </a><a href='https://showbiz.24tv.ua/yak-tina-karol-viglyadaye-bez-makiyazhu-sportivnomu-kostyumi_n2206265'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Без макіяжу та у спортивному костюмі: Тіна Кароль показала, як ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ8_PUDAx8hSXICzKZjko2RznnhklShOCDvk9u_q7mFTdKNGK0m0yQcmqe0KQPUsFMgATU4U3JB" alt="Без макіяжу та у спортивному костюмі: Тіна Кароль показала, як ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Співачка Тіна Кароль продовжує творити, записувати нові пісні. У повсякденному житті вона надає перевагу комфортному одягу та мінімуму макіяжу.</p></div>
            </div>
        </a><a href='https://today.ua/ob-39-yemne-hudi-ta-oblyagayuchi-losyny-tina-karol-bez-makiyazhu-pokazala-stylnyj-sportyvnyj-obraz/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Об&#39;ємне худі та облягаючі лосини: Тіна Кароль без макіяжу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_U7dDPLU6QcLGyruc4SMI8LVN2gK3fTuW8RMKtYtm6cOpSPkB-OPZQgjcunhHAdTKfXsphIey" alt="Об&#39;ємне худі та облягаючі лосини: Тіна Кароль без макіяжу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Тіна Кароль поділилася з шанувальниками фотографією зі студії звукозапису, на якій позувала у спортивному костюмі та повністю без макіяжу. Ймовірно, з...</p></div>
            </div>
        </a>
        </Template></>;
}