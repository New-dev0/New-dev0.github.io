import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Шебекино</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Шебекино"/>
        <meta name="description" content="Trending News about Шебекино" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Шебекино</h1>
            <Image width={800} height={500} src="https://bel.ru/attachments/748c416f10c5fd487ea4130f9726ae928145b113/store/crop/0/0/1280/720/1280/720/0/272ce74ee8e9a77e1996c34daef55baa22cee97bda745fb26e1158292ffe/0ab863e2-a108-4d30-9823-2801db76e8b1.jfif" alt="Шебекино"/>
            <h3>Recent News</h3>
            <a href='https://bel.ru/news/2022-11-16/v-shebekino-byl-nastoyaschiy-ad-belgorodtsy-vyskazalis-ob-obstrele-goroda-2591176'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«В Шебекино был настоящий ад»: белгородцы высказались об ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQiIKzMxFPNe5fsyU5-FGjVIlHajNQiAty4AnqKkhDSCSJar7ajKc8eHZ7IncAnf4i-AtX6ajbv" alt="«В Шебекино был настоящий ад»: белгородцы высказались об ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ходе обстрела города Шебекино Белгородской области 15 ноября погибли два человека, чуть позже в больнице скончался ещё один. Редакция «Бел.Ру» изучила&nbsp;...</p></div>
            </div>
        </a><a href='https://mirbelogorya.ru/region-news/58-shebekino/51387-podrobnosti-vcherashnego-obstrela-vsu-v-gorode-shebekino.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Подробности вчерашнего обстрела ВСУ в городе Шебекино</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTznfBd_skoI0lfhPnDYpT4mSGmphXHReznlkZkrm4nR8_KRsJTgLi1BgUhxf7gSykNVx8zb9b" alt="Подробности вчерашнего обстрела ВСУ в городе Шебекино" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ВСУ продолжают обстреливать наш регион. Сегодня над Белгородом и Белгородским районом работала система ПВО. А накануне тяжёлый удар пришёлся сразу на&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/news/2022/11/15/v-belgorodskoy-oblasti-pri-obstrele-prigranichnogo-goroda-shebekino-pogibli-dva-cheloveka'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Белгородской области при обстреле приграничного города ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTIFI3GkOzvs1ByibsJaQgS-8W7u8fxmIPcPdlclIpxqvOocjEUoVLQ3sJcC0Tl7p6lnTxGsOc" alt="В Белгородской области при обстреле приграничного города ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Два человека погибли и еще трое пострадали в результате «вечернего обстрела» города Шебекино, расположенного в Белгородской области на границе с Украиной.</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/15/71818982/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Два человека погибли при обстреле города Шебекино</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQO1wrZ7Xqnuv7_mGxqqeuIxOzZ6JJQn3UffhX3MgXUMQeM4ckukMAu-CzzvmZfJuLCw9I2lNka" alt="Два человека погибли при обстреле города Шебекино" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате обстрела города Шебекино в Белгородской области погибли два человека. Еще трое пострадали, сообщил 15 ноября - Происшествия - 15 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/15/vsu-otvetili-obstrelom-po-shebekino-belgorodskoy-oblasti-est-zhertvy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ ответили обстрелом по Шебекино Белгородской области ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS61ATAX6VYRKSy3q7rGi-uFNLMf4_Oc9nZYz3FVyctjar0ssrE90S8KE4arzYZcDFCrrEXiz5y" alt="ВСУ ответили обстрелом по Шебекино Белгородской области ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В ответ на удары ВС России по объектам критической инфраструктуры Украины ВСУ обстреляли город Шебекино в Белгородской области РФ.</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/872610'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Число погибших при обстреле белгородского Шебекина выросло ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUAh64jR3lhtnDtzpTNerNJFI3ZPknaqCg51dS2nmYrVRndoKlF6QiTHkOQ4Hjd_ISg5UOIp7b" alt="Число погибших при обстреле белгородского Шебекина выросло ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 15 ноября. INTERFAX.RU - Министр здравоохранения Белгородской области Андрей Иконников сообщил о третьем человеке, погибшем после обстрела города&nbsp;...</p></div>
            </div>
        </a><a href='https://topwar.ru/205154-vsu-nanesli-udar-po-shebekino-belgorodskoj-oblasti-imejutsja-pogibshie.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ВСУ нанесли удар по Шебекино Белгородской области, имеются ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8YyGfv2LuBwPdAvwDlMJapCgHMD_k5U4dbR_ZVckQ01PMG-IUFQV7CEwBjSTpRyYlFdh3vVkV" alt="ВСУ нанесли удар по Шебекино Белгородской области, имеются ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Обстрел Шебекино стал уже третьим ударом по Белгородской области за сегодняшний день Украинские военные формирования нанесли очередной удар по Белгородской&nbsp;...</p></div>
            </div>
        </a><a href='https://bel.ru/news/2022-11-16/gladkov-rasskazal-o-sostoyanii-ranennyh-pri-obstrele-shebekino-2591048'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Гладков рассказал о состоянии раненных при обстреле ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTkspnZN2kIfFbAGgLYwslcp2SM-3DpYOw0mkSAmza76aCbpOBMWEgpfsJK36nYywHDA7YAJJRn" alt="Гладков рассказал о состоянии раненных при обстреле ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Глава региона рассказал о состоянии людей, которые пострадали от атаки ВСУ на Шебекино. Подробнее на сайте издания Bel.ru.</p></div>
            </div>
        </a>
        </Template></>;
}