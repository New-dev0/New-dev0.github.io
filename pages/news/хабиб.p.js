import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Хабиб</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Хабиб"/>
        <meta name="description" content="Trending News about Хабиб" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Хабиб</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/6/9d/4898109.jpg" alt="Хабиб"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/boxing/news-4898109-glava-bellator-sravnil-usmana-nurmagomedova-s-habibom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Bellator сравнил Усмана Нурмагомедова с Хабибом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmrm8O69F7feoNQxW81RPBDhUE2iX98cOOHvSgqyEo3l-lMmEVe8WZ6PzXK9YAeZI1Kn_BUFYW" alt="Глава Bellator сравнил Усмана Нурмагомедова с Хабибом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Усман в эти выходные стал новым чемпионом Bellator в лёгком весе, одолев Патрики Фрейре единогласным решением судей, Хабиб Нурмагомедов — экс-чемпион UFC в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/martial/mma/news/habib-nurmagomedov-pozdravil-brata-usmana-s-zavoevaniem-titula-bellator-i-vylozhil-arhivnoe-foto-2000005/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хабиб Нурмагомедов поздравил брата Усмана с завоеванием ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT2lubaeLxvHx2ogFc4HC0YsU4sz4Pp7rzWr9uwF0RLOW8Ulutg7VOtFo7Zazj36TuJaVD0m1PX" alt="Хабиб Нурмагомедов поздравил брата Усмана с завоеванием ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бывший чемпион UFC в легком весе Хабиб Нурмагомедов поздравил своего троюродного брата Усмана Нурмагомедова с завоеванием титула Bellator в легком весе.</p></div>
            </div>
        </a><a href='https://sportrbc.ru/news/6378853f9a7947f08e38c905'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Теперь все только начинается&quot;. Хабиб Нурмагомедов поздравил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSb6vp5Y35HZ_zgJRKSwh9wCQRr06xk-_6HSF5A6rBLRFEhF8TGSvQ11XMf_IHxd-wDbEIoLuAZ" alt="&quot;Теперь все только начинается&quot;. Хабиб Нурмагомедов поздравил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Усман Нурмагомедов впервые стал чемпионом Bellator в легком весе. «Теперь все только начинается», — заявил Хабиб.</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/edinoborstva/spbnews_NI1726065_Nurmagomedov_unichtozhil_sopernika_v_boju_za_pojas_Ne_pomeshali_i_problemy_Khabiba_s_vlastami_SShA'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Нурмагомедов уничтожил соперника в бою за пояс. Не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlVv3hYB3KI6OaVQwXKtmcV_MHU6uKBygslop6Qo89c9p9WGKtwy1Yo8YQr2qgtcE4Dr5lGJFN" alt="Нурмагомедов уничтожил соперника в бою за пояс. Не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Дагестанский боец пять раундов мутузил бразильского чемпиона, не оставив тому шансов на победу. Фото: © Bellator MMA. Турнир Bellator 288 должен был стать&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/boxing/1113378560-xabib-usmanu-ty-zasluzhil-eto-brat-eshhe-odna-pobeda-eshhe-odna-istori.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хабиб – Усману: «Ты заслужил это, брат. Еще одна победа, еще ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-fWIUrOAhuuq6ftdwA94TlBoqcEkIvF7AIYuyom5CvPBtRzXWcBpC-b89qW6t7cg1wOQULhz6" alt="Хабиб – Усману: «Ты заслужил это, брат. Еще одна победа, еще ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Экс-чемпион UFC Хабиб Нурмагомедов поздравил двоюродного брата Усмана Нурмагомедова с победой на Bellator 288.</p></div>
            </div>
        </a><a href='https://mma.metaratings.ru/news/xabib-pozdravil-brata-usmana-s-zavoevaniem-cempionskogo-poyasa-bellator-v-legkom-vese-54344/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хабиб поздравил брата Усмана с завоеванием чемпионского ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7JeWst2mRjQqRC9GwW7kPvQvivHM7ZSpK1ESHzbK622AxIDIaVbl6hkN3HQ35WgbW39IKrqyn" alt="Хабиб поздравил брата Усмана с завоеванием чемпионского ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Экс-чемпион UFC в легком весе Хабиб Нурмагомедов в соцсетях поздравил своего двоюродного брата Усмана Нурмагомедова с завоеванием титула чемпиона Bellator в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}