import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Голодомор в Україні</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Голодомор в Україні"/>
        <meta name="description" content="Trending News about Голодомор в Україні" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Голодомор в Україні</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/058a0000-0aff-0242-faac-08dacfc91090_w1200_r1.jpeg" alt="Голодомор в Україні"/>
            <h3>Recent News</h3>
            <a href='https://www.radiosvoboda.org/a/news-vshanuvannya-lviv-holodomor/32150672.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Львові вшанували жертв голодоморів в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwYzOU0YuWYmA2Y8LMyTBXpmLOq9QPXmuFH6V05chqMu1uN_yEix3rM8F7LXQkCaj427jgLN2T" alt="У Львові вшанували жертв голодоморів в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Після панахиди відбулась акція «Свіча Пам&#39;яті» ‒ десятки людей запалили свічки у пам&#39;ять жертв голодоморів.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-society/3621889-v-ukraini-vsanovuut-pamat-zertv-golodomoriv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Україні вшановують пам&#39;ять жертв Голодоморів</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS6v9Ls4inKupLBWGsbYMD6gA8oBVrCoJbMycAVSn2ikc_AOx57s-0SOg3E-FxGZCQRuJCXyqRj" alt="В Україні вшановують пам&#39;ять жертв Голодоморів" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українці у ХХ сторіччі пережили три голодомори: 1921-1923, 1932-1933 і голод 1946-1947 років. Наймасштабнішим був голод 1932-1933 років – саме його називають&nbsp;...</p></div>
            </div>
        </a><a href='https://novynarnia.com/2022/11/27/erzyanskyj-naczionalnyj-ruh-vyznav-golodomor-v-ukrayini-aktom-genoczydu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ерзянський національний рух визнав Голодомор в Україні актом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTpfoIFdSNc46Kipy3lhk6Z0kF9txOrG5C6EkzvDv7yliVwbQCTbx0JXhSGKl9bDzPTibJdsuUZ" alt="Ерзянський національний рух визнав Голодомор в Україні актом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Атянь Езєм – рада старійшин ерзянського народу – визнала Голодомор 1932-1933 років в Україні актом геноциду. Постанова від 26.11 опублікована на сайті&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/325632-poklali-kviti-i-postavili-lampadki-u-kropivnickomu-vsanuvali-pamat-tih-golodomoru-v-ukraini/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Поклали квіти і поставили лампадки. У Кропивницькому ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXv-fY9aQ9z9MyzeL0Bfd8ILYKJmlbVSJmPE4qffGQr66ovGm2nWPTnE3n9glBl1LZt8YjsHTH" alt="Поклали квіти і поставили лампадки. У Кропивницькому ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media О 10:00 ранку вшанувати пам&#39;ять людей які померли під час Голодомору 1932 –1933 років і масових штучних голодів 1921–1923 і 1946–1947 років,&nbsp;...</p></div>
            </div>
        </a><a href='https://lubnyrada.gov.ua/novyny/6173-na-lubenshchini-vshanuvali-zhertv-golodomoriv-v-ukrajini-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Лубенщині вшанували жертв голодоморів в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="На Лубенщині вшанували жертв голодоморів в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лубенська міська рада, місто Лубни, городской совет, Lubnyrada, Lubny, міський голова, депутати, виконавчий комітет, новини міста Лубни, освіта, культура,&nbsp;...</p></div>
            </div>
        </a><a href='https://hromadske.radio/news/2022/11/26/s-ohodni-vshanovuiut-pam-iat-zhertv-holodomoriv-v-ukraini'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сьогодні вшановують пам&#39;ять жертв голодоморів в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLJ3p7G_0RUYfBU6J1RyUnoo3SsjsgVsRTLW_0sXPDzO8VhdPTdc5DLXLC0WZbEPkwema6Qcxi" alt="Сьогодні вшановують пам&#39;ять жертв голодоморів в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українці у ХХ сторіччі пережили три голодомори: 1921-1923, 1932-1933 і голод 1946-1947 років. Наймасштабнішим був голод 1932-1933 років – саме його називають&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-ichkeriya-ukrayina-holodomor-henotsyd/32151057.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ічкерія визнала Голодомор геноцидом українського народу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsRli_JPHR6WURJbvi5hv343pN_k4wU54I3ML62qUP2KTqWjRXLhBu8ry9mp_9ncSscCiJiSUC" alt="Ічкерія визнала Голодомор геноцидом українського народу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чеченський народ із глибоким розумінням та співчуттям ставиться до боротьби українців за незалежність. У наших народів однакові цілі та спільний ворог»,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-world/3622754-v-rizi-vsanuvali-pamat-zertv-golodomoriv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Ризі вшанували пам&#39;ять жертв Голодоморів</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRryj4rhDdh-Qv6_d7lq2GkLSaOU3X2SloCAKYwvDHfKVaGYaNgFkR_bHJGXKWF76hohDKjNYyg" alt="У Ризі вшанували пам&#39;ять жертв Голодоморів" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В латвійській столиці пройшла низка заходів на вшанування пам&#39;яті жертв Голодомору 1932-1933 рр. в Україні. — Укрінформ.</p></div>
            </div>
        </a><a href='https://24tv.ua/golodomor-ukrayini-ichkeriya-viznala-golodomor-genotsidom-ukrayinskogo_n2206358'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ще одна країна офіційно визнала Голодомор геноцидом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTMDW-DpBnRk6wneBT7HdQojvRw4Tkn5veHGI_bq8hE7MqdJ4m6nCOR2EPSvdojJcbXgIRk3y3P" alt="Ще одна країна офіційно визнала Голодомор геноцидом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26 листопада 2022 уряд Ічкерії проголосував за засудження Голодомору 1932 – 1933 років. Країна визнала цю подію злочином проти людства й українського народу&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/uk/ukraine/538559-90-richna-richnicya-golodomoru-v-ukrajini-proydut-hvilina-movchannya-ta-akciya-zapali-svichku-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>90-річна річниця Голодомору: в Україні пройдуть хвилина ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdO7r8ELQ-OLQsSw-O6OqlPECGiKzwRc5cUk2ExbZgBsfzgEbnS9pPBPSV0n4XVoDGB7XwZ5jW" alt="90-річна річниця Голодомору: в Україні пройдуть хвилина ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні, 26 листопада, в Україні вшановують пам&#39;ять мільйонів жертв Голодомору 1932-1933 років. Цього року виповнилася 90-річна річниця трагедії, яка забрала&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}