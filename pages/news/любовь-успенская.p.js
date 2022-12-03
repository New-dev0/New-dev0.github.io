import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Любовь Успенская</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Любовь Успенская"/>
        <meta name="description" content="Trending News about Любовь Успенская" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Любовь Успенская</h1>
            <Image width={800} height={500} src="https://n1s1.hsmedia.ru/bd/a3/71/bda3713f38ff030c98252e93061dbeab/1200x625_0xac120003_12845448781669978583.png" alt="Любовь Успенская"/>
            <h3>Recent News</h3>
            <a href='https://www.starhit.ru/novosti/ne-stydno-okazatsya-lyubovnicei-miti-fomina-lyubov-uspenskaya-sdelala-zayavlenie-v-shou-duety-852787/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Не стыдно оказаться любовницей Мити Фомина!»: Любовь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6p9A8ehwzQxbveng6f02pmhCN95nz3nJ5Oj4-4vfwT_Ju0O613uEKP4VPt8cjmTmZHCprdNWV" alt="«Не стыдно оказаться любовницей Мити Фомина!»: Любовь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Любовь Успенская прекрасно относится к Мите Фомину и даже не прочь быть его возлюбленной. Об этом артистка во всеуслышание заявила в шоу «Дуэты» на канале&nbsp;...</p></div>
            </div>
        </a><a href='https://dni.ru/showbiz/2022/12/3/514000.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;В такую пасть только *** класть&quot;: облизавшей губки Успенской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTX_gt0kHwF-cu1oupYCuIjB6_sVjmQkw1duUGGsNrXsJKN2_yLNn8ixyfedfbFwZIIg8W5dPa5" alt="&quot;В такую пасть только *** класть&quot;: облизавшей губки Успенской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Народ прошелся по Любови Успенской. В который раз... Сложно не заметить, что за последние 10 лет королева шансона Любовь Успенская очень изменилась. Артистка не&nbsp;...</p></div>
            </div>
        </a><a href='https://novostivl.ru/news/20221203/117392/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Успенская сделала заявление в шоу «Дуэты», что не против ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQvBTgT7J4gJhQ8dSlwxkljn6KhUYwhvKeUFnqgCITOsWucl8WT0SFNYYmYj_hJ9v1vZnsV6v5h" alt="Успенская сделала заявление в шоу «Дуэты», что не против ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>3 декабря - NVL. Любовь Успенская чудесно относится к Фомину — известная артистка призналась, что не отказалась бы быть возлюбленной певца.</p></div>
            </div>
        </a>
        </Template></>;
}