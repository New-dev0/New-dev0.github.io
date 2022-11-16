import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Джим Керри</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Джим Керри"/>
        <meta name="description" content="Trending News about Джим Керри" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Джим Керри</h1>
            <Image width={800} height={500} src="" alt="Джим Керри"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/news/2022/11/14/rossiya-vvela-sanktsii-protiv-aktera-dzhima-kerri-i-vnuka-stepana-bandery'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россия ввела санкции против актера Джима Керри и внука ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShNsPnwLBNmCvLRhPzP4pqq5--Mdoh1DTKemFSjo1DxLhz-LlEmz72MQeRAScCwgxAMfCq_5e-" alt="Россия ввела санкции против актера Джима Керри и внука ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россия ввела персональные санкции против ста граждан Канады, «которые непосредственно вовлечены в формирование агрессивного антироссийского курса»,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.ru/society/481116-rossia-vvela-sankcii-protiv-dzima-kerri-i-avtora-rasskaza-sluzanki'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россия ввела санкции против Джима Керри и автора «Рассказа ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkm_LU0jiryRk4f-qTBQOG4w0hcnQUDrqnnJcibqUKxT41DdMdioKvIZ7gpcsPkJs4xxe6__9P" alt="Россия ввела санкции против Джима Керри и автора «Рассказа ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Россия запретила 100 гражданам Канады въезжать в страну. Под санкции попали в том числе голливудский актер Джим Керри, писательница, автор бестселлера&nbsp;...</p></div>
            </div>
        </a><a href='https://www.the-village.ru/news/news/jim-carrey'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>МИД РФ запретил Джиму Керри въезд в Россию</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSbSvINcqA6V2dIdM0I4hxjqgTtEZiFI2yfcUqOKkp62jCCxlaiEsbWmYBO2KYwcS1AxMpsdRCV" alt="МИД РФ запретил Джиму Керри въезд в Россию" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В министерстве отметили, что санкции вводятся в ответ на «продолжающуюся практику введения режимом премьер-министра Джастина Трюдо санкций против всех,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5667604'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Актеру Джиму Керри и еще 99 канадцам закрыли въезд в Россию</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRRdX5IXsEX-hX5-rEu93G102CF75Cd0vBF4Fp4XY8PfhTi730zzgobRCJpFzzn3lLvgvHDrXBI" alt="Актеру Джиму Керри и еще 99 канадцам закрыли въезд в Россию" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>МИД России объявил о введении персональных санкций в отношении 100 граждан Канады. В список попал актер Джим Керри, уроженец Канады, который в 2004 году&nbsp;...</p></div>
            </div>
        </a><a href='https://islamnews.ru/2022/11/15/minyust-rf-vvel-sakntsii-protiv-dzhimma-kerri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Минюст РФ ввел сакнции против Джима Керри</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ0BQYdCQQY1kBzf-9ZQf3e40i9gZVA2SlV9iEHyj1DEj9Dqynh5QAMMtw3YhVirgX-i3bPcV6V" alt="Минюст РФ ввел сакнции против Джима Керри" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российский МИД ввел персональные санкции против 100 граждан Канады в ответ на аналогичные меры в отношении россиян. Среди тех, кто получил запрет на въезд .</p></div>
            </div>
        </a><a href='https://klops.ru/news/2022-11-14/261349-vnuk-stepana-bandery-dzhim-kerri-i-ketrin-vinnik-rossiyskiy-mid-zapretil-grazhdanam-kanady-v-ezd-v-rf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Внук Степана Бандеры, Джим Керри и Кэтрин Винник ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4C-kGL0FxAEiHPT6XXtY9yUOqA6mPEusgzv0hrda30O-dYDKxLwL0aS0WfZbVT_sMYpGWwdgV" alt="Внук Степана Бандеры, Джим Керри и Кэтрин Винник ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Министерство иностранных дел пошло на такой шаг в ответ на санкции, введённые премьер-министром Канады Трюдо против руководства России, политиков и&nbsp;...</p></div>
            </div>
        </a><a href='https://www.interfax.ru/russia/872391'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Россия ввела санкции против Джима Керри и еще 99 граждан ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoOCtBel4pPBCLjSEaLRP7xyvtdisGsg5N4JilVHyT_7KvtWuR3Gcm8zwlXG-1ofCBfgxSpGT6" alt="Россия ввела санкции против Джима Керри и еще 99 граждан ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Москва. 14 ноября. INTERFAX.RU - Российский МИД по принципу взаимности закрыл въезд в страну 100 гражданам Канады. В список попал канадско-американский&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}