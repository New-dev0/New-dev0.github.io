import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>23 листопада свято</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,23 листопада свято"/>
        <meta name="description" content="Trending News about 23 листопада свято" /></Head><Template>
            <h1 style={{fontSize: "30"}}>23 листопада свято</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2021_12/thumb_files/620_324_1639041117-7729.jpg?1" alt="23 листопада свято"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.ua/lite/holidays/narodnyy-prazdnik-23-noyabrya-2022-obychai-primety-chto-nelzya-delat-12053391.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 листопада: народне свято і прикмети погоди, що не можна ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTi-xYheK8pTP5CwMDaIPEClIGIB2oxcc9NpvCFzsCI1p9iaGxNu58l_R8amH-SaFZUxTasniL" alt="23 листопада: народне свято і прикмети погоди, що не можна ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 листопада 2022 року відзначається народне свято день Родіона. Дізнайтеся, які обряди проводяться в цей день, що не можна робити і які прикмети погоди.</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/society/23-listopada-jake-sohodni-svjato-prikmeti-i-zaboroni-890923.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 листопада: яке сьогодні свято, прикмети і заборони</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLN-CSprbWUGsvBewInuog-ASueLmt3h3j0wExDHZT6QIxY6TWe0ks4vDXSXYA6pskeJNdCGbe" alt="23 листопада: яке сьогодні свято, прикмети і заборони" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У середу, 23 листопада, відзначають Міжнародний день акварелі. Також в цей день у Грузії – День Святого Георгія, Японія – День подяки за працю,&nbsp;...</p></div>
            </div>
        </a><a href='https://kg.ua/news/yake-sogodni-svyato-vse-pro-23-listopada-osnovni-podiyi-shcho-ne-mozhna-robiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яке сьогодні свято – все про 23 листопада, основні події, що не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRYIOn2YwWsHevQy5EXg9DNgW-YaBEPpGeWd9FW5KEEe9aXJjJZlSnf5jt13hQUEIixTuWdnd93" alt="Яке сьогодні свято – все про 23 листопада, основні події, що не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 листопада 2022 року – середа. 273-й день війни в Україні. До Нового року залишається 38 днів. 23 листопада святкується Міжнародний день іміджконсультанта&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/styler/23-listopada-ke-sogodni-svyato-traditsiyi-1669135823.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 листопада: яке сьогодні свято, традиції, прикмети, іменини</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHZbR7_dlHvG3p2-rPvTrJTXXjZrrn-lZZaCboKM4tDAeaNo1bjxZIdAWYAHIkAxkIFeri2FbG" alt="23 листопада: яке сьогодні свято, традиції, прикмети, іменини" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 листопада православна церква вшановує пам&#39;ять святого Георгія Побідоносця. Як слід провести цей день?</p></div>
            </div>
        </a><a href='https://1plus1.ua/novyny/ake-sogodni-svato-23-listopada-rodion-i-erast-rodion-lodolom-so-ne-mozna-robiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яке сьогодні свято — 23 листопада: Родіон і Ераст, Родіон ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0qyRG-mgfv2fREUW2O9aCR9uARpyFdWtS9xhcjg4eluo5-1Eht2M5niJObMvXudp5h54b8OY8" alt="Яке сьогодні свято — 23 листопада: Родіон і Ераст, Родіон ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День інженера-електрика в Бразилії &middot; День подяки за працю в Японії &middot; День Геродота в Греції &middot; День Святого Георгія в Грузії.</p></div>
            </div>
        </a><a href='https://bykvu.com/ua/bukvy/23-lystopada-iake-sohodni-sviato-imenyny-tradytsii-prykmety/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 листопада: яке сьогодні свято, іменини, традиції, прикмети</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSXnFUkN9QDXCl_w_m6ugQdxwHu3MUL1-6NcFbNiIT-DoNNygcjDpRyQT0qCzMdxr7Yfzq-xdDy" alt="23 листопада: яке сьогодні свято, іменини, традиції, прикмети" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23 листопада відзначають Міжнародний день акварелі. За церковним календарем сьогодні вшановують пам&#39;ять святих апостолів від 70-ти - Єраста, Олімпа,&nbsp;...</p></div>
            </div>
        </a><a href='https://radiotrek.rv.ua/news/23-listopada---yake-sogodni-svyato_298873.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>23 листопада – яке сьогодні свято?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ4hsC91EuyNJ1Vsb0ZZk9sBOD3Ph5P1gyaqnxgLH-WYS3XT-fhibCy1ExaUWi6MW5HgluOiV4n" alt="23 листопада – яке сьогодні свято?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Що заведено робити в цей день. Сьогодні, 23 листопада, православні християни вшановують пам&#39;ять святого мученика Ореста. У цей день віряни мають відвідати&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}