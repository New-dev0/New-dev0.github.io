import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>ДТЭК</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,ДТЭК"/>
        <meta name="description" content="Trending News about ДТЭК" /></Head><Template>
            <h1 style={{fontSize: "30"}}>ДТЭК</h1>
            <Image width={800} height={500} src="https://i.stopcor.org/news/2022/11/18/filestoragetemp-7.jpg?size=2010x1050" alt="ДТЭК"/>
            <h3>Recent News</h3>
            <a href='https://www.stopcor.org/section-suspilstvo/news-u-kievi-ochikuyutsya-ekstrenni-vidklyuchennya-svitla-dtek-18-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Киеве ожидаются экстренные отключения света: ДТЭК (детали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1sFQK5KunBSjZj8jzewRgBk9FUjBgreqtT10-W-PE4LFphm0lcU4_0HIgLZStsB5g5ZM0uY5w" alt="В Киеве ожидаются экстренные отключения света: ДТЭК (детали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>18 ноября ДТЭК сообщило, что жителей Киева ожидают экстренные отключения электроэнергии. Информация обнародована на странице Facebook &#39;&#39;ДТЭК Киевские э.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/energetiki-y-shahtari-pratsyuyut-maksimumi-1668785182.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Энергетики и шахтеры работают на максимуме для ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQ3yimAbOz27gajTOcANn3YaJl7AZF0c68TE19Gn6gI3rVVR0PZLxnl8sPOleM9gdiG1WDmhZe" alt="Энергетики и шахтеры работают на максимуме для ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Все предприятия &quot;ДТЭК Энерго&quot; работают на максимум для стабилизации ситуации в энергосистеме, несмот... - Новости - ДТЭК - Электроэнергия.</p></div>
            </div>
        </a><a href='https://focus.ua/ukraine/537707-otklyuchenie-elektroenergii-v-ukraine-lyudyam-obyasnili-nastupit-li-blekaut'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Отключение света в Украине на 10 дней: ДТЭК ответил на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcThk6wmWiI5bS90dMXeB_Ean-P-4vK3f-vNO65ejLOJ9MjOI248VcX-deGllvdvzGYgbGJRn_OH" alt="Отключение света в Украине на 10 дней: ДТЭК ответил на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По словам директора Центра исследований энергетики Александра Харченко, украинцы могут быть без света 7-10 дней, если энергетическая система страны не&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/UKRAINE/budet-li-blekaut-v-kieve-prohnoz-ot-dtek.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Будет ли блекаут в Киеве – прогноз от ДТЭК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRmpcrJ8whzf_BFkkAD5GuE9VJO_SDZ5r4t5y6-PpREANn0UdqDBqJq39--jWBMni9f8lTUkqfp" alt="Будет ли блекаут в Киеве – прогноз от ДТЭК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блекаут в столице возможен, но в ДТЭК считают, что если тотальное отключение электричества и произойдет, оно будет длиться слишком долго.</p></div>
            </div>
        </a><a href='https://v-variant.com.ua/ru/dt-k-sostavyl-hrafyk-otkliuchenyia-lektro-nerhyy-v-donetskoy-oblasty/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ДТЭК составил график отключения электроэнергии в Донецкой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJwwJgq4LKMlh9kKAZQkdK7cNQHNjnxW1g4YQr3GB_0hAhymC2fh17t85ZJjsbXaFRUgb1kCcS" alt="ДТЭК составил график отключения электроэнергии в Донецкой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Здесь сделали удобную схему поиска по вашему населенному пункту: В пресс-службе также добавили, что в графиках отключения возможна небольшая погрешность во&nbsp;...</p></div>
            </div>
        </a><a href='https://news.liga.net/politics/news/polnyy-blekaut-v-kieve-teoreticheski-vozmojen-no-on-byl-by-nedolgim-dtek'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Полный блекаут в Киеве теоретически возможен, но он был бы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqXVfnZx-7tfLlNAbrqGmS7UTRW3IF7R9wJoe8raCEFzo6wsuWSJNfrg0yDcx9ZelH4Ap1x5jD" alt="Полный блекаут в Киеве теоретически возможен, но он был бы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Блекаут в Киеве в полном объеме теоретически возможен, но если система развернется, то это нестрашно, пояснили в ДТЭК. электричество, дтэк, дмитрий сахарук,&nbsp;...</p></div>
            </div>
        </a><a href='https://prm.ua/ru/vozmozhen-ly-v-ukrayne-poln-y-blekaut-ob-iasnenye-dt-k/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Возможен ли в Украине полный блекаут — объяснение ДТЭК</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVz6zXgkwUWgqYgw7m-2Zh4AHnCzjv60qFMtF0loN9ZwrIxAKiIDhCwgm0f7rkwuuUBb4HpTJD" alt="Возможен ли в Украине полный блекаут — объяснение ДТЭК" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несмотря на российские атаки на объекты энергетической инфраструктуры, в Украине не ожидается тотального отключения электроэнергии.</p></div>
            </div>
        </a><a href='https://www.5.ua/ru/obshchestvo/otkliuchenye-sveta-v-dtek-obiasnyly-uhrozhaet-ly-ukrayne-blekaut-292932.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Отключение света: в ДТЭК объяснили, угрожает ли Украине ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTeLdnZl7Zm0_rvTWxdc-doZHjGcABSPUr46WXVoYyytKHYP8owg9wfHqI9vAPQYzuSZVkYuQ27" alt="Отключение света: в ДТЭК объяснили, угрожает ли Украине ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Несмотря на атаки россии на украинские энергообъекты, тотального отключения электроэнергии не ожидается – об этом сообщил исполнительный директор ДТЭК&nbsp;...</p></div>
            </div>
        </a><a href='https://kiev.vgorode.ua/news/sobytyia/a1225553-v-dtek-otvetili-vozmozhen-li-v-kieve-polnyj-blekaut'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ДТЭК ответили, возможен ли в Киеве полный блекаут</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6ixPXAsugOFsOj7CpIZ2f9bRvwnQ_yw9eTYqqBbMInPmnoGFGvQZRtaFVsMZ1ItnWIYnvjtKZ" alt="В ДТЭК ответили, возможен ли в Киеве полный блекаут" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>19 ноября энергетикам удалось сбалансировать энергосистему, а потому отключать электроэнергию в Киеве будут по графику. Однако специалисты предупреждают&nbsp;...</p></div>
            </div>
        </a><a href='https://kosatka.media/category/elektroenergiya/news/v-dtek-predlagayut-perevesti-na-voennye-relsy-zaporozhtransformator'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В ДТЭК предлагают перевести на военные рельсы ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSxKtDxAgpktmQWMbeb7SHFHs7YaWNZX96WKp00lgUEHdFa5sNtj4CbAfRON_oIerwjhPVMoOjy" alt="В ДТЭК предлагают перевести на военные рельсы ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Размещение заказов по производству необходимого для ремонтов высоковольтных сетей оборудования на ЧАО «Запорожтрансформатор» (ЗТР) было бы правильным&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}