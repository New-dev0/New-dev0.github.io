import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Пригожин</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Пригожин"/>
        <meta name="description" content="Trending News about Пригожин" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Пригожин</h1>
            <Image width={800} height={500} src="" alt="Пригожин"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/news/2022/11/29/prigozhin-zayavil-chto-pogibshiy-v-ukraine-grazhdanin-zambii-byl-zaverbovan-chvk-vagnera'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин заявил, что погибший в Украине гражданин Замбии ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQoJ0FlXMrOnCQEtlqtRZ0hrdnDzLWsxmZySmxNlRGJ-x5W0yThwBnfT9dYNebp6jz3kHt4c7li" alt="Пригожин заявил, что погибший в Украине гражданин Замбии ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бизнесмен Евгений Пригожин подтвердил сведения о том, что его ЧВК Вагнера завербовала в российской колонии гражданина Замбии Лемехани Ньиренду,&nbsp;...</p></div>
            </div>
        </a><a href='https://zerkalo.az/prigozhin-podtverdil-chto-zaverboval-v-chvk-vagnera-zeka-iz-zambii/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин подтвердил, что завербовал в &quot;ЧВК Вагнера&quot; зека из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQh7bTM8WhOFCu3ze8zc6P-Ww0avIVhhq3UP4Nj1MeHxQabmTc6dNd0Nbf4T_2-ampBWZwhZyAi" alt="Пригожин подтвердил, что завербовал в &quot;ЧВК Вагнера&quot; зека из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Пригожин подтвердил, что завербовал в &quot;ЧВК Вагнера&quot; зека из Замбии. О гибели Ньиренды в зоне боёв России с Украиной стало известно в середине ноября.</p></div>
            </div>
        </a><a href='https://m.business-gazeta.ru/news/573831'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин рассказал, как на спецоперации погиб парень из Замбии</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Пригожин рассказал, как на спецоперации погиб парень из Замбии" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бизнесмен и основатель ЧВК Вагнера Евгений Пригожин подтвердил участие в спецоперации на Украине 23-летнего гражданина Замбии Ньиренда Лемекани.</p></div>
            </div>
        </a><a href='https://rtvi.com/news/prigozhin-zayavil-chto-pogibshij-na-ukraine-grazhdanin-zambii-sostoyal-v-chvk-vagnera/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин подтвердил, что погибший на Украине гражданин ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5fBn9LZWF8MWTpnoEHFq4WiDZJMvYUQ34YvobK3k98mVlh5tH9YmPdRdh6RdbCv506fjqlJye" alt="Пригожин подтвердил, что погибший на Украине гражданин ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Бизнесмен Евгений Пригожин подтвердил факт гибели 23-летнего гражданина Замбии Лемехани Натана Ньиренды, который участвовал в боевых действиях на Украине в&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/29/prigozhin-soobshchil-kak-pogib-na-ukraine-boec-chvk-vagner-iz-zambii'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин сообщил, как погиб на Украине боец ЧВК «Вагнер» из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTRPIcLSXyRgCTyXKd30ChOBN1iqna9Gqe9cWertPUBO0yRxSK229t5SWFTBBzOAC1NttiGNNS-" alt="Пригожин сообщил, как погиб на Украине боец ЧВК «Вагнер» из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>23-летний гражданин Замбии Ньиренда Лемекани Нэйтан, участвующий в составе ЧВК «Вагнер» в специальной военной операции, погиб, ворвавшись одним из первых в&nbsp;...</p></div>
            </div>
        </a><a href='https://tsargrad.tv/news/pochemu-grazhdanin-zambii-stal-odnim-iz-geroev-chvk-vagner-prigozhin-rasskazal-lichnuju-istoriju_674365'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Почему гражданин Замбии стал одним из героев ЧВК &quot;Вагнер ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvGWo96BvXXMWL7Fl-8dQk7fLl9ZUtlhFMGH7hGCUrMmZdoVxTKqBEchGImxZhHNrJUzdz-jUa" alt="Почему гражданин Замбии стал одним из героев ЧВК &quot;Вагнер ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Известный петербургский предприниматель Евгений Пригожин рассказал об одном из бойцов ЧВК &quot;Вагнер&quot;, который, являясь гражданином Замбии, стал героем для&nbsp;...</p></div>
            </div>
        </a><a href='https://www.m24.ru/news/proisshestviya/29112022/526183'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пригожин подтвердил гибель осужденного в РФ студента из ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7QKRlOFkBQ3YGLw80XFfrO9_wr3_GQt_r-iqidxinoyo8xZhzuVzWQBIAM-7THcasD-rPHR8e" alt="Пригожин подтвердил гибель осужденного в РФ студента из ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Осужденный в России студент из Замбии Лемехани Натан Найренда одним из первых ворвался в окопы противника, проявив храбрость, и погиб героем 22 сентября.</p></div>
            </div>
        </a>
        </Template></>;
}