import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День Героев Отечества</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День Героев Отечества"/>
        <meta name="description" content="Trending News about День Героев Отечества" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День Героев Отечества</h1>
            <Image width={800} height={500} src="" alt="День Героев Отечества"/>
            <h3>Recent News</h3>
            <a href='https://www.gov.spb.ru/press/governor/251340/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В День Героев Отечества губернатор вручил в Эрмитаже ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRV8WBP_6OdUAnxKNy2ldWelAOr7JeesrW_BtohzQj6IUFIf4nOxuq059mIIMp9kJlTS2ivWgEg" alt="В День Героев Отечества губернатор вручил в Эрмитаже ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По традиции в этот день в Георгиевском зале Государственного Эрмитажа состоялась торжественная церемония выноса знамен и штандартов Российской Императорской&nbsp;...</p></div>
            </div>
        </a><a href='https://gtrk-kostroma.ru/news/kostroma-vmeste-so-vsey-stranoy-otmechaet-den-geroev-otechestva/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кострома вместе со всей страной отмечает День Героев ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtFvYBAMhSq53uAJIsVM79wnPbX-U46U8joFeyH7Tny-RuwXAB0nvop3-cweHLSr_OeMuWSiJr" alt="Кострома вместе со всей страной отмечает День Героев ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодняшняя памятная дата была установлена в 2007 году, хотя сам праздник существовал еще в XVIII веке – он считался Днём георгиевских кавалеров.</p></div>
            </div>
        </a><a href='https://ryazpressa.ru/v-den-geroev-otechestva-chuchkovczy-vozlozhili-czvety-k-obelisku-voinam-zemlyakam/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В День Героев Отечества чучковцы возложили цветы к обелиску ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSojM3dZOA6od-DkW2nfSPabVk13icBuCaXRmO2t0W4vsv-3pfb-w83xILtQYsmmfzhI_CMOGGC" alt="В День Героев Отечества чучковцы возложили цветы к обелиску ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>9 декабря в поселке Чучково у обелиска павшим соотечественникам в годы Великой Отечественной войны 1941–1945 годов прошел митинг, посвященный Дню Героев&nbsp;...</p></div>
            </div>
        </a><a href='https://moscow.mchs.gov.ru/deyatelnost/press-centr/novosti/4901596'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>9 декабря - День Героев Отечества - Новости - Главное ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1HGeQrcNIX3Iu0_kr60ywK_LlbT5-vwAksdxfKOQYaD0-jgjcyimYTZHxsP7opKB6A47qhdHc" alt="9 декабря - День Героев Отечества - Новости - Главное ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Московский пожарно-спасательный гарнизон гордится своими героями, чьи подвиги служат примером для всех поколений огнеборцев! Сергей Игнатьевич Постевой – Герой&nbsp;...</p></div>
            </div>
        </a><a href='https://online47.ru/2022/12/09/v-oblastnom-parlamente-v-den-geroev-otechestva-osobo-chestvuyut-alekseya-makhotina-170273'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В областном парламенте в День Героев Отечества особо ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRB3ZgilIxfpcLzqS68Vq-2KX3x2R8HSL0s1tqkMN5-KHOyDTqzF9PD-RYZVvGNTVjX5RRavzuR" alt="В областном парламенте в День Героев Отечества особо ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Депутат и руководитель Ленинградского отделения «Боевое Братство» - Герой России, кавалер Ордена Мужества.</p></div>
            </div>
        </a><a href='https://1yar.tv/article/v-den-geroev-otechestva-gostem-pervogo-yaroslavskogo-stal-evgeniy-aleksandrovich-boltov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В День героев Отечества гостем «Первого Ярославского» стал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJ_XzwzX6y-P2bya0Nmr3ldq6lHTcsB95gmzXkEXsKptpnXZAqQKlDpK-Epm7OBQeijgBPwF14" alt="В День героев Отечества гостем «Первого Ярославского» стал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Смотрите в субботу 10 декабря в 19:00 и в воскресенье 11 декабря в 10:00.</p></div>
            </div>
        </a><a href='https://ntagil.org/news/detail.php?ELEMENT_ID=270441'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День Героев Отечества отмечают в Нижнем Тагиле | Нижний ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="День Героев Отечества отмечают в Нижнем Тагиле | Нижний ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Нижнем Тагиле в День Героев Отечества провели торжественный митинг у памятника тагильчанам-Героям Советского Союза и кавалерам Ордена Славы.</p></div>
            </div>
        </a><a href='https://www.pnzgu.ru/news/2022/12/9/11492875'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ПГУ отметили День Героев Отечества</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSyl9Tg_lgE-gR7S9_mf2vcQMO3E-qsLSnkpTSBEjLtRUOeyxqzD0hmTgXnyxXTii1muJEtaIQN" alt="В ПГУ отметили День Героев Отечества" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Студенты и гости мероприятия почтили память о герое минутой молчания и возложили цветы к мемориальной доске Павла Петрачкова. По завершении мероприятия&nbsp;...</p></div>
            </div>
        </a><a href='https://www.donland.ru/news/20877/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В День Героев Отечества в Зернограде установлен памятный ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgSyMrCjpCA_IXr4vvz_cRQSVpH13WbYPccIpn_ZCws3TFlkV1AgzJDgLxhWqRnCVxl2UX6ASy" alt="В День Героев Отечества в Зернограде установлен памятный ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Зернограде реализуется проект «Имя героя на карте города», в рамках которого на четырех улицах и переулках, носящих имена участников Великой Отечественной&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}