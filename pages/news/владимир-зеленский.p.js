import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Владимир Зеленский</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Владимир Зеленский"/>
        <meta name="description" content="Trending News about Владимир Зеленский" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Владимир Зеленский</h1>
            <Image width={800} height={500} src="" alt="Владимир Зеленский"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/feature/2022/12/09/zelenskiy-zayavil-chto-rossiyskaya-armiya-prevratila-bahmut-v-vyzhzhennye-ruiny-vot-kak-vyglyadit-gorod'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский заявил, что «российская армия превратила Бахмут в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS4QUbyFxZFoNOrT-0S539TC5d5uraOhnkyw11Oh5SCeCl0M54NG9U3mpR5Ha414ZNqwIousmPK" alt="Зеленский заявил, что «российская армия превратила Бахмут в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зеленский заявил, что «российская армия превратила Бахмут в выжженные руины». Вот как выглядит город. 11:14, 9 декабря 2022. Источник: Meduza.</p></div>
            </div>
        </a><a href='https://ura.news/news/1052609608'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский признал тяжелую обстановку для ВСУ в четырех ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgrmeLmUlpvDUmHSuqijeZugQjEydvuodts9IrhUR36GMV-pVWe_Yes9y0OBSQUNwSRz35IO-J" alt="Зеленский признал тяжелую обстановку для ВСУ в четырех ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бахмут, Соледар, Марьинка, Кременная сегодня самые горячие точки на фронте. Об этом заявил президент Украины Владимир Зеленский. Только на URA.RU.</p></div>
            </div>
        </a><a href='https://hvylya.net/news/263934-zelenskiy-na-sleduyushchey-nedele-ozhidayutsya-vazhnye-resheniya-dlya-ukrainy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский: На следующей неделе ожидаются важные решения ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTW0dtNQRQ-LdaBFhAwxuKz6Me54_A2Mxtqa94C0UD8nLqOFktFN18Sg1hzrBvmp-oH4hPXp_Ms" alt="Зеленский: На следующей неделе ожидаются важные решения ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Фронтовая ситуация остается очень тяжелой на ключевых направлениях в Донбассе – Бахмут, Соледар, Марьинка и Кременная.</p></div>
            </div>
        </a><a href='https://news.ru/world/zelenskij-nazval-napravleniya-s-samoj-tyazheloj-situaciej-dlya-vsu-v-donbasse/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский назвал направления с самой тяжелой ситуацией для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1wzUjejtb5aA2Mx3d-BFDO5fuUYXcGTLOKLW5i6p1UuWkGHCxlHDCuoQThi0JpVsrq3hCd7F3" alt="Зеленский назвал направления с самой тяжелой ситуацией для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зеленский назвал ситуацию в Бахмуте и Соледаре очень тяжелой для ВСУ.</p></div>
            </div>
        </a><a href='https://argumenti.ru/world/2022/12/803411'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский назвал очень тяжелой ситуацию в районе Бахмута ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSkslxhZK3OnuOjfPGpKeYlqRwlDl9VY5CObNF_kKNZGR46qfRf8zmigBrk8BVe0H6U08vzHUhV" alt="Зеленский назвал очень тяжелой ситуацию в районе Бахмута ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Украины Владимир Зеленский в своем вечернем видеообращении в пятницу рассказал о сложной боевой обстановке для ВСУ на ряде направлений в Донбассе.</p></div>
            </div>
        </a><a href='https://vm.ru/news/1017669-zelenskij-nazval-samye-tyazhelye-dlya-vsu-napravleniya-specoperacii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зеленский назвал самые тяжелые для ВСУ направления ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSphkau2iQBhNz6Bnv2FAA80VOfp_hqF-rrvx6I313WqUr4Ixti09Vyk0DMdT57hRePvUKH6yb0" alt="Зеленский назвал самые тяжелые для ВСУ направления ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня украинские военнослужащие испытывают наибольшие затруднения в районах городов Бахмут, Соледар, Марьинка и Кременная. Об этом в пятницу, 9 декабря,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/12/9/7380111/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты фактически разрушили Бахмут – Зеленский</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSuizrc0_EVv-JEACKtga6k_wnOq1YJ_F-95Pw8Nd2N4M0Gy329PCQRqgsoQ8dF3n7o_wOQ9gID" alt="Оккупанты фактически разрушили Бахмут – Зеленский" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент Владимир Зеленский заявил о тяжелой ситуации на ключевых направлениях фронта на Донбассе, по его словам, Бахмут россияне фактически разрушили.</p></div>
            </div>
        </a>
        </Template></>;
}