import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Блекаут</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Блекаут"/>
        <meta name="description" content="Trending News about Блекаут" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Блекаут</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/e/_elektroopori_gettyimages_1241194848_16_1300x820.jpg" alt="Блекаут"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/blekaut-kievi-mozhliviy-ale-nichogo-strashnogo-1668796654.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блекаут в Киеве возможен, но ничего страшного при этом не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjwwTqxtdWqdoyUhSmiH4e9q772FkpwOIVxcfMV7XVoh3-mqsSAglgKB--0Wis7koKrK-4tVA0" alt="Блекаут в Киеве возможен, но ничего страшного при этом не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блэкаут в Киеве возможен, но украинской энергосистеме он нестрашен. Главное, чтобы систему запустили через 5-6 часов. Об этом заявил исполнительный директор&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/economics/energetics/blekaut-v-ukrajini-maloymovirniy-de-zaraz-naygirsha-situaciya-zi-svitlom-12049959.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блекаут в Україні малоймовірний: у ДТЕК розказали, де зараз ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDo2jO__dsARS38dcNxQhVyyASL2PGG27MB2kdlVZ_JQUsUu_DM4jAvRqaoPLLLoPgmL_zseYw" alt="Блекаут в Україні малоймовірний: у ДТЕК розказали, де зараз ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блекаут в Україні можливий, кажуть в ДТЕК, але його можна уникнути, якщо вчасно відремонтувати руйнації. Та для повного відновлення системи потрібно більше&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/chi-mozhe-ukrayini-zagrozhuvati-blekaut-scho-pro-ce-kazhut-u-dtek-2204983.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи може Україні загрожувати блекаут: що про це кажуть у ДТЕК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYVYl_Sbmji4V-a28-yHeJM5KmGpeK8d_slTVP5oNnAD25ChLJWAn0q1bqz594uu2cWBJz9sqe" alt="Чи може Україні загрожувати блекаут: що про це кажуть у ДТЕК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Директор ДТЕК Дмитро Сахарук повідомив, що попри велике бажання Росії, аби Україна опинилася у повній темряві, такий сценарій є малоймовірним.</p></div>
            </div>
        </a><a href='https://prm.ua/chy-varto-ochikuvaty-na-povnyy-blekaut-v-ukraini-poiasnennia-dtek/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи можливий в Україні повний блекаут — пояснення ДТЕК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVz6zXgkwUWgqYgw7m-2Zh4AHnCzjv60qFMtF0loN9ZwrIxAKiIDhCwgm0f7rkwuuUBb4HpTJD" alt="Чи можливий в Україні повний блекаут — пояснення ДТЕК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Попри російські атаки на об&#39;єкти енергетичної інфраструктури в Україні не очікується тотального відключення електроенергії.</p></div>
            </div>
        </a><a href='https://www.unian.net/economics/energetics/blekaut-v-ukrajini-maloymovirniy-de-zaraz-naygirsha-situaciya-zi-svitlom-12049956.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блэкаут в Украине маловероятен: в ДТЭК рассказали, где сейчас ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDo2jO__dsARS38dcNxQhVyyASL2PGG27MB2kdlVZ_JQUsUu_DM4jAvRqaoPLLLoPgmL_zseYw" alt="Блэкаут в Украине маловероятен: в ДТЭК рассказали, где сейчас ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блэкаут в Украине возможен, говорят в ДТЭК, но его можно избежать, если вовремя отремонтировать разрушения. Но для полного восстановления системы требуется&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/v-sluchae-blekauta-na-vosstanovlenie-enerhosistemy-ukrainy-mozhet-potrebovatsja-do-desjati-dnej-ekspert.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В случае блэкаута на восстановление энергосистемы Украины ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRMQxo8JcArnSr0tyPG9ZqFXkN8u7VqDfk1nrYmjGx2g7dFTeFzvuJimPAiO1m_tA0SbwH2duhy" alt="В случае блэкаута на восстановление энергосистемы Украины ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>При полном блекауте в Украине энергосистеме может потребоваться несколько суток на восстановление, света и тепла может не быть до десяти дней.</p></div>
            </div>
        </a><a href='https://varta1.com.ua/news/u-dtek-poyasnili-chi-mozhe-ukrayini-zagrozhuvati-blekaut_356764.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У ДТЕК пояснили, чи може Україні загрожувати блекаут</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZLOBNXLMiwkj9cdwgVtrv-p48S7PAIVHoMfzmf5xws2THStmYhfNEccXOGu3GfPWVtOCh1bRd" alt="У ДТЕК пояснили, чи може Україні загрожувати блекаут" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Директор ДТЕК Дмитро Сахарук повідомив, що попри велике бажання росії, аби Україна опинилася в повній темряві, такий сценарій є малоймовірним.</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/society/chi-zahrozhuje-ukrajini-blekaut-direktor-dtek-vistupiv-iz-zajavoju-890102.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи загрожує Україні блекаут? Директор ДТЕК виступив із заявою</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFTDyiVQ1iljIfn2IduDJl5-nXMaSQVpJYbuYmjCmSEqHn5nrxJDTmt_-CIgDCM6HnQiJ2ARKz" alt="Чи загрожує Україні блекаут? Директор ДТЕК виступив із заявою" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блекаут – це мрія окупантів, яку вони намагаються реалізувати протягом більше ніж місяця. Директор ДТЕК Дмитро Сахарук повідомив, що попри велике бажання&nbsp;...</p></div>
            </div>
        </a><a href='https://interfax.com.ua/news/general/873079.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сценарії виходу з блекауту передбачають три-десять днів на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSF4Z0m744fQuHKfl-0aaJz0KQ-uiwWPtr8NjmW0VrmGBOQg4gPFD4gDZMuejCH9kaN8WoVDArr" alt="Сценарії виходу з блекауту передбачають три-десять днів на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вихід із блекауту у разі його виникнення передбачає декілька сценаріїв, згідно з якими це може тривати, зокрема, від трьох до десяти днів,&nbsp;...</p></div>
            </div>
        </a><a href='https://biz.nv.ua/economics/kak-dolgo-prodlitsya-polnyy-blekaut-v-ukraine-skolko-dney-pridetsya-zhit-bez-sveta-ekspert-50285128.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>От трех до десяти дней. Как долго украинцам придется сидеть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-hBnlPZEWZxeVwIyxAll9UHI7g98Ej0zqqKTmy1PuYkEg2CktcURpyQoToXq7IUU4JvNJHG3r" alt="От трех до десяти дней. Как долго украинцам придется сидеть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В случае полного блэкаута Украина останется без света на 7−10 дней — прогноз эксперта.</p></div>
            </div>
        </a>
        </Template></>;
}