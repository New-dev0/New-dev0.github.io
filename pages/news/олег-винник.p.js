import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Олег Винник</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Олег Винник"/>
        <meta name="description" content="Trending News about Олег Винник" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Олег Винник</h1>
            <Image width={800} height={500} src="https://www.rbc.ua/static/img/_/k/_kolazh_964_1300x820.jpg" alt="Олег Винник"/>
            <h3>Recent News</h3>
            <a href='https://www.rbc.ua/ukr/styler/zovni-zrozumilo-shcho-lyudina-hvorie-tovarish-1668432714.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Внешне понятно, что человек болеет&quot;: друг Винника рассказал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIxVzSrzxsqS12aMeqwGQqOozEaxvLSlG_WXYVdYhpcbZoMSoJ2uvxpym1LEWf5vxjR0SP3oX_" alt="&quot;Внешне понятно, что человек болеет&quot;: друг Винника рассказал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Известный украинский певец Олег Винник еще в апреле полностью исчез с информационного поля. Однако оказалось, что артист серьезно болен и сейчас лечится за&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/lifestyle/537135-stalo-izvestno-chto-proizoshlo-s-olegom-vinnikom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно, что произошло с Олегом Винником</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKIABBBEdunQnMUr8GLjRA3b2BePUdjJfbp6guy272wIAg6PSZO8eAjKOpgmZPkpucve0772Z2" alt="Стало известно, что произошло с Олегом Винником" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Близкий друг украинского певца, настоятель храма Иверской иконы Божьей матери протоиерей Виталий Трач, рассказал, что часто общается с музыкантом, давно&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/uk/lifestyle/537135-stalo-vidomo-shcho-stalosya-z-olegom-vinnikom'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало відомо, що сталося з Олегом Винником</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKIABBBEdunQnMUr8GLjRA3b2BePUdjJfbp6guy272wIAg6PSZO8eAjKOpgmZPkpucve0772Z2" alt="Стало відомо, що сталося з Олегом Винником" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Близький друг українського співака, настоятель храму Іверської ікони Божої матері протоієрей Віталій Трач, розповів, що часто спілкується з музикантом, який&nbsp;...</p></div>
            </div>
        </a><a href='https://showbiz.24tv.ua/oleg-vinnik-seryozno-hvoriy-pro-tse-rozpoviv-yogo-drug-showbiz_n2197794'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Серйозні проблеми зі здоров&#39;ям, – священник розповів про стан ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSisIbTFFGmG6XMvkufPPUd3pMXJJ4dLFEMjqHG70hs2fHss1jBtKVhlibuBzhbWRUhHxOaLINk" alt="Серйозні проблеми зі здоров&#39;ям, – священник розповів про стан ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Від початку повномасштабної війни Олег Винник зник з соцмереж та телеефірів. Його друг – священник Віталій Трач розповів, що це пов&#39;язано з хворобою.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/styler/zovni-zrozumilo-shcho-lyudina-hvorie-tovarish-1668432714.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Зовні зрозуміло, що людина хворіє&quot;: товариш Винника розповів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRIxVzSrzxsqS12aMeqwGQqOozEaxvLSlG_WXYVdYhpcbZoMSoJ2uvxpym1LEWf5vxjR0SP3oX_" alt="&quot;Зовні зрозуміло, що людина хворіє&quot;: товариш Винника розповів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Близький товариш Олега Винника розповів, що артист зараз знаходиться за кордоном на лікуванні.</p></div>
            </div>
        </a><a href='https://showbiz.24tv.ua/ru/oleg-vinnik-serezno-bolen-ob-jetom-rasskazal-ego-drug-showbiz_n2197825'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Серьезные проблемы со здоровьем, – священник рассказал о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSisIbTFFGmG6XMvkufPPUd3pMXJJ4dLFEMjqHG70hs2fHss1jBtKVhlibuBzhbWRUhHxOaLINk" alt="Серьезные проблемы со здоровьем, – священник рассказал о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>С начала полномасштабной войны Олег Винник исчез из соцсетей и телеэфиров. Его друг – священник Виталий Трач рассказал, что это связано с болезнью.</p></div>
            </div>
        </a><a href='https://tsn.ua/glamur/tovarish-olega-vinnika-rozpoviv-scho-spivak-maye-seryozni-problemi-zi-zdorov-yam-2201509.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Товариш Олега Винника розповів, що співак має серйозні ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6JgX8WYvlbLEJ1m5y9OccdWqU22eagAcpdKRgIs-iSB6MJ1e6A6PjNPcFtP2dg-a4W0BFfoGG" alt="Товариш Олега Винника розповів, що співак має серйозні ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Близький товариг виконавця Олега Винника розповів, що артист має проблеми зі здоров&#39;ям, та розсекретив, де він нині перебуває.</p></div>
            </div>
        </a><a href='https://www.0352.ua/news/3496268/svasennik-rozpoviv-pro-te-kudi-naspravdi-podivsa-spivak-oleg-vinnik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Священник розповів про те, куди насправді подівся співак Олег ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdpxnXFJrpKwJ1tftgsq-5wpEowc-Inj5zmBj3j1b2iEcZv_TyP3m4WyKPsK6qh4XemU38_hu-" alt="Священник розповів про те, куди насправді подівся співак Олег ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Допускається цитування матеріалів без отримання попередньої згоди 0352.ua за умови розміщення в тексті обов&#39;язкового посилання на 0352.ua - Сайт міста Тернополя&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/show/people/svyaschennik-i-blizkij-drug-olega-vinnika-chestno-otvetil-chto-proizoshlo-s-pevtsom-i-gde-on-nahoditsya-sejchas.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Священник и близкий друг Олега Винника честно ответил, что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQiC8Y1R-UL8tMyAfHSCkNXSR-faA10ddeiXkZZw7G3T6Dbztjjln0xOhpqLhr9LRuYRqYwXzVV" alt="Священник и близкий друг Олега Винника честно ответил, что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>11,7 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/ukr/show/people/svyaschennik-i-blizkij-drug-olega-vinnika-chesno-vidpoviv-scho-stalosya-zi-spivakom-ta-de-vin-narazi-perebuvae.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Священник і близький друг Олега Винника чесно відповів, що ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQiC8Y1R-UL8tMyAfHSCkNXSR-faA10ddeiXkZZw7G3T6Dbztjjln0xOhpqLhr9LRuYRqYwXzVV" alt="Священник і близький друг Олега Винника чесно відповів, що ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лише перевірена інформація в нас у Telegram-каналі Obozrevatel та Viber. Не ведіться на фейки! 0 copy.</p></div>
            </div>
        </a>
        </Template></>;
}