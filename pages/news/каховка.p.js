import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Каховка</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Каховка"/>
        <meta name="description" content="Trending News about Каховка" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Каховка</h1>
            <Image width={800} height={500} src="https://static2.gazeta.ua/img2/cache/preview/1120/1120869_w_450.jpg?v=0" alt="Каховка"/>
            <h3>Recent News</h3>
            <a href='https://gazeta.ua/ru/articles/np/_flag-ukrainy-v-novoj-kahovke-hlan-otvetil-oznachaet-li-eto-osvobozhdenie-goroda/1120869'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Флаг Украины в Новой Каховке – Хлань ответил, означает ли это ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ13Wc41z1ZGosDxu9XlUgc3U8Cbi81HvuaJH6h3Zok2qohfg1IN1ZYkTi0DvsmxDg8tfRZZHgD" alt="Флаг Украины в Новой Каховке – Хлань ответил, означает ли это ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вчера, 14 ноября, сообщалось об украинском флаге в Новой Каховке Херсонской области. Но пока контролируем только правобережную Херсонщину. Об этом на&nbsp;...</p></div>
            </div>
        </a><a href='https://korrespondent.net/ukraine/4535247-na-levom-berehu-dnepra-ydut-boy-arestovych'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На левом берегу Днепра идут бои - Арестович</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPfOwIXVwwF8c_RZoSAYwq8ORjbekPCvUPwVFlr5GC3I5pxjKaRbeZB6rZZ4bXzQ4CWE4e8SL7" alt="На левом берегу Днепра идут бои - Арестович" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Местные власти сообщают об освобождении Олешек, Каховки и Новой Каховки, Арестович рассказал, что там идут боевые действия.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/14/7376246/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Херсонской области продолжаются обстрелы, на левом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSteA_4Z_mogOHlOQVP9WjmpYQ0JKn0237qh5Jd-wVmWnhXcBxBL9f0b-GZo2iXMdeURw1a99-f" alt="В Херсонской области продолжаются обстрелы, на левом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По распоряжению главы Херсонской ОВ, на водных объектах в пределах Херсонской области запрещено с 13 по 18 ноября 2022 года пользоваться всеми видами водного&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-uanews/news-garyacha-tochka-livij-bereg-hersonu-tam-tochatsya-boi-arestovich-15-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Горячая точка – левый берег Херсона, там идут бои – Арестович ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS4f8AuSKes5U8q8ZRDCCDnVFHVkUp4bBLYnjNzfQE7TTm2dr2mzFZ_Rqm9YBtzKLoZX05MpDy0" alt="Горячая точка – левый берег Херсона, там идут бои – Арестович ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Южное направление уже неделю на устах всей страны и мира. В самом городе Херсоне местные до сих пор обнимают каждую машину ВСУ, чтобы поблагодарить за.</p></div>
            </div>
        </a><a href='https://topwar.ru/205098-ukrainskie-chinovniki-mussirujut-temu-o-bojah-na-levom-beregu-dnepra-v-hersonskoj-oblasti.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Украинские чиновники муссируют тему о «боях» на левом берегу ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS0njf6P52MXEattEbdzhacRK0444VXC_ruzzFnKDaOfyieH6P4WvnZ_nq3HrmMVQmKpueKQc5s" alt="Украинские чиновники муссируют тему о «боях» на левом берегу ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Информация поступает крайне противоречивая В украинских пабликах ставленники киевского режима со вчерашнего вечера муссируют тему, связанную с такими&nbsp;...</p></div>
            </div>
        </a><a href='https://newsfrol.ru/24/10310/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ захватывают левый берег Днепра: город Алешки взят, идут ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSOJcZd6rVQ75BPtrEoUPwJYUjsvUsD3vVHiLy3FSQgLj9zb3M-j8BdCF7zCcXgUTh5mu6j81kC" alt="ВСУ захватывают левый берег Днепра: город Алешки взят, идут ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинские войска ведут интенсивный артиллерийский огонь по району города Алешки, расположенного на левом берегу Днепра в восьми километрах от Херсона.</p></div>
            </div>
        </a><a href='https://life.ru/p/1539109'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сальдо сообщил об усилении обстрелов ВСУ левобережной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQDMgY3vH5zSVT0XVk8TrLvO9dWqmFijQt8CdWwl2u716yh3y50pQhXYH-XAsW1URQWH9zxxOTb" alt="Сальдо сообщил об усилении обстрелов ВСУ левобережной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Военные Украины увеличили интенсивность обстрелов левобережной части Херсонской области. Об этом заявил врио главы региона Владимир Сальдо в эфире&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}