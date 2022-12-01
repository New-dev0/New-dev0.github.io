import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Анна Щербакова</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Анна Щербакова"/>
        <meta name="description" content="Trending News about Анна Щербакова" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Анна Щербакова</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/8/03/4910429.jpg" alt="Анна Щербакова"/>
            <h3>Recent News</h3>
            <a href='https://www.championat.com/figureskating/news-4910429-tatyana-tarasova-anna-scherbakova-imeet-pravo-propustit-god.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Татьяна Тарасова: Анна Щербакова имеет право пропустить год</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSaxowUtPDkOv7eI73Kogn0LrciZNS6podTEhmI7YXbkletQZOyLXrzw0rzmPdI_LrEJEsd7FbX" alt="Татьяна Тарасова: Анна Щербакова имеет право пропустить год" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заслуженный тренер СССР по фигурному катанию Татьяна Тарасова высказалась о том, что олимпийская чемпионка Анна Щербакова пропустит чемпионат России,&nbsp;...</p></div>
            </div>
        </a><a href='https://sportkp.ru/figurnoe-katanie/nid321631_au20989auauau_cr20989crcrcr_anna-scherbakova-priletela-v-katar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Анна Щербакова прилетела в Катар</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkqOGP9SuWjNK-aOjk1Pp6tTpnmozoMkTpNyQv-QcOSyFdXe43lVAh-ia92vmL2TLspXtnJmEf" alt="Анна Щербакова прилетела в Катар" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российская фигуристка выступит там же, где проходит ЧМ-2022 по футболу.</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-11-30/832311-anna-shherbakova-vmeste-s-truppoj-spyashhej-krasavitsy-priletela-v-katar-na-chempionat-mira/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Анна Щербакова вместе с труппой «Спящей красавицы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHLYsfWa_k3dim9y57bNooy_12z1h2-0X4NhPQQlQcp4oAUY_9tVgpNBC4CWVFWBnLY1jpR0KH" alt="Анна Щербакова вместе с труппой «Спящей красавицы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Олимпийская чемпионка 2022 года Анна Щербакова прилетела в Катар на чемпионат мира по футболу. Она принимает участие в ледовом шоу Татьяны Навки «Спящая&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/figure-skating/1113775514-shherbakova-pribyla-v-katar-gde-vystupit-v-shou-navki-spyashhaya-krasa.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Щербакова прибыла в Катар, где выступит в шоу Навки «Спящая ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfnkcLFru0yhah08HdueP_UYYMM76su78j6hlSfAryqUguMyrfvqYhj_5LmI0HmkcaWpl7EWxG" alt="Щербакова прибыла в Катар, где выступит в шоу Навки «Спящая ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Шоу будет показано в фан-зоне чемпионата мира-2022 по футболу. Щербакова будет выступать в Катаре до 5 декабря. Продюсер шоу – олимпийская чемпионка в танцах на&nbsp;...</p></div>
            </div>
        </a><a href='https://2x2.su/news/sport/figuristka-anna-shcherbakova-podelilas-tyazhyelymi-perezhivaniyami-posle-razlada-s-eteri-tutberidze.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фигуристка Анна Щербакова поделилась тяжёлыми ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdasAmUlQoBn5EgySdncA4syf6kUUiISaDmXmVFCwvu07R6RB9OZEMAK-cZjddiyVa6DNDpw8L" alt="Фигуристка Анна Щербакова поделилась тяжёлыми ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>p&gt; Фигуристка Анна Щербакова дала интервью на YouTube-канале FAMETIME TV. Спортсменка рассказала о тяжёлых взаимоотношениях с тренером, которые появились в&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport.ru/figurnoe_katanie/figuristka-scherbakova-priletela-v-katar-na-chm-2022-po-futbolu/article536411/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Щербакова прилетела в Катар на ЧМ-2022 по футболу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ9GLrzADH9xG8tzJF7zzodHKj8nRvIYm0Dj1GrUBvabDAKJrxyrYWakfEprlGjyAqb4dZdR2Pf" alt="Щербакова прилетела в Катар на ЧМ-2022 по футболу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В среду, 30 ноября, стало известно, что олимпийская чемпионка по фигурному катанию Анна Щербакова добралась до Катара, где в эти дни набирает обороты форум&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-11-29/831969-anna-shherbakova-zayavila-chto-u-nee-poyavilos-vremya-na-lichnuyu-zhizn/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Анна Щербакова заявила, что у нее появилось время на личную ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRVVN9ixgZvFGoULz1xzB2Q47A-FDDhZacDMaQ-dJGANTGk0OsI5gOx5CsGsjusMtY9DXGsMJfc" alt="Анна Щербакова заявила, что у нее появилось время на личную ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Олимпийская чемпионка 2022 года по фигурному катанию Анна Щербакова рассказала, что она не состоит в отношениях. Она отметила, что сейчас у нее есть время&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sport-express.ru/figure-skating/reviews/figurnoe-katanie-chto-govorili-ob-eteri-tutberidze-ee-uchenicy-evgeniya-medvedeva-anna-scherbakova-2005650/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Медведева и Щербакова больше не молчат об отношениях с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrnw77quZW106G3hBMCbXUFn_-2glyY4YMtbpncuooYTbj8qCxLKngzDWCENZ08_eIHa5fToTI" alt="Медведева и Щербакова больше не молчат об отношениях с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Евгения и Анна сделали откровенные заявления. В российском фигурном катании — большое событие. Обет молчания прервала Анна Щербакова. Спортсменка, которая имеет&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sports.ru/figure-skating/1113785176-inna-goncharenko-mozhem-tolko-nadeyatsya-chto-shherbakova-eshhe-budet-.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Инна Гончаренко: «Можем только надеяться, что Щербакова ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTAvCZ7SP9SL1YDvfQpzsDIuo077wYFOkDza74yKxyDncUaJx4pAWyov8dLtim4YXizX_TC01V-" alt="Инна Гончаренко: «Можем только надеяться, что Щербакова ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Мне бы не хотелось, чтобы выводы были преждевременными. Но, видя, как у нас Аня активно участвует в различных проектах, в том числе на Первом канале,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsdaily.ru/articles/shcherbakova-propustit-chempionat-rossii-no-vystupit-v-shou-navki-naskolko-eto-etichno'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Щербакова пропустит чемпионат России, но выступит в шоу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrUYoWklfhgPHMEVSJI__-WNJL_h67dBp2AsS4ZfX9fNNwCiPGXIho-DEu2rNGg0KHTsiIrrbx" alt="Щербакова пропустит чемпионат России, но выступит в шоу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Оцените материал Чемпионат России по фигурному катанию Фигурное катание 30 ноября 2022, 10:17. Анна Щербакова, по информации «РИА Спорт»,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}