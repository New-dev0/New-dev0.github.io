import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вооружённые Силы Украины</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вооружённые Силы Украины"/>
        <meta name="description" content="Trending News about Вооружённые Силы Украины" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вооружённые Силы Украины</h1>
            <Image width={800} height={500} src="https://static2.gazeta.ua/img2/cache/preview/1121/1121755_w_450.jpg?v=0" alt="Вооружённые Силы Украины"/>
            <h3>Recent News</h3>
            <a href='https://gazeta.ua/ru/articles/promotion/_vooruzhennye-sily-ukrainy-nagradili-farmacevtov-za-pomosch-v-obespechenii-karetami-skoroj/1121755'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вооруженные Силы Украины наградили фармацевтов за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFQIPOCSjZxsDjKr63rp6V3pj4k-WAVY_8LB0rJ1fN0oFMMSCAnJp1z9cCuB7VrRTHLmgyH06r" alt="Вооруженные Силы Украины наградили фармацевтов за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По приказу министра обороны Украины Алексея Резникова, руководителя и коллектив компании &quot;Аптека Подорожник&quot; наградили именной медалью и почетной&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}