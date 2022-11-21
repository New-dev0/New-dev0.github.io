import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Трамп</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Трамп"/>
        <meta name="description" content="Trending News about Трамп" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Трамп</h1>
            <Image width={800} height={500} src="" alt="Трамп"/>
            <h3>Recent News</h3>
            <a href='https://www.eurointegration.com.ua/rus/news/2022/11/20/7151016/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Трамп отказался возвращаться в Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXxkFfOHeQykVPUuGVcc3_m_pZce3a9UGLSpXnJFreJCIzD7vjQUcKVRdI2qG8vJafXgt89wHj" alt="Трамп отказался возвращаться в Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>45-й президент США Дональд Трамп заявил, что не будет возвращаться в социальную сеть Twitter, где его аккаунт был заблокирован после штурма Капитолия в 2021&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/21/7377199/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Трамп сказал, что не хочет возвращаться в Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxlpiLWYTZ9HWrQwk6IDVfOiQwrU32tK2P4iX6lDct3VlxNx0cFR1D7HpG9gvYRj_YWXYQfrpC" alt="Трамп сказал, что не хочет возвращаться в Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несмотря на то, что новый владелец Twitter Илон Маск разблокировал учетную запись экс-президента Штатов Дональда Трампа, тот заявил, что не намерен&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63694405'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Маск восстановил аккаунт Трампа в &quot;Твиттере&quot;. Но нужно ли это ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJI5oqLwYz7ynrvbqx9C1ZismleFlhlf-rpkT-yjZOh-kflEz1kD33i89sQ3-RI8cli2OVZLi7" alt="Маск восстановил аккаунт Трампа в &quot;Твиттере&quot;. Но нужно ли это ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новый владелец Twitter Илон Маск заявил, что аккаунт Дональда Трампа был восстановлен после проведения опроса, в котором пользователи поддержали этот шаг.</p></div>
            </div>
        </a><a href='https://www.sud.ua/ru/news/abroad/254722-tramp-za-7-chasov-razblokirovki-v-twitter-obognal-baydena-po-chislu-podpischikov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Трамп за 7 часов разблокировки в Twitter обогнал Байдена по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRn4U3w3JbsMCyOtAB7FgMRIhQJKLX-TIrO6o3T9AkWzyRUocRAa9AeaG8vF2xq8BKfmwjx1sHz" alt="Трамп за 7 часов разблокировки в Twitter обогнал Байдена по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Более 25 млн новых людей подписались на Трампа за семь часов после разблокировки.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/tramp-planue-povertatisya-twitter-chomu-prichina-1668987872.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Трамп не планирует возвращаться в Twitter: в чем причина</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQKuxUDdc4lnvA017VFIbR56qhCUIh00T17piXMf-44uHdqlv6liKS7Wd84k1jQGkGuu7H5nRyz" alt="Трамп не планирует возвращаться в Twitter: в чем причина" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Трамп пригласил всех сторонников присоединяться к его собственной социальной сети. &quot;У нее невероятный охват пользователей и в ней гораздо удобнее, чем у Twitter&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5679552'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Трамп подтвердил, что не намерен возвращаться в Twitter</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Трамп подтвердил, что не намерен возвращаться в Twitter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>45-й президент США Дональд Трамп заявил, что не видит «никаких причин» для возвращения в Twitter после того, как новый владелец соцсети Илон Маск&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}