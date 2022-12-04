import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Callisto Protocol</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Callisto Protocol"/>
        <meta name="description" content="Trending News about The Callisto Protocol" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Callisto Protocol</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/4/fb/4914969.jpg" alt="The Callisto Protocol"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/news-4914969-the-callisto-protocol-dlya-pk-uzhe-chinyat-rejting-v-steam-rastyot.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Callisto Protocol для ПК уже чинят. Рейтинг в Steam растёт</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTCZNl9nliRt1L6gsQVGVRP4KvOYpHO-3YJK-IdAdZe9wKmRG3U6T08vDykMbzox44pC9hDtEv8" alt="The Callisto Protocol для ПК уже чинят. Рейтинг в Steam растёт" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия Striking Distance выпустила для хоррора The Callisto Protocol патч. Он решает проблему с зависаниями и вылетами на ПК.</p></div>
            </div>
        </a><a href='https://www.ixbt.com/live/games/pervye-vpechatleniya-ot-the-callisto-protocol.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Первые впечатления от The Callisto Protocol / Компьютерные и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTF22LvyztdiE7HjOXWTUq2757kcRFsneNLGziqRrfFOzJXIzc96wQU911ob7iiIQpajXQfFUyx" alt="Первые впечатления от The Callisto Protocol / Компьютерные и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сижу играю, наслаждаюсь и вижу посыпались новости, что игра ужасна оптимизирована, отвратительно идёт на PC, не имеет трассировку на XBOX Series X и классно&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/12/03/136176/na-pc-vysel-pervyi-patc-the-callisto-protocol-ispravliaiushhii-edinstvennuiu-problemu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На PC вышел первый патч The Callisto Protocol, исправляющий ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQB48j5mD6XlVBfILZnXQE5gX-kXzFa9NzJcDi_aAMvBbQP4bRyWje98V7Mg14KOKQsvf9U-9KS" alt="На PC вышел первый патч The Callisto Protocol, исправляющий ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия Striking Distance выпустила первый патч для PC-версии The Callisto Protocol, нацеленный на исправление проблемы с тормозами компиляции шейдеров.</p></div>
            </div>
        </a><a href='https://www.cybersport.ru/tags/games/dlia-pk-versii-the-callisto-protocol-vyshel-patch-s-ispravleniem-zavisanii-igry'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Для ПК-версии The Callisto Protocol вышел патч с исправлением ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqfD761dTGBNiMJ6nxv4WL5-aHiJHcHlHMA7mmEfQi_qER-NbxJfrhpDY4VsA9vPcOmMuygYa0" alt="Для ПК-версии The Callisto Protocol вышел патч с исправлением ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СтудияStriking Distance выпустила обновление дляThe Callisto Protocol на ПК, в котором исправила некоторые проблемы с производительностью игры. ...</p></div>
            </div>
        </a><a href='https://gamemag.ru/news/173766/first-pc-patch-the-callisto-protocol-fixes-shader-compilation-stutters'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Callisto Protocol получила патч на ПК с исправлением ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRoEZ3w5k6iBbOGj9YXzMrK7iCUpRGX5c59G44JIpHxhegvaLIfDPbdaPKXrBUWaEiQ_lNv0C_EVA" alt="The Callisto Protocol получила патч на ПК с исправлением ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Striking Distance Studios выпустила первый патч для ПК-версии хоррора The Callisto Protocol. Апдейт устранил проблему с сильными статтерами,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.igromania.ru/news/121222/Sozdateli_The_Callisto_Protocol_uluchshili_optimizaciyu_PC-versii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Создатели The Callisto Protocol улучшили оптимизацию PC-версии</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQfrJ6qn8N5d-dxi-URGcEKHTQAtQaASrfdLY05L9KRJkgZgT3XuxJ3XO-GZeBTorMuEWLLFq1r" alt="Создатели The Callisto Protocol улучшили оптимизацию PC-версии" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студия Striking Distance объявила о выходе первого патча для РС-версии The Callisto Protocol. Он устраняет проблемы с зависаниями игрового процесса из-за&nbsp;...</p></div>
            </div>
        </a><a href='https://dtf.ru/hard/1480671-avtory-the-callisto-protocol-my-znaem-o-problemah-s-podtormazhivaniyami-na-pk-skoro-vyydet-patch'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Авторы The Callisto Protocol: «Мы знаем о проблемах с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR-yZHKBLgB22K8npBaveiHlTTmAk-2jPI_E1BQKXH4oPMgGkCSkiKHCzNytHo7rNOqETY84wdO" alt="Авторы The Callisto Protocol: «Мы знаем о проблемах с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We&#39;re aware that some users are experiencing stuttering issues on the PC. We&#39;ve got a patch that will be available in a few hours to improve performance, with a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}