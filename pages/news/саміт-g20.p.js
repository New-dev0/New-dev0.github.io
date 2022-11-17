import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Саміт G20</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Саміт G20"/>
        <meta name="description" content="Trending News about Саміт G20" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Саміт G20</h1>
            <Image width={800} height={500} src="https://media.slovoidilo.ua/media/scimage/170/169160-uk.png" alt="Саміт G20"/>
            <h3>Recent News</h3>
            <a href='https://www.slovoidilo.ua/2022/11/16/novyna/polityka/samit-g20-pidsumkovij-zayavi-bilshist-krayin-zasudyly-vijnu-rosiyi-proty-ukrayiny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Саміт G20: у підсумковій заяві «більшість країн» засудили війну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcnmkkJYl7Sj38jXyGBNXyTOBbAJksIC3HpH9FBKRwE0rmyvGnBfcRaSPi3w9ehGUgQ6-dTQUU" alt="Саміт G20: у підсумковій заяві «більшість країн» засудили війну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Більшість країн G20 засудили російську агресію проти України. Але у підсумковій заяві зазначається, що є й інші погляди на ситуацію.</p></div>
            </div>
        </a><a href='https://espreso.tv/putin-ne-poikhav-na-samit-g20-cherez-strakh-shcho-yogo-likviduyut-klimkin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путін не поїхав на саміт G20 через страх, що його ліквідують ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ2QoTJCt0KDCbOjbryZwJKOs4O6WwKm8akhV4zFsCRi2-1t8SojrJ1WIIk_DVPe03NPZklRL8K" alt="Путін не поїхав на саміт G20 через страх, що його ліквідують ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рішення Путіна не поїхати на саміт G20 ще йому відібʼється. Особливо це відчувають у російських елітах - війна з Росією - Детальніше на Espreso.</p></div>
            </div>
        </a><a href='https://www.unian.ua/politics/putin-ne-pojihav-na-samit-g20-cherez-strah-buti-vbitim-eks-golova-mzs-ukrajini-12047886.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путін не поїхав на саміт G20 через страх бути вбитим - екс ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRfZJusoEMrOulsyo7UF4vT2oLIVPLwSTJVOmxQYA91xFRDxawpB-u0qNIIxPjzI80y7k8YboL8" alt="Путін не поїхав на саміт G20 через страх бути вбитим - екс ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Колишній очільник МЗС України Павло Клімкін вважає, що російський правитель Володимир Путін відмовився їхати на саміт G20 через страх померти.</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/putin-ne-poyihav-na-g20-oskilki-boyavsya-scho-yogo-tam-vb-yut-klimkin-2203519.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Путін не поїхав на G20, оскільки боявся, що його там вб&#39;ють ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTrN15-NCA4V3-EagrJaMQ8y6yQpcHvNH3KCwBCF_nv2UYQSDS90vk2Uu1-McvQ9jeOFAhMjBrR" alt="Путін не поїхав на G20, оскільки боявся, що його там вб&#39;ють ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За його словами, Путін проявив свою хамську поведінку стосовно саміту та лідерів держав. &quot;Саміт G20 був не просто приниженням для Путіна. Путін поводився дуже&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/world/geopolitics/samit-g20-chi-zasudili-rosiyu-u-pidsumkoviy-deklaraciji-novini-ukrajini-50284399.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Більшість лідерів G20 «рішуче засудили» вторгнення РФ в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnI0ImIARpTcgwtmxbF-imkN-vmGFAhaI6KY1d6SBEHmNUTElytrh410aV4pLVsoXUrff1o2K6" alt="Більшість лідерів G20 «рішуче засудили» вторгнення РФ в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У підсумковій декларації саміту G20 йдеться, що більшість лідерів рішуче засудили вторгнення Росії в Україну.</p></div>
            </div>
        </a><a href='https://gordonua.com/ukr/news/war/komarovskij-samit-g20-mozhe-stati-platformoju-izoljatsiji-putina-1636346.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Комаровський: Саміт G20 може стати платформою ізоляції Путіна</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAOpCM5To7DQKE5PZVVWAGY4obDtWQfcjl_-5Im7VGp3Llwa8usl3ufDou5HRLQtoPxgFdPxoV" alt="Комаровський: Саміт G20 може стати платформою ізоляції Путіна" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Той факт, що Росія становить загрозу всьому людству, на нинішньому етапі зрозумілий не лише Україні, а й усім, хто...</p></div>
            </div>
        </a><a href='https://hromadske.ua/posts/grupa-rozbratu-samit-g20-she-bilshe-pidkresliv-svit-rozkolovsya-cherez-ukrayinu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Група розбрату». Саміт G20 ще більше підкреслив: світ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTTwtHZm7BMV6mcn1axGuVszygDjkHE2PWagZFNfe6TVhqg5qnzvYNQURmFNHph-7Ud9wdTRtY" alt="«Група розбрату». Саміт G20 ще більше підкреслив: світ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Можливо, вас це здивує, та саміт «Групи двадцяти» взагалі не мав стосуватися України. Індонезія, яка у 2022 році взяла на себе головування у G20, проголосила&nbsp;...</p></div>
            </div>
        </a><a href='https://glavcom.ua/publications/pidsumki-samitu-g20-prinizhena-rosija-striljaje-nato-ne-pospishaje-zakhishchati-polshchu-889538.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Підсумки саміту G20: принижена Росія стріляє, НАТО не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7TvcR8tWzXtrLpHzD79897IZ96G-RcfvJay-pc1F5WQO7gjKD8_gF0rKeyk_Hw4z9FntYmM8o" alt="Підсумки саміту G20: принижена Росія стріляє, НАТО не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На саміт прибули лідери «Великої двадцятки» – усі, крім одного. Російський президент Володимир Путін не знайшов у собі сміливості приїхати на G20 і відправив&nbsp;...</p></div>
            </div>
        </a><a href='https://www.armyfm.com.ua/ua/samit-g20-na-tli-neperekonlivoi-peremogi-respublikanciv-u-ssha/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Саміт G20 на тлі непереконливої перемоги республіканців у США</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQBjceROgk3USjrQFwlwxy-4hV3Z4FUjBgIUmi2m9m1idyn3Vd8C6J2o148MJGvdbRpQECNsvJm" alt="Саміт G20 на тлі непереконливої перемоги республіканців у США" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>G20, США, Китай, вибори, Конгрес, Республіканська, Демократична, партія, саміт, перемога.</p></div>
            </div>
        </a><a href='https://ru.euronews.com/2022/11/16/g20-final-statement'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Саммит G20: &quot;проблемы безопасности влияют на экономику&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSc04Qj9wYgrASN1SPPNWQ3G286HU566Nwc-1oJJZUnN-dKEIjDofYXlVYD73xTy3kc0TGs1gMf" alt="Саммит G20: &quot;проблемы безопасности влияют на экономику&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В итоговом заявлении говорится, что G20 не является площадкой для решения проблем безопасности, но такие проблемы имеют значительные последствия для мировой&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}