import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Харьковская область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Харьковская область"/>
        <meta name="description" content="Trending News about Харьковская область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Харьковская область</h1>
            <Image width={800} height={500} src="https://static2.gazeta.ua/img2/cache/preview/1121/1121295_w_450.jpg?v=0" alt="Харьковская область"/>
            <h3>Recent News</h3>
            <a href='https://gazeta.ua/ru/articles/np/_rossiyane-atakovali-chetyre-rajona-harkovschiny-kuda-strelyayut/1121295'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне атаковали четыре района Харьковщины: куда стреляют</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0qphtZXThgdED4tYpcyguLOuleICflGHj1_GgA4EkSRfisKfnVUI49HBV_qv35pU0JsLfZnv-" alt="Россияне атаковали четыре района Харьковщины: куда стреляют" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В прошедшие сутки, 17 ноября, российские оккупанты продолжили обстреливать Харьковскую область. Наносили удары по населенным пунктам Купянского, Чугуевского&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/v-kharkovskoj-oblasti-vojska-rf-povredili-obekty-hazodobyvajushchej-otrasli-est-postradavshie-hlava-ova.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Харьковской области войска РФ повредили объекты ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR7k_37-SWBb92-NP_jkq-NFwvgYpODIDWgs1jyQRE9_E6O7RX1poIB7bBowR9G78uIBjqrtw0G" alt="В Харьковской области войска РФ повредили объекты ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«У нас были удары по Изюмскому району, это газодобывающая отрасль. Есть разрушения», – сказал Синегубов. По его словам, благодаря силам ПВО удалось не допустить&nbsp;...</p></div>
            </div>
        </a><a href='https://delo.ua/ru/incidents/okkupanty-obstrelyali-xarkovskuyu-oblast-est-zertva-i-ranenye-406982/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Оккупанты обстреляли Харьковскую область: есть жертва и ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4YfrmxqdztPf2R8zP-NeZI3iS5-xG3CYRjhUYvQwwerKIer2fuVNxOxVGO_FPSFAEW6Oow-Nd" alt="Оккупанты обстреляли Харьковскую область: есть жертва и ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупационные войска продолжают обстреливать Харьковскую область. За минувшие сутки, 16 ноября, в результате обстрелов в Купянском районе один&nbsp;...</p></div>
            </div>
        </a><a href='https://2day.kh.ua/ru/kharkow/zvanie-geroy-ukrainy-prosyat-dat-voennomu-osvobozhdavshemu-kharkovskuyu-oblast'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Звание &quot;Герой Украины&quot; просят дать военному ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_1cjhpz0AVMT5B_tdh7iZVJlGf5nkCUEWIN2wipTCnH6HiqX0YbfoobNHDwgzFKjJZWBVHNKm" alt="Звание &quot;Герой Украины&quot; просят дать военному ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Родственница военного обратилась к президенту. Евгений Листратов после освобождения населенных пунктов Харьковщины отправился в Донецкую область, но там погиб.</p></div>
            </div>
        </a><a href='https://ru.slovoidilo.ua/2022/11/17/novost/obshhestvo/utrennie-udary-rf-xarkovshhine-postradali-8-chelovek-nix-policejskie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Утренние удары рф по Харьковщине: пострадали 8 человек ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDekQqg8Mh3_UcCsQTT-P7jkFO4eDIbOrSYS84yHcfAdQxhxxX1pKSy3rR4kDPjCzVnjRRsTHg" alt="Утренние удары рф по Харьковщине: пострадали 8 человек ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В результате вражеских ракетных ударов по двум районам Харьковской области 17 ноября пострадали восемь человек.</p></div>
            </div>
        </a><a href='https://war.obozrevatel.com/vojska-rf-nanesli-raketnyij-udar-po-harkovschine-postradali-tri-cheloveka-podrobnosti.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Войска РФ нанесли ракетный удар по Харьковщине, пострадали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxgxM39isENrWv5q7qKIxUm8KYkxizROacJ3puzVq4wqtzwQe9BIQ5DqsrNK-AlQbO81-6Y9zG" alt="Войска РФ нанесли ракетный удар по Харьковщине, пострадали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Войска РФ нанесли ракетный удар по Харьковщине, пострадали три человека: подробности ... 2,7 т. Только проверенная информация у нас в Telegram-канале Obozrevatel&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/rosiyani-zavdali-udaru-kritichniy-infrastrukturi-1668676916.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне нанесли удар по критической инфраструктуре в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRo7mr8jZnOoW7cVUrO9s17vusvAl23W9xFtOlN55BHIjIB3m4VV0GfDuNgIZIfQ1A2DU_H_u6Z" alt="Россияне нанесли удар по критической инфраструктуре в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские оккупанты нанесли ракетные удары по Изюмскому району. Три работника объекта инфраструктуры получили ранения.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/17/7376744/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Удар по инфраструктуре Харьковщины: возросло количество ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcReniBDI9QcqsFYsMTf3yK2qgDtPqnD5SoRD0ZcgNbWcogmfYx8D68Qdiwzf9orh5tIvwtIsCPg" alt="Удар по инфраструктуре Харьковщины: возросло количество ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Изюмском районе Харьковской области российские ракеты попали в объект критической инфраструктуры, три человека пострадали.</p></div>
            </div>
        </a>
        </Template></>;
}