import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>28 листопада свято</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,28 листопада свято"/>
        <meta name="description" content="Trending News about 28 листопада свято" /></Head><Template>
            <h1 style={{fontSize: "30"}}>28 листопада свято</h1>
            <Image width={800} height={500} src="https://glavcom.ua/img/article/8917/50_main-v1669560867.jpg" alt="28 листопада свято"/>
            <h3>Recent News</h3>
            <a href='https://glavcom.ua/country/society/28-listopada-jake-sohodni-svjato-prikmeti-i-zaboroni-891750.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>28 листопада: яке сьогодні свято, прикмети і заборони</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCQVTYBVS-0fwIxt_U7JhITRF8hOVboUs41G89vPfbHSC7iH9gFEg0VLQJP10L5FVXAw-gRf-n" alt="28 листопада: яке сьогодні свято, прикмети і заборони" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У цей день не можна їсти м&#39;ясо, молоко, яйця та інші продукти.</p></div>
            </div>
        </a><a href='https://tsn.ua/ukrayina/cerkovne-svyato-28-listopada-komu-molyatsya-viryani-prikmeti-dnya-2208925.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Церковне свято 28 листопада - кому моляться віряни, прикмети дня</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxNzMRQFuAMF2D_-G5D3VTxxOiVZ2_24vE4asKtna9nmBA5cE6BbHFQOjG7cjFr_5XpzVt2Vje" alt="Церковне свято 28 листопада - кому моляться віряни, прикмети дня" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Яке свято в церковному календарі? 28 листопада в православному календарі день пам&#39;яті преподобного Паїсія Величковського.</p></div>
            </div>
        </a><a href='https://www.unian.ua/lite/holidays/narodnyy-prazdnik-28-noyabrya-2022-obychai-primety-chto-nelzya-delat-12056637.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>28 листопада: народне свято сьогодні, прикмети погоди і заборони</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUAyOxsrDNMOFfGKe7bQlvd-B9lCYUJbWzgBplUYGU3PsYxxcoGcLcSs9GRF9jXyycMCVJM7jL" alt="28 листопада: народне свято сьогодні, прикмети погоди і заборони" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 листопада 2022 року відзначається народне свято день Гурія. Дізнайтеся, які обряди проводяться в цей день, що не можна робити і які прикмети погоди.</p></div>
            </div>
        </a><a href='https://lviv.media/ukraina/60333-28-listopada-cerkovni-svyata-imeninniki-prikmeti-i-sho-ne-mozhna-robiti/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>28 листопада: церковні свята, іменинники, прикмети і що не ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR01POa4-PKJxspC4ha2UW0Ipn9-5pMA9EeoLxxE0jOhBvwohPlo-jQnQPsGCEZgNtMyVn-7rDS" alt="28 листопада: церковні свята, іменинники, прикмети і що не ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Чиї іменини святкувати, яке церковне свято 28 листопада, прикмети та заборони — про все пише LVIV.MEDIA…</p></div>
            </div>
        </a><a href='https://www.rbc.ua/rus/styler/vazhlive-tserkovne-svyato-28-listopada-shcho-1669553235.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Важливе церковне свято 28 листопада: що суворо заборонено в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSjP0KqpERbegaRmZ5bApL11_-GLiRDzotcVtIWWoium_MmfQmaTLZgkMZzyU50Yst6h_8MZ9MQ" alt="Важливе церковне свято 28 листопада: що суворо заборонено в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>28 листопада 2022 року за православним календарем вшановують пам&#39;ять святих Гурія, Самона і Авія. Також з цього дня починається сорокаденний Різдвяний піст.</p></div>
            </div>
        </a><a href='https://1plus1.ua/novyny/ake-sogodni-svato-28-listopada-gurev-den-pocatok-rizdvanogo-postu-so-ne-mozna-robiti'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Яке сьогодні свято — 28 листопада: Гур&#39;єв день, початок ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQGVSRhSmzKPYTaiv5_1FVVo4S2qjYQH4jYaOFDblYzg1k0FfiJHbZWloGYx8aOEu5Pt-DK5DKz" alt="Яке сьогодні свято — 28 листопада: Гур&#39;єв день, початок ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Яке сьогодні свято 28 литоспада: Гур&#39;єв день, початок Різдвяного посту за народним календарем.</p></div>
            </div>
        </a><a href='https://kazatin.com/Kult-podii/tserkovne-svyato-28-listopada--komu-molyatsya-sogodni-viryani-prikmeti-11743604.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Церковне свято 28 листопада — кому моляться сьогодні віряни ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSyBwYxlbHrf-LfJHkZ0BBYumnkNRHQhypkpQf0AcWAVyXs7aRWfj5afapXbSgEJDxV1yGp3eEI" alt="Церковне свято 28 листопада — кому моляться сьогодні віряни ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>[28:11:2022] Церковне свято 28 листопада — кому моляться сьогодні віряни, прикмети та заборони дня ✓Новини від kazatin.com ✓ Тільки свіжі новини&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}