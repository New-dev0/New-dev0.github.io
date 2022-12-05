import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Алексей Коростелев</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Алексей Коростелев"/>
        <meta name="description" content="Trending News about Алексей Коростелев" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Алексей Коростелев</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_russian/18E8/production/_127867360_.jpg" alt="Алексей Коростелев"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/russian/news-63836217'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Дождь&quot; уволил ведущего за слова о помощи российским ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT_Y6lSLtCLZGVOi_OnruHO3nkXxi-SIvf5ylzqcrTWiTqNH5dzfU0N7tdK3P3tQKsqb-WHeJf5" alt="&quot;Дождь&quot; уволил ведущего за слова о помощи российским ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Телеканал &quot;Дождь&quot; (внесен в реестр &quot;иноагентов&quot;) сообщил, что прекратил сотрудничество с телеведущим Алексеем Коростелевым. Накануне журналист в прямом&nbsp;...</p></div>
            </div>
        </a><a href='https://nv.ua/world/countries/korostelev-zayavil-v-efire-chto-telekanal-dozhd-pomogaet-armii-rf-video-poslednie-novosti-50288233.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ведущий Дождя заявил, что телеканал помогает армии РФ, его ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ2AhEt70kWAJz4rJf60gBL2y1sBnmgUyXXtnwUfC6sUT29NIsSvHwqIsJYD0Fc4f3BLms8ymHD" alt="Ведущий Дождя заявил, что телеканал помогает армии РФ, его ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ведущий Алексей Коростелев в эфире российского телеканала Дождь заявил, что телеканал помогает российской армии, его уволили.</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/539390-uvolili-na-sleduyushchiy-den-vedushchiy-dozhdya-zayavil-chto-reportazhi-kanala-pomogayut-vs-rf-video'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уволили на следующий день: ведущий &quot;Дождя&quot; заявил, что ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTQC19C70rQ04J4fQpgzGeunX-8q12J9zx3199Gg3njI2K65aTE_0xauACmwkdbUHesHcTErPIp" alt="Уволили на следующий день: ведущий &quot;Дождя&quot; заявил, что ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На скандальное заявление россиянина отреагировал глава Минобороны Латвии, где сейчас находится главный офис СМИ. Артис Пабрикс предложил аннулировать&nbsp;...</p></div>
            </div>
        </a><a href='https://nn.tsargrad.tv/news/kto-takoj-aleksej-korostelev-chto-izvestno-o-zhurnaliste-kotorogo-liberaly-uvolili-v-prjamom-jefire_677214'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кто такой Алексей Коростелев: что известно о журналисте ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSXLUU4cS94pU3s1qCjHwWgcEJv8TesqSaPX0tk_N3UU2Hp0u31DtrijfOD0URuOOykWGSBQlPS" alt="Кто такой Алексей Коростелев: что известно о журналисте ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Скандал разгорелся в Латвии: сбежавшее из России либеральное СМИ находится под угрозой закрытия из-за слов журналиста Алексея Коростылева о спецоперации.</p></div>
            </div>
        </a><a href='https://fakty.ua/ru/411626-dozhd-konchilsya-oppozicionnyj-rossijskij-telekanal-vlyapalsya-v-gromkij-skandal-iz-za-vojny-v-ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Дождь» кончился: оппозиционный российский телеканал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTi6t2OY1k6VhlTkEC9p3aQNuQQ4B5yPncOD1Q0zGS03N39-4RoBI_yv-cTy3ftwPIjXeo5Mi9A" alt="«Дождь» кончился: оппозиционный российский телеканал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Телеканал «Дождь», который был объявлен «иноагентом» в россии и перенес свою деятельность в Латвию, оказался в центре скандала — телеведущий Алексей&nbsp;...</p></div>
            </div>
        </a><a href='https://rtvi.com/news/uhod-sotrudnikov-i-vnimanie-speczsluzhb-latvii-k-chemu-privel-skandal-iz-za-frazy-vedushhego-dozhdya-o-pomoshhi-rossijskoj-armii/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Уход сотрудников и внимание спецслужб Латвии. К чему привел ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTASKcyljwUKj7k-CNqAhwh0HWwdn3Iis6PSfadybBpWlT-L4Dwk0OEMEZIEvDD9UTOUz1Y-XwP" alt="Уход сотрудников и внимание спецслужб Латвии. К чему привел ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>2 декабря телеканал &quot;Дождь&quot; (внесен Минюстом России в реестр иностранных агентов) уволил ведущего Алексея Коростелева. Причиной стала произнесенная им во&nbsp;...</p></div>
            </div>
        </a><a href='https://www.unian.net/russianworld/vedushchiy-dozhdya-zayavil-o-pomoshchi-mobikam-teper-na-telekanale-uveryayut-chto-vse-vse-ne-tak-ponyali-video-12064512.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ведущий &quot;Дождя&quot; заявил о помощи &quot;мобикам&quot;: теперь на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkOs_P5ubaMk64iahccU5CW2xFvYhpigSbWNW6ckC9Rp7cjuOpsOIJ-G20j7sXRjmri43878Xm" alt="Ведущий &quot;Дождя&quot; заявил о помощи &quot;мобикам&quot;: теперь на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На российском телеканале &quot;Дождь&quot; заявили о том, что оказывают помощь мобилизованным в РФ. Теперь уверяют, что ведущего не так поняли. Видео и подробности.</p></div>
            </div>
        </a>
        </Template></>;
}