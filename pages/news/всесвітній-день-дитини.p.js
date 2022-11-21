import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Всесвітній день дитини</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Всесвітній день дитини"/>
        <meta name="description" content="Trending News about Всесвітній день дитини" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Всесвітній день дитини</h1>
            <Image width={800} height={500} src="https://s.0352.ua/img/section/newsIcon/is/2/1668935562934_6379f21b73bf7.jpg" alt="Всесвітній день дитини"/>
            <h3>Recent News</h3>
            <a href='https://www.0352.ua/news/3499713/vsesvitnij-den-ditini-olena-zelenska-vsanuvala-pamat-zagiblih-ditej-vid-rosijskoi-agresii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Всесвітній день дитини: Олена Зеленська вшанувала пам&#39;ять ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZeFh0XGOn_sNSzL3fyeL3-A-n40OB3IE4VCEMHs0YS66JfCUVXvSdL3g4b0ftuzFyYs0gVCXG" alt="Всесвітній день дитини: Олена Зеленська вшанувала пам&#39;ять ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Допускається цитування матеріалів без отримання попередньої згоди 0352.ua за умови розміщення в тексті обов&#39;язкового посилання на 0352.ua - Сайт міста Тернополя&nbsp;...</p></div>
            </div>
        </a><a href='https://wcu-network.org.ua/possessing-equal-rights/news/Vsesvtni_den_ditini'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Всесвітній день дитини - WCU - Жiночий консорцiум України</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRFCa7zdJKXo5kUxtqbvKlH58D8qtB4BpkbYbTo8JbNdOjLSa8CTuopaY3C79UQjLqqpYN8_sSN" alt="Всесвітній день дитини - WCU - Жiночий консорцiум України" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Друзі, сьогодні ми святкуємо день, що націлений на покращення добробуту та дотримання прав дітей по всьому світу. Всесвітній день дитини це важлива дата для&nbsp;...</p></div>
            </div>
        </a><a href='https://ua.usembassy.gov/uk/joint-statement-on-world-childrens-day-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Спільна заява з нагоди Всесвітнього дня дітей 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Спільна заява з нагоди Всесвітнього дня дітей 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Всесвітній день дітей 2022 ми, Посольства та Делегації – підписанти цієї заяви, висловлюємо глибоку занепокоєність через жахливий та довготриваючий вплив&nbsp;...</p></div>
            </div>
        </a><a href='https://news.glavred.net/vsemirnyy-den-rebenka-otkrytki-kartinki-i-milye-pozdravleniya-10426979.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Всесвітній день дитини: листівки, картинки і милі привітання</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6xJT5PCAh4YFpcS0qft4NU1KzzU8VGwT-35XpVL8-N5wH5cosdu5CwhIxRPZiBjIkvxwPNfng" alt="Всесвітній день дитини: листівки, картинки і милі привітання" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Всесвітній день дитини: листівки, картинки і милі привітання &middot; День захисту дітей - привітання, історія і сумна статистика ООН. &middot; День дитини 2022: історія та&nbsp;...</p></div>
            </div>
        </a><a href='https://life.nv.ua/ukr/znamenitosti/olena-zelenska-rozpovila-pro-vbitih-rosiyeyu-ukrajinskih-ditey-u-vsesvitniy-den-ditini-foto-50285396.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Хочу нагадати дорослим з усього світу». Олена Зеленська ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQL88iZ4B0bTFgT7abya_xm196zKyKMZvzb6D_wKYbhDndc7bM65mzzUh46SkzREsKDQ7tcRML5" alt="«Хочу нагадати дорослим з усього світу». Олена Зеленська ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Перша леді України Олена Зеленська нагадала світу про вбитих під час розв&#39;язаної Росією війни українських дітей.</p></div>
            </div>
        </a><a href='https://1news.com.ua/podii/popry-vijnu-yuvenalni-prokurory-prodovzhuyut-implementatsiyu-pidhodiv-druzhnih.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Попри війну, ювенальні прокурори продовжують імплементацію ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQQBQYno2RKz9CwBUwNUZKPO55Qr9USFQnrGHlAKZU8w_B1WZ1z2CzbL3h73mdtUGInzFUXlZhJ" alt="Попри війну, ювенальні прокурори продовжують імплементацію ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Попри війну, ювенальні прокурори продовжують імплементацію підходів, дружніх до дітей20 листопада 1959 року Генеральна Асамблея ООН прийняла Декларацію прав&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}