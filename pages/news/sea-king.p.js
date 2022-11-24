import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sea King</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sea King"/>
        <meta name="description" content="Trending News about Sea King" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sea King</h1>
            <Image width={800} height={500} src="https://donpatriot.news/photos/news/37534.png" alt="Sea King"/>
            <h3>Recent News</h3>
            <a href='https://donpatriot.news/ru/article/pershiy-britanskiy-gelikopter-sea-king-vzhe-pribuv-v-ukrayinu-ben-volles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Первый британский вертолет Sea King уже прибыл в Украину ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1rCwLJohLYGdD9Rjray8PRS3bEka_87AKvNsGxyPYgD12gYfFKfhusC_Ea5ujEHH_tDnVF-lk" alt="Первый британский вертолет Sea King уже прибыл в Украину ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великобритания впервые присылает в Украину вертолеты. Будут предоставлены три бывших вертолета Sea King, первый из которых уже прибыл в Украину. Об этом&nbsp;...</p></div>
            </div>
        </a><a href='https://donpatriot.news/article/pershiy-britanskiy-gelikopter-sea-king-vzhe-pribuv-v-ukrayinu-ben-volles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Перший британський гелікоптер Sea King вже прибув в Україну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1rCwLJohLYGdD9Rjray8PRS3bEka_87AKvNsGxyPYgD12gYfFKfhusC_Ea5ujEHH_tDnVF-lk" alt="Перший британський гелікоптер Sea King вже прибув в Україну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Велика Британія вперше надсилає в Україну гелікоптери. Буде надано три колишні вертольоти Sea King, перший з яких уже прибув до Україн. Про це заявив&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/23/7377572/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британия впервые передает Украине вертолеты Sea King</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3QbMSbbATC88IHGIx_wevuDimvhkTltHnKw13WbiMdBwvFy5Wll140z3a5Bb1a-9wA-x-9h10" alt="Британия впервые передает Украине вертолеты Sea King" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Великобритания впервые передаст Украине вертолеты - всего три Sea King, из которых первый (или первые) уже в Украине.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/ukraine/suspilstvo/20221123-brytanskyj-vertolit-sea-king-pryznachennya-ta-harakterystyky/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британський вертоліт Sea King: призначення та характеристики</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQn5gaEeMZ22ijH2g3pJKbD7o4_aWkU0Rv1QooGyViBLfcZ40A3MDkE2WZm-BMMX4YssRy1H6jj" alt="Британський вертоліт Sea King: призначення та характеристики" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Королівському флоті перебували борти, виготовлені компанією Westland Helicopters. Тому ймовірно, в Україну направили вертольоти Westland WS-61 Sea King.</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/538186-odin-iz-nih-uzhe-v-ukraine-velikobritaniya-vpervye-peredaet-vertolety-sea-king'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Один из них уже в Украине: Великобритания впервые передает ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWEZJwR3cqIyoxKGxgSOMcJ653pZY4yWVWkw-4OOvgJnZZuulbCBQj1qML9FkF5I3AjIc-YQaO" alt="Один из них уже в Украине: Великобритания впервые передает ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вертолет Sea King — это разработка американской компании Sikorsky. На вооружении Королевских сил была лицензионная версия вертолета Westland Sea King.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/ukr/news/britaniya-peredast-ukrayini-gelikopteri-sea-1669186858.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британия передаст Украине вертолеты Sea King и 10 тысяч ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ1ajAPvKFBb5cmXQa4LGKLAuLT9jBRouuQ8ZITB5_AqEALuiEwNLa2Ov7c85i7mwPfI9NGMP3_" alt="Британия передаст Украине вертолеты Sea King и 10 тысяч ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За последние шесть недель украинские экипажи прошли обучение в Британии по полетам и обслуживанию поисково-спасательных вертолетов.</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ru/ukraine/suspilstvo/20221123-brytanskyj-vertolit-sea-king-pryznachennya-ta-harakterystyky/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британский вертолет Sea King: предназначение и характеристики</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQn5gaEeMZ22ijH2g3pJKbD7o4_aWkU0Rv1QooGyViBLfcZ40A3MDkE2WZm-BMMX4YssRy1H6jj" alt="Британский вертолет Sea King: предназначение и характеристики" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Что известно о британских вертолетах Sea King. Об особенностях и технических характеристиках вертолета Sea King - читайте в нашем материале.</p></div>
            </div>
        </a><a href='https://focus.ua/uk/voennye-novosti/538186-odin-iz-nih-uzhe-v-ukraine-velicobritania-vpervye-peredaet-vertolety-sea-king'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Один із них уже в Україні: Великобританія вперше передає ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWEZJwR3cqIyoxKGxgSOMcJ653pZY4yWVWkw-4OOvgJnZZuulbCBQj1qML9FkF5I3AjIc-YQaO" alt="Один із них уже в Україні: Великобританія вперше передає ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вертоліт Sea King — це розробка американської компанії Sikorsky. На озброєнні Королівських сил була ліцензійна версія гелікоптера Westland Sea King. Модифікація&nbsp;...</p></div>
            </div>
        </a><a href='https://thepage.ua/news/sea-king-chto-za-vertolet-peredala-britaniya-ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Британия передаст Украине три вертолета Sea King: один уже у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRPMHKLIgVkwrdG8BDpW6a2vDIa-hgENj0ckzZh4DmdqPlKf4oYNhrRaUtTomJflxLZe-gQevD3" alt="Британия передаст Украине три вертолета Sea King: один уже у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sikorsky S-61 Sea King был разработан фирмой Sikorsky Aero Engineering Corporation в 1957 году, серийное производство стартовало в 1961 году. Характеристики:.</p></div>
            </div>
        </a><a href='https://mil.in.ua/uk/news/velyka-brytaniya-peredaye-ukrayini-try-vertoloty-sea-king-ben-volles/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Велика Британія передає Україні три вертольоти Sea King – Бен ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSsECQ9lm2d96yJywQX_Jm40zh9aq-GOPiu1N2xyPHHgzfyJ8TKlWq5OsqPqMulkTBmEW9j5Yws" alt="Велика Британія передає Україні три вертольоти Sea King – Бен ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Westland Sea King – це британська ліцензована версія американського Sikorsky S-61, побудована компанією Westland Helicopters. Гелікоптер значно відрізняється&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}