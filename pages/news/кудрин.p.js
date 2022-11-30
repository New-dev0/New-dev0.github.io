import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Кудрин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Кудрин"/>
        <meta name="description" content="Trending News about Кудрин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Кудрин</h1>
            <Image width={800} height={500} src="https://iv.kommersant.ru/SocialPics/5694355_26_2300467_1169359902" alt="Кудрин"/>
            <h3>Recent News</h3>
            <a href='https://www.kommersant.ru/doc/5694355'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Алексей Кудрин уйдет по Конституции</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSFanA1AKR3kmviNv0nvbgYdOZpFeVWfwaMGp6DK0AAtIN_-dd00bVPJ1-yXojjOkBICy77ZFZm" alt="Алексей Кудрин уйдет по Конституции" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На пленарном заседании Совета федерации в среду Алексей Кудрин будет освобожден от должности главы Счетной палаты (СП). Сенаторы впервые примут отставку&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vedomosti.ru/politics/articles/2022/11/29/952612-kudrin-pokidaet-post-glavi-schetnoi-palati'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кудрин покидает пост главы Счетной палаты</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1NMBEm_gQDPOo3pa1oMSik2El6FB_YBc834tXsn9powmEzXHSZfm2KYB2fyiIKGUTzXV_A0LY" alt="Кудрин покидает пост главы Счетной палаты" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава Счетной палаты Алексей Кудрин во вторник, 29 ноября, сообщил о намерении покинуть контрольное ведомство. В своем Telegram-канале он написал, что подал&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/episodes/2022/11/29/rasskazyvaem-istoriyu-alekseya-kudrina-kak-nachinalas-ego-kariera-liberalnogo-reformatora-i-pochemu-zakonchilas-nyneshney-pochetnoy-pensiey-v-yandekse'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Рассказываем историю Алексея Кудрина. Как начиналась его ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTdGvpd67uYsD7ch8gj2uEzJKXadiwKv_QfluZWpUZmcKF8wxwEIqjMuUArftwKbE3M6JkSdiAT" alt="Рассказываем историю Алексея Кудрина. Как начиналась его ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>29 ноября Совет Федерации получил представление Владимира Путина об освобождении Алексея Кудрина от должности председателя Счетной палаты.</p></div>
            </div>
        </a><a href='https://www.cnews.ru/news/top/2022-11-29_kudrin_uhodit_s_gossluzhby'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кудрин уходит с госслужбы, чтобы возглавить «Яндекс» и стать ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTsazUDcmaUha8L_xTY450Rrwx4A0LfO-YiMvB1zSmFRlojCQjhTZwISKZmGwQR8zRxEJBa0LPD" alt="Кудрин уходит с госслужбы, чтобы возглавить «Яндекс» и стать ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее появились слухи о том, что Кудрин может возглавить «Яндекс». Об этом писали издания РБК и The Bell. Утверждалось также, что 24 ноября 2022 г. Кудрин&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-29/ekonomist-rasskazal-gde-budet-rabotat-ostavivshiy-post-glavy-schetnoy-palaty-aleksey-kudrin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экономист рассказал, где будет работать оставивший пост ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6tHmnL-ExDr8BMzz_Z3_6Du3vJ1vguDjTOh8582BSFIg5oqFUxBYoOssCmEmRR8K7PcWaffKS" alt="Экономист рассказал, где будет работать оставивший пост ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Он отметил, что в жизни Кудрина настало время перемен. Фото: Роман Пименов/«Петербургский дневник». Директор Института социально-экономических исследований&nbsp;...</p></div>
            </div>
        </a><a href='https://vc.ru/hr/550200-aleksey-kudrin-podal-zayavlenie-ob-uhode-s-posta-glavy-schetnoy-palaty-chtoby-zanyatsya-bolshimi-proektami'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Алексей Кудрин подал заявление об уходе с поста главы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Алексей Кудрин подал заявление об уходе с поста главы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кудрин написал в Telegram, что подал соответствующее заявление Владимиру Путину. Он отметил, что провёл в госсекторе суммарно около 25 лет и сейчас хотел бы&nbsp;...</p></div>
            </div>
        </a><a href='https://ko.ru/articles/posledniy-liberal-kudrin-iz-schetnoy-palaty-perekhodit-v-yandeks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Последний либерал: Кудрин из Счетной палаты переходит в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTeU3ik1fhMqNUT6NVeng50w0-zV50IB-IbZkx9-47hW0z9pE9l6llKFeNGrAhnEts_v5hZWWvn" alt="Последний либерал: Кудрин из Счетной палаты переходит в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Алексей Кудрин подтвердил свой уход из Счетной палаты. В дальнейшем он может возглавить главную IT-корпорацию страны.</p></div>
            </div>
        </a><a href='https://www.youtube.com/watch?v=2L55HHox7yc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Отставка Кудрина | Бунт матерей продолжается | Суд над Яшиным</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmxtmnMhz659lX1mFjxnkwcEEeXGiawTM15ix6NiH2j6Q2qwcHmEXrpPNXLESSMAtENvzfr6d1" alt="Отставка Кудрина | Бунт матерей продолжается | Суд над Яшиным" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Председатель Счётной палаты РФ Кудрин покидает свой пост — ранее СМИ писали, что Кудрин возглавит «Яндекс». Матерей и жён мобилизованных сахалинцев отправят&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}