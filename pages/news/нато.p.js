import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>НАТО</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,НАТО"/>
        <meta name="description" content="Trending News about НАТО" /></Head><Template>
            <h1 style={{fontSize: "30"}}>НАТО</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/g/_gettyimages_450289643_14_1300x820.jpg" alt="НАТО"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/news/parlamentska-asambleya-nato-viznala-rosiyu-1669036969.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Парламентская ассамблея НАТО признала Россию ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRprFTlxlRTHLk8NLZdx_o_LMK_YkPAVR7H4J-D8E5b5mTl8a_4FepGnJOYFqUdoflowa2AL4Xd" alt="Парламентская ассамблея НАТО признала Россию ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Также члены все 30 стран НАТО поддержали создание специального международного трибунала.</p></div>
            </div>
        </a><a href='https://ipress.ua/news/v_nato_vyznaly_rf_derzhavoyuterorystom_i_zaklykaly_stvoryty_mizhnarodnyy_trybunal_336207.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В НАТО визнали рф державою-терористом і закликали створити ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT588KUCsdeph1xOX_Y4HAw7c8rk1GcDB6qDMOgzWD_bPuO5RRG75VAxmiqi8SWZsLy-9gu01me" alt="В НАТО визнали рф державою-терористом і закликали створити ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Трибунал дасть змогу засудити не тільки безпосередніх виконавців військових злочинів, але і вище керівництво російської федерації.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-polytics/3619241-zelenskij-zaklikav-kraini-nato-do-konkretnih-dij-z-realizacii-ukrainskoi-formuli-miru.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленський закликав країни НАТО до конкретних дій з реалізації ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuriG7DSZBvTVRWbsj5kY-R0zVrbmxiRT_vWX4FajAiwQTmpV6qRdKhm3yzJPdYhQwngD1VrpC" alt="Зеленський закликав країни НАТО до конкретних дій з реалізації ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент України Володимир Зеленський під час звернення до Парламентської асамблеї НАТО закликав країни Альянсу до конкретних дій з реалізації української&nbsp;...</p></div>
            </div>
        </a><a href='https://mynizhyn.com/news/ukraina-i-svit/25660-u-nato-viznali-rosiyu-krayinoyu-teroristom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У НАТО визнали Росію країною-терористом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcToju4RMbBrQ1CEwisE_gBthnkpuOWcIrep2HYBqnUZ4u0GqYRO6QRWOnBAofq2d8oAoQF_bdRe" alt="У НАТО визнали Росію країною-терористом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Буде створено трибунал для чиновників Кремля. Парламентська асамблея Північноатлантичного альянсу визнала Російську Федерацію країною-терористом.</p></div>
            </div>
        </a><a href='https://poltavawave.com.ua/p/parlamentska-asambleia-nato-viznala-rosiiu-derzhavoiu-teroristom-717670'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Парламентська асамблея НАТО визнала росію державою ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmSHwfEVqVI9pMIB22kVWJQ8VNVGyBifigmaTSGcTuGXeUQtwpG8u9wNv5MrRaSiz-OPWp8gzk" alt="Парламентська асамблея НАТО визнала росію державою ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всі 30 країн НАТО проголосували за резолюцію одноголосно. poltavska-khvilia_xcwi/c74Fqod4g.jpeg. Про це повідомляє голова постійної делегації України в ПА&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/21/7377298/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Парламентська асамблея НАТО визнала Росію терористичним ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR9NkNv8L-hiTkivq6VD87mtMICUvS-giQUNBIpIMwHHQJyVIYfwUxlun2DC0jKPAG4zIE1oPTx" alt="Парламентська асамблея НАТО визнала Росію терористичним ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Сьогодні ми затвердимо резолюцію, яка закликає всіх союзників чітко визначити, що Російська Федерація та її чинний режим діє як терористична організація&quot;, -&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/321884-kraini-cleni-nato-pidtrimali-stvorenna-spectribunalu-dla-rosii-ale-cogo-nedostatno/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Країни-члени НАТО підтримали створення спецтрибуналу для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSryzOpQPV71hPt7nvsoNeuMF34tbvjbQP30bdXkCCuWUfP_hsmBdO423Pr0Oy9-wUecwQYQfjt" alt="Країни-члени НАТО підтримали створення спецтрибуналу для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Парламентська асамблея НАТО 21 листопада визнала Росію державою-терористом, а також підтримала резолюцію, в якій ідеться про створення&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/21/7377298/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Парламентская ассамблея НАТО признала Россию ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUHJvTRoGuBEBbCN7UOM9F13dK7SeQiIbV3p3q6LieQV7vI_xBU9Cc5KOISZe-lUEbzwGdyPB0" alt="Парламентская ассамблея НАТО признала Россию ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Сегодня мы утвердим резолюцию, которая призывает всех союзников четко определить, что Российская Федерация и ее действующий режим действуют как&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/21/7377314/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Генсек НАТО: Після дев&#39;яти місяців війни Росія продовжує ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSw3pBdrrT1o91tzQbUTBAhU9PQQNqQJQO5BA1lqkqAPO9tlwAPaTeYg7uipPhmywymDt5eJeJs" alt="Генсек НАТО: Після дев&#39;яти місяців війни Росія продовжує ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Росія не досягла жодних поставлених цілей в Україні та продовжує зазнавати невдач на фронті.</p></div>
            </div>
        </a><a href='https://www.eurointegration.com.ua/rus/news/2022/11/21/7151091/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новый президент ПА НАТО осудила войну России и призвала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSMLPRew-RDCC00tqqJmOEZsv--sLxWESMulDabPSTV_AK_h520ZwxZMKoTs9lmLlQAiQ0lTUPX" alt="Новый президент ПА НАТО осудила войну России и призвала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Французский сенатор Жоэль Гаррио-Майлям осудила войну России против Украины и похвалила украинский народ за защиту западных ценностей после того,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}