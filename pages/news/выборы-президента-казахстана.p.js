import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Выборы президента Казахстана</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Выборы президента Казахстана"/>
        <meta name="description" content="Trending News about Выборы президента Казахстана" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Выборы президента Казахстана</h1>
            <Image width={800} height={500} src="https://cdn.bfm.ru/news/photopreviewextralarge/2022/11/21/tass_56001088_1_1_1.jpg" alt="Выборы президента Казахстана"/>
            <h3>Recent News</h3>
            <a href='https://www.bfm.ru/news/513404'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Касым-Жомарт Токаев победил на внеочередных выборах ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS1U_ObWMPI-AlIc9CR9gFGnv8CS_g68Kbbvz8Oir49ue-gqTKHu0BF1YfPJiV6_O9y3mvr1VXf" alt="Касым-Жомарт Токаев победил на внеочередных выборах ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Он набрал больше 80% голосов. Его соперники набрали по 2-3% голосов. Против всех проголосовали около 6% избирателей. Явка была достаточно высокой и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/russian/features-63679501'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Президентские выборы в Казахстане: Токаев против пяти ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSimNtso_Et4hqv0yvW2hhtFA0H5VfadsLa23WBNhh6bQPFrH_XdlHtwzKbxV6SaLd58LXOWOXx" alt="Президентские выборы в Казахстане: Токаев против пяти ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В воскресенье жители Казахстана голосуют на внеочередных президентских выборах. Решение об их проведении принял нынешний президент страны - 69-летний&nbsp;...</p></div>
            </div>
        </a><a href='https://www.currenttime.tv/a/tokaev-pobezhdaet-na-vyborah-prezidenta-kazahstana-dannye-ekzitpolov/32139887.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Токаев побеждает на выборах президента Казахстана ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQEicQUyPIitZll_6JJZylkr6v1uGPq3jDF6zVo4h4ZQoNjpuX4Oc10EsHnLS3vAHk9K_xoEbAF" alt="Токаев побеждает на выборах президента Казахстана ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Действующий президент Казахстана Касым-Жомарт Токаев побеждает на внеочередных выборах главы государства, которые прошли в стране 20 ноября.</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5679714'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Токаев побеждает на выборах президента Казахстана с 81,31 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTb8ysLOb0l7AXCqGTTrOW1XKJdQIXJhSZ4i9IEFYpcX6PW2_zqQg7g41v684s6oBra6VxIDOTs" alt="Токаев побеждает на выборах президента Казахстана с 81,31 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Центральная избирательная комиссия Казахстана объявила предварительные итоги внеочередных президентских выборов. Наибольшее количество голосов набрал&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/world/873360'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Токаев заявил, что выборы президента Казахстана прошли в ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSy_u47s4BNd2cJaqgXP7lfj37LCuCcIQ5hcmwdx5wWMGTZc4Ui7yPq80cd0UXGb4yZnezFQZ3x" alt="Токаев заявил, что выборы президента Казахстана прошли в ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 21 ноября. INTERFAX.RU - Состоявшиеся в Казахстане внеочередные выборы президента были справедливыми и открытыми, заявил президент Касым-Жомарт&nbsp;...</p></div>
            </div>
        </a><a href='https://spbdnevnik.ru/news/2022-11-21/kasymzhomart-tokaev-predvaritelno-pobezhdaet-na-vyborah-prezidenta-kazahstana'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Касым-Жомарт Токаев предварительно побеждает на выборах ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcStG1MLetbhSkHmOctXJxbBBDD9rplvKpNJEzkAkN5Z7_4nGauawlArvbAwilCv67bBiTflCcJp" alt="Касым-Жомарт Токаев предварительно побеждает на выборах ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Он набрал более 81 процента голосов. Фото: t.me/tokayev_online. Действующий президент Казахстана Касым-Жомарт Токаев побеждает на выборах президента&nbsp;...</p></div>
            </div>
        </a><a href='https://www.severreal.org/a/tokaev-nabral-bolee-80-na-vyborah-prezidenta-kazahstana/32139944.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Токаев набрал более 80% на выборах президента Казахстана</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT64dOu44_pT6w3lfpcGwznfs84ophlZZDMdhGx00gNdHtBbHiDuzAv8-ohm-XnaTuXXakL78or" alt="Токаев набрал более 80% на выборах президента Казахстана" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Касым-Жомарт Токаев назвал &quot;исторической&quot; свою предвыборную президентскую кампанию. По данным экзитполов, он набрал 82,45% голосов, а по первым официальным&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}