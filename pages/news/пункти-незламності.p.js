import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Пункти незламності</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Пункти незламності"/>
        <meta name="description" content="Trending News about Пункти незламності" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Пункти незламності</h1>
            <Image width={800} height={500} src="https://imi.org.ua/upload/news/2022/11/23/637df01d0480b-4500503-punkty-nezlamnosti_1200x630.jpg" alt="Пункти незламності"/>
            <h3>Recent News</h3>
            <a href='https://imi.org.ua/news/po-vsij-ukrayini-rozgortayutsya-punktiv-nezlamnosti-i49230'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>По всій Україні розгортаються &quot;Пункти незламності&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5OCRz83gOFDsG4MMxOebvg1rcZv44Tgq49weWhkztUntMbD_NVxmxHIcL--Yz79ghCqwGDRTv" alt="По всій Україні розгортаються &quot;Пункти незламності&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По всій країні розгортаються &quot;Пункти незламності&quot;: вже працюють понад 4 тисячі таких пунктів. Заплановано ще більше, йдеться на сайті президента.</p></div>
            </div>
        </a><a href='https://umannews.city/articles/251499/de-v-umani-pogritisya-i-zaryaditi-telefon-punkti-nezlamnosti-pracyuvatimut-cilodobovo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Де в Умані погрітися і зарядити телефон: «Пункти незламності ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7gTawSTuuCYjyz8ud_4WV9SdujL2L8j4n2Mu4st30tmRd3uqAazqb5oK9iKROJAGKzjAiKfvs" alt="Де в Умані погрітися і зарядити телефон: «Пункти незламності ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Куди в Умані можна піти, щоб зігрітися, зарядити телефон і отримати першу допомогу.</p></div>
            </div>
        </a><a href='https://suspilne.media/323552-na-sumsini-pocali-pracuvati-punkti-nezlamnosti-adresi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Сумщині почали працювати &quot;Пункти незламності&quot;. Адреси</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6SvYyOUrDS3LuPb8xwnlRAY9HCSTXVCLQ4AJeXxLSLJF66tNjFZlSeypg8fHe3V-k42alnGwd" alt="На Сумщині почали працювати &quot;Пункти незламності&quot;. Адреси" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Через відключення електроенергії, на Сумщині розгорнули свою роботу пункти незламності. Вони прауюватимуть цілодобово, там можна зігрітися та&nbsp;...</p></div>
            </div>
        </a><a href='https://life.pravda.com.ua/society/2022/11/23/251474/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Зігрітися та зарядити телефон: що таке пункти незламності та як ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwQznpGsnk0BJsBr-Yq5mETyd06YEZ9L1cS1IifZJPffPWIhmBVUo0USV62GjVRoe4BoXUzYO_" alt="Зігрітися та зарядити телефон: що таке пункти незламності та як ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як знайти пункт незламності, що там має бути, скільки людей там можуть перебувати.</p></div>
            </div>
        </a><a href='https://suspilne.media/322998-u-kievi-ta-oblasti-rozgortaut-punkti-nezlamnosti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>У Києві та області розгортають &quot;Пункти незламності&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQR8rejON76IXV5Oen_FGeghTR-GvcfMaIWFO4UA9aui8XE_03gXOg3PEjOb4HNT58h4bKe9jOt" alt="У Києві та області розгортають &quot;Пункти незламності&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media У Києві та області розгортають “Пункти незламності”, куди громадяни зможуть прийти на випадок аварійного відключення зв&#39;язку чи&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vinnitsa.info/news/193-punkty-nezlamnosti-vzhe-ye-na-vinnychchyni-serhiy-borzov.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>193 «Пункти незламності» вже є на Вінниччині – Сергій Борзов</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQWGfzZEQ3d6UG0U7JJXhhh8_mdMFbAGxICCs3ykHpH_xeqex1Qy59K59WLvhp4Ev3kT1UGA__78A" alt="193 «Пункти незламності» вже є на Вінниччині – Сергій Борзов" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По всій Вінницькій області створені місця, куди кожен зможе прийти в разі тривалого відключення електроенергії.</p></div>
            </div>
        </a><a href='https://vchasnoua.com/donbass/74528-na-donechchyni-pratsiuvatymut-173-punkty-nezlamnosti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Донеччині працюватимуть 173 &quot;пункти незламності&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReo5gJS7W-DzjYh2USjjr7Pk68FNBq8w1hExnjv6bc6ZrJBqz3GlQf2lFzCS23JE4NLrobAVed" alt="На Донеччині працюватимуть 173 &quot;пункти незламності&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По всій країні розгортають новий проєкт підтримки людей – &quot;Пункти незламності&quot;, про це розповів у вчорашньому вечірньому зверненні Президент України&nbsp;...</p></div>
            </div>
        </a><a href='https://www.radiosvoboda.org/a/svoboda-live-raketny-udar/32145549.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ракетний удар по Україні. Результати «прильотів» на Київщині ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTMaugVbiOZ7uOljmmoWebOIBBnqBBm2twwDSJI7FFbsxDRbnmYtQZzu0v36Pw5T8XrEjvvcGDL" alt="Ракетний удар по Україні. Результати «прильотів» на Київщині ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Європарламент визнав Росію країною-спонсором тероризму. Раніше подібні рішення ухвалили Парламентські асамблеї НАТО і Ради Європи, а також парламенти Чехії,&nbsp;...</p></div>
            </div>
        </a><a href='https://kalushcity.gov.ua/news/pro-punkti-nezlamnosti-u-kaluskij-gromadi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Про ПУНКТИ НЕЗЛАМНОСТІ у Калуській громаді | Калуська ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRG1to6uQWg1_aLp1KhJNrrK1mRKwn-hdqndKxDKRHEco0MHcrBdyBmbWCcmCQu3dO8ouTVVmgo" alt="Про ПУНКТИ НЕЗЛАМНОСТІ у Калуській громаді | Калуська ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На території Калуської громади діятимуть стаціонарні пункти обігріву. Серед них : ✓ мобільний пункт ДСНС – відділення банку (Пушкіна, 8);.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/ukrayina/v-ukraine-razvorachivayut-rabotu-punktov-nezlamnosti-kak-nayti-i-kakie-uslugi-mozhno-poluchit-2208223.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Украине разворачивают работу &quot;Пунктов незламності&quot;: как ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRXA8VzqT0TvfXef7Rc_1Mm3jke-wLwcwFKejLqwAwGco4pw72glTzIrbrwveZNgcvHgBBwEh5k" alt="В Украине разворачивают работу &quot;Пунктов незламності&quot;: как ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ближайший &quot;Пункт незламності&quot; можно найти на специальном сайте nezlamnist.gov.ua. В Украине разворачивают работу &quot;Пунктів незламності&quot; в связи с очередной&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}