import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новости запорожье</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новости запорожье"/>
        <meta name="description" content="Trending News about Новости запорожье" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новости запорожье</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_11/thumb_files/620_324_1668846581-8194.png?1" alt="Новости запорожье"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.net/war/novosti-zaporozhe-rossiya-udarila-raketami-novye-podrobnosti-foto-12050247.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>РФ ударила ракетами по Запорожью: появились новые ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTuUfBF0pwpvG2mZPD_9aQEADyhU0D5dWKdTZij8Sfbc3l_xnaZWNEDh4zipobYSvI2MyqmCkJ3" alt="РФ ударила ракетами по Запорожью: появились новые ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Появились подробности удара по Запорожью. Жертвой очередного обстрела России стал мирный житель. 123 многоквартирных дома остались без тепла.</p></div>
            </div>
        </a><a href='https://www.061.ua/ru/news/3499412/raketnaa-ataka-na-zaporoze-nacato-ugolovnoe-proizvodstvo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетная атака на Запорожье: начато уголовное производство</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7gkoKg1zCU60KDb9wnef33dFmxUIMZVDhc31uYARYjq9oLHqbFEjhK2TUV673Nes_U3ljUi8u" alt="Ракетная атака на Запорожье: начато уголовное производство" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщили в Запорожской областной прокуратуре. По данным следствия, около 22.35 вооруженные силы рф выпустили по Запорожью 5 ракет С-300. В результате&nbsp;...</p></div>
            </div>
        </a><a href='https://vikna.tv/ru/video/ukrayina/obstrel-zaporozhya-vse-chto-izvestno-o-nochnom-obstrele-18-noyabrya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ночной обстрел, последствия в Вольнянске и гуманитарная ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTapZZQToCM8ZJbGuagf27ivRGg1pq3Dj4DKWnOJefxIHclZiOPERNzeemQxPJ9QZKSAHqTx3cd" alt="Ночной обстрел, последствия в Вольнянске и гуманитарная ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Запорожье ночью обстреляли российские оккупанты: ситуация в городе и последствия обстрела. Все, что известно об обстреле в Запорожье читай в материале.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/19/7377056/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>После ракетного удара исчезло отопление в 120 многоэтажках ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQL1GrtHhgGjh--F5BujJW4_EVHQ_WXpbVBUjemOTZ8YBx76wv4rJuo6Jxj3Q2JIPWA1xfFVs3s" alt="После ракетного удара исчезло отопление в 120 многоэтажках ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Следствием ночного вражеского удара по Запорожью стало нарушение теплоснабжения в одном из районов города, прекращение подачи теплоносителя в 123&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/obstril-zaporizhzhya-cherez-udar-rosiyan-1668844657.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обстрел Запорожья: из-за удара россиян без отопления ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCpK3aTzqDEcVe3I5ociHQwQ5EQR4SjlvGse585RriAbJb_VGbQIy3AiPr_061enNoNhROGWAy" alt="Обстрел Запорожья: из-за удара россиян без отопления ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Из-за удара по Запорожью 19 ноября без отопления остались 123 многоэтажки, в которых проживает более 17 тысяч абонентов.</p></div>
            </div>
        </a><a href='https://nashemisto.dp.ua/ru/2022/11/19/raketnyj-udar-po-zaporozhju-chto-izvestno-na-utro/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетный удар по Запорожью: что известно на утро</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTl2JlN3UkXz77IjrgDBNPArb8MUVxsMz2029SIzqFApnjgHHrvvtjwQp42s2gUP00Zu3DQ2LN1" alt="Ракетный удар по Запорожью: что известно на утро" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ночью российская армия нанесла ракетный удар по Запорожью. Вражеские ракеты попали в объект промышленной инфраструктуры. Об этом сообщил глава Запорожской&nbsp;...</p></div>
            </div>
        </a><a href='https://thepage.ua/news/obstrel-zaporozhya-19-noyabrya-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты снова ударили по Запорожью и оставили мирных ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSVaou9Ew-Pcg3yZ5Hr7P1Fkv6hiU714TUJBtR2PYTiZSzmQlOdV79Gg_zMHG_LTMXzNQP_qh-Pg" alt="Оккупанты снова ударили по Запорожью и оставили мирных ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупанты снова обстреляли Запорожье. Под удар попал объект инфраструктуры, часть города осталась без отопления.</p></div>
            </div>
        </a><a href='https://war.obozrevatel.com/okkupantyi-obstrelyali-zaporozhe-v-gorode-prozvuchala-seriya-moschnyih-vzryivov.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты обстреляли объект промышленной инфраструктуры ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1C5pTDR4w6etIxqt_ipQ0d447YNO598QZFwhNc-QrsTnOnOpcG6thaTXoKAlwr_OfmprmxX-t" alt="Оккупанты обстреляли объект промышленной инфраструктуры ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает корреспондент OBOZREVATEL. По данным Запорожской областной прокуратуры, в результате обстрела погиб один человек, количество пострадавших&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}