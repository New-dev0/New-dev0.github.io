import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Обленерго</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Обленерго"/>
        <meta name="description" content="Trending News about Обленерго" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Обленерго</h1>
            <Image width={800} height={500} src="https://gdb.rferl.org/01af0000-0aff-0242-3daf-08dac7d16a3b_w1200_r1.jpg" alt="Обленерго"/>
            <h3>Recent News</h3>
            <a href='https://www.radiosvoboda.org/a/news-skhemy-aresht-oblenerho-luzhnykivska-hrupa/32133584.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд арештував 5 обленерго, які контролює російська ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJGKPFzXMJ7YFRUIxOrrwwyJsECR3hsSKM6tGmPSMKsXhr73rjoeLQDD8dAOt-dWt9NZMmEEwNTg" alt="Суд арештував 5 обленерго, які контролює російська ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За даними слідства, в період 2017-2022 років підконтрольні VS Energy обленерго «за фіктивними операціями перерахували понад 1,65 млрд грн на підприємства групи,&nbsp;...</p></div>
            </div>
        </a><a href='https://suspilne.media/318322-sud-arestuvav-5-oblenergo-pidkontrolnih-rosijskim-oligarham/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд арештував 5 обленерго, підконтрольних російським олігархам</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIlC3xizhFGMyfPCGbxGupuN0xI93SJUO7uX5iO17ahJPSE-yk6G0uRveBdgPbkfqX5FUEGFm1" alt="Суд арештував 5 обленерго, підконтрольних російським олігархам" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вони перебувають у власності групи VS Energy, яку, відповідно до інформації ЗМІ та слідства, контролюють громадяни РФ Олександр Бабаков, Євгеній Гінер та&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ukr/ECONOMICS/sud-naklav-aresht-na-chastki-rosijan-v-ukrajinskikh-oblenerho.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд наклав арешт на частки росіян в українських обленерго: у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSORAdvEGZLjtlz3ou2mLNbPDUlgUJW8ecp0dU44LOwODouoZJxKQWttQoPOi4GgbnAz8AGXx3a" alt="Суд наклав арешт на частки росіян в українських обленерго: у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На території України починаючи з 2001 року, і до теперішнього часу здійснює діяльність злочинна організація, що представлена громадянами Російської&nbsp;...</p></div>
            </div>
        </a><a href='https://zn.ua/ECONOMICS/sud-nalozhil-arest-na-chasti-rossijan-v-ukrainskikh-oblenerho.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд наложил арест на доли россиян в украинских облэнерго: у ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSORAdvEGZLjtlz3ou2mLNbPDUlgUJW8ecp0dU44LOwODouoZJxKQWttQoPOi4GgbnAz8AGXx3a" alt="Суд наложил арест на доли россиян в украинских облэнерго: у ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На территории Украины начиная с 2001 года и по настоящее время осуществляет деятельность преступная организация, представленная гражданами Российской&nbsp;...</p></div>
            </div>
        </a><a href='https://focus.ua/economics/537327-kontrolirovali-rossiyane-v-ukraine-arestovali-akcii-pyati-oblenergo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Контролировали россияне: в Украине арестовали акции пяти ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbRiYyZTWxP1gNw9TeopHWWYJXYbKi58UDtVoHAtGgCHzwhy7W-YQCZDG7xWwEFD1OGcrdxkzC" alt="Контролировали россияне: в Украине арестовали акции пяти ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Печерский райсуд Киева 11 ноября арестовал акции «Херсоноблэнерго», «Кировоградоблэнерго», «Житомироблэнерго»; «Ровнооблэнерго», «Черновцыоблэнерго»,&nbsp;...</p></div>
            </div>
        </a><a href='https://hromadske.radio/ru/news/2022/11/16/sud-arestoval-aktsyy-5-obl-nerho-kontrolyruem-kh-rossyyskoy-prestupnoy-hruppoy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд арестовал акции 5 облэнерго, контролируемых российской ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRyqEPxYMdoWLRd97bdaoCZnuKB0IIvVHMN9rFNrBAlKQanIxn_SFfQ0vtKs0SasoqqSldK2n2B" alt="Суд арестовал акции 5 облэнерго, контролируемых российской ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Предприятия, активы которых были арестованы, входят в группу VS Energy, которую контролируют граждане РФ.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/ukr/section-uanews/news-sud-areshtuvav-aktsii-pyati-ukrainskih-oblenergo-viyavilosya-ih-kontrolyue-rosiya-16-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд арештував акції п&#39;яти українських обленерго, виявилося їх ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcnI03N06QplwNNa2Nj74Dt26s0euvlLdte54JB93-t6CCVDGpmMYVUx7oMewSJaWzPp1uPk1Q" alt="Суд арештував акції п&#39;яти українських обленерго, виявилося їх ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За даними слідства, у період 2017—2022 років підконтрольні VS Energy обленерго &quot;за фіктивними операціями перерахували понад 1,65 мільярда гривень на&nbsp;...</p></div>
            </div>
        </a><a href='https://biz.nv.ua/markets/sud-arestoval-pyat-oblenergo-podkontrolnyh-rossiyskim-oligarham-novosti-ukrainy-50284631.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лужниковская группа. Суд арестовал пять облэнерго ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSWWNlDgT7imLD3nZG9eosubXmr6lt3ruIQyZmzddGJRGGNO0YldVdYPkEiFP_h4I7c1g6zHBjMw" alt="Лужниковская группа. Суд арестовал пять облэнерго ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В частности, речь идет о Херсоноблэнерго, Кировоградоблэнерго, Житомироблэнерго, Ровнооблэнерго и Черновцыоблэнерго. Они находятся под контролем россиян Евгения&nbsp;...</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-uanews/news-sud-areshtuvav-aktsii-pyati-ukrainskih-oblenergo-viyavilosya-ih-kontrolyue-rosiya-16-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Суд арестовал акции пяти украинских облэнерго, оказалось их ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTcnI03N06QplwNNa2Nj74Dt26s0euvlLdte54JB93-t6CCVDGpmMYVUx7oMewSJaWzPp1uPk1Q" alt="Суд арестовал акции пяти украинских облэнерго, оказалось их ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>На простом языке: на девятый месяц российско-украинской войны, украинцы узнают, что средства, которые они платят за электроэнергию, идут в карманы российским&nbsp;...</p></div>
            </div>
        </a><a href='https://biz.nv.ua/ukr/markets/sud-zaareshtuvav-p-yat-oblenergo-pidkontrolnih-rosiyskim-oligarham-50284631.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Лужніковська група. Суд арештував п&#39;ять обленерго ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTSWWNlDgT7imLD3nZG9eosubXmr6lt3ruIQyZmzddGJRGGNO0YldVdYPkEiFP_h4I7c1g6zHBjMw" alt="Лужніковська група. Суд арештував п&#39;ять обленерго ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Зокрема, йдеться про Херсонобленерго, Кіровоградобленерго, Житомиробленерго, Рівнообленерго та Чернівціобленерго. Вони знаходяться під контролем росіян Євгена&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}