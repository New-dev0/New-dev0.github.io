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
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRuBbPBsZ7kvhN2lFDt5QJEnfIL5LpcNir6eIpd5t5uXYk4aqKw1r16OlKug0h2VDqIl09ylu6L" alt="В Геническе пропала замглавы сформированной Россией ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>В аннексированной части Херсонской области пропала замглавы сформированной Россией администрации региона Екатерина Губарева. Об этом сообщил ее муж Павел&nbsp;...</p></div>
            </div>
        </a><a href='https://www.kommersant.ru/doc/5669596'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Муж херсонской чиновницы Екатерины Губаревой сообщил о ее ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQo_5YJV3-gIhWm5MTlRhIdu1B5jWlHTb7-wWQvPX9vu25oTXk8fFiIQFh_cs_ltCNvYSOd978m" alt="Муж херсонской чиновницы Екатерины Губаревой сообщил о ее ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заместитель главы российской администрации Херсонской области Екатерина Губарева сегодня, 17 ноября, будет освобождена. Об этом сообщил ее муж Павел&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tatar-inform.ru/news/propala-zamestitel-gubernatora-xersonskoi-oblasti-ekaterina-gubareva-5886760'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Пропала заместитель губернатора Херсонской области ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Пропала заместитель губернатора Херсонской области ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заместитель главы администрации Херсонской области Екатерина Губарева пропала накануне вечером. Об этом сообщает ее супруг Павел Губарев в телеграм-канале.</p></div>
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
        </a><a href='https://ura.news/news/1052603545'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>В Херсонской области пропала заместитель губернатора</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1JhBkg2jd1sNzWPFkT9c4VwxpcEepefCjW0ooIx0D_a7FKPaXI4tFSJjmVgRwVhs0vyu6LUUc" alt="В Херсонской области пропала заместитель губернатора" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Заместитель губернатора Херсонской области Екатерина Губарева пропала. Об этом сообщил ее супруг Павел Губарев. Только на URA.RU.</p></div>
            </div>
        </a>
        </Template></>;
}