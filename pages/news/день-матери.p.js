import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>День матери</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,День матери"/>
        <meta name="description" content="Trending News about День матери" /></Head><Template>
            <h1 style={{fontSize: "30"}}>День матери</h1>
            <Image width={800} height={500} src="https://cdni-vm.servicecdn.ru/2022.06/original/720_629f807482682c42ddc63b13.jpg" alt="День матери"/>
            <h3>Recent News</h3>
            <a href='https://vm.ru/society/1014211-den-materi-v-2022-godu-kogda-otmechayut-istoriya-prazdnika-v-rossii-i-torzhestvennye-meropriyatiya'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери в 2022 году: когда отмечают, история праздника в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDtPUpbbG86_necnCilRZlg3sEKrCvCxm8BBllcI5V2dtMRSTr7kMt62Ih4uBHesD3UMD_CoPa" alt="День матери в 2022 году: когда отмечают, история праздника в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День матери в России традиционно отмечают в последнее воскресенье ноября. В 2022 году праздник пришелся на 27-е число. Его история, традиции и идеи для&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kurgan-city.ru/city/info/glava/1165619/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери - последнее воскресенье ноября</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="День матери - последнее воскресенье ноября" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Милые дорогие наши мамы и бабушки! Поздравляю вас с праздником – днем матери. Именно вам мы обязаны жизнью, семейным уютом, всем лучшим, что в нас есть.</p></div>
            </div>
        </a><a href='https://foma.ru/v-rossii-otmechajut-den-materi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В России отмечают День матери – Православный журнал «Фома»</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoKBw1Bii0R9eNjd7eZUb9DCKnVCVM45bbxiPLMUA0Ik_cQ-bnAttknYsw3Nuvloczl8i4QZLX" alt="В России отмечают День матери – Православный журнал «Фома»" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В воскресенье 28 ноября 2022 года в России отмечается День матери, учрежденный в нашей стране в 1998 году.</p></div>
            </div>
        </a><a href='https://rt-online.ru/27-noyabrya-v-rossii-otmetyat-den-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября в России отметят День матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="27 ноября в России отметят День матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Цель праздника— поддержать традиции бережного отношения к женщине, закрепить семейные устои.</p></div>
            </div>
        </a><a href='https://www.penzainform.ru/news/remember/2022/11/26/27_noyabrya-den_materi_v_rossii.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>27 ноября - День матери в России</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRc5Z6t4y7E3sm-YgvIZhVLiYBuUWuhdWJc0NUQ0lw4BPsbYmCeBZAhNjhmKQdoXVuQCqAu2Dax" alt="27 ноября - День матери в России" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сегодня, 27 ноября, в последнее воскресенье месяца, в России празднуется День матери. Это прекрасный повод сказать самому дорогому на свете человеку - маме&nbsp;...</p></div>
            </div>
        </a><a href='https://vladimir.tsargrad.tv/news/kuda-shodit-vo-vladimire-na-den-materi-v-2022-godu_672981'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Куда сходить во Владимире на День матери в 2022 году</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTW67LpzPMZ-8_bwawNgRx5gNQyE5wwrtOM4rG1lvAmhxWUk0wbNYZwJNFTRbnxex-D9YdqGQWK" alt="Куда сходить во Владимире на День матери в 2022 году" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Средство массовой информации сетевое издание «Царьград/Tsargrad» зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и&nbsp;...</p></div>
            </div>
        </a><a href='https://vc.ru/cdek/547962-tret-rossiyan-ne-v-kurse-sushchestvovaniya-v-rossii-dnya-materi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Треть россиян не в курсе существования в России Дня матери ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxhW3S16KTyVZsmk6R-jA88UJ806iKiQuAz_Ld1nXrCnzccmHvpE7c0tccgKhYcfEvL2zUZdVj" alt="Треть россиян не в курсе существования в России Дня матери ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Такой вывод можно сделать на основании результатов опроса*, который провёл СДЭК совместно с некоммерческим центром «Душа мамы».</p></div>
            </div>
        </a><a href='https://ysia.ru/den-materi-novye-smysly-prazdnika-v-rossii-vo-vremya-svo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери: новые смыслы праздника в России во время СВО</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSD_jR_3ljnENEJgn6bU_sLtYfjXZa3I6fWiP3PgdIM5VQIQVTmxsOIji5uhMGIc3loQ35Kf4IN" alt="День матери: новые смыслы праздника в России во время СВО" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Президент утвердил основы госполитики по сохранению и укреплению традиционных российских духовно-нравственных ценностей.</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-26/peterburzhtsy-rasskazali-chto-hoteli-by-pozhelat-svoim-mamam-nakanune-dnya-materi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Петербуржцы рассказали, что хотели бы пожелать своим мамам ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRmWe64_9JF9VUZd-n_YRURYpiUv0qXDd37CpURmyEN85hGLIdDZ6QUHq2EcUPXEJuPicEbB9bf" alt="Петербуржцы рассказали, что хотели бы пожелать своим мамам ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Этот праздник отмечается в последнее воскресенье ноября. Фото: кадр из видео/t.me/spbprav. В последнее воскресенье ноября отмечается День матери.</p></div>
            </div>
        </a><a href='https://ndn.info/citylife/243682-den-materi-2022-s-kogo-brat-primer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>День матери — 2022: с кого брать пример</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRy518X0GD3W1ENAbeG_vfjhEIcERAhn0NtwHW1X8NOj_F28bSn2nllXZXxuZ6iK5q6z5y9I6_x" alt="День матери — 2022: с кого брать пример" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Международный праздник День матери существует во многих странах мира (в некоторых – уже несколько столетий) и отмечается в разные дни, согласно устоявшимся там&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}