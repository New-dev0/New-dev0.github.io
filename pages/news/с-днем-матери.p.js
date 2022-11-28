import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>С Днем матери</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,С Днем матери"/>
        <meta name="description" content="Trending News about С Днем матери" /></Head><Template>
            <h1 style={{fontSize: "30"}}>С Днем матери</h1>
            <Image width={800} height={500} src="https://yakutia-daily.ru/wp-content/uploads/2022/11/vms_4133.jpg" alt="С Днем матери"/>
            <h3>Recent News</h3>
            <a href='https://yakutia-daily.ru/ajsen-nikolaev-pozdravil-yakutyanok-s-dnem-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Айсен Николаев поздравил якутянок с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTSON9khD5yheuQJGVEtMZ53QT4Oi28OJNeiXrmi4XZ4XtyewATDjHn0K3NrK_hn3gAP5_KD4XD" alt="Айсен Николаев поздравил якутянок с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мама… Сколько же тепла и любви в этом слове. Великая и святая материнская любовь согревает и оберегает нас, помогает преодолевать все невзгоды, надеяться на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mos.ru/mayor/themes/1299/8765050/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Сергей Собянин поздравил москвичек с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNZKzge693Wg35pWr1tMm-h8DAx-EJv-fNi2ISNXq73aU-SUbYmcwngReLSoGxUYOlBQ1G2IH6" alt="Сергей Собянин поздравил москвичек с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>День матери отмечается в России в последнее воскресенье ноября. Москва всесторонне поддерживает женщин с детьми. В столице проживает более 1,5 миллиона семей, в&nbsp;...</p></div>
            </div>
        </a><a href='https://indubnacity.ru/novosti/obschestvo/glava-dubny-pozdravil-zhitelnic-naukograda-s-dnem-materi4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Дубны поздравил жительниц наукограда с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSG0G8goKfn_52RCO_Ur852uxWkjhRu_Z1eCXRnWvc3dtBGkWXLYLYTbUn7AeaPNRJ4hxElinXU" alt="Глава Дубны поздравил жительниц наукограда с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Сердечно поздравляю всех с Днем матери! Напомню, что этот праздник учрежден в России в 1998 году и отмечается в последнее воскресенье ноября, а его символом&nbsp;...</p></div>
            </div>
        </a><a href='https://chgtrk.ru/novosti/obshchestvo/glava-chuvashii-pozdravlyaet-jenshchin-s-dnem-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Глава Чувашии поздравляет женщин с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTssQD7YlWtLzLuIFHvGg8tBORINcDqL_CNcbB1PDZ4Msixajppwdl5xYlebUe8nQCxbLimW1Ai" alt="Глава Чувашии поздравляет женщин с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Новостной портал Чебоксар и Чувашской републики. Ежедневно более 30 свежих и актуальных сюжетов и материалов - ГТРК Чувашия.</p></div>
            </div>
        </a><a href='https://krasnogorskriamo.ru/article/mestnoe-otdelenie-edinoj-rossii-pozdravilo-zhitelnits-podmoskovya-s-dnem-materi-602697'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Местное отделение «Единой России» поздравило жительниц ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHA-G_VLR_w6SDjeXnuzyP8DgM8eVvtb86mQJSNmmX0kpgbvNiPYrzGfnJGUUQvBQy7eqx2Bnz" alt="Местное отделение «Единой России» поздравило жительниц ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>РИАМО - 27 ноя. Партийный актив местных отделений партии «Единая Россия» в честь праздника День матери организовал в округах праздничные мероприятия,&nbsp;...</p></div>
            </div>
        </a><a href='https://news.ru/moskva/sobyanin-pozdravil-moskvichek-s-dnem-materi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Собянин поздравил москвичек с Днем матери</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_opWI-DvtvdPkE8Eu2tx-Dovtcq2XhpAYdvlxq5g5-yIxS178RL3LJNjuw0T_MR2M9z1Pdrw3" alt="Собянин поздравил москвичек с Днем матери" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Мэр Москвы Сергей Собянин поздравил москвичек с Днем матери. Он выразил восхищение тому, как женщины справляются со своим материнским обязанностями и&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}