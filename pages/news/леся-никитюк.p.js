import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Леся Никитюк</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Леся Никитюк"/>
        <meta name="description" content="Trending News about Леся Никитюк" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Леся Никитюк</h1>
            <Image width={800} height={500} src="https://ye.ua/images/news/_Lesya_Nikityik_vipustila_pisnyi_pro_zvilnennya_Hersonu_1_2022_11_17_08_24_52.png" alt="Леся Никитюк"/>
            <h3>Recent News</h3>
            <a href='https://ye.ua/kultura/61614_Lesya_Nikityik_vipustila_pisnyi_pro_zvilnennya_Hersonu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Леся Нікітюк випустила пісню про звільнення Херсону</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuxG3m_86EVmpTUM3M4Mk5S20YAlwciWJ1Cq3ssjrabz5b3w9MoM79QCc64evy2eFdGmmduNtH" alt="Леся Нікітюк випустила пісню про звільнення Херсону" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Хмельничанка у новій пісні також прогнозує повернення Криму, Донбасу та Луганська.</p></div>
            </div>
        </a><a href='https://tsn.ua/glamur/lesya-nikityuk-verhi-na-kavunah-u-kaveri-na-hit-rotaru-zaspivala-pro-zvilneniy-herson-na-kremli-vzhe-trizub-2203750.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Леся Нікітюк верхи на кавунах у кавері на хіт Ротару заспівала ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNtEzdyPfl8mqJqKt64LFm_oui_0RV6Ou92UhMouh2P6zg2PruX7ZKxez4ZxxQzw9ElUfB1ipK" alt="Леся Нікітюк верхи на кавунах у кавері на хіт Ротару заспівала ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ведуча Леся Нікітюк потішила шанувальників випуском нового хіта - артистка зробила кавер на пісню Софії Ротару &quot;Только этого мало&quot; і заспівала про&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/lite/music/set-razryvaet-kaver-lesi-nikityuk-na-pesnyu-sofii-rotaru-video-12048642.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мережу розриває кавер Лесі Нікітюк на пісню Софії Ротару (відео)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRy16s1pHsxMCw-THyDxymVAyTfF1h32FOus3uT6EOhc3q0QcDDdD_9_DhEjXsFldMJ0T2_Sxst" alt="Мережу розриває кавер Лесі Нікітюк на пісню Софії Ротару (відео)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українська телеведуча Леся Нікітюк випустила кавер на пісню Софії Ротару&quot;тільки цього мало&quot;. Мережа вже встигла відреагувати на творчість знаменитості.</p></div>
            </div>
        </a><a href='https://showbiz.24tv.ua/lesya-nikityuk-perespivala-hit-sofiyi-rotaru-tilki-tilki-sluhati_n2199617'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Леся Нікітюк переспівала хіт Софії Ротару: трек про звільнений ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYrWv-f8yLZaSueG6-3wqD_AmAhTZxnxMKyEkh56Px4wvRmn7amL2OpCWS5WS4ZI77dSEjD8PQ" alt="Леся Нікітюк переспівала хіт Софії Ротару: трек про звільнений ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Леся Нікітюк випустила трек про звільнений Херсон – Тільки тільки. Це кавер на російськомовний хіт Софії Ротару. Слухайте пісню онлайн на Showbiz 24.</p></div>
            </div>
        </a><a href='https://showbiz.24tv.ua/ru/lesja-nikitjuk-perepela-hit-sofii-rotaru-tilki-tilki-slushat_n2199632'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Леся Никитюк перепела хит Софии Ротару: трек об ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYrWv-f8yLZaSueG6-3wqD_AmAhTZxnxMKyEkh56Px4wvRmn7amL2OpCWS5WS4ZI77dSEjD8PQ" alt="Леся Никитюк перепела хит Софии Ротару: трек об ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Леся Никитюк выпустила трек об освобожденном Херсоне – Тільки тільки. Это кавер на русскоязычный хит Софии Ротару. Слушайте песню онлайн на Showbiz 24.</p></div>
            </div>
        </a><a href='https://tabloid.pravda.com.ua/focus/63760f962e290/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;На кремлі вже тризуб&quot;: Нікітюк у кавунах переспівала відому ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTGpP39Mln12XMczim_oWCK8VL-HMaOezpj6novsxX_GwD8kWH6N2rbuOBqZdbSHwqKIPpg6K_T" alt="&quot;На кремлі вже тризуб&quot;: Нікітюк у кавунах переспівала відому ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Леся Нікітюк заспівала пісню “Тільки тільки”, за основу якої було взято музику з хіта Софії Ротару “Только этого мало”, відео.</p></div>
            </div>
        </a><a href='https://galka.if.ua/na-kremli-vzhe-tryzub-i-rusnia-povtikala-lesia-nikitiuk-vrazyla-kaverom-na-pisniu-rotaru/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Кремлі вже тризуб, і русня повтікала, – Леся Нікітюк вразила ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQP5VcA03tCODnqRNw7ZgFxwX53Q05se4-hgS2enc3l8JT4275KPyhB4dls8LrZS9LHEzmUyqqd" alt="На Кремлі вже тризуб, і русня повтікала, – Леся Нікітюк вразила ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українська телеведуча Леся Нікітюк випустила кавер на пісню Софії Ротару &quot;Только этого мало&quot;. Пісню вона присвятила українським військовим, які звільнили&nbsp;...</p></div>
            </div>
        </a><a href='https://novy.tv/ua/le-marshrutka/news/2022/11/17/lesya-nikityuk-tilky-tilky-sluhaty-onlajn-tekst-slova-pisni/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Українцям завжди хочеться трішки більше»: Леся Нікітюк ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvChlk-Mji_E5joCQbJNz2VvxCFe_VUadySRn5nujkYzMUw7kFwsqlqlJyNpXWU657QWfmXZzy" alt="«Українцям завжди хочеться трішки більше»: Леся Нікітюк ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Слухати пісню Леся Нікітюк – Тільки тільки. Слова, текст пісні Тільки онлайн – пізніше на сайті Нового каналу.</p></div>
            </div>
        </a><a href='https://novy.tv/ru/le-marshrutka/news/2022/11/17/lesya-nikityuk-tilky-tilky-sluhaty-onlajn-tekst-slova-pisni/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Украинцам всегда хочется немножко больше»: Леся Никитюк ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQvChlk-Mji_E5joCQbJNz2VvxCFe_VUadySRn5nujkYzMUw7kFwsqlqlJyNpXWU657QWfmXZzy" alt="«Украинцам всегда хочется немножко больше»: Леся Никитюк ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Слушать песню Леся Никитюк - Тільки тільки. Слова, текст песни Тільки тільки онлайн – позже на сайте нового канала.</p></div>
            </div>
        </a><a href='https://www.unian.net/lite/music/set-razryvaet-kaver-lesi-nikityuk-na-pesnyu-sofii-rotaru-video-12048645.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сеть разрывает кавер Леси Никитюк на песню Софии Ротару ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRy16s1pHsxMCw-THyDxymVAyTfF1h32FOus3uT6EOhc3q0QcDDdD_9_DhEjXsFldMJ0T2_Sxst" alt="Сеть разрывает кавер Леси Никитюк на песню Софии Ротару ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинская телеведущая Леся Никитюк выпустила кавер на песню Софии Ротару &quot;Только этого мало&quot;. Сеть уже успела отреагировать на творчество знаменитости.</p></div>
            </div>
        </a>
        </Template></>;
}