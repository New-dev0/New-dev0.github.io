import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>28 ноября праздник</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,28 ноября праздник"/>
        <meta name="description" content="Trending News about 28 ноября праздник" /></Head><Template>
            <h1 style={{fontSize: "30"}}>28 ноября праздник</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_11/thumb_files/620_324_1668866322-4053.jpg?1" alt="28 ноября праздник"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.net/lite/holidays/narodnyy-prazdnik-28-noyabrya-2022-obychai-primety-chto-nelzya-delat-12056640.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>28 ноября: народный праздник сегодня, приметы погоды и запреты</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUAyOxsrDNMOFfGKe7bQlvd-B9lCYUJbWzgBplUYGU3PsYxxcoGcLcSs9GRF9jXyycMCVJM7jL" alt="28 ноября: народный праздник сегодня, приметы погоды и запреты" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 ноября 2022 года отмечается народный праздник день Гурия. Узнайте, какие обряды проводятся в этот день, что нельзя делать и какие приметы погоды.</p></div>
            </div>
        </a><a href='https://1plus1.ua/ru/novyny/ake-sogodni-svato-28-listopada-gurev-den-pocatok-rizdvanogo-postu-so-ne-mozna-robiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Какой сегодня праздник — 28 ноября: Гурьев день, начало ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGVSRhSmzKPYTaiv5_1FVVo4S2qjYQH4jYaOFDblYzg1k0FfiJHbZWloGYx8aOEu5Pt-DK5DKz" alt="Какой сегодня праздник — 28 ноября: Гурьев день, начало ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Какой сегодня праздник 28 ноября: Гурьев день, начало Рождественского поста по народному календарю.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/styler/vazhlive-tserkovne-svyato-28-listopada-shcho-1669553235.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Важный церковный праздник 28 ноября: что строго запрещено в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjP0KqpERbegaRmZ5bApL11_-GLiRDzotcVtIWWoium_MmfQmaTLZgkMZzyU50Yst6h_8MZ9MQ" alt="Важный церковный праздник 28 ноября: что строго запрещено в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Какой важный праздник отмечается в понедельник, 28 ноября, что можно и нельзя делать в этот день, именинники и традиции первого дня Рождественского поста.</p></div>
            </div>
        </a><a href='https://riamo.ru/article/601088/28-noyabrya-kakoj-segodnya-prazdnik-chto-bylo-v-etot-den'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>28 ноября: какой сегодня праздник, что было в этот день</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6VmPc55YgqCZNNFqTEs1hVtciORmtrS6vGB8AVy6pXyUL8Y7gAf6LIQRb8Fy1lQp6WTZ4DlQ" alt="28 ноября: какой сегодня праздник, что было в этот день" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В этот день именины празднуют Григорий, Гурий, Дмитрий, Никита, Николай, Петр, Самсон, Филипп.</p></div>
            </div>
        </a><a href='https://altapress.ru/zhizn/story/kiberponedelnik-den-sostradaniya-i-eshche-odin-den-buhgalterov-prazdniki-noyabrya-315686'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Киберпонедельник, день сострадания и еще один день ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsht_1EtYAZRRoyzMe_SN6I3YqmIJC8KYyXeUzD4Mllr9kuYXNq_YI-gTJPYG4MVInC_jWCKqa" alt="Киберпонедельник, день сострадания и еще один день ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 ноября отмечают Киберпонедельник, Всемирный день сострадания и еще один День бухгалтера. Altapress.ru рассказывает, какие праздники отмечают в этот день.</p></div>
            </div>
        </a><a href='https://www.karavantver.ru/chto-za-den-i-kakoj-segodnja-prazdnik-28-nojabrja/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Что за день и какой сегодня праздник: 28 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRy7ifxYiDx4of10-oHGEHtkgUNrt4Jz_yUILSblZqot42MwXf8dMtJ8ESNigMJQffLS0KJnvVe" alt="Что за день и какой сегодня праздник: 28 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чтобы разбавить негатив от повестки дня, газета «Караван Ярмарка» расскажет «Какой сегодня праздник». Теперь жители Тверской области смогут узнать,&nbsp;...</p></div>
            </div>
        </a><a href='https://dni.ru/society/2022/11/28/513518.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гурьев день: Что нельзя делать в праздник 28 ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS8MoaOWiWAoAXohu9MmzzNV3wsIeuJr2BZRDfkHoqsii1fRYblbySwf1s4nnwwSpAANxurHSAm" alt="Гурьев день: Что нельзя делать в праздник 28 ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 ноября 2022 года православные верующие вспоминают святых гурия, Самона и Авива.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ukrayina/cerkovnyy-prazdnik-28-noyabrya-komu-molyatsya-veruyuschie-primety-dnya-2208925.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Церковный праздник 28 ноября – кому молятся верующие ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxNzMRQFuAMF2D_-G5D3VTxxOiVZ2_24vE4asKtna9nmBA5cE6BbHFQOjG7cjFr_5XpzVt2Vje" alt="Церковный праздник 28 ноября – кому молятся верующие ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Какой праздник в церковном календаре? 28 ноября в православном календаре день памяти преподобного Паисия Величковского.</p></div>
            </div>
        </a>
        </Template></>;
}