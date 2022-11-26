import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Сериал Монастырь</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Сериал Монастырь"/>
        <meta name="description" content="Trending News about Сериал Монастырь" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Сериал Монастырь</h1>
            <Image width={800} height={500} src="https://sharing.vedomosti.ru/1669355596/vedomosti.ru/media/articles/2022/11/24/952012-serial-monastir.jpg" alt="Сериал Монастырь"/>
            <h3>Recent News</h3>
            <a href='https://www.vedomosti.ru/media/articles/2022/11/24/952012-serial-monastir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал «Монастырь» зрители смогут посмотреть и без ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsiDinODhbC1vh9mhsVNxE-Jkb2_coDokXc0sN2q-FtIkfEa-awhZUA5K2otfF3bjOJVOfwP_z" alt="Сериал «Монастырь» зрители смогут посмотреть и без ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство культуры отказало в прокатном удостоверении сериалу «Монастырь» из-за оскорбления чувств верующих, передает ТАСС со ссылкой на пресс-службу&nbsp;...</p></div>
            </div>
        </a><a href='https://shazoo.ru/2022/11/24/135784/serial-monastyr-oskorbil-cuvstva-veruiushhix-vozmozno-goloi-grudiu-ivleevoi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал &quot;Монастырь&quot; оскорбил чувства верующих — возможно ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRR2YBgE5THUaT_bgSwuG4F3SZjXzDbvKascjMCdIvGl9XmU7x5aEGXPfs3rIEcN_oecOCOxUir" alt="Сериал &quot;Монастырь&quot; оскорбил чувства верующих — возможно ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Издание &quot;Интерфакс&quot; сообщило, что Минкультуры РФ не выдало прокатное удостоверение сериалу &quot;Монастырь&quot;. Ведомство приняло решение на основании подпункта &quot;ж&quot;&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dp.ru/a/2022/11/25/RPC_raskritikovala_serial'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>РПЦ раскритиковала сериал &quot;Монастырь&quot; с Ивлеевой</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQuutpDIYvVb52qNXfw_G9rzBuN2Jly2HtnzLAq112q0SlbRPoGlN3H5e1T16NqL8LizWwJnP55" alt="РПЦ раскритиковала сериал &quot;Монастырь&quot; с Ивлеевой" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В Русской православной церкви поддержали решение Минкультуры РФ, которое отказалось выдать прокатн...</p></div>
            </div>
        </a><a href='https://www.fontanka.ru/2022/11/25/71846945/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Карикатура, но не оскорбление. В РПЦ не увидели уголовной ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRpjHaxGjpIV1tjciE5yLA3pt7SpdZGtjiBJd90smqie11XI0zVkB6nEde9d2-uR_Xy7ZwirTaC" alt="Карикатура, но не оскорбление. В РПЦ не увидели уголовной ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сериал «Монастырь» с Анастасией Ивлеевой в главной роли формирует «искаженное, карикатурное представление о русском монашестве» - Общество - 25 ноября 2022&nbsp;...</p></div>
            </div>
        </a><a href='https://adindex.ru/news/media/2022/11/24/308053.phtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал «Монастырь» не получил прокатное удостоверение из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR3DhC0pf2-M43L1l17FYECWOAbkQRV7um82KPvXNhqR7tiIZw4dvGItHKXowIJCjRCA4WW_rdz" alt="Сериал «Монастырь» не получил прокатное удостоверение из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ранее AdIndex сообщал, что «Монастырь» поставил рекорд по просмотрам в день премьеры на «Кинопоиске» — за первые сутки сериал посмотрело свыше 250 тыс.</p></div>
            </div>
        </a><a href='https://www.championat.com/cybersport/news-4904029-serial-monastyr-s-nastej-ivleevoj-oskorbil-chuvstva-veruyuschih.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сериал «Монастырь» с Настей Ивлеевой оскорбил чувства ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTsBC6xlhe2xB-HMyAXJWwjDa1tKyFL91edq1SKArOKbJLNRuQsE4FtQ3W_IOlEsKBSdiGjKJPj" alt="Сериал «Монастырь» с Настей Ивлеевой оскорбил чувства ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Минкультуры РФ отказало в выдаче прокатного удостоверения сериалу «Монастырь», в котором одну из главных ролей играет Настя Ивлеева. Причина — оскорбление&nbsp;...</p></div>
            </div>
        </a><a href='https://moika78.ru/news/2022-11-25/830846-minkult-pytaetsya-zapretit-serial-molochnikova-monastyr-v-kotorom-snyalas-ivleeva/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минкульт пытается запретить сериал Молочникова «Монастырь ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCG-IYHgPQzVqAelykB6Kg9fEmTqMjoyZ9T2EsxguLycGDWmTGQUsyDuA7wBesruufHN3Fyc7l" alt="Минкульт пытается запретить сериал Молочникова «Монастырь ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство культуры России заявило, что не будет выдавать прокатное удостоверение сериалу «Монастырь» режиссера Александра Молочникова. В ведомстве&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iphones.ru/iNotes/5-novyh-serialov-11-25-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 коротких сериалов, которые сносят крышу</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRLFQFJKDCbi0CPYdRsHqmdQ7ji3Zc4l7PS_QwPpk9-bPi-MgtyIHwd7LMyePuTyCR5e1akHcgd" alt="5 коротких сериалов, которые сносят крышу" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вас ждут захватывающие истории из мира фантастики, мистики, детективов и триллеров. Есть один новый русский сериал, которому даже не выдали прокатное&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}