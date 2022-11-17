import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Вінницяобленерго</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Вінницяобленерго"/>
        <meta name="description" content="Trending News about Вінницяобленерго" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Вінницяобленерго</h1>
            <Image width={800} height={500} src="https://www.vinnitsa.info/f/images/2022/11/16/93212/6a5c588c37e3b05cf26fecdacfe6e807_preview_w440_h290.jpg" alt="Вінницяобленерго"/>
            <h3>Recent News</h3>
            <a href='https://www.vinnitsa.info/news/u-vinnyts-kiy-oblasti-16-lystopada-vvedeno-hrafiky-pohodynnoho-ta-avariynoho-vidklyuchennya-svitla.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Вінницькій області 16 листопада введено графіки погодинного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXgD0H4boNt31Dgr6q7tbzOUW2CsQv7_I9KIHC0UjS5bd2xTQ44bz29bIuYBZwqKTYoFqP1qXU" alt="У Вінницькій області 16 листопада введено графіки погодинного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«З 07 год 00 хв. буде доведено додаткове завдання», - зазначив Андрій Поліщук. «Дані обмеження будуть більш відчутні для мешканців нашої області ніж ті, що вже&nbsp;...</p></div>
            </div>
        </a><a href='https://vn.20minut.ua/Podii/na-vinnichchini-vveli-obmezhen-na-elektroenergiyu-de-divitisya-grafiki-11711182.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Вінниччині ввели обмежень на електроенергію. Де дивитися ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-8ebbZ4-YLScxZdlhspEBEzUhrBBfISUZAO5QM_muB_Rjhc-AJr8TMzqqbniThw3o5eRpzO8q" alt="На Вінниччині ввели обмежень на електроенергію. Де дивитися ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[16:11:2022] На Вінниччині ввели обмежень на електроенергію. Де дивитися графіки? ✓Новини від 20 хвилин ✓ Тільки свіжі новини - слідкуйте разом з нами&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vin.gov.ua/news/ostanni-novyny/50855-na-vinnychchyni-16-lystopada-vvedeno-hrafiky-pohodynnoho-ta-avariinoho-vidkliuchennia-svitla'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Вінниччині 16 листопада введено графіки погодинного та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkpOm8iKR-rbtuducnjNCyJIYvDdMPr0Kt130DmdbLPR6W5tdTzoyUGy3sN4lOMcgVdUFm8NfQ" alt="На Вінниччині 16 листопада введено графіки погодинного та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вінницяобленерго повідомляє: «О 02 год. 00 хв. від РДЦ Південно-Західного Регіону НЕК «Укренерго» отримано розпорядження про введення по АТ «ВІННИЦЯОБЛЕНЕРГО»&nbsp;...</p></div>
            </div>
        </a><a href='https://naparise.com/posts/u-vinnytsiaoblenerho-poperedyly-pro-bilsh-vidchutni-vidkliuchennia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У «Вінницяобленерго» попередили про більш відчутні відключення</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="У «Вінницяобленерго» попередили про більш відчутні відключення" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Внаслідок масованих ракетних обстрілів української енергосистеми вчора, 15 листопада, автоматично відключилися лінії електропередач, що призвело масових&nbsp;...</p></div>
            </div>
        </a><a href='https://vitatv.com.ua/oblast/na-vinnychchyni-vvedeno-hrafiky-pohodynnoho'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Вінниччині введено графіки погодинного та аварійного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTO8q3ZUzOStwVM45lIcc-NqW2DB1JhpZuWWwVckzr8Uqh9ONmaLj4jnMOp8xVb_SiqXWwxsbWE6w" alt="На Вінниччині введено графіки погодинного та аварійного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Вінницяобленерго&quot; вводить обмеження згідно з графіком погодинного відключення електроенергії. Про це повідомляє &quot;Вінницяобленерго&quot;.</p></div>
            </div>
        </a><a href='https://vezha.ua/na-vinnychchyni-sogodni-zastosovuyut-obmezhennya-na-elektroenergiyu-grafik/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Вінниччині сьогодні застосовують обмеження на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpvzq69RaTKQtjLNKafDVsKK7AAGrecc2Mhni4d3nFLf656OEWEOVHFLS0QepLdr96NgqEmiSZ" alt="На Вінниччині сьогодні застосовують обмеження на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Так, за повідомленням АТ “Вінницяобленерго”, 0 02:00 від РДЦ Південно-Західного Регіону НЕК “Укренерго” отримано розпорядження про введення по АТ “&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}