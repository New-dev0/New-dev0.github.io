import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Екатерина Губарева</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Екатерина Губарева"/>
        <meta name="description" content="Trending News about Екатерина Губарева" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Екатерина Губарева</h1>
            <Image width={800} height={500} src="" alt="Екатерина Губарева"/>
            <h3>Recent News</h3>
            <a href='https://meduza.io/news/2022/11/16/v-genicheske-propala-zamglavy-sformirovannoy-rossiey-administratsii-hersonskoy-oblasti-ekaterina-gubareva'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Геническе пропала замглавы сформированной Россией ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSvmiuF6K97bd4l9JOWGVj-WiQ5jhMlz1NzIFD9sxkCdUWrgDtb7c6-biXrk6cWtjCtVqK0njSC" alt="В Геническе пропала замглавы сформированной Россией ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В аннексированной части Херсонской области пропала замглавы сформированной Россией администрации региона Екатерина Губарева. Об этом сообщил ее муж Павел&nbsp;...</p></div>
            </div>
        </a><a href='https://www.pravda.com.ua/rus/news/2022/11/16/7376600/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Геническе пропала коллаборантка Губарева – росСМИ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRa-foU-DLljNJvD3V673otmIbC3tnc1De6pg6vKHnNtw3isabqGpXc-z2NYxyhmv9J22jHAmy8" alt="В Геническе пропала коллаборантка Губарева – росСМИ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Российские СМИ заявили, что в Геническе пропала коллаборантка, так называемая &quot;вице-губернатор Херсонской области&quot; Екатерина Губарева – она не выходит на&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bfm.ru/news/513090'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пропала замглавы Херсонской области Екатерина Губарева</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8dikumOPvM6nE2UXRbf5L0KB9DAPhPjlfdLAxRz4pqRcGtGZHIDBhI2eAjRUJJbj4Tkxa_gh2" alt="Пропала замглавы Херсонской области Екатерина Губарева" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В последний раз она выходила на связь вчера около 16:30, сообщил Губарев в телеграм-канале. Последнее место, где видели Екатерину, — здание правительства&nbsp;...</p></div>
            </div>
        </a><a href='https://www.starhit.ru/life/v-khersonskoi-oblasti-propala-zamgubernatora-ekaterina-gubareva-849072/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Херсонской области пропала замгубернатора Екатерина ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyVPs592D51n0DMEMvqn1rivgxptRYwSzzKeOb75qAJiYvq0mOOyjaFQY5vIJZJte5wbWTHOrW" alt="В Херсонской области пропала замгубернатора Екатерина ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>«Народный губернатор» Донецка Павел Губарев рассказал, что его супруга Екатерина пропала и не выходит на связь уже целый день. | STARHIT.</p></div>
            </div>
        </a><a href='https://focus.ua/voennye-novosti/537267-eks-gubernator-dnr-pavel-gubarev-zayavil-chto-v-okkupirovannom-genicheske-propala-ego-zhena'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Экс-губернатор ДНР&quot; Павел Губарев заявил о пропаже его жены ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFZmNPNH9vEbbeAE7Zw08CY359dXQiEVwBlnLdwTP0y1PkxmxueSfc6G3OkcXpgSh-Q7TwpQJy" alt="&quot;Экс-губернатор ДНР&quot; Павел Губарев заявил о пропаже его жены ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Екатерина Губарева исчезла 15 ноября в оккупированной части Херсонской области. Ее муж звонит «главе» оккупированной Херсонщины Владимиру Сальдо,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5668903'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>СМИ: замглавы Херсонской области Губареву задержали по ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPvbRGxxaqHL47jqBPiZ8ciRK-MHmndvn1catNYAvt-1tuCvDJG4cck-E1I1yXtC4BBKCeYx_n" alt="СМИ: замглавы Херсонской области Губареву задержали по ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RT и ТАСС со ссылкой на собственные источники пишут, что заместитель главы правительства Херсонской области по цифровизации и социальной политике Екатерина&nbsp;...</p></div>
            </div>
        </a><a href='https://eadaily.com/ru/news/2022/11/16/zamgubernatora-hersonskoy-oblasti-gubareva-nashlas-ona-zaderzhana-smi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Замгубернатора Херсонской области Губарева «нашлась», она ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ05DVmta-bKLhD0lUp6TKgwl_iaBCLLBqZFk4VQt1NuOaCZklk9KeI2GtjMuALyZPr52C2nkom" alt="Замгубернатора Херсонской области Губарева «нашлась», она ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Напомним, что Екатерина Губарева является заместителем главы правительства Херсонской области по цифровизации и социальной политике. Как сообщало EADaily, ранее&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}