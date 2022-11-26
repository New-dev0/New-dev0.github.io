import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Голодомор</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Голодомор"/>
        <meta name="description" content="Trending News about Голодомор" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Голодомор</h1>
            <Image width={800} height={500} src="https://media.slovoidilo.ua/media/scimage/170/169756-uk.png" alt="Голодомор"/>
            <h3>Recent News</h3>
            <a href='https://www.slovoidilo.ua/2022/11/25/novyna/suspilstvo/skilky-ukrayincziv-vvazhayut-holodomor-1932-1933-rokiv-henocydom-socziolohy-porivnyaly-dumky-rik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Скільки українців вважають Голодомор 1932-1933 років ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTM-W5MAbZmhxdzRBGB3cBULqEZNcW0QfdZnCP-lM3v5FPb80SDY-RAUrWn1aI9TUns15_5nllh" alt="Скільки українців вважають Голодомор 1932-1933 років ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вже понад 90 відсотків опитаних українців вважають, що Голодомор 1932-1933 років був геноцидом.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-society/3622096-93-ukrainciv-vvazaut-golodomor-genocidom.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>93% українців вважають Голодомор геноцидом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR80Qnhf6L53dhrLNEwCjzG6kTw5K03HAcPpu95JVktPgNiB1oiONUf93he7I-NKkR4_WT1gdx2" alt="93% українців вважають Голодомор геноцидом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>93% українців вважають, що Голодомор 1932-1933 років був геноцидом українського народу, лише 3% – заперечують це. — Укрінформ.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-opytuvannia-golodomor/32148717.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>93% українців вважають, що Голодомор 1932-1933 років був ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsRli_JPHR6WURJbvi5hv343pN_k4wU54I3ML62qUP2KTqWjRXLhBu8ry9mp_9ncSscCiJiSUC" alt="93% українців вважають, що Голодомор 1932-1933 років був ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Щорічно в четверту суботу листопада в Україні вшановують пам&#39;ять жертв Голодомору 1932-1933 років.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-polytics/3622150-duda-nauseda-jogannis-i-levits-zaklikali-svit-viznati-golodomor-zlocinom-stalinskogo-rezimu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дуда, Науседа, Йоганніс і Левітс закликали світ визнати ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSvOFwC75YrFfCo9StC1bRjyV1TjM_VS_Z6Z_U_5C3NtWvo-FT9T7Da3afhfcNv41Vh1rr0l8ze" alt="Дуда, Науседа, Йоганніс і Левітс закликали світ визнати ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президенти Литви, Польщі, Румунії та Латвії підтвердили готовність й надалі підтримувати Україну у протидії російській агресії та закликали міжнародну&nbsp;...</p></div>
            </div>
        </a><a href='http://ipress.ua/news/v_nimechchyni_pryrivnyaly_golodomor_do_golokostu__bundestag_golosuvatyme_za_rezolyutsiyu_336379.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Німеччині прирівняли Голодомор до Голокосту - Бундестаг ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdwpBJj-ji1rVtSWm8C5BC6YXcy4VQ0mI2xvDwwXnmX6GXX2wK_uVstQG15NHgoTnzT0MbWxFm" alt="В Німеччині прирівняли Голодомор до Голокосту - Бундестаг ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Депутати підготували позапартійну резолюцію, в якій висловлюються за визнання Голодомору геноцидом.</p></div>
            </div>
        </a><a href='https://life.pravda.com.ua/society/2022/11/25/251503/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ставлення змінюється: скільки українців вважають Голодомор ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbOZWk7-xgOx58bX2OFr5-c5__N7u2uN_PUpGB5mPncHYPZhdzB5PpziHAJ_Q5Bn4JhyPfcYWj" alt="Ставлення змінюється: скільки українців вважають Голодомор ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Більшість українців вважають Голодомор 1932-1933 років геноцидом українського народу – 93% українців зазначили, що погоджуються з цим твердженням.</p></div>
            </div>
        </a><a href='https://www.slovoidilo.ua/2022/11/25/novyna/suspilstvo/nimechchyni-pidhotuvaly-vazhlyvu-rezolyucziyu-shhodo-holodomoru-kuleba'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Німеччина підготувала важливу резолюцію щодо Голодомору ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3VmZDhm_KVSZA_4JnOkSqAQBhm-GV_IT4g8xIGErBys4uFA0QwkvXY3FWZ8o5csFpWWHYflCk" alt="Німеччина підготувала важливу резолюцію щодо Голодомору ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Демократичні фракції Німеччини погодили важливу резолюцію щодо визнання Голодомору геноцидом українців.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/golodomor-vvazhayut-genotsidom-ponad-90-ukrayintsiv-1669384765.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Голодомор считают геноцидом более 90% украинцев</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdzcDpQJ9iJ_cBP7WGP3nEP0pKgT-oovxpZaYnigRwp6BCQ2fKOTpybXMlAtjMsVpKybrwZPNH" alt="Голодомор считают геноцидом более 90% украинцев" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ноябре 2022 года 93% украинцев согласны с утверждением, что Голодомор 1932-1933 годов был геноцидом Украинского народа. Лишь 3% - отрицают это,&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/ukraine/20221125-dynamika-pomitna-uzhe-93-ukrayincziv-vvazhayut-golodomor-genoczydom/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Динаміка помітна: уже 93% українців вважають Голодомор ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRtYP0V75vd88plMGJ3cpBO1Qh6QdsscGHkibINICFu7fODtoh_zDMOUjVoIVfHAHTxCGbI1z5" alt="Динаміка помітна: уже 93% українців вважають Голодомор ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>До Дня пам&#39;яті жертв Голодомору соціологічна група Рейтинг провела опитування. Скільки українців вважають Голодомор в Україні 1932-1933 геноцидом,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/world/nimechchina-nazve-golodomor-genocidom-12057093.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Німеччина визнає Голодомор геноцидом українського народу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlatf8Vxj6YxNZP6lPHLsno-kr6zPG4xOz4iinBEPlYVmIyEBTtnDi7sql-oHomU-fuvMX1Yzs" alt="Німеччина визнає Голодомор геноцидом українського народу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Буденстаг визнає сталінський Голодомор геноцидом українського народу. Відповідна резолюція повинна бути прийнята парламентом вже наступного тижня.</p></div>
            </div>
        </a>
        </Template></>;
}