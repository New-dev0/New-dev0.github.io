import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Повітряна тривога</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Повітряна тривога"/>
        <meta name="description" content="Trending News about Повітряна тривога" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Повітряна тривога</h1>
            <Image width={800} height={500} src="https://img.tsn.ua/cached/654/tsn-15890496c3fba55a55e21f0ca3090d06/thumbs/1200x630/01/52/2c0d9a0aca237bf9dc697dc7f61d5201.jpeg" alt="Повітряна тривога"/>
            <h3>Recent News</h3>
            <a href='https://tsn.ua/ato/povitryana-trivoga-u-bilshosti-oblastey-ukrayini-karta-2202751.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Повітряна тривога оголошена у Києві та більшості областей ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSK9vL3EByZCuoJgBDbUoWCwnLGTFawxVnHz0YZny1jBj0fMUeASSoPybQOpjwmVaPG8-guw0BM" alt="Повітряна тривога оголошена у Києві та більшості областей ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мешканів тих областей, де оголошена тривога, просять негайно пройти в укриття через загрозу ракетного удару.</p></div>
            </div>
        </a><a href='https://dailylviv.com/news/sytuatsiyi-i-pryhody/masshtabna-povitryana-tryvoha-u-vsii-ukrayini-dopovnyuietsya-104795'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масштабна повітряна тривога у всій Україні: загроза масованого ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2pwzGjYDAePrDEodOCqPmoX4vFOrJNrmSUVlXWIktMOCGkwfiQ-KtJ1dCkcMVRP-G9suJjWyz" alt="Масштабна повітряна тривога у всій Україні: загроза масованого ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сигнал про повітряну тривогу у Львівській області пролунав о 14.44. Про це пише Dailylviv.com. Стежте за трьома оперативними картами повітряних тривог.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/ukr/section-uanews/news-masshtabna-povitryana-trivoga-rosiyani-pidnyali-v-nebo-strategichnu-aviatsiyu-15-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масштабна повітряна тривога: росіяни підняли в небо ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStkFn0NrMGXkVAuh7GwfXKnFGDcM1iNyGpBlatgTF3GmlGd5cigNxNjyRcW13eDXP7R3d_AN-n" alt="Масштабна повітряна тривога: росіяни підняли в небо ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>15 листопада російські окупанти підняли в небо стратегічну авіацію, внаслідок чого в багатьох регіонах України оголошено повітряну тривогу. Пр.</p></div>
            </div>
        </a><a href='https://www.6262.com.ua/news/3497058/masstabna-povitrana-trivoga-povidomlaut-pro-zapusk-raket-dopovnuetsa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масштабна повітряна тривога. Повідомляють про запуск ракет ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQYX9KM-21FfaxVuo5p7MJQtLzDaaEa8DXkGD_Q541O_cj94Pm0eNvJCfrYjc_fcNCOR797szPb9g" alt="Масштабна повітряна тривога. Повідомляють про запуск ракет ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В усіх областях України лунає повітряна тривога. Пройдіть в укриття. Після обіду тривога поширилась на східні області нашої країни, а пізніше - розповзлась&nbsp;...</p></div>
            </div>
        </a><a href='https://24tv.ua/niztsi-oblastey-ukrayini-povitryana-trivoga-negayno-virushayte_n2198299'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Масована ракетна атака: по всій країні тривала понад 3 години</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtK2KYWemnfMRwcPRalApG479Psl5mpw65njKZL-sLiXqoZjc_aBhyE77-lZ6tbJIj6jgVSqUJ" alt="Масована ракетна атака: по всій країні тривала понад 3 години" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У низці областей 15 листопада 2022 пролунала повітряна тривога. В яких областях попереджали про загрозу з неба. Чому вмикали сирени та що стало причиною&nbsp;...</p></div>
            </div>
        </a><a href='https://glavcom.ua/country/incidents/v-ukrajini-masshtabna-povitrjana-trivoha-u-niztsi-rehioniv-nebezpeka-raketnikh-udariv-889306.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Україні масштабна повітряна тривога: у низці регіонів ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRrxwOysF8f9rQdtFhbU72xosPZbkbuDp44fk9X8hLsZoUsGdr6F_qDaXtYA2WKNws5dp54sXPS" alt="В Україні масштабна повітряна тривога: у низці регіонів ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Україні станом на 14:50 оголошена масштабна повітряна тривога. Про це повідомляє «Галвком» з посиланням на карту повітряних тривог.</p></div>
            </div>
        </a><a href='https://pershij.com.ua/povitryana-trivoga-po-vsij-ukrayini-poperedzhayut-pro-jmovirni-raketni-udari/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Повітряна тривога по всій Україні: попереджають про ймовірні ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Повітряна тривога по всій Україні: попереджають про ймовірні ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>По Україні вдень 15 листопада оголосили повітряну тривогу. У низці регіонів вже попередили про небезпеку масованого ракетного удару.</p></div>
            </div>
        </a>
        </Template></>;
}