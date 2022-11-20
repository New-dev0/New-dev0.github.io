import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Бенксі</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Бенксі"/>
        <meta name="description" content="Trending News about Бенксі" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Бенксі</h1>
            <Image width={800} height={500} src="" alt="Бенксі"/>
            <h3>Recent News</h3>
            <a href='https://suspilne.media/319748-vulicnij-hudoznik-zi-svitovim-imam-hto-takij-benksi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вуличний художник зі світовим ім&#39;ям: хто такий Бенксі</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdNCIOdYYBt44sFKxIdsadYVdCyPOGQuU4BQH3agaAuULHkg91cxryjSJc3MgB_c5VjoSxs_-s" alt="Вуличний художник зі світовим ім&#39;ям: хто такий Бенксі" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>suspilne.media Малюнки вуличного художника Бенксі з&#39;являються по всьому світу та продаються на аукціонах за мільйони доларів.</p></div>
            </div>
        </a><a href='https://focus.ua/culture/537713-sem-graffiti-benksi-v-ukraine-kakoe-poslanie-zashifroval-hudozhnik'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Формула британца. Какое послание украинцам зашифровал ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2BDYiyHnCgugnzKr3ZrIsfBTom6jyL6fnCboo2143tpMp0VSXv7sHoP4JyJpnTu_aE9AmU-Hh" alt="Формула британца. Какое послание украинцам зашифровал ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Британская звезда стрит-арта Бэнкси восславил стойкость украинцев и пожелал нам Победы. Related video. До Украины добралась очередная мировая звезда.</p></div>
            </div>
        </a><a href='https://focus.ua/uk/lifestyle/537696-tainstvennyy-benksi-veroyatno-popal-na-video-kogda-risoval-graffiti-v-irpene'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Таємничий Бенксі ймовірно потрапив на відео, коли малював ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDYPO3kcoo9_ZvwZPnvc5zqrFcowoj6z7XfL_xQ3bv2jXsxeJOFXffl22Vb5JbQ5xEN1GPP2zU" alt="Таємничий Бенксі ймовірно потрапив на відео, коли малював ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Утім, відео виглядає добре зрежисованою пародією, але тоді не заперечують, що й сам Бенксі випустив його у мережу, підігріваючи інтерес до власної персони.</p></div>
            </div>
        </a><a href='https://vogue.ua/ua/article/culture/art/benksi-pokazav-video-pro-svoyu-podorozh-v-ukrajinu.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бенксі показав відео про свою подорож в Україну</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQj_0zuIWBZranYWYyxp4ZImkuWrEmcJFN6iH14rsEKrD3WfvsU67fsGkpCuT4XjtrzrWdttwqP" alt="Бенксі показав відео про свою подорож в Україну" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Подорож у воєнну Україну, судячи з усього, справила потужне враження на всесвітньовідомого художника: майже рік Бенксі нічого не публікував у соцмережах,&nbsp;...</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/society/graffiti-benksi-v-borodyanke-planiruyut-sdelat-obektom-kulturnogo-naslediya-chto-izvestno-ob-artobektah.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Граффити Бенкси в Бородянке планируют сделать объектом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShthfMlUCkzFhaWwCsZwG8G8ieFYPXzHMuHJkFDsCHpvl72ou2j06p-gwsHqhnKfbsVdLsj1ja" alt="Граффити Бенкси в Бородянке планируют сделать объектом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1,9 т. Только проверенная информация у нас в Telegram-канале Obozrevatel и в Viber . Не ведитесь на фейки!</p></div>
            </div>
        </a><a href='https://news.obozrevatel.com/ukr/society/grafiti-benksi-u-borodyantsi-planuyut-zrobiti-obektom-kulturnoi-spadschini-scho-vidomo-pro-artobekti.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Графіті Бенксі у Бородянці планують зробити об&#39;єктом ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcShthfMlUCkzFhaWwCsZwG8G8ieFYPXzHMuHJkFDsCHpvl72ou2j06p-gwsHqhnKfbsVdLsj1ja" alt="Графіті Бенксі у Бородянці планують зробити об&#39;єктом ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>4,7 т. Лише перевірена інформація в нас у Telegram-каналі Obozrevatel та Viber. Не ведіться на фейки!</p></div>
            </div>
        </a><a href='https://bykvu.com/ua/bukvy/vulychnyi-khudozhnyk-benksi-zaiavyv-shcho-brend-guess-vkrav-ioho-roboty-dlia-svoiei-vitryny/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вуличний художник Бенксі заявив, що бренд Guess вкрав його ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1JG5NP138zNXvFcFg731fO8R9X-cSt1_F5ko_w3A7ET5P7ZLnLP1uQCyMv_cctWW_t9wEZRRH" alt="Вуличний художник Бенксі заявив, що бренд Guess вкрав його ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Відомий британський вуличний художник Бенксі заявив, що бренд одягу та аксесуарів Guess вкрав його роботи, використавши їх для своєї колекції.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-society/3617324-masovana-raketna-ataka-vilnij-herson-i-benksi-v-kievi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масована ракетна атака, вільний Херсон і Бенксі в Києві</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQc3ImQeAn3eOCpWnRwVW0lsy743IWdMTtn0zBCnWPNlEPg8GRpbppo_KFvddUDZIJgjJyo-3oZ" alt="Масована ракетна атака, вільний Херсон і Бенксі в Києві" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Житловий п&#39;ятиповерховий будинок у Печерському районі, в який влучила російська ракета, Київ, 15 листопада 2022 року. Фото: Микола М&#39;якшиков.</p></div>
            </div>
        </a><a href='https://ukranews.com/ua/news/895991-borodyanka-ohoronyatyme-grafiti-benksi-ta-vnese-yih-do-spysku-ob-yektiv-kulturnoyi-spadshhyny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бородянка охоронятиме графіті Бенксі та внесе їх до списку об ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQS2k44G73iv-vwOyAtTRU7QW9AU_EZ0snP5pmX0jEO9Ux50Pk-O-PVcCnRlGfxoZhsvAgcDZtY" alt="Бородянка охоронятиме графіті Бенксі та внесе їх до списку об ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Виконуючий обов&#39;язки селищного голови Бородянської селищної ради (Бучанський район Київської області) Георгій Єрко заявив, що графіті аномімного вуличного.</p></div>
            </div>
        </a><a href='https://www.5.ua/dv/ru/life/292859'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Бородянке демонтируют граффити Бэнкси</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXmrg1c47DU9Klg381aRl99ycXe5-iQ2P2E-KySSETHAU77PbHEH5vevZD0ahm4zAbKJ38C0RA" alt="В Бородянке демонтируют граффити Бэнкси" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Гений уличного искусства посетил города Украины, разрушенные в результате прихода русской армии.</p></div>
            </div>
        </a>
        </Template></>;
}