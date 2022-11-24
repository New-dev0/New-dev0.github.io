import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Раф Симонс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Раф Симонс"/>
        <meta name="description" content="Trending News about Раф Симонс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Раф Симонс</h1>
            <Image width={800} height={500} src="https://im.kommersant.ru/SocialPics/5680749_26_2296878_742522412" alt="Раф Симонс"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5680749'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Раф Симонс выбрал Prada</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTxVX-hrCo98GxCB2JfePOT1vXd--pxPvQrcVbnrJ51kHxJvFqoOTraNmY9VZ2FxS6M_HhUAxc5" alt="Раф Симонс выбрал Prada" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Судя по заявлению Симонса, с одной стороны, кажется, что это все. С другой — мы уже столько раз видели его реинкарнацию и в Jil Sander, и в Calvin Klein.</p></div>
            </div>
        </a><a href='https://snob.ru/news/raf-simons-obyavil-o-zakrytii-sobstvennogo-brenda/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Раф Симонс объявил о закрытии собственного бренда</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQBVQUB5O7QcqdSQYKvQYJQ4dhN8ySsVN2H9n0299Tz2K0QjUFa8gL8KFldigBRF77v3xN002e" alt="Раф Симонс объявил о закрытии собственного бренда" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бельгийский дизайнер Раф Симонс закрывает собственный бренд. Об этом сообщается в соцсетях компании Raf Simons.</p></div>
            </div>
        </a><a href='https://daily.afisha.ru/news/70270-raf-simons-zakroet/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Раф Симонс закроет свой бренд</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0s6--u890FdR2B7kEAdYAGzWnMkUwmwsZOq6idOjv_cXN2b7DdAjBNbpFciePaYpTyFbtUY0i" alt="Раф Симонс закроет свой бренд" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Симонс создал свой бренд в 1995 году. Дизайнер продолжал развивать его, работая в крупных домах моды, включая Jil Sander, Dior и Calvin Klein. Изделия,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.buro247.ru/news/style/22-nov-2022-raf-simons-closure-of-his-name-brand.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Раф Симонс объявил о закрытии своего именного бренда</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRQB-LskzghHIphQiOAQrJsttz4zziFeebUqS23Z6ehZcUmWPkIqZxegj6xVjXH8laD07dRS6ij" alt="Раф Симонс объявил о закрытии своего именного бренда" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В заключении Симонс поблагодарил за веру в его видение и в него самого. Raf Simons был запущен в 1995 году. Дизайнер продолжал развивать его, работая в крупных&nbsp;...</p></div>
            </div>
        </a><a href='https://thecity.m24.ru/articles/7758'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Раф Симонс закрывает бренд. Собрали пять знаковых вещей из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSyKAujVtZ2qj0TH6p_QC980QxAZUaClzpbYYcH0bGr6upP7tJ95O4eU7dT8HWJXtXjS3BGHO1" alt="Раф Симонс закрывает бренд. Собрали пять знаковых вещей из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Модель была представлена в весенне-летней коллекции 2000 года. На спине бомбера изображен логотип голландской диджейской группировки Rotterdam Terror Corps.</p></div>
            </div>
        </a><a href='https://peopletalk.ru/article/raf-simons-zakryvaet-svoj-brend/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Раф Симонс закрывает свой бренд</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcToFvxRy56RPDumuKTJI4URUjGBzeU71TD4PCpJKHR-llg4T74FhLtzipjzdS46qjyPQzewG55i" alt="Раф Симонс закрывает свой бренд" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Раф Симонс заявил о закрытии своего одноименного бренда. Об этом он сообщил в своих социальных сетях, выложив трогательный пост.</p></div>
            </div>
        </a>
        </Template></>;
}