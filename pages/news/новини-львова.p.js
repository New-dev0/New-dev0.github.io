import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новини Львова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новини Львова"/>
        <meta name="description" content="Trending News about Новини Львова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новини Львова</h1>
            <Image width={800} height={500} src="https://lviv.media/static/content/thumbs/1200x630/d/ea/fxxj6l---c1200x630x50px50p-up--513dc92a013d7cb6017be6dda4bebead.jpg" alt="Новини Львова"/>
            <h3>Recent News</h3>
            <a href='https://lviv.media/lviv/59660-u-lvovi-perebudovuyut-villu-kshechunovichiv-1912-roku-vladu-zaklikali-rozibratisya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Львові перебудовують віллу Кшечуновичів 1912 року: владу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTu3Yxef4IIeXhjuWdsF_WHSr1z1JjJUZhUhR72zAR50VmPOfKAQhLvSkylpiYUZooUz7ZU9wUv" alt="У Львові перебудовують віллу Кшечуновичів 1912 року: владу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вілла збудована у 1912 році. Читайте останні новини Львова на сайті LVIV.MEDIA.</p></div>
            </div>
        </a><a href='https://dailylviv.com/news/sytuatsiyi-i-pryhody/vybukh-na-terytoriyi-nato-pid-chas-povitryanoyi-tryvohy-v-ukrayini-104800'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вибух на території НАТО під час повітряної тривоги в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzBs3QeO1vj6qRWiQpBIRC_QLeDUmNiJGnKAMTIjsjdEa-GJ6AGKwxoyy6mO1PkQUU4mg3SqTs" alt="Вибух на території НАТО під час повітряної тривоги в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дві людини загинули у Польщі внаслідок вибуху у Пжеводові Грубещівського повіту під час повітряної тривоги, пише DailyLviv.com, повідомляє Radio Lublin. Вибух&nbsp;...</p></div>
            </div>
        </a><a href='https://dailylviv.com/news/sytuatsiyi-i-pryhody/likhtaryky-chy-svitlovidbyvalnyi-odyah-mer-lvova-radyt-nove-ekipiruvannya-104842'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ліхтарики чи світловідбивальний одяг: мер Львова радить нове ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQysHZgvSxGpO_lvArNope0FEkXN4cTsCA07RXcEbEYL7ffNcKXyvcanY8jaYhxOL7erv9DS0Qx" alt="Ліхтарики чи світловідбивальний одяг: мер Львова радить нове ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Учора, після масових обстрілів ворогом об&#39;єктів критичної інфраструктури області, у Львові через відсутність електропостачання не працювали світлофори....</p></div>
            </div>
        </a>
        </Template></>;
}