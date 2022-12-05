import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Елена Кондулайнен</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Елена Кондулайнен"/>
        <meta name="description" content="Trending News about Елена Кондулайнен" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Елена Кондулайнен</h1>
            <Image width={800} height={500} src="https://7days.ru/pic/d0c/982972/1451437/104.jpg" alt="Елена Кондулайнен"/>
            <h3>Recent News</h3>
            <a href='https://7days.ru/news/kina-ne-budet-a-zamuzh-vyydu-elena-kondulaynen-sdelala-gromkoe-zayavlenie-posle-insulta.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Елена Кондулайнен сделала смелое заявление после инсульта</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSguIznVfkMMqEYRaAqc6orb1q4HNEAbNKirKpAzaWwxJLFAcM4a3gFhl_piP8p9gjzCdKU8k9Q" alt="Елена Кондулайнен сделала смелое заявление после инсульта" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Актриса только пригубила шампанское, как сразу почувствовала себя плохо.</p></div>
            </div>
        </a><a href='https://www.vokrug.tv/article/show/16700783621/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Елена Кондулайнен призналась, что забыла сыновей после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrA8oIzyQvobdKwhr1NiUhTP1y_U-miGYS9pq1VsNmHnMkvAoruADlr4U23uYrXSBu8PHpkUka" alt="Елена Кондулайнен призналась, что забыла сыновей после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня вышел очередной выпуск шоу «Секрет на миллион» на телеканале НТВ. В программе свои тайны попыталась раскрыть звезда фильма «Сто дней до приказа»&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eg.ru/showbusiness/2800172-stalo-izvestno-ob-uhode-eleny-kondulaynen/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стало известно об уходе Елены Кондулайнен после инсульта</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSsfPw1j1VwlHxlab8jzhTpJsKMORBj1StWMeqpowxL7s2ED8wJQFM0WRbNSbevUDLJUgrk4O93" alt="Стало известно об уходе Елены Кондулайнен после инсульта" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Знаменитая актриса не смогла пережить случившееся. Зрители больше никогда не смогут увидеть секс-символ СССР в театре.</p></div>
            </div>
        </a><a href='https://teleprogramma.pro/news/nid4361171_au73639auauau_cr73639crcrcr_perenesshaya-insult-elena-kondulaynen-izmenilas-do-neuznavaemosti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Перенесшая инсульт Елена Кондулайнен изменилась до ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSHIs5qw_G_w760z-noUcMRDygkk4GNgQ9C4wgquDiz4luYFHZNNCb-m2E3l0n-GIescrWZCHbI" alt="Перенесшая инсульт Елена Кондулайнен изменилась до ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Известная актриса Елена Кондулайнен два года назад перенесла инсульт. В студии программы «Секрет на миллион» артистка рассказала, что до сих пор&nbsp;...</p></div>
            </div>
        </a><a href='https://dni24.com/exclusive/374222-elena-kondulajnen-rasskazala-kak-insult-izmenil-ee-zhizn.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Елена Кондулайнен рассказала, как инсульт изменил ее жизнь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtmVie-fVPLvfVNSleYO5OCSTMXo0mRcSnvy9MCZe6GgbmK8LZsAKpYblks2wzqbz3G7vix2tf" alt="Елена Кондулайнен рассказала, как инсульт изменил ее жизнь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Два года назад актриса Елене Кондулайнен пережила инсульт. Ей удалось восстановиться и сейчас она — желанный гость разных ток-шоу.</p></div>
            </div>
        </a><a href='https://4esnok.by/kalejdoskop/elena-kondulajnen-rasskazala-o-zavershenii-karery-iz-za-bolezni/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Елена Кондулайнен рассказала о завершении карьеры из-за ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGstvnRicC9vfkngyWbJcVEQ6VSSHOzg-6OTSvlis3cmMyvkncidGxWddZqGLfYjdEFjmRev4B" alt="Елена Кондулайнен рассказала о завершении карьеры из-за ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Прославленная российская актриса рассказала в эфире программы «Секрет на миллион» на телеканале НТВ, что вынуждена была завершить свою карьеру из-за&nbsp;...</p></div>
            </div>
        </a><a href='https://glas.ru/news/20221203/118388/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актриса Елена Кондулайнен призналась Кудрявцевой, что после ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjnfsXiwlL_qDXvmL68nRWc27i9E0n4cDBONiXHHxhLsDTgPOb_NuTiACNwXzEHLls1spnTGTn" alt="Актриса Елена Кондулайнен призналась Кудрявцевой, что после ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 декабря - ГЛАС. В студии программы «Секрет на миллион» появилась известная актриса Елена Кондулайнен. В откровенном разговоре с ведущей шоу Лерой&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}