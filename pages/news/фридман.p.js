import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Фридман</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Фридман"/>
        <meta name="description" content="Trending News about Фридман" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Фридман</h1>
            <Image width={800} height={500} src="https://img.pravda.com/images/doc/2/4/248ff2d-fridman-getty.jpg" alt="Фридман"/>
            <h3>Recent News</h3>
            <a href='https://www.pravda.com.ua/rus/news/2022/12/3/7379123/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Британии задержали и отпустили под залог российского ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTCg7g4bs7yxsprg0atkRZR753pPpWsM57v2wnrWx-LMi03tvrGyE1NC1W4yLNW6MMjNXBQx9Gw" alt="В Британии задержали и отпустили под залог российского ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The NCA has conducted a major operation to arrest a wealthy Russian businessman on suspicion of offences including money laundering, conspiracy to defraud the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.ua/world/u-britaniji-zatrimali-rosiyskogo-oligarha-fridmana-zmi-12065916.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Британії затримали російського олігарха Фрідмана - ЗМІ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJ-Jh9q7Np9dm9pwXYBkfQEiQboo1qF411jeSE0LvIlieZjg6QvxyJF87rMYA9VmModRiYfIzM" alt="У Британії затримали російського олігарха Фрідмана - ЗМІ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Британії заявили про арешт 58-річного російського олігарха за підозрою в низці злочинів, зокрема відмиванні грошей. Імовірно, мова йде про Михайла&nbsp;...</p></div>
            </div>
        </a><a href='https://minfin.com.ua/2022/12/04/96673372/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Британии задержан и освобожден под залог российский ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTOrNbzrZD4g5fW58HUPh6Ktiu9zyeYZgRcjkybx3b4TVJjW-Q3hJY9-_yOKPOJ30JSSFzl4lE3" alt="В Британии задержан и освобожден под залог российский ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Национальное агентство по борьбе с преступностью Великобритании (NCA) задержало российского миллиардера Михаила Фридмана по подозрению в отмывании денег,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/world/v-britanii-zaderzhali-rossiyskogo-oligarha-fridmana-smi-12065919.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Британии задержали российского олигарха Фридмана - СМИ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJ-Jh9q7Np9dm9pwXYBkfQEiQboo1qF411jeSE0LvIlieZjg6QvxyJF87rMYA9VmModRiYfIzM" alt="В Британии задержали российского олигарха Фридмана - СМИ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Британии заявили об аресте 58-летнего российского олигарха по подозрению в преступлениях, в том числе отмывании денег. Вероятно, речь идет о Михаиле&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.ru/milliardery/482014-al-fa-bank-oproverg-svaz-fridmana-s-zaderzaniami-v-velikobritanii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Альфа-банк опроверг связь Фридмана с задержаниями в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKr9zNeWGGONhNjuiMVynxKumz_AshihRLgTr6KEIKnJWJurRrAxCU5gN3Z308vISeIemE3RE8" alt="Альфа-банк опроверг связь Фридмана с задержаниями в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Миллиардер и основатель Альфа-банка Михаил Фридман не имеет «никакого отношения» к задержаниям в Великобритании, заявил Forbes представитель банка.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411685-v-londone-zaderzhan-rossijskij-milliarder-mihail-fridman---moskovskie-smi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Лондоне задержан российский миллиардер Михаил Фридман ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ7kYDL7KXGG1kmTUQpefie9aVSAKg8rp1a3Ri72lNj5B177t-lUuk3FxCBL2fJI88w3_z9kPQp" alt="В Лондоне задержан российский миллиардер Михаил Фридман ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В субботу, 3 декабря, Национальное агентство по борьбе с преступностью Великобритании (NCA) сообщило о проведении в Лондоне масштабной операции,&nbsp;...</p></div>
            </div>
        </a><a href='https://delo.ua/ru/politics/v-britanii-zaderzali-i-otpustili-pod-zalog-rossiiskogo-oligarxa-fridmana-407669/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Лондоне задержали и отпустили под залог российского ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcToB7MYI5d1G6JL8qG5f-MxtABGQLgbt7tof9iFetITe_M_Q6jqgSTxSdGMvPDVLHaHi7Xn0Sah" alt="В Лондоне задержали и отпустили под залог российского ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Национальное агентство по борьбе с преступностью Великобритании (NCA) сообщает о проведении операции по задержанию &quot;богатого российского бизнесмена&quot; по&nbsp;...</p></div>
            </div>
        </a><a href='https://ipress.ua/news/u_londoni_zatrymaly_rosiyskogo_biznesmena_zmi_pyshut_shcho_tse_zasnovnyk_alfabanku_myhaylo_fridman_336696.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Лондоні затримали російського бізнесмена: ЗМІ пишуть, що це ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSgBAn-bS6zRi0F8QKAPoV8p4KRfNGfs9v0C6QgvrUQYR9HrtKQgdZTtD2uHLSQVcfWj03gOdh-" alt="У Лондоні затримали російського бізнесмена: ЗМІ пишуть, що це ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Британське Нацагентство по боротьбі зі злочинністю (NCA) повідомило про затримання 58-річного &quot;заможного російського бізнесмена&quot; за підозрою у відмиванні&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/abroad/v-britanii-arestovali-rossijskogo-milliardera-fridmana-nazvana-prichina.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Британии задержали и отпустили под залог российского ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTXJqoAMtll3SCwL86RlsaCg4WK3dp_Asg3e0yJAv-_dr7qUl5F-55Fv2XrVg9CT4f3O0KcikwY" alt="В Британии задержали и отпустили под залог российского ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>24,6 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a><a href='https://hromadske.ua/posts/u-velikij-britaniyi-zatrimali-zamozhnogo-rosijskogo-biznesmena-zmi-pishut-sho-ce-fridman'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Великій Британії затримали «заможного російського ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRHLoJwxS6RV-5XeTuRrR6AXdUbCYIbFt4FTPjk7nTt-x53LMcuurRrrw9IRrBQMJa91D4UpDBL" alt="У Великій Британії затримали «заможного російського ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Національне агентство Великої Британії з боротьби зі злочинністю (NCA) повідомило про затримання «заможного російського бізнесмена» за підозрою в численних&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}