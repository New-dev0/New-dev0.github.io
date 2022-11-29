import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Володимир Вакуленко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Володимир Вакуленко"/>
        <meta name="description" content="Trending News about Володимир Вакуленко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Володимир Вакуленко</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/72/58/preview_w696zc1.jpg" alt="Володимир Вакуленко"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n177258-okupanty-vykraly-ta-vbyly-na-harkivschyni-dytyachogo-pysmennyka.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти викрали та вбили на Харківщині дитячого письменника</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzAF0EvRLCGt11Ya0Lf-d1yKnXbaA4IoIPxp1xRF4n7Ab7YszWo-UhFrOugrCG42B49wvm-82F" alt="Окупанти викрали та вбили на Харківщині дитячого письменника" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Під час окупації Харківщини, в одному з окупованих сіл Ізюмщини, було викрадено та вбито українського письменника Володимира Вакуленка. Про це свідчать&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/society/volodimir-vakulenko-shcho-vidomo-pro-zniknennya-ta-vbivstvo-ukrajinskogo-pismennika-novini-harkova-12060252.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Викрали і вбили: стала відома доля письменника Вакуленка, який ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTw9ktooJqhMHrepvhmDTizSBL-IVMweZwtAiD8_7_QNhUaOw8OLbJ_Cw45mNxX5DDYGxOCakvg" alt="Викрали і вбили: стала відома доля письменника Вакуленка, який ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>50-річний письменник, поет і лауреат численних літературних премій Володимир Вакуленко виявлений серед вбитих росіянами під час окупації Харківщини.</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/na-harkivschini-rosiyani-vbili-dityachogo-pismennika-volodimira-vakulenka-tilo-znayshli-u-bratskiy-mogili-2211829.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Харківщині росіяни вбили дитячого письменника Володимира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3YTM7yz6ThfC-AEpDEurDDBCcJMMPwdvQTNNFbjgh-ylIbpT79NfHdRc5V1hq-d5nCZZRxrbt" alt="На Харківщині росіяни вбили дитячого письменника Володимира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Харківській області під час окупації росіяни вбили дитячого письменника Володимира Вакуленка. Його тіло знайшли у братській могилі.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-pysmennyk-vakulenko-smert/32152681.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«ДНК-експертиза підтвердила»: письменника Вакуленка вбили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqBA8A-SEBH6NP2Jtb7jQbjdp5Wj5BOW0eYU4lKEVi0bfConEYP0dCvxzplc0mrROFfw4VrEgY" alt="«ДНК-експертиза підтвердила»: письменника Вакуленка вбили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Володимир Вакуленко зник у Капитолівці у березні 2022 року. Батьки письменника понад пів року шукали його.</p></div>
            </div>
        </a><a href='https://2day.kh.ua/ua/kharkow/pysmennyk-z-izyumu-volodymyr-vakulenko-zahynuv-pid-chas-okupatsiyi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Письменник з Ізюму Володимир Вакуленко загинув під час окупації</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRR9DVw1Lw8gIcN0v7apE3KmGeEPxXM8tySCKLpToFoIf9pFFU8BcoT8qIlGmtNI4Z09EMeFWfO" alt="Письменник з Ізюму Володимир Вакуленко загинув під час окупації" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Довгий час чоловік вважався зниклим без вісті. 23 березня російські військові забрали Володимира з його дому в селі Капитолівка під Ізюмом, і з того часу його&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/volodimir-vakulenko-tilo-pismennika-znayshli-v-misci-masovogo-pohovannya-v-izyumi-50287282.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тіло вбитого окупантами письменника Володимира Вакуленка ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoWmqcdFYsMHQJD3IUwj3B6bhfmoIfsWokPU9pHsH7NPvYH61A2eUwJUa667yHGzr-PxVNF5sG" alt="Тіло вбитого окупантами письменника Володимира Вакуленка ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Під час окупації Ізюма та частини Харківської області російські військові викрали і вбили дитячого письменника Володимира Вакуленка.</p></div>
            </div>
        </a><a href='https://ru.interfax.com.ua/news/general/875155.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Детский писатель Владимир Вакуленко был убит во время ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1kufIVowhufPXlx7Gk06RWTg0tdeJdelIU1ZKvu6yXo49HKU7_jcWbyQBg8CY6-dZdPalfrA9" alt="Детский писатель Владимир Вакуленко был убит во время ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинский детский писатель, поэт и лауреат ряда литературных премий Владимир Вакуленко был убит во время оккупации с.Капитоловка Изюмского района&nbsp;...</p></div>
            </div>
        </a><a href='https://imi.org.ua/news/pysmennyka-volodymyra-vakulenka-vbyly-pid-chas-okupatsiyi-suspilne-i49316'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Письменника Володимира Вакуленка вбили під час окупації ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcH6v5rnFXTs6qjtBnIH38wz4cjol2bqL76313KGhlHmQfBDGH6JwIOw_lbjHhkB-dsIYT0Uuo" alt="Письменника Володимира Вакуленка вбили під час окупації ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Журналісти редакції розслідувань Суспільного отримали фотодокази і результати ДНК-експертизи, які свідчать, що дитячого письменника Володимира Вакуленка&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/society/vladimir-vakulenko-chto-izvestno-ob-ischeznovenii-i-ubiystve-ukrainskogo-pisatelya-novosti-harkova-12060255.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Похитили и убили: стала известна судьба писателя Вакуленко ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTw9ktooJqhMHrepvhmDTizSBL-IVMweZwtAiD8_7_QNhUaOw8OLbJ_Cw45mNxX5DDYGxOCakvg" alt="Похитили и убили: стала известна судьба писателя Вакуленко ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>50-летний писатель, поэт и лауреат многочисленных литературных премий Владимир Вакуленко обнаружен среди убитых русскими во время оккупации Харьковщины.</p></div>
            </div>
        </a><a href='https://kp.ua/incidents/a660298-detskij-pisatel-vladimir-vakulenko-byl-ubit-rossijanami-pod-izjumom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Детский писатель Владимир Вакуленко был убит россиянами ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHp78p9NCLbyPzOB3zt-q4vpIrYFGkICCJNCeWu36-GlnlpCxeDBgrcv3TFxgHnEdqj19VzF41" alt="Детский писатель Владимир Вакуленко был убит россиянами ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Его тело было опознано с помощью экспертизы ДНК. Об этом сообщила в своем Фейсбуке бывшая жена поэта Ирина Новицкая. - Сегодня вечером родителям Владимира&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}