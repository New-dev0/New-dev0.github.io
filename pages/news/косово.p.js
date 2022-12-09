import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Косово</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Косово"/>
        <meta name="description" content="Trending News about Косово" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Косово</h1>
            <Image width={800} height={500} src="" alt="Косово"/>
            <h3>Recent News</h3>
            <a href='https://www.eurointegration.com.ua/rus/news/2022/12/8/7152159/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спецназ Косово зашел в сербский регион на фоне ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSdWR98gra0ZYhqprW6eug6BKGFpYpIqLaXMZPJBvg2FROfNOOZoiQRVmBcczJGWZQ6UzH7urpl" alt="Спецназ Косово зашел в сербский регион на фоне ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает &quot;Европейская правда&quot; со ссылкой на Kosovo-Online. По словам корреспондента издания, силы специального назначения Косово заблокировали весь&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/world/540226-ne-dopustim-novogo-pogroma-v-serbii-namereny-perebrosit-v-kosovo-1000-silovikov'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Не допустим нового погрома&quot;: в Сербии намерены перебросить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSrs38SBV4Mq1nCmI4RJZOksH-GjK7GKsFkuozp3qJXsT-_lua8Dj6TnhDkshJM-C72uZ7Je6PN" alt="&quot;Не допустим нового погрома&quot;: в Сербии намерены перебросить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В правительстве Сербии напомнили, что согласно Брюссельскому соглашению, албанская полиция не имеет права пребывать в северной части Косово.</p></div>
            </div>
        </a><a href='https://zn.ua/WORLD/spetsnaz-kosovo-voshel-zablokiroval-munitsipalitet-hde-v-osnovnom-zhivut-serby.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спецназ Косово заблокировал муниципалитет, где в основном ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkBUt7plaDjPg-vU3CehtK4jWO_Pf9LXVwdcN1dijPzNWI-G7_ELxXAOyLC5odyShbgX5bpFz4" alt="Спецназ Косово заблокировал муниципалитет, где в основном ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>До этого местная партия «Сербский список», тесно сотрудничающая с Белградом, объявила о бойкоте власти Косово. Спецназ Косово заблокировал муниципалитет,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/zagostrennya-kosovo-spetsnaz-zayshov-munitsipalitet-1670538030.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Обострение в Косово: спецназ вошел в муниципалитет, где ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdgtd3BT-EheLD96VjWv4V03QTbDs_tp5E_UPGQRL21ynh9d4bN32puwHDpGoCVPAntndYuLc0" alt="Обострение в Косово: спецназ вошел в муниципалитет, где ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает РБК-Украина со ссылкой на Kosovo-Online. Издание сообщает, что силовики заблокировали весь муниципалитет, где проживают преимущественно сербы.</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/world/4542649-spetsnaz-kosovo-zaishov-u-serbskyi-rehion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спецназ Косово зайшов у сербський регіон</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTk8WB0atUjoeRQFrMj8Aj6S8UOwK03x8YPj6s8OdF50jZuGaWmTix9gewbVSFJY8RHvUluJnBI" alt="Спецназ Косово зайшов у сербський регіон" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Кілька сотень бійців на броньованих автомобілях заблокували весь муніципалітет. Обстановка напружена, але спокійна.</p></div>
            </div>
        </a><a href='https://tsn.ua/svit/vlada-kosova-vvela-specnaz-u-naseleniy-serbami-region-na-tli-zagostrennya-z-belgradom-2219218.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Влада Косова ввела спецназ у населений сербами регіон на тлі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRr93eYZWZH5rYQhbGqGr-a8beqRhMo5DEt8jfDBo01SvRw19R4PHSZs6gZZvvr0z1QsKJBl9dj" alt="Влада Косова ввела спецназ у населений сербами регіон на тлі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Про це повідомляє Kosovo-Online. Поліцейські були розгорнуті навколо міста Косовська Митровиця і заблокували все місто. Відомо, що косовські спецпризначенці&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/WORLD/spetsnaz-kosova-zablokuvav-munitsipalitet-de-v-osnovnomu-zhivut-serbi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спецназ Косова заблокував муніципалітет, де в основному ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTkBUt7plaDjPg-vU3CehtK4jWO_Pf9LXVwdcN1dijPzNWI-G7_ELxXAOyLC5odyShbgX5bpFz4" alt="Спецназ Косова заблокував муніципалітет, де в основному ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Перед тим місцева партія «Сербський список», яка тісно співпрацює з Белградом, оголосила про бойкот влади Косова. Спецназ Косова заблокував муніципалітет,&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/svit/vlasti-kosovo-vveli-specnaz-v-naselennyy-serbami-region-na-fone-obostreniya-s-belgradom-2219218.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Власти Косово ввели спецназ в населенный сербами регион на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRr93eYZWZH5rYQhbGqGr-a8beqRhMo5DEt8jfDBo01SvRw19R4PHSZs6gZZvvr0z1QsKJBl9dj" alt="Власти Косово ввели спецназ в населенный сербами регион на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом сообщает Kosovo-Online. Полицейские были развернуты вокруг города Косовска Митровица и заблокировали весь город. Известно, что косовские спецназовцы&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/8/7379961/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спецназ Косова зайшов у сербський регіон на тлі напруженості ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzysWrXeJs4HwPfrqvJ8DHuxFozcRZkPjbqKfvGPwUvxUpLHlJHqpfSwxRaLzLP-PRkcXfSgNs" alt="Спецназ Косова зайшов у сербський регіон на тлі напруженості ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Понад 200 спецпризначенців частково визнаного Косова на броньованих автомобіля зайшли на територію муніципалітету Північна Митровиця, де більшість населення&nbsp;...</p></div>
            </div>
        </a><a href='https://gazeta.ua/ru/articles/world-life/_kosovo-specnaz-zablokiroval-municipalitet-gde-zhivut-serby/1124134'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Косово: спецназ заблокировал муниципалитет, где живут сербы</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Косово: спецназ заблокировал муниципалитет, где живут сербы" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подобные меры были приняты на фоне нарастающего напряжения перед выборами в муниципалитетах, пишет Kosovo-Online. ЧИТАЙТЕ ТАКЖЕ: В Сербии сделали категоричное&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}