import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Фидель Кастро</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Фидель Кастро"/>
        <meta name="description" content="Trending News about Фидель Кастро" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Фидель Кастро</h1>
            <Image width={800} height={500} src="https://sharing.vedomosti.ru/1669153071/vedomosti.ru/politics/articles/2022/11/23/951647-rossiyu-i-kubu-obedinili-davlenie-zapada-i-fidel-kastro.jpg" alt="Фидель Кастро"/>
            <h3>Recent News</h3>
            <a href='https://www.vedomosti.ru/politics/articles/2022/11/23/951647-rossiyu-i-kubu-obedinili-davlenie-zapada-i-fidel-kastro'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россию и Кубу объединили давление Запада и Фидель Кастро</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8SSEG112j4Dp2R_YCKvkx9eePv_qba5KN_hk_fAo4ubC4Uk0iHknqMglp83FNi7Pa38lBtpM_zw" alt="Россию и Кубу объединили давление Запада и Фидель Кастро" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кубинский президент Мигель Диас-Канель 22 ноября прибыл на встречу с президентом России Владимиром Путиным (впервые за три года) уже подготовленным.</p></div>
            </div>
        </a><a href='https://www.mos.ru/mayor/themes/11299/8757050/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Памятник Фиделю Кастро появился в районе Сокол</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTaHwIiMPGVzvx7P67aITJdWmcTicGvhnzQHxNzJgopLVL7MEdCbW4FIq99dg7DStb4jTtzs214" alt="Памятник Фиделю Кастро появился в районе Сокол" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Фидель был верным другом нашей страны, часто приезжал к нам, а в 1963-м объехал практически весь Советский Союз. Всегда был желанным гостем Москвы и очень&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/873681'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин назвал Фиделя Кастро одним из самых ярких лидеров ХХ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHylZACPTsg23zpdc-3oXC3SgQUTVAiOnZuMEtzKkt8yjqia-sdyGJF1SPPfAzEfLswIWma-qQ" alt="Путин назвал Фиделя Кастро одним из самых ярких лидеров ХХ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 22 ноября. INTERFAX.RU - Президент России Владимир Путин назвал основателя современного кубинского государства Фиделя Кастро легендарной личностью и&nbsp;...</p></div>
            </div>
        </a><a href='https://realty.interfax.ru/ru/news/articles/140933/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путин и президент Кубы открыли памятник Фиделю Кастро в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoubR66kmgMpXJP8SFnp2DexRWIsBZ4Fls-nQuZ56GV6n3smTRD9IvOq4BWKfIA9fyUJvFLmj5" alt="Путин и президент Кубы открыли памятник Фиделю Кастро в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фидель Кастро в военной форме, куртке нараспашку и в традиционном берете стоит на каменной глыбе с надписью &quot;CUBA&quot;. Как отмечается в справочных материалах пресс&nbsp;...</p></div>
            </div>
        </a><a href='https://mospravda.ru/2022/11/22/663139/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фидель Кастро как символ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyvX-qTTydUkxA77dVpgeFvcJCZlOw6MLKMaUHiiWR1HmWCyXOzJnA8QzfuYhLJ_jx4PyDHOx6" alt="Фидель Кастро как символ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня в Москве президент РФ Владимир Путин и президент Кубы Мигель Диас-Канель открыли памятник Фиделю Кастро Русу - лидеру кубинской революции.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/22/71836700/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Остров зари багровой…» Путин и президент Кубы открыли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQO6EHVS2mn2ZIwAbeE563VoHg2QBb__gHQNF6Jxg15jVJr8S6nLP3M3gnFaQIZip4MTSGUZHaZxg" alt="«Остров зари багровой…» Путин и президент Кубы открыли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Москве состоялась торжественная церемония открытия памятника одному из лидеров кубинского революционного движения — Фиделю - Власть - 22 ноября 2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}