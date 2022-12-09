import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Аватар</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Аватар"/>
        <meta name="description" content="Trending News about Аватар" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Аватар</h1>
            <Image width={800} height={500} src="https://img.championat.com/news2/social/b/6c/4919663.jpg" alt="Аватар"/>
            <h3>Recent News</h3>
            <a href='https://www.ixbt.com/news/2022/12/08/13-let-spustja--pervymi-vpechatlenijami-ot-dolgozhdannogo-filma-avatar-2-put-vody-podelilis-kritiki.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>13 лет спустя. Первыми впечатлениями от долгожданного ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="13 лет спустя. Первыми впечатлениями от долгожданного ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Компания 20th Century Pictures официально объявила, что начало проката фильма «Аватар 2: Путь воды» (Avatar: The Way of Water) состоится 16 декабря,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.championat.com/cybersport/news-4919663-vizualnyj-i-emocionalnyj-shedevr-chto-govoryat-kritiki-pro-avatar-put-vody.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Визуальный и эмоциональный шедевр». Что говорят критики ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTszKtr07hhk9IrZg8Kx7KKriK9Zl_Rp29XzLBNbmXRl2X7MGFrHSrZHjF799fMj9Q4-3wg0cL" alt="«Визуальный и эмоциональный шедевр». Что говорят критики ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Уже совсем скоро состоится премьера «Аватара 2», а недавно критики поделились своими первыми впечатлениями от просмотра картины.</p></div>
            </div>
        </a><a href='https://www.soyuz.ru/news/23569'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Джеймс Кэмерон заявил, что сюжет фильма «Аватар 4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Джеймс Кэмерон заявил, что сюжет фильма «Аватар 4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Джеймс Кэмерон заявил, что сюжет фильма «Аватар 4» шокировал студию «Мне написали письмо, в котором говорилось: &quot;Вот черт!&quot;»</p></div>
            </div>
        </a><a href='https://ura.news/news/1052609307'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кинотеатры ХМАО готовят показы второй части «Аватара» в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQl1hnP5wPYz8rCcoQdtxsOTJaTri8P89co4Q22hXVxei974EG3LfxsAXfVak62UAe1zzjwUaQW" alt="Кинотеатры ХМАО готовят показы второй части «Аватара» в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кинотеатры в городах ХМАО планируют показать в прокате новый фильм «Аватар: Путь воды», несмотря на санкции. Об этом URA.RU сообщил источник в сфере&nbsp;...</p></div>
            </div>
        </a><a href='https://info.sibnet.ru/article/630657/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Аватар: Путь воды» получил первые восторженные отзывы</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT0qmpRz0TX58bfZYbV5HIPbQQ7_5kaxxAsbUwPbqpBEdiNhg6JGhVj0I57lyQ5IpGJp1z1KOrX" alt="«Аватар: Путь воды» получил первые восторженные отзывы" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обычные зрители в социальных сетях написали, что восхищены и потрясены новым «Аватаром». Некоторые отметили затянутость фильма.</p></div>
            </div>
        </a><a href='https://thecity.m24.ru/articles/7864'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Лондоне прошла премьера фильма «Аватар: Путь воды ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHeF39rUc0zpSF9jNeszqN-DECK9ceriVuq7JSNCJSNJ6HWLHRlHGhemlZ8QjWLiSszfcOtVRT" alt="В Лондоне прошла премьера фильма «Аватар: Путь воды ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пока все ждут официального продолжения картины Джеймса Кэмерона, первые зрители, которые уже посмотрели сиквел, делятся своими впечатлениями.</p></div>
            </div>
        </a><a href='https://gamemag.ru/news/173885/way-of-water-impressions-december-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Визуальная магия, один из лучших блокбастеров&quot;: Критики ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7uvWzKSW4O1HoM3RsyzaPa1GJ82xMhY8PzLgLkEMt7FBm29ddFr4EtUu94odyASYzwccmdVmo" alt="&quot;Визуальная магия, один из лучших блокбастеров&quot;: Критики ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В сети появились первые отзывы на предстоящий научно-фантастический фильм &quot;Аватар: Путь воды&quot; американского режиссера Джеймса Кэмерона. Журналисты,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.asiaplustj.info/ru/news/tajikistan/society/20221208/kogda-v-tadzhikistane-sostoitsya-premera-avatar-put-vodi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Когда в Таджикистане состоится премьера «Аватар: Путь воды ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTxkquWVNuABqmbXAv3M3YSagcNjGAOvLkf-rbxJQh6NJ5ssNmmh3zxiqgPUkwHIA__aGsaPchH" alt="Когда в Таджикистане состоится премьера «Аватар: Путь воды ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Лондоне 7 декабря прошла премьера одного их самых ожидаемых фильмов года «Аватар: Путь воды», сообщает BBC News. Совсем скоро показ начнется и в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}