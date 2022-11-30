import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Скотт Келлі</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Скотт Келлі"/>
        <meta name="description" content="Trending News about Скотт Келлі" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Скотт Келлі</h1>
            <Image width={800} height={500} src="http://ipress.ua/media/gallery/full/s/k/skot_kelli_06b48.jpg" alt="Скотт Келлі"/>
            <h3>Recent News</h3>
            <a href='https://ipress.ua/news/amerykanskyy_astronavt_skott_kelli_vidvidav_irpin_ta_kyiv_336455.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Американський астронавт Скотт Келлі відвідав Ірпінь та Київ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSyfmM_n-wl2NLuByZ5UaDDzBqi6Xxrjw0IVLLoY0oqOhBpL_yrIg-O5YggcOTJw2aeMmIwsNG" alt="Американський астронавт Скотт Келлі відвідав Ірпінь та Київ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Раніше повідомлялось, що литовці закрили збір коштів і за $750 тисяч придбають для України три морські безпілотники. Підписуйтесь на iPress.ua в соціальних&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/news/2022/11/27/7378221/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Американський астронавт Скотт Келлі побував у Києві та в Ірпені</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQHvW0DGnArHvP6eKYgEIjDHeX1GKZ6Gz_RN2Jmm11GYAaC3pxaEp972FzPW8dkzs1z3XoLOe3bbg" alt="Американський астронавт Скотт Келлі побував у Києві та в Ірпені" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американський астронавт та амбасадор фандрайзингової платформи United24 Скотт Келлі відвідав Ірпінь Київської області та дитячу лікарню Охматдит у Києві.</p></div>
            </div>
        </a><a href='https://suspilne.media/326382-amerikanskij-astronavt-skott-kelli-vidvidav-irpin-ta-ohmadit-u-kievi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Американський астронавт Скотт Келлі відвідав Ірпінь та ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsA2s8x6pvZLsVa0lnoD4z3tJcmLmv4-jtDEVOH522rJR-4g7t0a3Yry_57pb-HwCQpsUFlLkp" alt="Американський астронавт Скотт Келлі відвідав Ірпінь та ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американський астронавт та амбасадор фандрайзингової платформи United24 Скотт Келлі відвідав Ірпінь Київської області та дитячу лікарню “Охмадит” у Києві.</p></div>
            </div>
        </a><a href='https://www.unian.ua/society/irpin-vidvidav-amerikanskiy-astronavt-skott-kelli-foto-novini-kiyeva-12059064.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ірпінь відвідав американський астронавт Скотт Келлі (фото)</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRutKOrlrdqdgLez7FG86M65wmV5XUcby8wWeiIsTcQKTgorINmz4ZOTFz1S4A16ZLO49hXGjer" alt="Ірпінь відвідав американський астронавт Скотт Келлі (фото)" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>У Ірпінь приїхав американський астронавт Скотт Келлі - амбасадор фандрейзингової платформи UNITED24.Він зібрав $500 тис. для підтримки українців.</p></div>
            </div>
        </a><a href='https://www.ukrinform.ua/rubric-uarazom/3623083-astronavt-skott-kelli-pobuvav-v-irpeni.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Астронавт Скотт Келлі побував в Ірпені</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRIvIz1FrTvOZvFu85KpDmlYGn3xIxKoDZ0Mc9dcfUDXZosenuYvDNo5dfncYm1vNi_gBjAPR2I" alt="Астронавт Скотт Келлі побував в Ірпені" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Як передає Укрінформ, про це міський голова Ірпеня Олександр Маркушин повідомляє у Телеграмі. «Сьогодні приймали в гостях американського астронавта Скотта&nbsp;...</p></div>
            </div>
        </a><a href='https://ru.interfax.com.ua/news/general/874996.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ирпень посетил американский астронавт Скотт Келли</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRxA958eP5gDQSAwiLc4ANwVrcxezlN3lLAbhK6pQy-Yd-RMUImHONAHgd3Q5_zx__Ic4meWI58" alt="Ирпень посетил американский астронавт Скотт Келли" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Сегодня принимали в гостях американского астронавта Скотта Келли. Господин Келли - посол фандрейзинговой платформы UNITED24 и сам первым внес 65000 долларов на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/27/7378221/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Американский астронавт Скотт Келли побывал в Киеве и в Ирпене</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQHvW0DGnArHvP6eKYgEIjDHeX1GKZ6Gz_RN2Jmm11GYAaC3pxaEp972FzPW8dkzs1z3XoLOe3bbg" alt="Американский астронавт Скотт Келли побывал в Киеве и в Ирпене" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский астронавт и амбассадор фандрайзинговой платформы United24 Скотт Келли посетил Ирпень Киевской области и детскую больницу Охматдет в Киеве.</p></div>
            </div>
        </a><a href='https://zn.ua/TECHNOLOGIES/astronavt-skott-kelli-posetil-irpen-i-kiev.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Астронавт Скотт Келли посетил Ирпень и Киев</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTK6anoMT2eZom8k39mVaZqNjNGUeT0wT69TMJpAoq7Sv4IMLg5OCTN0q1H-66Qx22VbmYDMwDg" alt="Астронавт Скотт Келли посетил Ирпень и Киев" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский астронавт Скотт Келли, который с начала полномасштабной войны поддерживает Украину, посетил Ирпень и Киев.</p></div>
            </div>
        </a><a href='https://health.fakty.com.ua/ru/novyny/astronavt-skott-kelli-zustrivsya-v-ohmatdyti-z-divchynkoyu-shho-postrazhdala-pid-chas-obstrilu-kramatorska/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Астронавт Скотт Келли встретился в Охматдете с девочкой ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTksmZzGPK--qlXnSpRCq15xjpxlAQIr9h3N9I-37t9xFKc6YLTrQ24n7fiRRvfpth3zcbTw570" alt="Астронавт Скотт Келли встретился в Охматдете с девочкой ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Астронавт Скотт Келли посетил Охматдет, где встретился с девочкой, пострадавшей при обстреле Краматорска. Подробнее читайте в наших материалах.</p></div>
            </div>
        </a><a href='https://www.stopcor.org/section-suspilstvo/news-astronavt-skott-kelli-vidvidav-irpin-ta-kiiv-foto-28-11-2022.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Астронавт Скотт Келли посетил Ирпень и Киев (фото ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQYtocmLZQ0I0Vn-ZMiQMFi-cyTbAW0RuA1nYWtD1CIrw3bFpoHQv9LbRgPq5CQgcLhXVt-QmXr" alt="Астронавт Скотт Келли посетил Ирпень и Киев (фото ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Американский космонавт посетил Украину. Скотт Келли, посол программы &#39;&#39;UNITED24&#39;&#39; и космонавт. Он воочию увидел последствия российской агрессии в города.</p></div>
            </div>
        </a>
        </Template></>;
}