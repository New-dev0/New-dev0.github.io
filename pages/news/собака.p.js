import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Собака</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Собака"/>
        <meta name="description" content="Trending News about Собака" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Собака</h1>
            <Image width={800} height={500} src="https://cbn.com.ua/wp-content/uploads/2022/11/2022-11-25_14-02_182825.jpg" alt="Собака"/>
            <h3>Recent News</h3>
            <a href='https://cbn.com.ua/2022/11/25/matilda-kropyvnytska-sobaka-zavela-sobi-instagram-j-rozdaye-interv-yu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Матільда. Кропивницька собака завела собі інстаграм й роздає ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGaUhFKWoimpz_vwtNZgpxuW8_y6dTdmIcFYerNsS1PvCpC50hwNenOQTzkDTAdDEY0siQqYEB" alt="Матільда. Кропивницька собака завела собі інстаграм й роздає ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новини Кіровоградської області та Кропивницького, події, репортажі, прес-конференції, статті, спецпроекти, фото, відео, кіровоградське телебачення,&nbsp;...</p></div>
            </div>
        </a><a href='https://mir24.tv/news/16532233/pohishchennaya-sobaka-vernulas-k-hozyaike-spustya-12-let-v-velikobritanii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Похищенная собака вернулась к хозяйке спустя 12 лет в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQabfSFZSR6lUn3-WXoudT-xITAH7OBkyu83ugt9imtKcoBiZL7g9QfmD4YXZhobjJnKuj0YK-O" alt="Похищенная собака вернулась к хозяйке спустя 12 лет в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Собаку породы борд-терьер украли еще в 2011 году.</p></div>
            </div>
        </a><a href='https://dumskaya.net/news/sobaka-i-morskie-svinki-v-odesskom-punkti-nezlam-170802/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Собака и морские свинки: в одесском «пункті незламності ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQuN0ZcBJSfHJvkKkj0-JqROW8R9Oqm2QWqXGEVVaNTm5tqJcbFL6g3-6kdmv3-uEEJf0AzhQDl" alt="Собака и морские свинки: в одесском «пункті незламності ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Четверолапые психологи — пес Мажор и морские свинки Пушка и Мишка — работали в пятницу, 25 ноября, в одном из одесских «пунктів незламності».</p></div>
            </div>
        </a><a href='https://rus.lsm.lv/statja/novosti/obschestvo/bezdomniy-s-sobakoy-obrel-dom-blagodarja-soobscheniyu-v-socseti.a484127/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бездомный с собакой обрел дом благодаря сообщению в соцсети</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS3VtcHD35IV1q_4c9OIU-QoY2DLQOP_VbBzVCERqe8ZOGWT5Lo2_wHsa3bdJ0QXmUEmXo0fHJY" alt="Бездомный с собакой обрел дом благодаря сообщению в соцсети" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Последние пять лет жизни Имант Михненокс жил в садовом домике, а единственным источником тепла зимой была его собака Белла. Мужчина не употребляет наркотики&nbsp;...</p></div>
            </div>
        </a><a href='https://sibkray.ru/news/1/964898/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Собака съехала с катушек»: замдиректора ипподрома ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQPQ843fphN69Xp60Qxig4QD8IKxlbSSfAxOYzGcCMmWcg5bpt01yV7UhCBpJkJvXUMpXupbF5u" alt="«Собака съехала с катушек»: замдиректора ипподрома ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня утром на ипподроме Новосибирска посетительница нашла окровавленный труп собаки. Сибкрай.ru выяснил, что животное убил заместитель директора&nbsp;...</p></div>
            </div>
        </a><a href='https://rus.postimees.ee/7656757/proklyatoe-mesto-zhutkiy-sluchay-na-ostanovke-deti-ryadom-nablyudali-kak-umiraet-moya-sobaka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Проклятое место? Жуткий случай на остановке: «Дети рядом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1RqEp-lHHeltncZw__J2L2XUveDdM_jD7eiqRgXoFFI1asHjJ-i313q2m9iIvWkM_CZupN4Sy" alt="Проклятое место? Жуткий случай на остановке: «Дети рядом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Это было так страшно. Я хочу, чтобы люди знали, что это опасное место!» – говорит житель Тарту Алекс, маленькая собачка которого в среду чудом избежала&nbsp;...</p></div>
            </div>
        </a><a href='https://novostivl.ru/news/20221125/104013/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Великобритании похищенная в 2011 году собака по кличке ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMsfwjCp3ymjvJ0zFPJHqEc9Rhjg7vbjfTGZAl8gPHge-iNJNB2Whlb-UQqwDR49ZE4WLBMwGB" alt="В Великобритании похищенная в 2011 году собака по кличке ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>25 ноября - NVL. В Великобритании произошел интересный случай, собака, утерянная 12 лет назад, вернулась к хозяйке, чему все были очень рады.</p></div>
            </div>
        </a>
        </Template></>;
}