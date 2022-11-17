import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Львівобленерго</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Львівобленерго"/>
        <meta name="description" content="Trending News about Львівобленерго" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Львівобленерго</h1>
            <Image width={800} height={500} src="" alt="Львівобленерго"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/318248-na-lvivsini-grafik-pogodinnih-vidklucen-elektroenergii-bude-cilodobovim-so-zminitsa/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Львівщині графік погодинних відключень електроенергії буде ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR-PVxAeOc_OMFhF2eYzKrFGQcV839HHokTSTCU32miLvem18lX2NkxKEr2H3MGAwF7LSydJrGV" alt="На Львівщині графік погодинних відключень електроенергії буде ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media З 17 листопада на Львівщині оновлять графік погодинних відключень і діяти він буде цілодобово. Для кожної групи час відсутності&nbsp;...</p></div>
            </div>
        </a><a href='https://fakty.com.ua/ua/ukraine/suspilstvo/20221116-yaka-sytuacziya-zi-svitlom-u-lvovi-grafik-planovyh-vidklyuchen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яка ситуація зі світлом у Львові: графік планових відключень</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQmvfyh38RmdDa-M0nPjfFbml-LvKNuJ4erupkeihmDyAurRKndVJKxuIAZjezPbYu99kQhkwtN" alt="Яка ситуація зі світлом у Львові: графік планових відключень" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як відключатимуть світло у Львові 16 листопада 2022 року. Графік погодинних відключень електроенергії - дивіться внашому матеріалі.</p></div>
            </div>
        </a><a href='https://galinfo.com.ua/news/vidzavtra_na_lvivshchyni_vidklyuchennya_vidbuvatymutsya_dvichi_na_dobu_391983.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новини Львова: Відзавтра на Львівщині відключення ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSdQUNAb5vzChkgA5gD1izhKGYjjobDmnMePfP3ojM54b8eMUkJT2NyXNzwhLWScdLZhpFarZWN" alt="Новини Львова: Відзавтра на Львівщині відключення ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Львівобленерго повідомляють, що графік погодинних вимкнень оновлений і діє цілодобово. Фото Олена Ляхович, Гал-інфо. &quot;У зв&#39;язку з критичною ситуацією в&nbsp;...</p></div>
            </div>
        </a><a href='https://portal.lviv.ua/news/2022/11/16/na-lvivshchyni-zaprovadzhuiut-tsilodobovyj-hrafik-vidkliuchen-svitla'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Львівщині запроваджують цілодобовий графік відключень ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcST0Z3_lbncFXy8vvbNnq0yoEpRgRzCYVROc5o0vARSMEy8qtHMXk3Tgj7T1UxqrodV22dQmaHG" alt="На Львівщині запроваджують цілодобовий графік відключень ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>З 17 листопада графік погодинних відключень світла у Львівській області триватиме цілодобово. Про це повідомив у Facebook ....</p></div>
            </div>
        </a><a href='https://drogmedia.net.ua/2022/11/16/hrafik-vidkliuchennia-svitla-v-drohobytskij-hromadi-z-17-lystopada-rozpodil-za-hrupamy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Графік відключення світла в Дрогобицькій громаді з 17 листопада ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5v9OMVDWXKffHiqrbr4x0pyODAnllU2mZUpI2VXeLzF4xLRNYO-oP5UhK7oWnPcqDOpdD-Bic" alt="Графік відключення світла в Дрогобицькій громаді з 17 листопада ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Починаючи з 17 листопада графік погодинних вимкнень оновлений і діє цілодобово! У зв&#39;язку з критичною ситуацією в енергосистемі України внаслідок ракетних&nbsp;...</p></div>
            </div>
        </a><a href='https://varianty.lviv.ua/91575-na-lvivshchyni-vidnovyly-pohodynni-vymknennia-svitla'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Львівщині відновили погодинні вимкнення світла</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTTCi8SItCNisaYYf8cwpVkM1lwVaWOAebf1DzIjSZfyv4QOEJKkokU0TqOLg4o9OkvpGCQQT5OPA" alt="На Львівщині відновили погодинні вимкнення світла" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні на території області триватимуть графіки погодинних відключень електроенергії. Про це повідомляє &quot;Львівобленерго&quot; на своїй сторінці у Фейсбуці.</p></div>
            </div>
        </a><a href='https://lviv.tsn.ua/na-lvivschini-grafik-pogodinnih-vidklyuchen-elektroenergiyi-stane-cilodobovim-scho-ce-oznachaye-2203486.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>На Львівщині графік погодинних відключень електроенергії стане ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQceilBsTZywh9NUBIpsGJqduEAm0A3iP7KCcuSjI75PzMruJfkMl3CNNtk24nfZ80DJ5WyvWGc" alt="На Львівщині графік погодинних відключень електроенергії стане ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На Львівщині графік погодинних відключень електроенергії від 17 листопада триватиме цілодобово – тобто обмеження діятимуть не лише у період від 07:00 до&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}