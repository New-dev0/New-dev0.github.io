import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Лукашенко</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Лукашенко"/>
        <meta name="description" content="Trending News about Лукашенко" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Лукашенко</h1>
            <Image width={800} height={500} src="https://donpatriot.news/photos/news/37615.png" alt="Лукашенко"/>
            <h3>Recent News</h3>
            <a href='https://donpatriot.news/article/lukashenko-pogrozhuye-yadernoyu-zbroyeyu-civilizovanim-krayinam'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко погрожує ядерною зброєю цивілізованим країнам</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnSGy71hDud__jD0uhXCUWstqXjgpizq7h5RU2XWAczlfQqpswqL9hZ8UisyhXhlJoyAGvvuYC" alt="Лукашенко погрожує ядерною зброєю цивілізованим країнам" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Білоруські пропагандистські канали цитують диктатора Олександра Лукашенка, який вже погрожує цивілізованим країнам застосуванням ядерної зброї.</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177117-lukashenko-zayavyv-pro-povne-znyschennya-ukrayiny-v-razi-prodovjennya-oporu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко заявив про «повне знищення» України в разі ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTtsfQhUoiyDhGqQGpMcni9ic9fkKijsZBC5h7MNodza_6Kkwj-YxhoJCPV2fGjV0KkJ3DUEGy0" alt="Лукашенко заявив про «повне знищення» України в разі ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>олександр лукашенко під час саміту Організації договору про колективну безпеку (ОДКБ) в Єревані, відповідаючи на запитання журналістів, заявив,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/24/7377823/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко пояснив, чому білоруські війська не допоможуть ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJUQpSoBylSY-0Vo6O8g8LV_SLz-EIJ47JyEJkB5Et7I6eXnXGI7kI2dyuTqGHGSHZUiYHe3Zu" alt="Лукашенко пояснив, чому білоруські війська не допоможуть ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самопроголошений білоруський президент Олександр Лукашенко заявив, що його 40-тисячне військо не зможе допомогли Росії в агресії проти України,&nbsp;...</p></div>
            </div>
        </a><a href='https://racurs.ua/ua/n177120-lukashenko-povynen-postaty-pered-trybunalom-za-viynu-rezoluciya-ievroparlamentu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко повинен постати перед трибуналом за війну ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBbOlwHPA1uTMgScsDQc3qhUktSRsCeAyPgSEmx6sFAr1AJtgPWLn9y4x1AsuecwnwX_dPD6WW" alt="Лукашенко повинен постати перед трибуналом за війну ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Режим лукашенка разом з росією має бути притягнутий до відповідальності за воєнні злочини в Україні перед міжнародним трибуналом і Міжнародним кримінальним&nbsp;...</p></div>
            </div>
        </a><a href='https://donpatriot.news/article/lukashenko-maye-postati-pered-tribunalom-rezolyuciya-yevroparlamentu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко має постати перед трибуналом – резолюція ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRnZt0Vtvcd9c1BZxvrdf0d_9OIMVP-aaLwWmykkRM4yOutFddTZI2rhgrgyaR72bqF_oFFNciJ" alt="Лукашенко має постати перед трибуналом – резолюція ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Європарламент ухвалив резолюцію, в якій наголосив на відповідальності Лукашенка за співучасть в агресивній війні проти України і підкреслив, що диктатор&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/323922-dali-povne-znisenna-ukraini-lukasenko-zaklikav-zelenskogo-do-peregovoriv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Далі — повне знищення України&quot;: Лукашенко закликав ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6Bf5dmxH-_krVW-jx3mX28wJhfKObTSfykDPNVuBATz-aGBfIIYEKPvaiPO1EpxCvF9PYGjyJ" alt="&quot;Далі — повне знищення України&quot;: Лукашенко закликав ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Очільник білоруського режиму Олександр Лукашенко заявив, що президент Володимир Зеленський має погодитись на мирні переговори з Росією,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/24/7377786/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко примерещилось, что украинцы недовольны Зеленским</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTm1JWnX7u6VBrnN3yt0rNTt5vR3_ko0op7-glzbGlSf3xVzBTGYfc7h6DO5pf4L134T5XVoQPC" alt="Лукашенко примерещилось, что украинцы недовольны Зеленским" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лукашенко заявил, что украинцы якобы уже недовольны Зеленским из-за отключения света, а скоро начнут спрашивать, почему президент Украины сделал так,&nbsp;...</p></div>
            </div>
        </a><a href='https://tsn.ua/ato/mozhemo-zadiyati-35-40-tis-viyskovih-lukashenko-vidpoviv-chi-dopomozhe-biloruska-armiya-putinu-2209006.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Можемо задіяти 35-40 тис. військових&quot;: Лукашенко відповів, чи ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQx-odldBbLhABqB8xviexs75EzFhje3CjijOmuZW-iSQU7qOFndq3f2RS27uu4_l3ALq6pBWd5" alt="&quot;Можемо задіяти 35-40 тис. військових&quot;: Лукашенко відповів, чи ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лукашенко заперечив інформацію, що білоруські війська невдовзі вступлять у війну проти України на боці Росії.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/24/7377765/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко призвал Киев к мирным переговорам: Дальше будет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQkYkPJBtvnLrkNj2n1FRGTIyHPvmFAbPvhs53SBiq06K6EYxz5wd6H3mFN7MLXjEyjtclYfHDU" alt="Лукашенко призвал Киев к мирным переговорам: Дальше будет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Лукашенко заявил, что Зеленский должен пойти на переговори, иначе Россия полностью уничтожит Украину.</p></div>
            </div>
        </a><a href='https://www.unian.ua/war/lukashenko-vidpoviv-chi-dopomozhe-putinu-garmatnim-m-yasom-12055935.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лукашенко відповів, чи допоможе Путіну гарматним м&#39;ясом</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReBdshP6KgiXgcZ8RFY9_tGncAL1qd1TapJ5VW7HKq2B4AITZneajFRd9tRA97KlUQKLeqLLZ-" alt="Лукашенко відповів, чи допоможе Путіну гарматним м&#39;ясом" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Невизнаний президент Білорусі Олександр Лукашенко запевнив, що не залучатиме живу силу Збройних сил країни до війни проти України. Заява диктатора.</p></div>
            </div>
        </a>
        </Template></>;
}