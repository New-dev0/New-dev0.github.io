import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Блекаут</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Блекаут"/>
        <meta name="description" content="Trending News about Блекаут" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Блекаут</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/69/51/preview_w696zc1.jpg" alt="Блекаут"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n176951-blekaut-u-kyievi-u-dtek-rozkryly-scenariyi-rozvytku-sytuaciyi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блекаут у Києві — у ДТЕК розкрили сценарії розвитку ситуації</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQf3VRTArHgp_fp_pEljO8FQXDBKZytuKvEc4l9-CBe59ViHPxjr3qpQosnUdJ6fClaFOAHEf52" alt="Блекаут у Києві — у ДТЕК розкрили сценарії розвитку ситуації" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Повний блекаут у Києві теоретично можливий. Утім, якщо система включиться протягом наступних кількох годин, навіть тоді, коли холодно, — нічого страшного не&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/society/blekaut-na-porozi-naskilki-kritichna-situaciya-v-ukrajini-12050229.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блекаут &quot;на порозі&quot;: наскільки критична ситуація в Україні</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVbiHvGWESqQTOF34iunXkMGaUlzABfv3jANHeUQuAY0KkK4t4JK8riDVR9twAhgTym5UxiCxK" alt="Блекаут &quot;на порозі&quot;: наскільки критична ситуація в Україні" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Через постійні відключення електроенергії містянам порадили на зиму перебратися в село. Аналітик розповів про ефективність цієї поради і чи може вона&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/blekaut-kievi-mozhliviy-ale-nichogo-strashnogo-1668796654.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блекаут в Киеве возможен, но ничего страшного при этом не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjwwTqxtdWqdoyUhSmiH4e9q772FkpwOIVxcfMV7XVoh3-mqsSAglgKB--0Wis7koKrK-4tVA0" alt="Блекаут в Киеве возможен, но ничего страшного при этом не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блэкаут в Киеве возможен, но украинской энергосистеме он нестрашен. Главное, чтобы систему запустили через 5-6 часов. Об этом заявил исполнительный директор&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/economics/energetics/blekaut-v-ukrajini-maloymovirniy-de-zaraz-naygirsha-situaciya-zi-svitlom-12049959.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блекаут в Україні малоймовірний: у ДТЕК розказали, де зараз ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDo2jO__dsARS38dcNxQhVyyASL2PGG27MB2kdlVZ_JQUsUu_DM4jAvRqaoPLLLoPgmL_zseYw" alt="Блекаут в Україні малоймовірний: у ДТЕК розказали, де зараз ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блекаут в Україні можливий, кажуть в ДТЕК, але його можна уникнути, якщо вчасно відремонтувати руйнації. Та для повного відновлення системи потрібно більше&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/chi-mozhe-ukrayini-zagrozhuvati-blekaut-scho-pro-ce-kazhut-u-dtek-2204983.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи може Україні загрожувати блекаут: що про це кажуть у ДТЕК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYVYl_Sbmji4V-a28-yHeJM5KmGpeK8d_slTVP5oNnAD25ChLJWAn0q1bqz594uu2cWBJz9sqe" alt="Чи може Україні загрожувати блекаут: що про це кажуть у ДТЕК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Директор ДТЕК Дмитро Сахарук повідомив, що попри велике бажання Росії, аби Україна опинилася у повній темряві, такий сценарій є малоймовірним.</p></div>
            </div>
        </a><a href='https://vikna.tv/video/ukrayina/chy-mozhlyvyj-blekaut-v-ukrayini-energetychna-sytuacziya-sogodni/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи можливий блекаут в Україні — ситуація з ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQxsDwyUJK6LduPxSuGX3Wp3U2SbOqP4WWtSElk_9OAM7Tdl-KrMTnboaDofgXOuUAp0ncvly2" alt="Чи можливий блекаут в Україні — ситуація з ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чи можливий блекаут в Україні - Виконавчий директор ДТЕК Дмитро Сахарук розповів, яка енергетична ситуація в регіонах сьогодні, 19.11.2022.</p></div>
            </div>
        </a><a href='https://prm.ua/chy-varto-ochikuvaty-na-povnyy-blekaut-v-ukraini-poiasnennia-dtek/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи можливий в Україні повний блекаут — пояснення ДТЕК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVz6zXgkwUWgqYgw7m-2Zh4AHnCzjv60qFMtF0loN9ZwrIxAKiIDhCwgm0f7rkwuuUBb4HpTJD" alt="Чи можливий в Україні повний блекаут — пояснення ДТЕК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Попри російські атаки на об&#39;єкти енергетичної інфраструктури в Україні не очікується тотального відключення електроенергії.</p></div>
            </div>
        </a><a href='https://www.unian.net/society/blekaut-na-poroge-naskolko-kritichna-situaciya-v-ukraine-12050226.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блэкаут &quot;на пороге&quot;: насколько критична ситуация в Украине</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSVbiHvGWESqQTOF34iunXkMGaUlzABfv3jANHeUQuAY0KkK4t4JK8riDVR9twAhgTym5UxiCxK" alt="Блэкаут &quot;на пороге&quot;: насколько критична ситуация в Украине" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Из-за постоянных отключений электроэнергии горожанам советуют на зиму выехать в село. Аналитик рассказал об эффективности этого совета и может ли он&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/opinions/537736-esli-budet-blekaut-on-prodlitsya-ot-treh-do-desyati-dney-chto-nuzhno-delat'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Блэкаут продлится 3-10 дней: что нужно делать власти и нам</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQHnIQwMGyYCHSmaBBjlitrwxRlSdzeEkQVF9bDdX6GXuZLBTtxffNO0D6HluFPKGt9n603LTBE" alt="Блэкаут продлится 3-10 дней: что нужно делать власти и нам" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мне кажется, что началась информационная подготовка к блэкауту. Вопрос не в том, как и когда он произойдет, а в том, как к нему готова власть и что она и&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/UKRAINE/chi-bude-blekaut-u-kijevi-prohnoz-vid-dtek.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи буде блекаут у Києві – прогноз від ДТЕК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmpcrJ8whzf_BFkkAD5GuE9VJO_SDZ5r4t5y6-PpREANn0UdqDBqJq39--jWBMni9f8lTUkqfp" alt="Чи буде блекаут у Києві – прогноз від ДТЕК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блекаут у столиці можливий, але в ДТЕК вважають, що якщо тотальне відключення електрики і відбудеться, воно триватиме надто довго.</p></div>
            </div>
        </a>
        </Template></>;
}