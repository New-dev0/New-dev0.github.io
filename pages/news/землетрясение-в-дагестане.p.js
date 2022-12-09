import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Землетрясение в Дагестане</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Землетрясение в Дагестане"/>
        <meta name="description" content="Trending News about Землетрясение в Дагестане" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Землетрясение в Дагестане</h1>
            <Image width={800} height={500} src="https://newstracker.ru/attachments/afd5804ec89f1b59463767075bf59a9279da815d/store/crop/0/52/1000/562/1000/562/0/fe8c70cc3474be2220be2f4074b22d06acf1e87eeb511519c294f097b14d/20-iyunya-den-sozdaniya-kinologicheskoy-sluzhby-mchs-rossii_1624174217381361734__2000x2000.jpg" alt="Землетрясение в Дагестане"/>
            <h3>Recent News</h3>
            <a href='https://newstracker.ru/news/2022-12-08/zemletryasenie-magnitudoy-bolee-5-ballov-proizoshlo-v-dagestane-2610356'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Что известно о землетрясении в Дагестане</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSDikquztXdFjCO6Xcz7j2tclKlEbVT9LBZj6VkiBx0T3IUZtq1zeFzFFPOWGcPE7LuRaqLMI3i" alt="Что известно о землетрясении в Дагестане" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Дагестане зарегистрировали подземные толчки утром в четверг, 8 декабря, говорится на сайтах, отслеживающих землетрясения. Его магнитуда составила 5,5&nbsp;...</p></div>
            </div>
        </a><a href='https://md-gazeta.ru/news/119705'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Землетрясение в Дагестане стало поводом для созыва ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbfArQ_EiPzqKzfeMRWGMTb-GafijoqwYys1Db0vnzzgmP_1C8WBrVIsMeJeGP89FM56by7yZY" alt="Землетрясение в Дагестане стало поводом для созыва ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сайт «Молодежь Дагестана» (md-gazeta.ru), зарегистрирован Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций.</p></div>
            </div>
        </a><a href='https://riadagestan.ru/news/incidents/v_dagestane_proizoshlo_zemletryasenie_magnitudoy_5_2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Дагестане произошло землетрясение магнитудой 5,2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ3MKVVOw10lkT2ISO-4f6DVqyTw3-4fWFuD2V2-rCETGdOX0sXxw8uPveKHTpd-6PQdwZ8SZe-" alt="В Дагестане произошло землетрясение магнитудой 5,2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В настоящее время уточняется официальная информация от сейсмостанции. Отметим, что подземные толчки ощутили, в частности, жители Махачкалы, Каспийска, Дербента.</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/regiony/08122022/529273'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Землетрясение магнитудой 5,6 зафиксировали в Дагестане</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSsbHXMTGAlNdcB7ifdz6H4KqVhj7Gh2YpWC8RvYSFn_U-8NN5pLkcCZFQp3r-YOoq4LIkRjGhs" alt="Землетрясение магнитудой 5,6 зафиксировали в Дагестане" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ученые зафиксировали подземные толчки магнитудой 5,6 в 80 километрах от Махачкалы в Дагестане. Об этом информирует сайт Европейско-Средиземноморского&nbsp;...</p></div>
            </div>
        </a><a href='https://ndelo.ru/novosti/v-dagestane-proizoshlo-silnoe-zemletryasenie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Дагестане произошло сильное землетрясение</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQTe3pH4hy4hvAwDMAz7iP6yRs_eA1_bLktJttG9BfjoyKm--vZN3LCrxvqOl5hAtxHSX17RHPH" alt="В Дагестане произошло сильное землетрясение" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По информации «НД» в Гунибском районе, на границе с Чародинском районе ощутили сильные точки. Разрушений нет, но штукатурка в некоторых строениях повреждена.</p></div>
            </div>
        </a><a href='https://news.ru/regions/vozmozhny-zhertvy-geofizik-ne-isklyuchil-novye-zemletryaseniya-v-dagestane/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Геофизик не исключил возможности нового мощного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTcK_mPPsatpnhUSGIwNrQ0XLXB61Br5OrXJMq4BC6Cz8xpuG0snq_wqhO5-I5qDIWzgkPbgL2D" alt="Геофизик не исключил возможности нового мощного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сильное землетрясение в Дагестане увеличивает вероятность новых подземных толчков в регионе, сообщил ученый Петр Шебалин.</p></div>
            </div>
        </a><a href='https://pobeda26.ru/news/kavkaz-novosti-okruga/2022-12-08/zemletryasenie-magnitudoy-5-5-balla-proizoshlo-v-dagestane-243823'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Землетрясение магнитудой 5,5 балла произошло в Дагестане</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsaALxLBOBqtOokJiJVBv7BKsy23oVxGDyfoy3pkZL3nbzfPmbocv63P4blCi-q8jKTpMjpUnw" alt="Землетрясение магнитудой 5,5 балла произошло в Дагестане" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подземные толчки магнитудой 5,5 балла зафиксировали ранним утром 8 декабря в Республике Дагестан. О землетрясении сообщили в Европейско-Средиземноморском&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}