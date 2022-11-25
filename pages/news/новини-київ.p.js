import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новини Київ</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новини Київ"/>
        <meta name="description" content="Trending News about Новини Київ" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новини Київ</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/357/tsn-15890496c3fba55a55e21f0ca3090d06/thumbs/1200x630/45/17/1f7ce4b883e2848ad656152c556c1745.jpeg" alt="Новини Київ"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/ato/u-kiyevi-prolunali-novi-vibuhi-2208010.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві пролунали нові вибухи</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFxvWNdlmNty4lGc_xGROD2wqSbOzNM9Ed17F-9gduRX7dHBTas1f2srV4aSALRsKzdVDIdoka" alt="У Києві пролунали нові вибухи" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В столиці триває повітряна тривога. У Києві сьогодні, 23 листопада, о 14.30 знову пролунали вибухи. Як повідомляють очевидці, вибухів було щонайменше три.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/news/situatsiya-kievi-pislya-obstriliv-koli-bude-1669282601.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ситуація у Києві після обстрілів: коли буде світло, вода, зв&#39;язок</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ4bLkCUiHOCL-bTSqkS8satigaDoOyzG3fBhm3qrGGhakBdHUL33OKbeZelrfV0YZ66OjCZJZy" alt="Ситуація у Києві після обстрілів: коли буде світло, вода, зв&#39;язок" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мер Києва Віталій Кличко повідомив, що 60% міста залишається без електрики. Водопостачання відновили на лівому березі, на правий почали подачу води.</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/u-kijevi-je-vluchannja-v-objekt-inforastrukturi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві є влучання в об&#39;єкт інфраструктури, в місті зникло світло</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVqz5az5IqPgu-xrl0OIi6EgMOldeYpGedPJGQJiKF8MyJzyPS6l3Py1J99vtwcJpLrMvi2a5Y" alt="У Києві є влучання в об&#39;єкт інфраструктури, в місті зникло світло" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зголом стало відомо, що внаслідок влучання ракети в місті пошкоджена двоповерхова будівля, одна людина загинула та одна постраждала. Related video. Доповнюється.</p></div>
            </div>
        </a><a href='https://www.unian.ua/economics/energetics/novini-kijiv-u-stolici-70-budinkiv-perebuvayut-bez-elektroenergiji-kmva-novini-kiyeva-12055896.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві 70% будинків перебувають без електроенергії – КМВА</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6hzVmgglVtGw0KsNVEbBUcTP06n2aa8QO4ljvEIamEvHO1ZlhKLV-7Mee65m4l0tdPilmC44u" alt="У Києві 70% будинків перебувають без електроенергії – КМВА" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Станом на 17:20 24 листопада 70% житлового фонду Києва перебуває в режимі аварійного відключення світла, водопостачання в усіх районах столиці відновлене.</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/rf-nanesla-raketnyy-udar-po-obektu-infrastruktury-v-kieve-klichko-50286147.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>РФ завдала ракетного удару по об&#39;єкту інфраструктури в Києві ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQmyhnbnT_VhnuVTN1ENd6GbrTVA0puJp3ulJmkmlrGeq-pQSp0kqLPg-nqUcwbKIDH156ud8d" alt="РФ завдала ракетного удару по об&#39;єкту інфраструктури в Києві ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Удень 23 листопада РФ завдала ракетного удару по об&#39;єкту інфраструктури у Києві, повідомив Віталій Кличко.</p></div>
            </div>
        </a><a href='https://bigkyiv.com.ua/kyyiv-odyagne-shkolyariv-u-svitlovidbyvalni-zhylety/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Київ одягне школярів у світловідбивальні жилети</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2lVY5w4sbx_imx2GSNQ90AlAUZZ9Pv3mS608c4vMYU86sCv3dXYSk1zoPO5nqXjAGnA4hbBYq" alt="Київ одягне школярів у світловідбивальні жилети" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Столичним школярам за рахунок міста придбають світловідбивальні жилети, які &quot;підсвічуватимуть&quot; дітей у темряві.. Київрада, світловідбивальні елементи.</p></div>
            </div>
        </a><a href='https://dailylviv.com/news/sytuatsiyi-i-pryhody/kyyiv-bez-vody-pratsyuyut-fakhivtsi-klychko-105097'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Київ - без води. Працюють фахівці, - Кличко (доповнено)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0rpl0EdauNHtHqZ9t8tQHIMgozQ_hNp_dEeZZjE-m4tRVW-Bhwff_w6acBB50JXCkYEZ0pyV2" alt="Київ - без води. Працюють фахівці, - Кличко (доповнено)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Через обстріли постачання води призупинене в усьому Києві. Фахівці «Київводоканалу» працюють над тим, щоб якнайшвидше його відновити....</p></div>
            </div>
        </a>
        </Template></>;
}