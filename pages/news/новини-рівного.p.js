import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Новини рівного</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Новини рівного"/>
        <meta name="description" content="Trending News about Новини рівного" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Новини рівного</h1>
            <Image width={800} height={500} src="https://itvmg.com/img/1000/20221115_4696.jpg" alt="Новини рівного"/>
            <h3>Recent News</h3>
            <a href='https://itvmg.com/news/vnaslidok-obstrilu-rivnoho-e-seryozni-poshkodzhennya-elektromerezhi---tretyak-80364'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Внаслідок обстрілу Рівного є серйозні пошкодження ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLZxAja2zDhEDThLTMb5hTgOThVuC-r0VrTav0adBYClODpmZFwU4a-CHkyaV6eb1DW9nlDODX" alt="Внаслідок обстрілу Рівного є серйозні пошкодження ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні, 15 листопада, російські терористи завдали ракетний удар по Рівному. Через це частина міста наразі знеструмлена.</p></div>
            </div>
        </a><a href='https://rivnepost.rv.ua/news/rosiyski-raketi-poshkodili-u-rivnomu-desyat-budinkiv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Російські ракети пошкодили у Рівному десять будинків. Область ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQC_8CD6r484fKVqJpYQKtwgxpaoUinvtfYQtI-W4Wx4ZKeAomI7NqGzprjeL8TEd3ZwoL_m2IT" alt="Російські ракети пошкодили у Рівному десять будинків. Область ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Після ракетного удару армії РФ по Рівному загиблих і поранених немає. Як повідомив голова Рівненської ОВА Віталій Коваль, пошкодження отримали приватні&nbsp;...</p></div>
            </div>
        </a><a href='https://itvmg.com/news/deputati-z-rivnenshchini-zvernulisya-do-zelenskoho-iz-zaklikom-pidtrimati-zelenu-transformatsiyu--80317'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Депутати з Рівненщини звернулися до Зеленського із закликом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRa8ITjSt9yRr2Vlhvyl2J8mf2mL8PiYvF8uLOMRTEo74byR5W5uUYY6VAT7amswZCkbO12Cu1O" alt="Депутати з Рівненщини звернулися до Зеленського із закликом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Депутати Рівненської міської ради звернулися до Президента України та Кабінету Міністрів України щодо підтримки &quot;зеленої&quot; повоєнної відбудови громад.</p></div>
            </div>
        </a><a href='https://lb.ua/society/2022/11/15/535992_udar_obiektu_kritichnoi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Удар по об&#39;єкту критичної інфраструктури Рівного, частина міста ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS795ble3gHzwujGzGdIkWUuGzbYS62QlZ08YMAnxY2RZJvoXbu2M_QodOp_W2QNmtDqkAJOvbp" alt="Удар по об&#39;єкту критичної інфраструктури Рівного, частина міста ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Протиповітряна оборона спрацювала на Хмельниччині, є два влучання. У частині Хмельницького відсутнє світло. Читайте головні новини LB.ua в соціальних мережах&nbsp;...</p></div>
            </div>
        </a><a href='https://www.0362.ua/news/3497199/u-rivnomu-e-priloti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Рівному є прильоти</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSU7MTYkuVYc7375EeHzfSALIpeaLMkPpOh9p5Ul-8w_I7VKLcl_BhGIXWoo_elPpU5vaaRTQ2g" alt="У Рівному є прильоти" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Міський голова Рівного Олександр Третяк у своєму Telegram повідомив, що сьогодні ворог вдарив по місту ракетами. &quot;Зафіксовано влучання по об&#39;єкту критичної&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/ukr/ukraine/events/rosiya-vdarila-po-kritichniy-infrastrukturi-v-rivnomu-harkovi-ta-hmelnickomu-novini-ukrajini-50284250.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Російські окупанти вдарили по об&#39;єктах критичної ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRM1ekJWWeteETojh2exAyKAmo7fG-KAgP4fBWUAbOaA-_hTTjXxx1FCYu7MSWL2_DxIVxwF_Go" alt="Російські окупанти вдарили по об&#39;єктах критичної ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські війська у вівторок, 15 листопада вдарили по об&#39;єктах критичної інфраструктури в Рівному, Харкові, а ткож Хмельницькому.</p></div>
            </div>
        </a><a href='https://www.unn.com.ua/uk/news/2003164-okupanti-vdarili-po-kritichniy-infrastrukturi-rivnogo-chastina-mista-bez-svitla'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти вдарили по критичній інфраструктурі Рівного: частина ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT7vcXZyW_KsUei3iuVEV0daRr3PvqA_wXB7Je3FNk2AfyzsQKgAEvdUy983tKUNDiuiSMEmdOY" alt="Окупанти вдарили по критичній інфраструктурі Рівного: частина ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>КИЇВ. 15 листопада. УНН. Російські окупанти вдарили по об&#39;єкту критичної інфраструктури у Рівному. Про це в Telegram повідомив мер міста Олександр Третяк,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}