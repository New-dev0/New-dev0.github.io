import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Джо Байден</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Джо Байден"/>
        <meta name="description" content="Trending News about Джо Байден" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Джо Байден</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/012e0000-0aff-0242-f3d8-08dac64c2ac2_w1200_r1.jpg" alt="Джо Байден"/>
            <h3>Recent News</h3>
            <a href='https://www.radiosvoboda.org/a/bayden-makron-perehovory-putin-pidtrymka-ukrayiny/32158599.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден сказав, що «готовий поговорити з Путіним» про ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSOe6d0Ub0cFtZD0TGazj_7d8SiYl7OfWCK-r54WKcmL5JfADDpMTJLo3Jb12UNVqjg50kC_xhY" alt="Байден сказав, що «готовий поговорити з Путіним» про ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джозеф Байден, після кількагодинних переговорів у Вашингтоні із президентом Франції Емманюелем Макроном, заявив, що готовий говорити з Путіним&nbsp;...</p></div>
            </div>
        </a><a href='https://armyinform.com.ua/2022/12/01/ssha-francziya-poobiczyaly-pidtrymuvaty-ukrayinu/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Джо Байден та Емманюель Макрон пообіцяли підтримувати ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR1Gs5mBIWMnz5XLKYRgcv-2JhdYXamMZPlwALME8AJ2rtoaiOw2BtN6kop6xEhtwkInZ_oeV-1" alt="Джо Байден та Емманюель Макрон пообіцяли підтримувати ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Франція та США продовжать усіляко підтримувати України у війні із росією стільки, скільки... Война с Украиной 2022, Война с Украиной последние новости&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/biden-macron-ukraine/6858349.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Джо Байден и Эммануэль Макрон обсудили войну в Украине</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7g0Zljv3Yn2B-Ufkuilzv-1To1eK0oHAhwwRNPhORLG8I_wIH4x6rnREeYppmf2zbG7k4yM46" alt="Джо Байден и Эммануэль Макрон обсудили войну в Украине" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президента Франции впервые принимают в Белом доме в период правления администрации Байдена.</p></div>
            </div>
        </a><a href='https://tsn.ua/video/video-novini/dzho-bayden-gotoviy-na-peregovori-z-putinim.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Джо Байден готовий на переговори з Путіним</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAyrtz-veQ6vvGfCO34oY_5-_cHIwSN-Ge4Wx4nRHKpm-KFdgh3c9jKk6zQMnr1ZGsiBsOq9lV" alt="Джо Байден готовий на переговори з Путіним" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Джо Байден готовий на переговори з Путіним тільки в разі, якщо той викаже реальну готовність до пошуку виходу з війни. Про це американський президент&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/12/1/7378892/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден назвал условие для переговоров с Путиным</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRq7WV--HdC01Q62rz3AmPE-1OJLahuqh4ReM0-ljyGcGvNPVY3iBzlZA1yt4I6hvLy02yq6E52" alt="Байден назвал условие для переговоров с Путиным" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден пока не намерен говорить с российским визави Владимиром Путиным, но готов это сделать, если тот действительно проявит&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/1/7378892/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден назвав умову для переговорів із Путіним</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRq7WV--HdC01Q62rz3AmPE-1OJLahuqh4ReM0-ljyGcGvNPVY3iBzlZA1yt4I6hvLy02yq6E52" alt="Байден назвав умову для переговорів із Путіним" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден наразі не має наміру говорити з російським візаві Владіміром Путіним, але готовий це зробити, якщо той справді виявить&nbsp;...</p></div>
            </div>
        </a><a href='https://www.golosameriki.com/a/biden-not-intending-/6860277.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден не намерен разговаривать с Путиным, пока не появятся ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQQRh--TCp4zoAxqSKBof-mw5G0C3d8ERYt64vuz_e5g3Jp4KvL4JCcPOYkKZaGraCyHEqTrypo" alt="Байден не намерен разговаривать с Путиным, пока не появятся ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Представитель Белого дома заявил, что только Украина может определить, что будет являться предметом возможных мирных переговоров.</p></div>
            </div>
        </a><a href='https://tsn.ua/ru/video/video-novini/dzho-bayden-gotov-k-peregovoram-s-putinym.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Джо Байден готов к переговорам с Путиным</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRAyrtz-veQ6vvGfCO34oY_5-_cHIwSN-Ge4Wx4nRHKpm-KFdgh3c9jKk6zQMnr1ZGsiBsOq9lV" alt="Джо Байден готов к переговорам с Путиным" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Джо Байден готов к переговорам с Путиным только в случае, если тот выкажет реальную готовность к поиску выхода из войны. Об этом американский президент&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5695714'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Байден заявил о готовности к переговорам с Путиным по Украине</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_cBHfHNuTxDcqV0fS107IAYJdnxHI5LZLXG8oLegp13QO6a3xAWMDuqjP7T5Q4JxjTnNGBlYL" alt="Байден заявил о готовности к переговорам с Путиным по Украине" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден на пресс-конференции после переговоров с президентом Франции Эмманюэлем Макроном в Вашингтоне заявил, что готов пойти на переговоры&nbsp;...</p></div>
            </div>
        </a><a href='https://ukrainian.voanews.com/a/makron-i-baiden-zustrichautsya-u-bilomu-domi/6858008.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Нам треба знову стати братами по зброї&quot; - Макрон ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFMACoKtuFq_SJRieWXUdrouqAAlBxLsnrntFL2BvDIVxx1bN9jV9sUI01qVuztfRPHWRF9Zbu" alt="&quot;Нам треба знову стати братами по зброї&quot; - Макрон ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент США Джо Байден приймає у Білому домі президентську родину Франції - Еммануеля Макрона з дружиною Бріжит Макрон. Це перший державний візит у Білому&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}