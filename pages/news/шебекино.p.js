import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Шебекино</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Шебекино"/>
        <meta name="description" content="Trending News about Шебекино" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Шебекино</h1>
            <Image width={800} height={500} src="" alt="Шебекино"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/news/2022/11/15/v-belgorodskoy-oblasti-pri-obstrele-prigranichnogo-goroda-shebekino-pogibli-dva-cheloveka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Белгородской области при обстреле приграничного города ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS4gpyJByZF9KN3JfqLm7uT0qmTdpFecvN3imeHQACYER0ht_I99FQC4Xn2Lrq7xJLHAGT7z6ez" alt="В Белгородской области при обстреле приграничного города ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Два человека погибли и еще трое пострадали в результате «вечернего обстрела» города Шебекино, расположенного в Белгородской области на границе с Украиной.</p></div>
            </div>
        </a><a href='https://bel.ru/news/2022-11-15/poyavilos-video-s-mesta-obstrela-v-shebekino-2590110'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Появилось видео с места обстрела в Шебекино — Bel.ru</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTi6nIsyzZFjHsk05aQbm2hjhnsHyBNU8XIBNkdD6DqVi7aW4qMFn8PWvc2RFXIYgx5OcwE98pV" alt="Появилось видео с места обстрела в Шебекино — Bel.ru" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Снаряд попал в аптеку и ларёк «Хрусталь Белогорья». Подробнее на сайте издания Bel.ru.</p></div>
            </div>
        </a><a href='https://topwar.ru/205154-vsu-nanesli-udar-po-shebekino-belgorodskoj-oblasti-imejutsja-pogibshie.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ нанесли удар по Шебекино Белгородской области, имеются ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8YyGfv2LuBwPdAvwDlMJapCgHMD_k5U4dbR_ZVckQ01PMG-IUFQV7CEwBjSTpRyYlFdh3vVkV" alt="ВСУ нанесли удар по Шебекино Белгородской области, имеются ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обстрел Шебекино стал уже третьим ударом по Белгородской области за сегодняшний день Украинские военные формирования нанесли очередной удар по Белгородской&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rosbalt.ru/russia/2022/11/15/1979004.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>При обстреле города Шебекино в Белгородской области ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSxhVII7GBiFY-QOV4-Ul8Pk_E_aTCkGVmcAWHvDnf9iMt4yJ_B8g4hes1h2-UDebN6QBpIszo" alt="При обстреле города Шебекино в Белгородской области ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российской Федерации. При полном или частичном использовании аналитики, интервью или новостей ИА «Росбалт» активная гиперссылка на главную страницу www.rosbalt.</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/15/vsu-otvetili-obstrelom-po-shebekino-belgorodskoy-oblasti-est-zhertvy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ ответили обстрелом по Шебекино Белгородской области ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS61ATAX6VYRKSy3q7rGi-uFNLMf4_Oc9nZYz3FVyctjar0ssrE90S8KE4arzYZcDFCrrEXiz5y" alt="ВСУ ответили обстрелом по Шебекино Белгородской области ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ответ на удары ВС России по объектам критической инфраструктуры Украины ВСУ обстреляли город Шебекино в Белгородской области РФ.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/15/71818982/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Два человека погибли при обстреле города Шебекино</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQO1wrZ7Xqnuv7_mGxqqeuIxOzZ6JJQn3UffhX3MgXUMQeM4ckukMAu-CzzvmZfJuLCw9I2lNka" alt="Два человека погибли при обстреле города Шебекино" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате обстрела города Шебекино в Белгородской области погибли два человека. Еще трое пострадали, сообщил 15 ноября - Происшествия - 15 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/872610'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Число погибших при обстреле белгородского Шебекина выросло ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUAh64jR3lhtnDtzpTNerNJFI3ZPknaqCg51dS2nmYrVRndoKlF6QiTHkOQ4Hjd_ISg5UOIp7b" alt="Число погибших при обстреле белгородского Шебекина выросло ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 15 ноября. INTERFAX.RU - Министр здравоохранения Белгородской области Андрей Иконников сообщил о третьем человеке, погибшем после обстрела города&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}