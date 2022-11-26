import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День памяті жертв Голодомору</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День памяті жертв Голодомору"/>
        <meta name="description" content="Trending News about День памяті жертв Голодомору" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День памяті жертв Голодомору</h1>
            <Image width={800} height={500} src="https://zn.ua/img/article/5198/35_main-v1669212194.jpg" alt="День памяті жертв Голодомору"/>
            <h3>Recent News</h3>
            <a href='https://zn.ua/ukr/UKRAINE/den-pamjati-zhertv-holodomoriv-istorija-pamjatnoji-dati.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День пам&#39;яті жертв голодоморів: історія пам&#39;ятної дати</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT8jRtoaAv6zCQFSkP8PZ12oI67PI3gY3l-Y5ac_cr56g2J-oGAQxKOmZXKXavTF6VeOeRqNc0m" alt="День пам&#39;яті жертв голодоморів: історія пам&#39;ятної дати" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26 листопада в Україні згадують жертв голодоморів 1921-22, 1932-33 та 1946-47 років. Пам&#39;ятна дата щороку припадає на четверту суботу листопада.</p></div>
            </div>
        </a><a href='https://radiotrek.rv.ua/news/den-pam-yati-zhertv-golodomoriv-26-listopada-ukrayina-vshanovuvatime-zagiblih-vid-genocidu_299057.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День пам&#39;яті жертв голодоморів: 26 листопада Україна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR93TLk4tDPov6JoVkQFlDXylZeOAftga82hpESDpuf4zt4vA637gzpP4UMNEDUwnIg0oyLrHHV" alt="День пам&#39;яті жертв голодоморів: 26 листопада Україна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Що треба знати про цей день. Щороку у четверту суботу листопада в Україні вшановують пам&#39;ять жертв голодоморів. Цього року скорботний день припадає на 26&nbsp;...</p></div>
            </div>
        </a><a href='https://vsim.ua/Podii/hmelnichan-zaklikayut-26-listopada-zapaliti-svichku-pamyati-11743147.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Хмельничан закликають 26 листопада запалити свічку пам&#39;яті</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTy2V0tscm-N9-n8j8wC49nY2JSWmsjkxsYZgoG4LDwWRJ7bjo5EeShXABXdGNqb5uX-USFwDnp" alt="Хмельничан закликають 26 листопада запалити свічку пам&#39;яті" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українці згадують цього дня усіх убитих під час голодоморів 1921-го, 1932-33-го, 1946-го років. Хмельничан і всіх мешканців громади закликають долучитися до&nbsp;...</p></div>
            </div>
        </a><a href='https://teren.in.ua/news/zapali-svichku-pam-yati-ternopolyani-zberutsya-shchob-vshanuvati-zhertv-golodomoru_393997.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Запали свічку пам&#39;яті»: тернополяни зберуться, щоб вшанувати ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOY_gDe4bKEG9ZqF7rB3ci2z399FPpul3_uMg2DuuWP8Wv4qnmwtU2zTe264czO1NTYNTCXKBA" alt="«Запали свічку пам&#39;яті»: тернополяни зберуться, щоб вшанувати ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>26 листопада на Театральному майдані відбудеться Всеукраїнська акція «Запали свічку пам&#39;яті». Початок о 16:00 год.</p></div>
            </div>
        </a><a href='https://olexrada.gov.ua/prestsentr/news/shhoroku-v-chetvertu-subotu-lystopada-ukrayina-vshanovuye-pam-yat-zhertv-golodomoru-1932-1933-rokiv-i-masovyh-shtuchnyh-golodiv-1921-1923-i-1946-1947-rokiv.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Щороку в четверту суботу листопада Україна вшановує пам&#39;ять ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCJAaR2Y7NHCawEG2SoNFv5vS7RRrlEnjsR54e7Cc82LcdaBSqWbZC8q7Dq20vn7_y3oV98nTY" alt="Щороку в четверту суботу листопада Україна вшановує пам&#39;ять ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Щороку в четверту суботу листопада Україна вшановує пам&#39;ять жертв Голодомору 1932–1933 років і масових штучних голодів 1921–1923 і 1946–1947 років ... У 2022-му&nbsp;...</p></div>
            </div>
        </a><a href='https://ternopilcity.gov.ua/news/63775.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>26 листопада на Театральному майдані Тернополя пройде ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqTidrDalgGhff6kz29rFUXd3BOE-HZjh76kdiWGybbIte2Yt8hPqTCZb173VHd4THBy4ymeKq" alt="26 листопада на Театральному майдані Тернополя пройде ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У День пам&#39;яті жертв Голодомору 1921-1922, 1932-1933 та 1946-1947 років, що припадає на четверту суботу листопада, у Тернополі проведуть поминальні заходи.</p></div>
            </div>
        </a><a href='https://life.pravda.com.ua/culture/2022/11/25/251497/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уроки Голодомору: як нам зберігати пам&#39;ять про геноцид, не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTAjzHIBod_spljuLG3Xwp2p0q-eozM9OQfHwV_3-qdydFIL3KpjSzofGQvA4vWDDcXgejtTNP6Ug" alt="Уроки Голодомору: як нам зберігати пам&#39;ять про геноцид, не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Росія знову чинить геноцид на наших землях: знищує українську ідентичність та її носіїв, робить це одночасно з продовольчим шантажем, знищенням врожаїв,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}