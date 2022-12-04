import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Тимати</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Тимати"/>
        <meta name="description" content="Trending News about Тимати" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Тимати</h1>
            <Image width={800} height={500} src="https://st.peopletalk.ru/wp-content/uploads/2021/07/198773432_279826580591528_616204313350996549_n.jpg" alt="Тимати"/>
            <h3>Recent News</h3>
            <a href='https://peopletalk.ru/article/iskusstvo-i-svetskaya-tusovka-chto-izvestno-o-novoj-vozlyublennoj-timati/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Что известно о новой возлюбленной Тимати?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSjhajkTKDMrN-x7vyJ7uX3cRcTBW3u1aSRBuIcnu3mH7nnNrEdpkvMonsx45LPqY4xmV7gq53L" alt="Что известно о новой возлюбленной Тимати?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вот уже несколько дней все внимание прессы сконцентрировано на Тимати. Пару месяцев назад рэпер расстался с Валентиной Ивановой и нашел себе новую спутницу.</p></div>
            </div>
        </a><a href='https://7days.ru/news/devushka-iz-vysshego-obshchestva-timati-pereshel-ot-modeley-k-podruzhkam-poobrazovanney.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мальчик вырос: Тимати повзрослел и перешел от моделей к ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSnNIQxWVBuEPg0hdIzgj9SE3P2CfpDuhGWOSm9BAYRQb5nwobuBIIbSn0Yvolva_WfcmpOrwE6" alt="Мальчик вырос: Тимати повзрослел и перешел от моделей к ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В отличие от остальных возлюбленных, девушка не только красива, но и образованна. Она с красным дипломом закончила МГУ, а позже получила дополнительное&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-12-03/833037-novoj-vozlyublennoj-timati-stala-25-letnyaya-vypusknitsa-mgu-paulina/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новой возлюбленной Тимати стала 25-летняя выпускница МГУ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRSu3emMntQ_nkL26YuYHUEKP74Xnv2IR48-hfO3jY5ctOjKuglrjzudJsMgwDbT4E1Z86wMJ0N" alt="Новой возлюбленной Тимати стала 25-летняя выпускница МГУ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Рэпер Тимати нашел новую любовь. Пассией ловеласа российской сцены стала окончившая МГУ с красной &quot;корочкой&quot;, арт-дилер Паулина. На одном из культурных&nbsp;...</p></div>
            </div>
        </a><a href='https://mosregtoday.ru/soc/byvshaya-zhena-timati-podverglas-rezkoj-kritike-za-svoj-brend-kosmetiki-/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Бывшая жена Тимати подверглась резкой критике за свой бренд ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRU6pNZEGQmBGq7fNs1AZ8TL9sah4PCYJBW2P49tALHVdlQpdD_Fnn3usUHmtaNmwf9i3JYMDV2" alt="Бывшая жена Тимати подверглась резкой критике за свой бренд ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Анастасия Решетова, бывшая жена репера Тимати, выпустила собственный бренд косметики. Бьюти-блогер Марк Кофман на своем Youtube-канале жестко раскритиковал&nbsp;...</p></div>
            </div>
        </a><a href='https://www.passion.ru/news/nash-shoubiz/timati-teper-okuchivaet-devushek-poobrazovannee-kto-novaya-passiya-03-12-2022.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тимати теперь окучивает девушек пообразованнее: кто новая ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDa7AiqKVWVhZqTVWCHwW2VqbS19jNcUijMCTvFspJc0FaeqFk-9z0jFc3QPFl0Ezjlx45GFAc" alt="Тимати теперь окучивает девушек пообразованнее: кто новая ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новой пассией певца Тимати стала девушка по имени Паулина. Известно, что она имеет красный диплом МГУ и допобразование института «Сотбис» в Лондоне.</p></div>
            </div>
        </a><a href='https://popcake.tv/news/fanat-iskusstva-i-vliyatelnye-roditeli-chto-izvestno-o-novoj-vozlyublennoj-timati'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Фанат искусства и влиятельные родители: Что известно о новой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRNJpkiwoKy6Fxh7Kn7ThgTdhB2Gdx2tkxZYhPJ5GpmqUf9zb7TcQAeFYdvBjSfRYlp4JcSppcu" alt="Фанат искусства и влиятельные родители: Что известно о новой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>О возлюбленных рэпера Тимати можно написать целый том. Кажется, что музыкант меняет девушек, как перчатки. Еще недавно артиста часто видели в компании&nbsp;...</p></div>
            </div>
        </a><a href='https://dni24.com/exclusive/374234-timati-pereshel-ot-otnoshenij-s-modeljami-k-devushke-iz-vysshego-obschestva.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Тимати перешёл от отношений с моделями к девушке «из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQsIpY9RuRFTJvKu9nBAwvUW-qGzfsWOD-MqrxtJ6tbjvZRUysOECrJANvFCMDUiRti0gLLk9ZW" alt="Тимати перешёл от отношений с моделями к девушке «из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Музыкант и бизнесмен Тимати удивил пользователей Сети, вступив в отношения с арт-дилером Паулиной, которая является дочерью влиятельных людей.</p></div>
            </div>
        </a><a href='https://ovideo.ru/news/319701'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Мальчик вырос: Тимати нашел новую девушку, она из высшего ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7sEGneNUKsRIG-YiEJSpkC6ebV_pUbohDVFDNVGHFLuad3c0GndlmPv4gUlr1-Bu6y641TVR1" alt="Мальчик вырос: Тимати нашел новую девушку, она из высшего ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Длинноногой модели Валентине Ивановой удалось недолго задержаться в статусе девушки певца Тимати. Как оказалось, пара рассталась уже давно,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}