import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Суспільне</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Суспільне"/>
        <meta name="description" content="Trending News about Суспільне" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Суспільне</h1>
            <Image width={800} height={500} src="" alt="Суспільне"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/320940-ci-pritagnut-do-vidpovidalnosti-propagandistiv-rf-ak-v-nurnberzkomu-procesi-vidpovidae-radnik-miznarodnih-sudiv/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чи притягнуть до відповідальності пропагандистів РФ, як в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMzwkAm1khVFoipx9uQWmXaeIRzbcGoRv47M6gZHK5pPkMtUaH5k8wNiGggDYvgUb2SXOuu30D" alt="Чи притягнуть до відповідальності пропагандистів РФ, як в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Річниця Нюрнберзького процесу — чи будуть притягнуті до відповідальності російські пропагандисти, як це було в Нюрнберзькому процесі&nbsp;...</p></div>
            </div>
        </a><a href='https://imi.org.ua/news/ideya-yakoyu-ya-zhyv-usyu-okupatsiyu-menedzher-suspilne-herson-pro-povernennya-ukrayinskogo-praporu-i49162'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Ідея, якою я жив усю окупацію&quot;, – менеджер &quot;Суспільне Херсон ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTldT-qGfrNQU0moHVcnEIkcJjOHWvCM3Pdw77hl2D-U2XtoEAQZP9QmAb2HjDiuu1NCVA-R4j2" alt="&quot;Ідея, якою я жив усю окупацію&quot;, – менеджер &quot;Суспільне Херсон ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Менеджер &quot;Суспільне Херсон&quot; Михайло Сваричевський повернув український прапор на будівлю філії у звільненому Херсоні. Прапор він купив в Одесі спеціально&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/319528-i-fizicno-i-moralno-tazko-zvilnenij-z-polonu-volinanin-volodimir-lucko/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;І фізично, і морально тяжко&quot;: звільнений з полону волинянин ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXLh5kJN8JMbE5BPmWqn55LWnCLC40wtlHQYAVTA03ad5UzH6RlMlk79q5fdnGMjS1W8VbsSuh" alt="&quot;І фізично, і морально тяжко&quot;: звільнений з полону волинянин ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Боєць полку &quot;Азов&quot; Володимир Лучко повернувся із чотиримісячного полону на Волинь. У неволю військовослужбовець потрапив під час оборони&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/321034-rosijski-obstrili-ta-okupacia-zrujnuvali-kiselivskij-licej-so-na-mikolaivsini/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Російські обстріли та окупація зруйнували Киселівський ліцей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7FxA0hfJDOEvAcMpUd2FUHu5s9kH_jzLqX9XL3-_pF8r3OXyHXWd2gPMsUrVGo4Jm46jGyg8W" alt="Російські обстріли та окупація зруйнували Киселівський ліцей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Двоповерхова будівля Киселівського ліцею, що розташовна в колишньому Снігурівському районі, зруйнована внаслідок російських обстрілів.</p></div>
            </div>
        </a>
        </Template></>;
}