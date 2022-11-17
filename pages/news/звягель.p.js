import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Звягель</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Звягель"/>
        <meta name="description" content="Trending News about Звягель" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Звягель</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/e/5/e5ae995-630-360-1538037820-9554.jpg" alt="Звягель"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/news/2022/11/16/7376642/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Україні перейменували місто Новоград-Волинський</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ2VIibqiXXkX35NPKYSh8Fhu2dV-BvPl39JSaaSrzDmua6akzXXrW3-VxUZtdr3iOVomqukpPF" alt="В Україні перейменували місто Новоград-Волинський" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховна Рада України змінила назву міста Новоград-Волинський у Житомирській області на Звягель на прохання Житомирської обласної ради.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-society/3615895-novogradvolinskij-perejmenuvali-na-zvagel.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новоград-Волинський перейменували на Звягель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXRpF7tBzXo_1Nxe_kfCbGag5pwPMnlsWUvZNMkBoyIzmOyd7hN-LefswlZd9ghki_f_1-1gJD" alt="Новоград-Волинський перейменували на Звягель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховна Рада перейменувала місто Новоград-Волинський Житомирської області на Звягель. Як передає Укрінформ, про це у Фейсбуці повідомив народний депутат Дмитро&nbsp;...</p></div>
            </div>
        </a><a href='https://hromadske.radio/news/2022/11/16/misto-novohrad-volyns-kyy-na-zhytomyrshchyni-pereymenuvaly-na-zviahel'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Місту Новоград-Волинський на Житомирщині повернули ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSCB4oKZtOVciBMjEIa0ac2QWwBNPGb6dsmp82mu-NITuuLad5vH2Ffh0FsDVfNKtvf_Sm4NW1" alt="Місту Новоград-Волинський на Житомирщині повернули ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Перейменування ініціювали жителі з метою повернення населеному пункту його історичної назви Звягель. «Населений пункт вперше згадується в письмовій згадці ХІІІ&nbsp;...</p></div>
            </div>
        </a><a href='https://armyinform.com.ua/2022/11/16/novograd-volynskomu-povernuto-istorychnu-nazvu-zvyagel/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новоград-Волинському повернуто історичну назву – Звягель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmG5MPzijVlXkloHWOCtVVnTBXF5761MGfxoD5q43YjkT_UfeKNKeuJdvN4LM2R2YX1vIa4qtj" alt="Новоград-Волинському повернуто історичну назву – Звягель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Україні перейменували місто Новоград-Волинський, що за 100 км від Рівного. Верховна... Война с Украиной 2022, Война с Украиной последние новости сегодня,&nbsp;...</p></div>
            </div>
        </a><a href='https://decentralization.gov.ua/news/15766'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Місто Новоград-Волинський перейменували на Звягель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQN9VtLMQbmMemVOX2uXkUgrMz04er7kX1r9JwH4RWNE2XXEhq67eaV4hUhpJw62oa0ULpnylO6" alt="Місто Новоград-Волинський перейменували на Звягель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>16 листопада 2022 року Верховна Рада України прийняла Постанову про перейменування міста Новоград-Волинський у Житомирській області.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-uanews/news-zvyagel-nove-misto-na-karti-ukraini-de-vono-16-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звягель – новый город на карте Украины, где он - Новости ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjiH0yA-SQjyWNSFV9c5Y-jXz-SC5TWStLq06LPa6wKR67g5VKA9XFBChw5mJ6KiaXrWByjWZ4" alt="Звягель – новый город на карте Украины, где он - Новости ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Тогда местные жители инициировали возвращение городу исторического названия. К 17 веку город наименовался, как Звягель. В заключении в июле 2022 года&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zhitomir.info/news_210825.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Верховна рада проголосувала за перейменування Новограда ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqTSJcDWdD4OTPV-wyh9Bk6sfQXfpdlNwYDSPkfavZN83SyJa94c_5Zi3gM8FcT-4YFH1IQrQR" alt="Верховна рада проголосувала за перейменування Новограда ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховна рада на пленарному засіданні 16 листопада 2022 року проголосувала за перейменування міста Новоград-Волинський Житомирської області на Звягель,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stopcor.org/ukr/section-uanews/news-zvyagel-nove-misto-na-karti-ukraini-de-vono-16-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звягель - нове місто на карті України, де воно - Новини України ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjiH0yA-SQjyWNSFV9c5Y-jXz-SC5TWStLq06LPa6wKR67g5VKA9XFBChw5mJ6KiaXrWByjWZ4" alt="Звягель - нове місто на карті України, де воно - Новини України ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Тоді місцеві жителі ініціювали повернення місту історичної назви. До 17 століття місто найменувалося, як Звягель. У висновку, в липні 2022 року Житомирська&nbsp;...</p></div>
            </div>
        </a><a href='https://www.currenttime.tv/a/verhovnaya-rada-ukrainy-vernula-gorodu-novograd-volynskiy-ego-istoricheskoe-nazvanie-zvyagel/32133899.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Верховная Рада Украины вернула городу Новоград-Волынский ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSc5CBJ1j_G2FOErk0n_VB-HesjUA6E_NVXQ_8YoBIs1B3oXJa_U7V2MAQbjuDOMBxlxKkpYIGC" alt="Верховная Рада Украины вернула городу Новоград-Волынский ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховная Рада Украины вернула городу Новоград-Волынский Житомирской области его историческое название Звягель. За это решение проголосовали 260 депутатов.</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/32133860.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Украине Новоград-Волынскому вернули название Звягель</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSc5CBJ1j_G2FOErk0n_VB-HesjUA6E_NVXQ_8YoBIs1B3oXJa_U7V2MAQbjuDOMBxlxKkpYIGC" alt="В Украине Новоград-Волынскому вернули название Звягель" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Верховная рада Украины 16 ноября вернула городу Новоград-Волынский Житомирской области его историческое название Звягель. За постановление проголосовали 260&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}