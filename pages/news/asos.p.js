import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Asos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Asos"/>
        <meta name="description" content="Trending News about Asos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Asos</h1>
            <Image width={800} height={500} src="https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2022%2F11%2Fede986e54caa18c4b2e8fd386e527c6c37789bb1.jpg" alt="Asos"/>
            <h3>Recent News</h3>
            <a href='https://www.iphones.ru/iNotes/pochta-rossii-zapustila-dostavku-iz-asos-farfetch-i-drugih-zapadnyh-marketpleysov-11-29-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почта России запустила доставку из ASOS, Farfetch и других ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqVW6-EPpjX2AmzfBohU5zzxAS7nKL54ck966Zj3OA9Coxe6h74EnWWE6uPP9Gc_TeKwlUf2oL" alt="Почта России запустила доставку из ASOS, Farfetch и других ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пользователи могут оформить покупку в Asos, Net-a-Porter, Farfetch, Yoox, Mytheresa и сайтов брендов Zara, H&amp;M, Nike. Оплатить заказ можно со счета «Почта&nbsp;...</p></div>
            </div>
        </a><a href='https://itsmycity.ru/2022-11-29/pochta-rossii-nachnet-dostavlyat-tovary-izinternetmagazinov-asos-zara-ihm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почта России начнет доставлять товары из интернет-магазинов ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQI51UNSeaQxTf7LnAULwIXPVdSrvYTbJTYzi-68SGqI_5-GpG3gm-PRvJwGioLlhGfTI_XzEfj" alt="Почта России начнет доставлять товары из интернет-магазинов ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Почта России в партнерстве с Почта Global начнет доставлять товары магазинов ASOS, Zara, Nike, H&amp;M и других известных брендов.</p></div>
            </div>
        </a><a href='https://incrussia.ru/news/pochta-rossii-asos/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Новости</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSiGcMwrCqhfs3Oa5ugC4bvfQicNRHJpt8WG5jfNCYlWfdBEps7JOflkaj9Lo2RY1D49t3nYxzX" alt="Новости" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Клиенты оператора могут оформить заказ с европейских маркетплейсов и на официальных сайтах отдельных брендов. Комиссия «Почты Global» составит 10% от суммы&nbsp;...</p></div>
            </div>
        </a><a href='https://abnews.ru/2022/11/29/pochta-rossii-dostavit-odezhdu-s-asos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Почта России» доставит одежду с Asos</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0XW4_EOo7aHATRaN2TEht5UFzARoLaevvNqAACgo4gx1Ek2n0PHoCNBPNUlw-3IhTA4nBWU0v" alt="«Почта России» доставит одежду с Asos" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;Почта Россия&quot; вслед за частными структурами СДЭК и BUYMI запустила доставку товаров из маркетплейсов Евросоюза и Великобритании. Теперь, несмотря на уход&nbsp;...</p></div>
            </div>
        </a><a href='https://daily.afisha.ru/news/70509-zara-asos-i-nike-pochta-rossiizapustila-dostavku-iz-evropeyskih-internet-magazinov/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zara, Asos и Nike: «Почта России» запустила доставку из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQkvjTSq8RPDgPqMaorDXcRdjS5vFaa9rOEPcBy-lcHFUcN9_0hkzyLhMJdVu00mHAcdpRWMK2I" alt="Zara, Asos и Nike: «Почта России» запустила доставку из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Почта России» начала доставлять покупки из европейских интернет-магазинов через своего партнера «Почта Global». Об этом сообщается на сайте оператора&nbsp;...</p></div>
            </div>
        </a><a href='https://gubdaily.ru/news/pochta-rossii-budet-dostavlyat-tovary-asos-zara-i-hm/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почта России будет доставлять товары Asos, Zara и H&amp;M</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR90FSmaxQm4TuDgXG8bFgnoWioYcgYbKVV7cr_LhoE8_iMCaQ6t-6A8Vx4MD6wGyVfQJlitbQ1" alt="Почта России будет доставлять товары Asos, Zara и H&amp;M" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Вновь доступны для россиян Asos, Apple, Amazon, iHerb, Farfetch, Yoox, Zara, H&amp;M, Nike. После регистрации на сайте «Почты Global» пользователь получает адрес&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iguides.ru/main/other/rossiyane_teper_mogut_zakazyvat_tovary_s_dostavkoy_iz_asos_farfetch_i_drugikh_evropeyskikh_onlayn_ma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россияне теперь могут заказывать товары с доставкой из Asos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVen2D28HRcZtHz2Kk39ibrFB1Zryg1yWBKbeysD2EaQJPN-p7CvZUoPi3CevHo_9Pa1vor8Lv" alt="Россияне теперь могут заказывать товары с доставкой из Asos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Покупатели могут оформить заказ в большинстве европейских сторов, включая Asos, Net-a-Porter, Farfetch, Yoox, Mytheresa, Zara, H&amp;M, Nike, COS, аdidas и многих&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}