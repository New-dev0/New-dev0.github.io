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
        </a><a href='https://focus.ua/lifestyle/537696-tainstvennyy-benksi-veroyatno-popal-na-video-kogda-risoval-graffiti-v-irpene'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бэнкси вероятно попал на видео, когда рисовал граффити в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDYPO3kcoo9_ZvwZPnvc5zqrFcowoj6z7XfL_xQ3bv2jXsxeJOFXffl22Vb5JbQ5xEN1GPP2zU" alt="Бэнкси вероятно попал на видео, когда рисовал граффити в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Впрочем, видео выглядит хорошо срежиссированной пародией, но тогда не исключено, что и сам Бэнкси выпустил его в Сеть, подогревая интерес к собственной&nbsp;...</p></div>
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
                <p style={{marginLeft: "15px"}}>Лише перевірена інформація в нас у Telegram-каналі Obozrevatel та Viber. Не ведіться на фейки! 6 copy.</p></div>
            </div>
        </a><a href='https://bykvu.com/ua/bukvy/vulychnyi-khudozhnyk-benksi-zaiavyv-shcho-brend-guess-vkrav-ioho-roboty-dlia-svoiei-vitryny/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Вуличний художник Бенксі заявив, що бренд Guess вкрав його ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRG1UREKeQk0x9e1Yb01rw3_NLxW7gjjOJ2gvaShPzFC0JzWFdB4gy_bloHaEhnWvIzznG9ddqS" alt="Вуличний художник Бенксі заявив, що бренд Guess вкрав його ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Відомий британський вуличний художник Бенксі заявив, що бренд одягу та аксесуарів Guess вкрав його роботи, використавши їх для своєї колекції.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-society/3617324-masovana-raketna-ataka-vilnij-herson-i-benksi-v-kievi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масована ракетна атака, вільний Херсон і Бенксі в Києві</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQc3ImQeAn3eOCpWnRwVW0lsy743IWdMTtn0zBCnWPNlEPg8GRpbppo_KFvddUDZIJgjJyo-3oZ" alt="Масована ракетна атака, вільний Херсон і Бенксі в Києві" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Житловий п&#39;ятиповерховий будинок у Печерському районі, в який влучила російська ракета, Київ, 15 листопада 2022 року. Фото: Микола М&#39;якшиков.</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/graffiti-benksi-v-borodyanke-stanut-ukrainskim-kuljturnym-naslediem/32137033.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Граффити Бэнкси в Бородянке станут украинским культурным ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRtIns0-38NS1L8waM0YPZtKInExIPpc6kRg8jXwnAVb0gVH_-Ps_WLzHef6zvHR6FKsbRB_Wfl" alt="Граффити Бэнкси в Бородянке станут украинским культурным ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Об этом изданию &quot;Украинские новости&quot; сообщили в сельской Раде Бородянки. Исполняющий обязанности сельского главы Георгий Ерко уточнил, что настенные рисунки&nbsp;...</p></div>
            </div>
        </a><a href='https://ukranews.com/ua/news/895991-borodyanka-ohoronyatyme-grafiti-benksi-ta-vnese-yih-do-spysku-ob-yektiv-kulturnoyi-spadshhyny'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бородянка охоронятиме графіті Бенксі та внесе їх до списку об ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQS2k44G73iv-vwOyAtTRU7QW9AU_EZ0snP5pmX0jEO9Ux50Pk-O-PVcCnRlGfxoZhsvAgcDZtY" alt="Бородянка охоронятиме графіті Бенксі та внесе їх до списку об ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Виконуючий обов&#39;язки селищного голови Бородянської селищної ради (Бучанський район Київської області) Георгій Єрко заявив, що графіті аномімного вуличного.</p></div>
            </div>
        </a><a href='https://vesti.ua/kultura/lichnost-pod-chernym-kapyushonom-benksi-fejk-ili-istina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кто такой Бэнкси и о чем его граффити</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS-qe98NwDqLpBrMavC1i6VP-Tf9B34m2GhS2073t1xyLDREywyUveSVfqHozwfVvJ_0DrVGvEu" alt="Кто такой Бэнкси и о чем его граффити" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Самая популярная теория в интернете, связанная с личностью известного на весь мир стрит-арт художника, ведет к половине дуэта Massive Attack, а именно к Роберту&nbsp;...</p></div>
            </div>
        </a><a href='https://donttakefake.com/shho-bude-z-robotamy-benksi-v-borodyantsi-vidpovidaye-mistseva-vlada/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Що буде з роботами Бенксі в Бородянці? Відповідає місцева влада</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTpyIx_d7qGpTgjr_2SIjLYHhecigr3sB-9csp7OAibkF9SqtMkaBeO6rhs6zHc--LaOMV1Rcwz" alt="Що буде з роботами Бенксі в Бородянці? Відповідає місцева влада" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Наразі відомо, що в Бородянці розташовані як мінімум дві роботи Banksy: графіті гімнастки, що стоїть на руках на уламках зруйнованого будинку, а також графіті&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}