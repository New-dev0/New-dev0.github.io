import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Володимир Вакуленко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Володимир Вакуленко"/>
        <meta name="description" content="Trending News about Володимир Вакуленко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Володимир Вакуленко</h1>
            <Image width={800} height={500} src="https://racurs.ua/content/images/Publication/News/17/72/58/preview_w696zc1.jpg" alt="Володимир Вакуленко"/>
            <h3>Recent News</h3>
            <a href='https://racurs.ua/ua/n177258-okupanty-vykraly-ta-vbyly-na-harkivschyni-dytyachogo-pysmennyka.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти викрали та вбили на Харківщині дитячого письменника</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzAF0EvRLCGt11Ya0Lf-d1yKnXbaA4IoIPxp1xRF4n7Ab7YszWo-UhFrOugrCG42B49wvm-82F" alt="Окупанти викрали та вбили на Харківщині дитячого письменника" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Під час окупації Харківщини, в одному з окупованих сіл Ізюмщини, було викрадено та вбито українського письменника Володимира Вакуленка. Про це свідчать&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/327144-pismennika-volodimira-vakulenka-vbili-pid-cas-okupacii-rozsliduvanna-i-rezultat-dnk/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Письменника Володимира Вакуленка вбили під час окупації ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQurmtRz9Z6XwCzZgxDwhik3M9RNZAndVEB22JXnovedKpNWPf2jJ-eaoesJ9DISrtoj0miOOh0" alt="Письменника Володимира Вакуленка вбили під час окупації ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Дитячого письменника Володимира Вакуленка вбили на Харківщині під час окупації РФ. Журналісти Суспільного отримали фото докази та результати&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/society/volodimir-vakulenko-motoroshni-podrobici-ubivstva-rosiyanami-dityachogo-pismennika-novini-harkova-12061116.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Передували &quot;обшук&quot; і катування: з&#39;явилися нові деталі убивства ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQvAUX62zqP6a0ivHiV_XEL8XzP8g2DdiddsiRyMrY9mk7ggCXPfit0PRQBCUWqKatobXtBm-Eg" alt="Передували &quot;обшук&quot; і катування: з&#39;явилися нові деталі убивства ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вакуленко зник ще у березні. Зникненню письменника передували обшуки і катування російськими військовими. Рідні вважають, що чоловіка могли здати місцеві.</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/na-harkivschini-rosiyani-vbili-dityachogo-pismennika-volodimira-vakulenka-tilo-znayshli-u-bratskiy-mogili-2211829.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Харківщині росіяни вбили дитячого письменника Володимира ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ3YTM7yz6ThfC-AEpDEurDDBCcJMMPwdvQTNNFbjgh-ylIbpT79NfHdRc5V1hq-d5nCZZRxrbt" alt="На Харківщині росіяни вбили дитячого письменника Володимира ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Харківській області під час окупації росіяни вбили дитячого письменника Володимира Вакуленка. Його тіло знайшли у братській могилі.</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/news-pysmennyk-vakulenko-smert/32152681.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«ДНК-експертиза підтвердила»: письменника Вакуленка вбили ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqBA8A-SEBH6NP2Jtb7jQbjdp5Wj5BOW0eYU4lKEVi0bfConEYP0dCvxzplc0mrROFfw4VrEgY" alt="«ДНК-експертиза підтвердила»: письменника Вакуленка вбили ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Володимир Вакуленко зник у Капитолівці у березні 2022 року. Батьки письменника понад пів року шукали його.</p></div>
            </div>
        </a><a href='https://vechirniy.kyiv.ua/news/75009/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Дитячого письменника Володимира Вакуленка вбили в російській ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQYCEuQfqsfo6CKckqJXufUVKHWgzKTJfIehVujfxPMhCyAL7fXFM6Q5Dql1R9mnPDfCUJ26QhT" alt="Дитячого письменника Володимира Вакуленка вбили в російській ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зазначається, що Володимир Вакуленко зник у селі Капитолівка біля Ізюме ще в березні 2022 року. Через пів року стало відомо, що його викрали російські військові&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.interfax.com.ua/news/general/875155.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Детский писатель Владимир Вакуленко был убит во время ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS1kufIVowhufPXlx7Gk06RWTg0tdeJdelIU1ZKvu6yXo49HKU7_jcWbyQBg8CY6-dZdPalfrA9" alt="Детский писатель Владимир Вакуленко был убит во время ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинский детский писатель, поэт и лауреат ряда литературных премий Владимир Вакуленко был убит во время оккупации с.Капитоловка Изюмского района&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/ukraine/events/vladimir-vakulenko-telo-pisatelya-nashli-v-meste-massovogo-zahoroneniya-v-izyume-50287282.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тело убитого оккупантами писателя Владимира Вакуленко ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSoWmqcdFYsMHQJD3IUwj3B6bhfmoIfsWokPU9pHsH7NPvYH61A2eUwJUa667yHGzr-PxVNF5sG" alt="Тело убитого оккупантами писателя Владимира Вакуленко ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Во время оккупации Изюма и части Харьковской области российские военные похитили и убили детского писателя Владимира Вакуленко.</p></div>
            </div>
        </a><a href='https://www.unian.net/society/vladimir-vakulenko-chto-izvestno-ob-ischeznovenii-i-ubiystve-ukrainskogo-pisatelya-novosti-harkova-12060255.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Похитили и убили: стала известна судьба писателя Вакуленко ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTw9ktooJqhMHrepvhmDTizSBL-IVMweZwtAiD8_7_QNhUaOw8OLbJ_Cw45mNxX5DDYGxOCakvg" alt="Похитили и убили: стала известна судьба писателя Вакуленко ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>50-летний писатель, поэт и лауреат многочисленных литературных премий Владимир Вакуленко обнаружен среди убитых русскими во время оккупации Харьковщины.</p></div>
            </div>
        </a><a href='https://meduza.io/feature/2022/11/29/v-massovom-zahoronenii-v-izyume-obnaruzhili-telo-pisatelya-vladimira-vakulenko'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В массовом захоронении в Изюме обнаружили тело писателя ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSJSbt_X1X0ctZHvKF39xjcPJCPSpSNsnpiQ_9f06EaGyAyd3IAyrjzJ002RwJ1-57BNvl28JFT" alt="В массовом захоронении в Изюме обнаружили тело писателя ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Украинский писатель Владимир Вакуленко, о судьбе которого ничего не было известно с марта 2022 года, погиб в Харьковской области во время оккупации.</p></div>
            </div>
        </a>
        </Template></>;
}