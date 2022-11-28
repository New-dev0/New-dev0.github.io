import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кубок России</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кубок России"/>
        <meta name="description" content="Trending News about Кубок России" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кубок России</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/b/52/4907991.jpg" alt="Кубок России"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/football/news-4907991-stali-izvestny-vse-uchastniki-plej-off-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стали известны все участники плей-офф Кубка России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsBaZBVhzfr6TvxPI1WuAzgs6kw7erD95JwmrRWlkOmMFxkxpf9X2358yQssFpvBP36QHiWkrN" alt="Стали известны все участники плей-офф Кубка России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 27 ноября, завершился групповой этап Пути Российской Премьер-Лиги Кубка России сезона-2022/2023. Таким образом, стали известны все участники&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/rus_cup/news/opredelilis-vse-uchastniki-pley-off-kubka-rossii-po-futbolu-sezona-2022-23-2004247/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Определились все участники плей-офф Кубка России сезона ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZL8TDyCCiVIhFEDpwH58Y23wqF-NZk7un6p7UKQgbFqgcpkAPmchkYb-Vs0AAXO7-Nf_Nb3cq" alt="Определились все участники плей-офф Кубка России сезона ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Определились все участники плей-офф Кубка России сезона-2022/23. В плей-офф с первого места в группах вышли: «Краснодар», «Спартак»,&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1732018_Stali_izvestny_vse_uchastniki_verkhnej_setki_plej_off_Kubka_Rossii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стали известны все участники верхней сетки плей-офф Кубка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLXR3WHiQpcbKLtH_OJqv5H4qpz3eEPi7VlWMN7-qN04GPm-kVqT7FC6WSi5MzE09TjTXnVbPt" alt="Стали известны все участники верхней сетки плей-офф Кубка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Определились все клубы‑участники верхней сетки плей‑офф ФОНБЕТ Кубка России по футболу в сезоне‑2022/23.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/rus_cup/videoreports/zenit-spartak-0-0-penalti-4-2-kubok-rossii-smotret-onlayn-videoobzor-27-noyabrya-2022-goda-2003975/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зенит — Спартак — 0:0, пенальти — 4:2, Кубок России: смотреть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlMLIkLeRTNPQ66VlUwXUS17ANAixi5CNXsIvXVjheb6pbwWVVSUv0fPSxflaCG0ylJ2PlgVpW" alt="Зенит — Спартак — 0:0, пенальти — 4:2, Кубок России: смотреть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Зенит» дома обыграл «Спартак» в матче 6-го тура группового турнира Пути РПЛ Кубка России — 0:0, пенальти — 4:2.</p></div>
            </div>
        </a><a href='https://sportmail.ru/news/football-rus-cup/54057402/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стали известны все участники плей-офф Кубка России по футболу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlV6jhLny_LaQDuHYrhfGLSi5U17N_MYnfQC2V7MCZLGScI6UTeciN08PhimF7nQT3iXWJ_IDI" alt="Стали известны все участники плей-офф Кубка России по футболу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Стали известны все участники плей-офф Кубка России по футболу сезона-2022/23.</p></div>
            </div>
        </a><a href='https://www.rusfootball.info/pliga/1146689923-opredelilis-vse-uchastniki-pley-off-kubka-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Определились все участники плей-офф Кубка России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT3LtoKQ7kMWwBrrQZrdRFJ81wzv2R6I0TPaL5jts1GDkDz9YviSTXQJR3nfoY4KTzhSXg7vfu0" alt="Определились все участники плей-офф Кубка России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Групповая стадия Кубка России подошла к завершению. Определились все участники плей-офф национального Кубка. В сетку плей-офф пути РПЛ по итогам шести туров&nbsp;...</p></div>
            </div>
        </a><a href='https://bobsoccer.ru/user/45282/blog/itogi-gruppovogo-ehtapa-kubka-rossii-zenit-torpedo-ahmat-i-pari-nn-vyshli-v-plej-off-puti-regionov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Итоги группового этапа Кубка России: &quot;Зенит&quot;, &quot;Торпедо&quot;, &quot;Ахмат ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyjr-YZFEnPZLVScnFOeNro0-fr6opIhkvobx7T2g-HF_AwFoE6TZycMzdtPpzVSU3YvI2ZZI7" alt="Итоги группового этапа Кубка России: &quot;Зенит&quot;, &quot;Торпедо&quot;, &quot;Ахмат ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По итогам шести туров по Пути РПЛ дальше прошли восемь команд. Еще четыре клуба продолжат борьбу по Пути регионов, где могут встретиться с клубами Первой и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}