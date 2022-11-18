import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Запорожская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Запорожская область"/>
        <meta name="description" content="Trending News about Запорожская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Запорожская область</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/z/_zapusk_facebook_com_kpszsu_5_1300x820.jpg" alt="Запорожская область"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/rosiyski-viyska-vdarili-zaporizkiy-oblasti-1668670858.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Российские войска ударили по Запорожской области: есть жертвы</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnx_yg5S1aKVkIJ2Z5O2YGQ5TxB8_Wov6V8Dk8Np0dWY7pxA8om82YPDH-QQnWBq0ssK5uMz_s" alt="Российские войска ударили по Запорожской области: есть жертвы" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Оккупанты ударили по гражданским объектам. В частности, вследствие обстрела разрушен жилой дом.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/17/7376733/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обстрел Запорожской области: в Вольнянске – четверо погибших</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTYVl-UJWqemO60bDn8hhiL_1TROyU_jeHgYBoJow1Iw5ZZdzd53kuhNNEY7_sJ3FmSPSraNKt" alt="Обстрел Запорожской области: в Вольнянске – четверо погибших" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Город Вольнянск в Запорожской области в ночь на 17 ноября подвергся ракетному удару, погибли по меньшей мере четыре человека.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/ukraine/20221117-duzhe-guchno-u-zaporizhzhi-ta-mistah-poryad-unochi-bulo-chutno-vybuh/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетный удар по дому в Вольнянске: из-под завалов изъяли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAOsN0oOnzv9fxiWHGLG1qlYefKD0E_D599UJpcM3CiK4L3aG6aov2yRcUFriZbvMzlNr0uZg2" alt="Ракетный удар по дому в Вольнянске: из-под завалов изъяли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вольнянск Запорожской области - ракетный обстрел российскими войсками. Последствия ракетного обстрела Вольнянска Запорожской области 17 ноября 2022 - в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unn.com.ua/ru/news/2003432-zaporizka-oblast-rashisti-zavdali-raketniy-udar-po-vilnyansku-vidomo-pro-4-zagiblikh-op'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Запорожская область: рашисты нанесли ракетный удар по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWu0NhpQEuoyjxvQhLAs6MFYmCxCn79NUF6jHu-QJr6BESbqS2yPIBBJ9TdC4EXnLAQMpnyYIs" alt="Запорожская область: рашисты нанесли ракетный удар по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Информационное агентство Украинские Национальные Новости. Запорожская область: рашисты нанесли ракетный удар по Вольнянску, известно о 4 погибших - ОП.</p></div>
            </div>
        </a><a href='https://www.unian.net/war/zaporozhe-novosti-vozroslo-chislo-pogibshih-v-rezultate-raketnogo-udara-po-zaporozhskoy-oblasti-foto-12048198.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Возросло число погибших в результате ракетного удара по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS7jfC9hzMMzMxyO9wjarpV37xz3X9sMnKshDrXQu6sbMtX3gzeeMjvo18Q0cjVjkUFe_Suqfxz" alt="Возросло число погибших в результате ракетного удара по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Количество погибших в результате ракетного удара оккупантов по Запорожской области возросло до 4. Сейчас на месте продолжаются поиски людей под завалами.</p></div>
            </div>
        </a><a href='https://newsmaker.md/rus/novosti/zaporozhskaya-oblast-ukrainy-podverglas-obstrelu-iz-pod-zavalov-doma-dostali-tela-semi-pogibshih/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Запорожская область Украины подверглась обстрелу. Из-под ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcStmhDxTAoqH7crIcuHpNlqmMrQpfZnFaSXPLtzElykWSuxNwHwkTBUaPIgJBzsbzmOSw6xunGH" alt="Запорожская область Украины подверглась обстрелу. Из-под ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поддержать NewsMaker. Если вы нашли ошибку, пожалуйста, выделите фрагмент текста и нажмите Ctrl+Enter.</p></div>
            </div>
        </a>
        </Template></>;
}