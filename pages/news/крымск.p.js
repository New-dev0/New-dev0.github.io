import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Крымск</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Крымск"/>
        <meta name="description" content="Trending News about Крымск" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Крымск</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/1/5/15097e6-clipboard01.jpg" alt="Крымск"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/11/24/7377830/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В российском Крымске неизвестный открыл стрельбу на улице ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQohOAxh1V3pii9j6ydo5txdSAQwDhmu0CaMZqSabtYyMLU1i4Dh4ed2gOVM6wkNY7UaRIBMLLQ" alt="В российском Крымске неизвестный открыл стрельбу на улице ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В российском городе Крымск Краснодарского края неизвестный открыл стрельбу, в результате чего погибли 4 человека.</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/news-63747774'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мужчина с ружьем устроил стрельбу в Крымске</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQv0_80bIn1WtlcgiaPv0ilHEIg3_DUzrzUxaj_pmAAo3ZB7jKHO2XaRTpiS9vs4m9ERgJxvh7V" alt="Мужчина с ружьем устроил стрельбу в Крымске" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Краснодарском крае мужчина устроил стрельбу, в том числе на улице, после чего покончил с собой. Причиной мог быть бракоразводный процесс, заявили в&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/world/538400-sudilsya-s-byvshey-zhenoy-v-rossiyskom-krymske-muzhchina-zastrelil-3-chelovek-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Судился с бывшей женой: в российском Крымске мужчина ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQif1P-cscKYMOIHPWUnnx4c62Cz6rofdhwCSP4HNFnXGDvicLQRKLn2iDF_qFPj58LM8CyzmPL" alt="Судился с бывшей женой: в российском Крымске мужчина ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Супруга перед разводом купила квартиру сыну за деньги стрелка, он хотел вернуть свою долю, но суд принял другое решение. Мужчина решил восстановить&nbsp;...</p></div>
            </div>
        </a><a href='https://readovka.news/news/122202'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Крымске мужчина открыл стрельбу на улице — Readovka.news</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR686mT30rXHX4LJY2Kip3eMKGgQ4bBhyhfvtBr7ufCx24d-tNeBvECrnGI5t4VBVb18ZGFIFpp" alt="В Крымске мужчина открыл стрельбу на улице — Readovka.news" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По сообщениям очевидцев, он убил четырех человек. По неподтвержденной информации, мужчина совершил самоубийство. Ранее Readovka писала Количество жертв&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kavkazr.com/a/v-krymske-muzhchina-otkryl-streljbu-po-prohozhim/32147319.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Крымске мужчина открыл стрельбу по прохожим: он убил ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT79vS_YuL7TpMBfDn2UFJSJVeZ-gyH602zZ1bzu2rq_QatyEzXredpURQfuE3lx2-4XydCpDmN" alt="В Крымске мужчина открыл стрельбу по прохожим: он убил ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В городе Крымск Краснодарского края мужчина открыл по прохожим стрельбу из оружия, похожего на винтовку. По предварительным данным, он убил трех человек,&nbsp;...</p></div>
            </div>
        </a><a href='https://v1.ru/text/incidents/2022/11/24/71843573/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мужчина открыл стрельбу на улице в Крымске — четыре ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5_hKc4VDoDP_CxVOPdBqK_UstggDV3pgo0RSaCe7HmD6dQValQz3eRBbAmAvYfC8Ot4JDCLNB" alt="Мужчина открыл стрельбу на улице в Крымске — четыре ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мужчина открыл стрельбу на улице в Крымске — четыре человека погибли. Онлайн. Предварительная причина инцидента — раскол в семье. 24 ноября 2022, 18:14.</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/23/society/3147544'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вооруженный мужчина устроил стрельбу в Крымске: есть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRmIe1CRQfFH8i0N3YRhNPCxnzXBwH2g5idrbnaaAO8FALgys7koyP8s93jWIVCtTQCUbjY2Cl7" alt="Вооруженный мужчина устроил стрельбу в Крымске: есть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Узнайте сколько жертв среди мирного населения в результате сегодняшней стрельбы в Крымске и что случилось с нападавшим - читайте на ФедералПресс.</p></div>
            </div>
        </a>
        </Template></>;
}