import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Криштиану Роналду</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Криштиану Роналду"/>
        <meta name="description" content="Trending News about Криштиану Роналду" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Криштиану Роналду</h1>
            <Image width={800} height={500} src="https://ss.sport-express.ru/userfiles/materials/184/1845514/large.jpg" alt="Криштиану Роналду"/>
            <h3>Recent News</h3>
            <a href='https://www.sport-express.ru/football/world/2022/news/napadayuschiy-sbornoy-portugalii-krishtianu-ronaldu-nachnet-v-zapase-match-1-4-finala-chm-2022-protiv-marokko-2009590/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Источник: Роналду начнет матч 1/4 финала ЧМ-2022 против ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSg5PbtvCO1Xp0-tYohvJcaapLhFda_atv_WeVOXMpWmWLo939ODwCAteUbopbnre2fv33XVMAw" alt="Источник: Роналду начнет матч 1/4 финала ЧМ-2022 против ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Нападающий сборной Португалии Криштиану Роналду начнет в запасе матч 1/4 финала ЧМ-2022 против Марокко.</p></div>
            </div>
        </a><a href='https://eurostavka.ru/news/football/ronaldu-budet-v-zapase-portugalii-v-chetvertfinale-v-starte-vyydet-ramush-sdelavshiy-het-trik-v-1-8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Роналду будет в запасе Португалии в четвертьфинале. В старте ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTFSvvYgGhLpzKXeY9gtt-cFi9GcxmUBa5JRp66KFqN9o5s2g4hAKc8ov24Iiw9SBMvrq0L-hCP" alt="Роналду будет в запасе Португалии в четвертьфинале. В старте ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Форвард сборной Португалии Криштиану Роналду начнет игру в четвертьфинале ЧМ-2022 с Марокко на скамейке запасных. Об этом сообщает издание A Bola.</p></div>
            </div>
        </a><a href='https://eurostavka.ru/news/football/tayson-fyuri-dazhe-37-letniy-ronaldu-na-spade-vozrast-ne-shchadit-nikogo-bez-raznitsy-kto-ty'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тайсон Фьюри: «Даже 37-летний Роналду на спаде, возраст не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1MtfLxv1r7mF_yXyu-P2pFizGDKLwO3tTUjqSS5upnuaXxs4r-dhherDkLhfnpBOCwNETkY0O" alt="Тайсон Фьюри: «Даже 37-летний Роналду на спаде, возраст не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В начале декабря чемпион WBC в тяжелом весе 34-летний Тайсон Фьюри победил Дерека Чисору, после чего ему потребовалась операция и длительное восстановление.</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/football/world/2022/news/chempion-mira-po-boksu-tayson-fyuri-obyasnil-vozrastom-slabuyu-rezultativnost-krishtianu-ronaldu-2009551/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фьюри — о Роналду: «Он находится в упадке — возраст никого ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSijc17HUfL90EgTk1gNMUBP05vaFFsQixzoA0VwjAsaLtWgo06psj-JpJz2mmIclAXKYu_AFzu" alt="Фьюри — о Роналду: «Он находится в упадке — возраст никого ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>— Прим. «СЭ»). Но даже у Роналду, который так заботился о себе, сейчас упадок. Без разницы, кто ты - возраст никого не щадит», — цитирует Фьюри TalkSPORT.</p></div>
            </div>
        </a><a href='https://mma.metaratings.ru/news/fyuri-obyasnil-snizenie-rezultativnosti-v-igre-kristianu-ronaldu-56149/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фьюри объяснил снижение результативности в игре Криштиану ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXP50tsVVdKS3H8u7--_8pFXet2wbYAdGTcAVQLUlm8zwntU0l6ygyb7rPr2v64gLABpbPjp9O" alt="Фьюри объяснил снижение результативности в игре Криштиану ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чемпион мира по версии WBC в тяжелом весе Тайсон Фьюри высказался касательно текущей игровой формы португальской звезды футбола Криштану Роналду.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4922113-santush-ronaldu-byl-nedovolen-razgovorom-pered-matchem-so-shvejcariej-eto-normalno.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сантуш: Роналду был недоволен разговором перед матчем со ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTrLVtZaoEx-9ZAKJcylxZ3UTpIqzT8LdY3IAnpgU-om8qSleIx_9ar1mIt2rCVuNB9DVNqShZ6" alt="Сантуш: Роналду был недоволен разговором перед матчем со ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Главный тренер сборной Португалии Фернанду Сантуш рассказал о разговоре с форвардом Криштиану Роналду перед матчем 1/8 финала с командой Швейцарии (6:1).</p></div>
            </div>
        </a><a href='https://sport24.ru/news/football/2022-12-09-karpin-ne-ot-khoroshey-zhizni-krishtianu-ronaldu-posadili-na-skameyku-zapasnykh'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Карпин: «Не от хорошей жизни Криштиану Роналду посадили на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBj1KSxOf3noSBtKGkcQeQ41xuadvSPBi0bSTg6K71HAehNHEYMywA1W_1GKb8HhaAPqM846BW" alt="Карпин: «Не от хорошей жизни Криштиану Роналду посадили на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самые свежие новости российского и мирового спорта только на сайте Sport24.ru! Интервью со спортсменами, онлайн трансляции, аналитика и прогнозы,&nbsp;...</p></div>
            </div>
        </a><a href='https://news.sportbox.ru/Vidy_sporta/Futbol/world_cup/spbnews_NI1739210_Jesli_komanda_vyigryvajet_znachit_trener_delajet_vse_pravilno_Bulykin__ob_otsutstvii_Ronaldu_v_osnove_portugalcev'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Если команда выигрывает, значит тренер делает все ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFpe9bkLBy9qqdy8HAmBnDQZD2iLnH9f9SFtBg40J3QOi3Iu90onXhbzhkQ28PGDN44GC_s4nFJQ" alt="«Если команда выигрывает, значит тренер делает все ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Экс‑форвард сборной России Дмитрий Булыкин считает, что отсутствие Криштиану Роналду в стартовом составе сборной Португалии следует оценивать только в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footboom.com/foreign/worldcup2022/1670587228-krishtianu-ronaldu-rozpochne-match-marokko-portuhaliia-v-zapasi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Криштиану Роналду начнет матч Марокко – Португалия в запасе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIbeMamhWbRf8UeXgUrE6yq7GBy7-Vb8mOhR3e00bQjHcT0cz8I30eiHXRB9j7gOQ3MwPBaPQZ" alt="Криштиану Роналду начнет матч Марокко – Португалия в запасе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Криштиану Роналду начнет в запасе матч 1/4 финала ЧМ-2022 Марокко – Португалия, информирует A Bola. По данным источника, его ме ⚽ Новости на FootBoom.</p></div>
            </div>
        </a><a href='https://www.championat.com/football/news-4921937-tajson-fyuri-o-ronaldu-emu-37-let-on-sejchas-na-spade-faktor-vozrasta-nikto-ne-otmenyal.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тайсон Фьюри — о Роналду: ему 37 лет, он сейчас на спаде ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSN7q9Bl-JQhIAo0WeEbJGrFFVeT-b8ehX2RxkaVUYIPEvch_CRX9H7GIK28LKtc1-NcKLoG6PO" alt="Тайсон Фьюри — о Роналду: ему 37 лет, он сейчас на спаде ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Известный британский боксёр Тайсон Фьюри заявил, что нападающий сборной Португалии по футболу Криштиану Роналду находится на спаде ввиду своего возраста.</p></div>
            </div>
        </a>
        </Template></>;
}