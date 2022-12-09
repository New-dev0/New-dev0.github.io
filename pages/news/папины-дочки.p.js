import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Папины дочки</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Папины дочки"/>
        <meta name="description" content="Trending News about Папины дочки" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Папины дочки</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/9/fb/4920871.jpg" alt="Папины дочки"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/cybersport/news-4920871-u-seriala-papiny-dochki-vyjdut-novye-serii-v-2023-godu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал «Папины дочки» получит продолжение</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqPmYj-QLmnEFcdIKDs-l_VgW3dtAvaQLFaK0JNHCc0XtJnLi7NOGJ6iQaBV3LW0TX95ETiL9r" alt="Сериал «Папины дочки» получит продолжение" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Онлайн-кинотеатр START и телеканал СТС сообщили, что в работе находится продолжение популярного сериала «Папины дочки». Деталей сюжета нет.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/12/08/71881013/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Папины дочки» возвращаются. Сериал получит продолжение ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStZx3VDBe0173ReEMU6YHsbuWiCvhvG98vDzd1pT0c-UYWj5WI4dIv0KED5WFdCv0YsFApNnlq" alt="«Папины дочки» возвращаются. Сериал получит продолжение ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Скоро стартуют съемки новых эпизодов сериала «Папины дочки». Их покажут в следующем году, сообщает 8 декабря платформа START - Общество - 8 декабря 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/media/news/2022/12/08/954353-papini-dochki-vernutsya-v-efir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Папины дочки» вернутся в эфир спустя 10 лет</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSBXYrWYsqNQ0M7QEpsbqofUBKBhkwyVr0PyEz3aeTZ7S-PvMh0lueHOZZKGgHOjGGbch8rcPvN" alt="«Папины дочки» вернутся в эфир спустя 10 лет" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>СТС покажет новые эпизоды сериала «Папины дочки» в 2023 г., съемки начнутся в ближайшее время, говорится в сообщении телеканала в Telegram.</p></div>
            </div>
        </a><a href='https://www.starhit.ru/novosti/andrei-leonov-snimetsya-v-prodolzhenii-seriala-papiny-dochki-854092/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Андрей Леонов снимется в продолжении сериала «Папины дочки»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVWSxQe1v8iLYYq0xqPZcySYNsn15sdkrQVs25ffuBDKktv-rzdF-fyNILtcQs5ru3HMpO_Cje" alt="Андрей Леонов снимется в продолжении сериала «Папины дочки»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Андрей Леонов может похвастаться большим багажом сыгранных ролей. Однако зрители особенно любят актера за съемки в сериале «Папины дочки».</p></div>
            </div>
        </a><a href='https://secretmag.ru/news/na-rossiiskie-teleekrany-vernutsya-papiny-dochki-08-12-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На российские телеэкраны вернутся «Папины дочки»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOC7xSgLGJCSnkzD4NxqNuwpadOpyfuBMA7yg6E0HuxFC2vOeDcvnZp5od0Lfm5DyrQVOGdS7r" alt="На российские телеэкраны вернутся «Папины дочки»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всё новое — это, как говорится, хорошо забытое старое. Вот и на СТС решили не париться с выдумкой новых сериалов (тем более что оригинальных задумок,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dp.ru/a/2022/12/08/U_seriala_Papini_dochki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У сериала &quot;Папины дочки&quot; будет новый сезон: всё о проекте ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdpKDXYzVqZo_U38xfM3_iLUIle2Xpix7tHo3LMkQy4MpA0gcxdgTmgNIHfBoQwut8byGGg1Jk" alt="У сериала &quot;Папины дочки&quot; будет новый сезон: всё о проекте ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский комедийный телесериал &quot;Папины дочки&quot; получит долгожданное продолжение спустя 10 лет.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5708473'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Папины дочки» вернутся в эфир</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="«Папины дочки» вернутся в эфир" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Телеканал СТС в 2023 году представит новые серии телесериала «Папины дочки», выходившего с 2007 по 2013 год. Об этом сообщает «Афиша-Daily» со ссылкой на&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}