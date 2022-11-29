import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День морской пехоты</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День морской пехоты"/>
        <meta name="description" content="Trending News about День морской пехоты" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День морской пехоты</h1>
            <Image width={800} height={500} src="https://sarnovosti.ru/upload/share/188816.jpg" alt="День морской пехоты"/>
            <h3>Recent News</h3>
            <a href='https://sarnovosti.ru/articles/v-saratove-otprazdnovali-den-morskoy-pekhoty/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Саратове отпраздновали День морской пехоты — Регион 64</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyJUYa9vvugIRmP44PscIG80e6E_3VAePwUv1roFCVlWxkWLebQlDvNH6thwYLAAYxaiZXsbK1" alt="В Саратове отпраздновали День морской пехоты — Регион 64" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Саратове 27 ноября состоялся комплекс мероприятий, посвященных празднованию Дня морской пехоты России. Местом их проведения стал парк Победы на Соколовой&nbsp;...</p></div>
            </div>
        </a><a href='https://gtrk-saratov.ru/v-parke-pobedy-na-sokolovoj-gore-otmetili-den-morskoj-pehoty-rossii/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Парке Победы на Соколовой горе отметили День морской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcREwcgZszFw_1IqPUn-WwiLlE5LSSqEs0Cfb48QmnHH1PQxvQbqb8XJ2wVQY8xUeU5l5AIGTaJl" alt="В Парке Победы на Соколовой горе отметили День морской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Присутствующих военнослужащих и ветеранов морской пехоты с праздником поздравил советник министра внутренней политики и общественных отношений области&nbsp;...</p></div>
            </div>
        </a><a href='https://topwar.ru/205718-den-morskoj-pehoty-rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День морской пехоты России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5PsII2AwNnS3KnTI19pMxg1pXggNqP3uT9E3dBxI_PRuotMDtBWFjwHWZE6XVyIsfoI2-bjfO" alt="День морской пехоты России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День морской пехоты России у нас в стране отмечается ежегодно, 27 ноября Сегодня свой профессиональный праздник отмечают российские военнослужащие,&nbsp;...</p></div>
            </div>
        </a><a href='https://severpost.ru/read/145496/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября - День морской пехоты</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRPHxiKGtuihu0EiYMxvK0VpelmyS8J0pDcBWECZ77Xxu4rHUWhgHcB40u9hbAt3p9XRLVM_63L" alt="27 ноября - День морской пехоты" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>27 ноября в России отмечается День морской пехоты. Он был установлен приказом главнокомандующего ВМФ РФ 19 декабря 1995 года. Дата праздника – 27 ноября&nbsp;...</p></div>
            </div>
        </a><a href='https://tolknews.ru/obsestvo/135270-luchshie-pozdravleniya-s-dnem-morskoy-pehoti-v-proze-stihah-sms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лучшие поздравления с Днем морской пехоты 2022 в прозе ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSwjv5xsZX1InajkvMlZNYDEVoyHF77tCjVNWzpQZTW-5IQOe8YXJWMR0cTdFOr_QYJCBaTJ9ss" alt="Лучшие поздравления с Днем морской пехоты 2022 в прозе ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День морской пехоты приурочен к историческому событию. 27 ноября 1705 года император Петр I выпустил указ о создании &quot;полка морских солдат&quot;</p></div>
            </div>
        </a><a href='https://ura.news/news/1052606243'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пермские морпехи рассказали о погибшем в ходе СВО боевом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNHdCr66K7Mbxn85QkyGc4uviuh1NXAkRfsSbkZnltphCkBVUcjTh_FcEAwurSOUZo9W-J7ExQ" alt="Пермские морпехи рассказали о погибшем в ходе СВО боевом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Они возложили цветы к памятнику «Солдат России» и вспомнили погибших в ходе выполнения спецоперации товарищей, передает корреспондент URA.RU. В мероприятии&nbsp;...</p></div>
            </div>
        </a><a href='https://srgazeta.ru/news/novosti-sterlitamaka/2022-11-27/27-noyabrya-den-morskoy-pehoty-rossii-3047424'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября – День Морской пехоты России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS96Qzz92PtphZPyT8wvB-uPQV1tiCkMwpLAQfXFiRgTsPOQO5SIpQl_UQPoeHMV0mkU1_YxBSa" alt="27 ноября – День Морской пехоты России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чтобы жили стар и млад,. С аппарелей прямо в ад,. Спесь сбивая и доспехи,. На плацдарм идут морпехи. Мы неприятелю – цунами,. Городитесь наши мамы нами,.</p></div>
            </div>
        </a>
        </Template></>;
}