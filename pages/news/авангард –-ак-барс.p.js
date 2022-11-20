import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Авангард – Ак Барс</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Авангард – Ак Барс"/>
        <meta name="description" content="Trending News about Авангард – Ак Барс" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Авангард – Ак Барс</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/e/06/4897183.jpg" alt="Авангард – Ак Барс"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/hockey/news-4897183-avangard-prodlil-pobednuyu-seriyu-obygrav-na-domashnem-ldu-ak-bars-v-overtajme.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Авангард» продлил победную серию, обыграв «Ак Барс» в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQqLarBBvdiGKlhhcEE55EMe_BpEbLvVRRcIOCs087TVPstC1whi1Mu4JTJOR0yQaQ2z1WN1oPW" alt="«Авангард» продлил победную серию, обыграв «Ак Барс» в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Омске на стадионе «Джи-Драйв-Арена» прошёл очередной матч регулярного Фонбет Чемпионата КХЛ между «Авангардом» и «Ак Барсом».</p></div>
            </div>
        </a><a href='https://www.ak-bars.ru/news/22789'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Авангард» – «Ак Барс» – 2:1 ОТ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0X3gwIj968bzKAiGzgsK-gKTG9oIQ8k6nbgwzO6d9OHqrwg1Fr5HtrYwgvSyKS8BwhV6l1yGa" alt="«Авангард» – «Ак Барс» – 2:1 ОТ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 ноября «Ак Барс» уступил в овертайме «Авангарду» в очередном матче Фонбет чемпионата КХЛ. Игра в Омске завершилась со счётом 1:2.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/hockey/khl/news/khl-raspisanie-i-rezultaty-matchey-19-noyabrya-avangard-ak-bars-neftehimik-ska-traktor-metallurg-2000026/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>КХЛ, 19 ноября: «Нефтехимик» победил СКА, «Авангард ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTQi5mIRc4nSbFRy4DyNV9MaVNX_ISjAoX_d5pYcDXJ3gsrZrhEcO2bm8UPYaAcUUBMgaRzLhYC" alt="КХЛ, 19 ноября: «Нефтехимик» победил СКА, «Авангард ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 ноября, в субботу, состоялись очередные матчи регулярного чемпионата КХЛ.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/hockey/khl/news/avangard-ak-bars-2-1-ot-rezultat-matcha-regulyarnogo-chempionata-khl-19-noyabrya-2022-2000136/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Авангард» в овертайме обыграл «Ак Барс» и одержал девятую ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5hQymhITSgNhygT25KlilCW0NZJNM5k7EPqxclRTSqmDJOhKK99CkA00nZs0MXFp8JqfhMqBq" alt="«Авангард» в овертайме обыграл «Ак Барс» и одержал девятую ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Авангард» в овертайме обыграл «Ак Барс» в матче регулярного чемпионата КХЛ — 2:1.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6378c1e19a7947fe545f0cc8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Авангард» обыграл «Ак Барс» и продлил победную серию в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyi-3L5AmJBGuRLoun5wg2xMnp33-Tbm7RLTaI1YpaG6FSGl6Hk42g3N8njGHOQePVSvqZE6P_" alt="«Авангард» обыграл «Ак Барс» и продлил победную серию в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Встреча завершилась со счетом 2:1. Победную шайбу забросил Владимир Ткачев. Омский клуб второй раз в сезоне обыграл казанцев.</p></div>
            </div>
        </a><a href='https://www.khl.ru/news/2022/11/19/505634.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Омск ликует: «Авангард» одержал девятую победу подряд ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRfulgoFKXwz7-6XqiVS4YuxT4Mp9l34D6NhYWeUL_d3VJ08Qu89KV2Vc15htFKqEjsivjOF_Kj" alt="Омск ликует: «Авангард» одержал девятую победу подряд ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ткачёв в овертайме вырвал для «Авангарда» победу над «Ак Барсом». Авангард. Омск. 82.Пайгин Зият 44&#39;. 19.Ткачёв Владимир Э. 61&#39;. 19.11.2022.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Hokkej/KHL/spbnews_NI1726101_Shajba_Tkacheva_v_overtajme_prinesla_Avangardu_pobedu_nad_Ak_Barsom_v_matche_KKhL'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Шайба Ткачева в овертайме принесла «Авангарду» победу над ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTiyjQqhVzoKA4XwdlpqtZmTrc5XoBvHsPih6oXAsWQ7zGyexTI7Dz1NhfTgk1Jy1GOIzxgGg0p" alt="Шайба Ткачева в овертайме принесла «Авангарду» победу над ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Омский «Авангард» победил казанский «Ак Барс» в домашнем матче регулярного сезона Фонбет Чемпионата Континентальной хоккейной лиги (КХЛ).</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/stavki-na-sport/news/avangard-ak-bars-prognoz-na-match-khl-19-noyabrya-2022-goda-2000037/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Авангард» — «Ак Барс»: прогноз на матч КХЛ 19 ноября 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-LsQMcmV9iwGN33BwS1YBiSg_eM8R7idrjIw2KUWHMvtMHND8mVdDdRcL5Z13Ws4AeXlPoUpg" alt="«Авангард» — «Ак Барс»: прогноз на матч КХЛ 19 ноября 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 ноября в матче регулярного чемпионата КХЛ встретятся команды из Восточной конференции — «Авангард» и «Ак Барс».</p></div>
            </div>
        </a><a href='https://allhockey.ru/news/show/461068-Avangard_v_overtajme_obygral_Ak_Bars_oderzhav_9_ju_pobedu_podryad'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Авангард&quot; в овертайме обыграл &quot;Ак Барс&quot;, одержав 9-ю победу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="&quot;Авангард&quot; в овертайме обыграл &quot;Ак Барс&quot;, одержав 9-ю победу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Авангард&quot; в овертайме обыграл &quot;Ак Барс&quot;, одержав 9-ю победу подряд | Allhockey.ru - главный хоккейный информационный сайт России, где собраны все&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/bets/news-4896823-avangard-ak-bars-smotret-onlajn-po-kakomu-kanalu-pokazhut-pryamoj-efir.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Авангард» — «Ак Барс»: смотреть онлайн, по какому каналу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQz3ZgipzLaFcfGLSx2CNkT4b9Vl4knYkXz9vp4GhdP0f0ig2UIQzqqIKE0mFtG_o1v3t7nsFSi" alt="«Авангард» — «Ак Барс»: смотреть онлайн, по какому каналу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 ноября состоится матч регулярного чемпионата КХЛ «Авангард» — «Ак Барс». Начало встречи запланировано на 13:00 мск.</p></div>
            </div>
        </a>
        </Template></>;
}