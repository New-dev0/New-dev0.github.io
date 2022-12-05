import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Херсонська область</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Херсонська область"/>
        <meta name="description" content="Trending News about Херсонська область" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Херсонська область</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_11/thumb_files/620_324_1668778582-7268.jpg?1" alt="Херсонська область"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.ua/war/hersonska-oblast-rosiyani-desyatki-raziv-obstrilyali-region-12066591.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни десятки разів обстріляли житлові квартали Херсона та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHpViwJ6TfdlpZZsCdCsx_cgG1ZqdVMcVlBBBRWTU2ofq3H0WMfuSnwISDDa3CxcGrlQ1i9zXv" alt="Росіяни десятки разів обстріляли житлові квартали Херсона та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські окупанти гатили з артилерії, танків, мінометів, РСЗВ по житлових будинках та цивільній інфраструктурі Херсона і населених пунктів Херсонської&nbsp;...</p></div>
            </div>
        </a><a href='https://ua.korrespondent.net/ukraine/4541095-za-dobu-khersonsku-oblast-obstrilialy-46-raziv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>За добу Херсонську область обстріляли 46 разів</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTq1rE0G2KdUmzZeL58tdPBQKsPxcHfR71Z9NyA_lz0pI2xi29-s8vgjv7_M6rtDxvUjJ-T41vu" alt="За добу Херсонську область обстріляли 46 разів" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ворог бив з артилерії, танків, мінометів, РСЗВ по мирних населених пунктах області, повідомляє голова ОВА.</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/12/4/7379179/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни били по Херсонщині 46 разів: 1 загиблий та 2 поранених</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS_IkIiKd3wNCadMNLrrj3clG8f4UgA_agvcXxzw1PSFzwVdfSigATbMgJmTOqrbcLDngtDrMX5" alt="Росіяни били по Херсонщині 46 разів: 1 загиблий та 2 поранених" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россияне 46 раз за сутки обстреляли населенные пункты Херсонской области: есть погибший и раненые.</p></div>
            </div>
        </a><a href='https://gazeta.ua/articles/np/_e-zagibli-ta-poraneni-rosiyani-schilno-obstrilyali-hersonschinu/1123532'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Є загиблі та поранені ‒ росіяни щільно обстріляли Херсонщину</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYnwp6TWWyIldfkO-dLkTygzoQ7phyk8_A6oMaxD3NXOPfCxDxcUatIov3gNM6GP6nhLw7oYyN" alt="Є загиблі та поранені ‒ росіяни щільно обстріляли Херсонщину" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За добу, 3 грудня, російські війська 46 разів обстріляли територію Херсонщини. Ворог гатив з артилерії, танків, мінометів, РСЗВ по мирних населених пунктах&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/news/rosiyani-tankiv-obstrilyali-selo-hersonskiy-1670159164.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Росіяни з танків обстріляли село в Херсонській області: є ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQu7aKvT5KqNarUBDcy0ZP8_XHoQBs418zJs0iUj0xzP3R6-Lu2jv67iv8w_4FuV_wPWyvrPLot" alt="Росіяни з танків обстріляли село в Херсонській області: є ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Війська РФ 3 грудня з танків обстріляли село Республіканець в Херсонській області. Одна людина загинула, а ще одна тяжко поранена.</p></div>
            </div>
        </a><a href='https://delo.ua/incidents/okupanti-obstrilyali-xersonsku-oblast-je-zagiblii-407683/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Окупанти обстріляли Херсонську область, є загиблий</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4YfrmxqdztPf2R8zP-NeZI3iS5-xG3CYRjhUYvQwwerKIer2fuVNxOxVGO_FPSFAEW6Oow-Nd" alt="Окупанти обстріляли Херсонську область, є загиблий" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Російські окупаційні війська продовжують обстрілювати Херсонську області. Внаслідок чого минулої доби, 3 грудня, одна людина загинула та ще двоє отримали&nbsp;...</p></div>
            </div>
        </a><a href='https://interfax.com.ua/news/general/876145.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ворог за добу 28 разів обстріляв Херсонську область, влучив в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqChnJa8_l9jEUFGy6YvYYf8hYlWDsSSktXwl0ZChHO9u8V1B6OuX32OzhZlYyNxqsrvUloYd4" alt="Ворог за добу 28 разів обстріляв Херсонську область, влучив в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>За минулу добу російські окупанти 28 разів обстріляли територію Херсонської області, одна людина дістала поранень, повідомив голова обласної військової&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}