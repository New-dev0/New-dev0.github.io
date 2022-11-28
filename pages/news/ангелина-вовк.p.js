import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ангелина Вовк</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ангелина Вовк"/>
        <meta name="description" content="Trending News about Ангелина Вовк" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ангелина Вовк</h1>
            <Image width={800} height={500} src="https://focus.ua/static/storage/thumbs/1200x630/a/52/efd0b3d9-c8f2563a6bd15cf719e8a5583cc7452a.jpg?v=1020_1" alt="Ангелина Вовк"/>
            <h3>Recent News</h3>
            <a href='https://focus.ua/world/538627-vedushchaya-spokoynoy-nochi-malyshi-predlozhila-prekratit-voynu-v-ukraine-s-pomoshchyu-svini-i-zayca-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ведущая &quot;Спокойной ночи, малыши&quot; заявила, что хочет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAQmIP0QimdcR5q0NabLpljDv-NMnBo1KOhrZLrry7s3S9q8Uap-m8Gl4wIYHaQdmQRSdJIjIP" alt="Ведущая &quot;Спокойной ночи, малыши&quot; заявила, что хочет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российская ведущая Ангелина Вовк считает, что с помощью кукол Хрюши и Степашки она может заставить солдат ВСУ прекратить сопротивление.</p></div>
            </div>
        </a><a href='https://rtvi.com/news/eks-vedushhaya-spokojnoj-nochi-malyshi-angelina-vovk-poobeshhala-otpravitsya-na-front-s-hryushej-i-stepashkoj/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экс-ведущая «Спокойной ночи, малыши» Ангелина Вовк ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRHyknU196oCxKU2ZxjUtjC8P50e5qHBLm0MHJL4egjJnkBEk5bLi1cCLOYUYoMiIIWlm2SxCm" alt="Экс-ведущая «Спокойной ночи, малыши» Ангелина Вовк ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ангелина Вовк рассказала, что поедет на фронт с Хрюшей и Степашкой, чтобы &quot;остановить&quot; украинских солдат. Экс-ведущая &quot;Спокойной ночи, малыши&quot; пожаловалась&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/lite/stars/eks-vedushchaya-spokoynoy-nochi-malyshi-obvinila-v-voyne-ukrainu-12058545.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Экс-ведущая &quot;Спокойной ночи, малыши&quot; обвинила в войне ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQJmFvT89pRuD_2hnsexq7akxay1wF6BjzpAZXRWZm6A9DZEtE5FH0q6AVs8Ko7v0hRwa0oTQn7" alt="Экс-ведущая &quot;Спокойной ночи, малыши&quot; обвинила в войне ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российская телеведущая Ангелина Вовк, получившая знаменитость благодаря чтению сказок на телевидении в программе &quot;Спокойной ночи, малыши&quot;, заявила,&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/uk/world/538627-vedushchaya-spokoynoy-nochi-malyshi-predlozhila-prekratit-voynu-v-ukraine-s-pomoshchyu-svini-i-zayca-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ведуча &quot;Спокойной ночи, малыши&quot; заявила, що хоче вирушити ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAQmIP0QimdcR5q0NabLpljDv-NMnBo1KOhrZLrry7s3S9q8Uap-m8Gl4wIYHaQdmQRSdJIjIP" alt="Ведуча &quot;Спокойной ночи, малыши&quot; заявила, що хоче вирушити ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російська ведуча Ангеліна Вовк вважає, що за допомогою ляльок Хрюші і Степашки вона може змусити солдатів ЗСУ припинити опір.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/glamur/vozmu-hryushu-i-stepashku-i-poedu-na-front-efrosinina-posmeyalas-nad-strannym-zayavleniem-rossiyskoy-veduschey-angeliny-vovk-2210707.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Возьму Хрюшу и Степашку и поеду на фронт&quot;: Ефросинина ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAD2fYhOpbwocHA3vyF0j4Pb2O-VRoyY54UgrzdpsnB-uRMJEPiiREAcMZ4PyxiYyEO3kPpHyB" alt="&quot;Возьму Хрюшу и Степашку и поеду на фронт&quot;: Ефросинина ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Маша Ефросинина показала фрагмент из интервью с российской ведущей Ангелиной Вовк, которая заявила, что собирается идти на фронт с Хрюшей и Степашкой из&nbsp;...</p></div>
            </div>
        </a><a href='https://gordonua.com/ukr/bulvar/news/u-dupi-ruka-kremlivskogo-vozhdja-u-merezhi-vismijali-propagandistku-vovk-jaka-zibralasja-na-vijnu-z-hrjusheju-ta-stepashkoju-1638058.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;У сраці рука кремлівського вождя&quot;. У мережі висміяли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3-ZFxOiOFyi8EdZ0zjuBr3vtA7LdXAtmF5iI8PC7zk6feLu2HBDCzb2Y5xxD2WPys-fn0lwBp" alt="&quot;У сраці рука кремлівського вождя&quot;. У мережі висміяли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ексклюзив від Бульвара Шоубіз ➤➤➤ 80-річна російська ведуча Ангеліна Вовк, відома за програмою Спокойной ночи, малыши , в інтерв&#39;ю російському...</p></div>
            </div>
        </a><a href='https://gordonua.com/bulvar/news/v-zadnitse-ruka-kremlevskogo-vozhdja-v-seti-vysmejali-propagandistku-vovk-kotoraja-sobralas-na-vojnu-s-hrjushej-i-stepashkoj-1638058.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;В заднице рука кремлевского вождя&quot;. В сети высмеяли ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3-ZFxOiOFyi8EdZ0zjuBr3vtA7LdXAtmF5iI8PC7zk6feLu2HBDCzb2Y5xxD2WPys-fn0lwBp" alt="&quot;В заднице рука кремлевского вождя&quot;. В сети высмеяли ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Эксклюзив от Бульвара Шоубиз ➤➤➤ 80-летняя российская ведущая Ангелина Вовк, известная по программе Спокойной ночи, малыши , в интервью российскому...</p></div>
            </div>
        </a><a href='https://tsn.ua/glamur/vizmu-hryushu-i-stepashku-i-poyidu-na-front-yefrosinina-oburila-video-z-rosiyskoyu-veduchoyu-angelinoyu-vovk-2210707.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Візьму Хрюшу і Степашку і поїду на фронт&quot;: Єфросиніна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSAD2fYhOpbwocHA3vyF0j4Pb2O-VRoyY54UgrzdpsnB-uRMJEPiiREAcMZ4PyxiYyEO3kPpHyB" alt="&quot;Візьму Хрюшу і Степашку і поїду на фронт&quot;: Єфросиніна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Маша Єфросиніна показала фрагмент з інтерв&#39;ю з російською ведучою Ангеліною Вовк, яка заявила, що збирається йти на фронт з Хрюшею і Степашкою з дитячої&nbsp;...</p></div>
            </div>
        </a><a href='https://fedpress.ru/news/77/society/3149064'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ангелина Вовк намерена уехать в зону спецоперации с Хрюшей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRUGvlTwskuhroMmWTdXU5qS4I-VLLs6N1bfHVEBeFXI7qVz9oGtmUDppLSQcEvlajm0rPf4p7v" alt="Ангелина Вовк намерена уехать в зону спецоперации с Хрюшей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее «ФедералПресс» писал о том, почему сваха Роза Сябитова не хотела бы вернуть молодость. Фото: Pravda Komsomolskaya / Russian Look / globallookpress.com.</p></div>
            </div>
        </a><a href='https://rossaprimavera.ru/news/035ee1cc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ангелина Вовк рассказала, зачем хочет поехать на фронт с ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZpXma3S-CPTP0UiPvaqYmSYSDbJxYbrRY3_UKbLd4bxFYGngZ7DSGtcKaPVSoWcerNZ5wPQ2y" alt="Ангелина Вовк рассказала, зачем хочет поехать на фронт с ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Поехать на фронт и обратиться к украинским военным думает знаменитая ведущая «Спокойной ночи, малыши» Ангелина Вовк. Об этом 27 ноября актриса завила в&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}