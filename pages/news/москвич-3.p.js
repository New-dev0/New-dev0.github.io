import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Москвич 3</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Москвич 3"/>
        <meta name="description" content="Trending News about Москвич 3" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Москвич 3</h1>
            <Image width={800} height={500} src="https://img.rosbalt.ru/photobank/3b/01/ab/ae/VdhPywGCvTDY-1280.jpg" alt="Москвич 3"/>
            <h3>Recent News</h3>
            <a href='https://www.rosbalt.ru/moscow/2022/11/24/1979534.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Чем интересен кроссовер «Москвич 3»: все, что известно о ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR1vwPDJDs0QMEvrOJJziNNzYiYCcf7DpcmZSjf45I1kUZKseLr_OY6bUiaka06rSdK4JdVp_UF" alt="Чем интересен кроссовер «Москвич 3»: все, что известно о ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Узнаваемый облик автомобилю подарил итальянец Даниэль Гальоне, занимающий пост генерального директора JAC Italy Design Center. Внешность JAC JS4 отличают «&nbsp;...</p></div>
            </div>
        </a><a href='https://online47.ru/2022/11/23/stoimost-novogo-krossovera-moskvich-3-mozhet-sostavit-okolo-2-millionov-rubley-169151'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Стоимость нового кроссовера &quot;Москвич-3&quot; может составить ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLtiy0h7-8ObsxAQBycGgWUukA8ddrG3JEChdjtGZcg1b0VqzdYtVP4FQxvOymzHR_2GhZPkU9" alt="Стоимость нового кроссовера &quot;Москвич-3&quot; может составить ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>При этом другой источник утверждает, что новый кроссовер будет сопоставим по цене с китайским аналогом - JAC JS4. Предполагается, что до конца 2022-го на заводе&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kolesa.ru/article/tak-vot-ty-kakoy-moskvich-3-znakomimsya-s-mashinoy-na-ofitsialnom-starte-proizvodstva'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Так вот ты какой, Москвич 3: знакомимся с машиной на ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTo7HM8Sf2FOAdClwetX7XiY4jX1WpqpDH6OkF2SkRF3RuJwQHb-J4J9Umgg1EbcXowhjU_6ibA" alt="Так вот ты какой, Москвич 3: знакомимся с машиной на ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вчера, 23 ноября, московский автозавод, долгое время существовавший только в статусе предприятия Renault Россия (до 2014 года назывался «Автофрамос») и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.newkaliningrad.ru/news/briefs/economy/24022262-nazvana-stoimost-krossovera-moskvich-3-kotoryy-nachali-vypuskat-na-baze-zavoda-reno.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Названа стоимость кроссовера «Москвич 3», который начали ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdRNctGZcqOI1izDpuAedXWMpINtpn6LLAJSRqJy50KYSbuZBzgx9DwHd3f3V36LtAMVTVPJrn" alt="Названа стоимость кроссовера «Москвич 3», который начали ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Названа стоимость кроссовера «Москвич 3», который начали выпускать на базе завода «Рено». Его крупноузловая сборка была запущена 23 ноября.</p></div>
            </div>
        </a><a href='https://m.autostat.ru/news/53205/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Названа предварительная стоимость кроссовера «Москвич 3»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHxJU3rTjUx3ETDXEIRLBGAmlkiCWqVJQde7dcrpxWrHxxr3F2iKF1h0F4pI7XQIQovDbJdzaA" alt="Названа предварительная стоимость кроссовера «Москвич 3»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Стоимость нового компактного кроссовера «Москвич 3» будет сопоставима с ценой его китайского аналога JAC JS4 и составит порядка 1,6 – 2 млн рублей.</p></div>
            </div>
        </a><a href='https://oboz.info/krossover-moskvich-3-mozhet-stoit-ot-1-6-do-2-mln-rublej/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Кроссовер «Москвич 3» может стоить от 1,6 до 2 млн рублей</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSqWnARWzUoDgM9-P4hWsdGO6W3umf0D99mFVDuL3lOcFWeae1gIlrZyrfmlmfIwMQf5sjl0Io-" alt="Кроссовер «Москвич 3» может стоить от 1,6 до 2 млн рублей" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Как рассказывал OBOZ.INFO, 23 ноября на бывшем заводе Renault в Москве было запущено серийное производство автомобилей марки «Москвич».</p></div>
            </div>
        </a>
        </Template></>;
}