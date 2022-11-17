import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>16 листопада свято</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,16 листопада свято"/>
        <meta name="description" content="Trending News about 16 листопада свято" /></Head><Template>
            <h1 style={{fontSize: "30"}}>16 листопада свято</h1>
            <Image width={800} height={500} src="https://images.unian.net/photos/2022_10/thumb_files/620_324_1666161172-9301.jpg?1" alt="16 листопада свято"/>
            <h3>Recent News</h3>
            <a href='https://www.unian.ua/lite/holidays/narodnyy-prazdnik-16-noyabrya-2022-obychai-primety-chto-nelzya-delat-12046176.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>16 листопада: народні традиції, прикмети погоди і заборони дня</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSkis4I7OS1X-uxLh8GO1CfCQu6hkbl13gUyzE1W1GWuUBNPtpvOjD6cpVM_5jU-ANaLJJptc-6" alt="16 листопада: народні традиції, прикмети погоди і заборони дня" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>16 листопада 2022 року відзначається народне свято День Анни. Дізнайтеся, які обряди проводяться в цей день, що не можна робити і які прикмети погоди.</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/styler/narodne-i-tserkovne-svyato-16-listopada-shcho-1668527370.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Народне і церковне свято 16 листопада: що не можна робити ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR2YkUZsdVfjqjB6bw0amgssmfFjKYkSoZGptzPMLQ3vndGSh71mcoLyErxMbs56UeWQEhBGDAs" alt="Народне і церковне свято 16 листопада: що не можна робити ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Українцям розповіли, яке народне і церковне свято відзначається 16 листопада 2022 року. Що можна і не можна робити, традиції, дні ангела.</p></div>
            </div>
        </a><a href='https://bazarmedia.info/2022/11/16/16-%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%B0-%D1%8F%D0%BA%D0%B5-%D1%81%D1%8C%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%96-%D1%81%D0%B2%D1%8F%D1%82%D0%BE-%D1%82%D1%80%D0%B0%D0%B4%D0%B8%D1%86/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>16 листопада: яке сьогодні свято, традиції та заборони ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVXtjO5ikgG9JlTqGU65BPxdCxoH6CiJ8ZZzSFcFCjydLIgaYyScK5wLgSskNCwKZBJ-clW-bL" alt="16 листопада: яке сьогодні свято, традиції та заборони ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні, 16 листопада, відзначають Міжнародний день, присвячений терпимості, Всесвітній День ґудзиків та День працівників радіо, телебачення і зв&#39;язку&nbsp;...</p></div>
            </div>
        </a><a href='https://1plus1.ua/novyny/ake-sogodni-svato-16-listopada-den-pamati-knazni-anni-vsevolodivni-anna-osinna-so-ne-mozna-robiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яке сьогодні свято — 16 листопада: княжни Анни Всеволодівни ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS0qyRG-mgfv2fREUW2O9aCR9uARpyFdWtS9xhcjg4eluo5-1Eht2M5niJObMvXudp5h54b8OY8" alt="Яке сьогодні свято — 16 листопада: княжни Анни Всеволодівни ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Яке сьогодні свято 16 листопада: день пам&#39;яті княжни Анни Всеволодівни, Анна Осіння за народним календарем.</p></div>
            </div>
        </a><a href='https://bykvu.com/ua/bukvy/16-lystopada-iake-sohodni-sviato-tradytsii-prykmety-imenyny/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>16 листопада: яке сьогодні свято, традиції, прикмети, іменини</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSCQQqX4wkBAWbrHiB47CwWr-vLR_DOSwuItzrqaz8T2HQSLVpDQXoNyDPrqgio0ya70MGthgBn" alt="16 листопада: яке сьогодні свято, традиції, прикмети, іменини" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>1848 — У Лондоні дав останній концерт Фридерик Шопен. 1918 — Королівство Угорщина, яке до цього була частиною Австро-Угорської Імперії, проголошено республікою.</p></div>
            </div>
        </a><a href='https://vesti.ua/uk/lite-uk/357832-16-nojabrja-kakoj-sehodnja-prazdnik-i-den-anhela'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>16 листопада: яке сьогодні свято. Історія та традиції, день ангела</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2t4Y-gZkEfCTyh5LPpM-K10U44ZJi5xxuDH2Vd1w6XfRSrvShF6yN7n8phoUU_HZGBLS9ShtR" alt="16 листопада: яке сьогодні свято. Історія та традиції, день ангела" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>16 листопада – 320-й день 2022 року, до кінця якого залишається лише 45 днів. Сьогодні в Україні відзначається день працівників радіо та телебачення, а у світі&nbsp;...</p></div>
            </div>
        </a><a href='https://ukr.media/culture/448382/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>16 листопада — Анна Холодна: звичаї, традиції, обряди та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFBI4Z_8ZBaEGgGiwF01VwSV2wPTJSTLCrC1nJ1sRgLTizVJGg6t6ClK9QBahLm-6x8ddDPIvm" alt="16 листопада — Анна Холодна: звичаї, традиції, обряди та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сьогодні можна легко розпочинати нові проєкти — як творчі, так і фінансові.</p></div>
            </div>
        </a>
        </Template></>;
}