import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Население Земли</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Население Земли"/>
        <meta name="description" content="Trending News about Население Земли" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Население Земли</h1>
            <Image width={800} height={500} src="http://siapress.ru/images/news/main/118219_230x0@2x.jpg" alt="Население Земли"/>
            <h3>Recent News</h3>
            <a href='https://siapress.ru/news/118219-cherez-15-let-naselenie-zemli-moget-uvelichitsya-do-9-mlrd-chelovek'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Через 15 лет население Земли может увеличиться до 9 млрд ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWeadi_9U_vV34B2gQNbVW1vCjQWLmFgus0IujhmAqvilKmLzjKpXGMw6T3RXELJ1ZGE9YoMGA" alt="Через 15 лет население Земли может увеличиться до 9 млрд ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ОНН: Численность населения Земли достигла отметки в 8 млрд человек.</p></div>
            </div>
        </a><a href='https://online47.ru/2022/11/15/naselenie-zemli-prevysilo-8-milliardov-chelovek-168561'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Население Земли достигло 8 миллиардов человек</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTTsIhZgbMQj8dgp3BQcBK9qwxJ2zDau9EYGWCx3bkF9ijUhU7Ka_WzG6TR-NH6YFAdKwkg1Kge" alt="Население Земли достигло 8 миллиардов человек" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Численность людей на планете выросла на 1 миллиард всего за 12 лет. Население Земли преодолело отметку в 8 млрд человек 15 ноября, как и прогнозировалось&nbsp;...</p></div>
            </div>
        </a><a href='https://meduza.io/news/2022/11/15/naselenie-zemli-vyroslo-do-vosmi-milliardov-chelovek'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Население Земли выросло до восьми миллиардов человек ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR03apE3o9WbGOqGVGFVMvJV7fLZfOH_nVQdQeU5kW34YKNe9Fr6ydmfkniifokwLopIkyWIFyM" alt="Население Земли выросло до восьми миллиардов человек ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15 ноября население Земли, по оценкам ООН, достигло восьми миллиардов человек. Об этом сообщает пресс-служба организации.</p></div>
            </div>
        </a><a href='https://www.forbes.ru/society/481131-oon-soobsila-o-dostizenii-8-mlrd-ludej-naselenia-planety'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Население Земли достигло 8 млрд человек</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9_FWT4ptDlCApD4-0qOjn2Mb7bk_THMfQREmnVi8T3vQqOa7EfnlRAXY_1Z9UCykBYVJxJC1N" alt="Население Земли достигло 8 млрд человек" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Население Земли достигло 8 млрд человек. ООН прогнозировала, что это произойдет 15 ноября — хотя демографы признают, что в точности подсчитать людей&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5667917'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Население Земли превысило 8 миллиардов человек</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRpwgPtpGGGGXAdbJYCOVHPi7SSpXF7vUmOQNZxsyFZOpI5caXpMMY8IMc63y8oaNtdb74lZbDA" alt="Население Земли превысило 8 миллиардов человек" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Население Земли достигло 8 млрд человек, сообщила пресс-служба ООН со ссылкой на подсчеты организации. Число людей на планете выросло на 1 млрд за 11 лет.</p></div>
            </div>
        </a><a href='https://www.svoboda.org/a/oon-naselenie-zemli-dostiglo-8-milliardov-chelovek/32131479.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ООН: население Земли достигло 8 миллиардов человек</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgF8bNNkql-XkNGWNEE9-8cwv9RDA0e20SuAnoeueI5PzLXav-hevgmFscuKvtKtzA8Hd2fC27" alt="ООН: население Земли достигло 8 миллиардов человек" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>О том, что человечество может подойти к этому порогу, ООН сообщал во Всемирный день народонаселения 11 июля. Тогда был опубликован доклад World Population&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}