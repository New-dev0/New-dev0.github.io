import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Taekwondo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Taekwondo"/>
        <meta name="description" content="Trending News about Taekwondo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Taekwondo</h1>
            <Image width={800} height={500} src="https://imagens.ebc.com.br/sfrUZrIa32OXjWw3UhwQK3PdtQM=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/milena_titoneli_taekwondo_bronze_mundial_2022.jpg?itok=lDbJ9FdF" alt="Taekwondo"/>
            <h3>Recent News</h3>
            <a href='https://agenciabrasil.ebc.com.br/esportes/noticia/2022-11/milena-titoneli-conquista-bronze-no-mundial-de-taekwondo-no-mexico'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milena Titoneli conquista bronze no Mundial de Taekwondo no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQscAxW8foJlF83Cug-JHqTFm7SoA1T-haa8DmirmpmZfGTGWzifu19MABqHCWFdbOJnNq3PKQx" alt="Milena Titoneli conquista bronze no Mundial de Taekwondo no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aos 24 anos, a atleta foi a primeira brasileira a a subir ao pódio em Guadalajara. É o segundo bronze que Titoneli conquista em Mundiais: o primeiro foi em&nbsp;...</p></div>
            </div>
        </a><a href='https://olympics.com/pt/noticias/mundial-de-taekwondo-milena-titoneli-bronze'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milena Titoneli é bronze no Mundial de Taekwondo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQocqQKzyTWF7VImzbjR7mHIhB8VFj2O_E-QGWMm7rsdB2_JxBjAD2EqL9RBL_5WR73aEprIPQM" alt="Milena Titoneli é bronze no Mundial de Taekwondo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paulista foi até a semifinal da categoria até 67kg e conquistou sua segunda medalha em Mundiais. Evento distribui pontos na corrida rumo à classificação&nbsp;...</p></div>
            </div>
        </a><a href='https://agenciabrasil.ebc.com.br/radioagencia-nacional/esportes/audio/2022-11/milena-titoneli-ganha-bronze-no-mundial-de-taekwondo-em-guadalajara'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milena Titoneli ganha bronze no Mundial de Taekwondo em ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRUUIS9u7tW3HgzFP58uDiiSTimwLSlemb873sm89YhK0HsxiucMzPQ_sJnsONFdux-W5y1psNK" alt="Milena Titoneli ganha bronze no Mundial de Taekwondo em ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Conquista foi na categoria -67kg feminina. Das quatro lutas disputadas, Milena venceu três.</p></div>
            </div>
        </a><a href='https://gauchazh.clicrbs.com.br/esportes/noticia/2022/11/brasileira-milena-titoneli-conquista-medalha-de-bronze-no-mundial-de-taekwondo-clajqff7v004f014uoo52gqfn.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasileira Milena Titoneli conquista medalha de bronze no Mundial ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTe2Nuw2CEvTXPjz880CwRfEdwO0ws_JIBiJottVk0Bw_d1xdrvaMi_ivG7oB821evb_YPOEQ_o" alt="Brasileira Milena Titoneli conquista medalha de bronze no Mundial ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Atleta ficou na terceira colocação na categoria peso médio, após perder a semifinal para a sérvia Aleksandra Perisic.</p></div>
            </div>
        </a><a href='https://ndmais.com.br/mais-esportes/milena-titoneli-conquista-primeira-medalha-para-o-brasil-no-mundial-de-taekwondo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milena Titoneli conquista primeira medalha para o Brasil no mundial ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRbb6VgFw48tlnq7yIjHf78BYy4q1ctndctsRDE-fL_OI0jPVWlabl82ErhA-VgfW4-kQ8h7s7J" alt="Milena Titoneli conquista primeira medalha para o Brasil no mundial ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brasileira eliminou durante a campanha a atual campeã olímpica Matea Jelic, da Croácia, e também a chinesa Zhang Mengyu, atual 10 do ranking mundial.</p></div>
            </div>
        </a><a href='https://www.oreporter.net/equipe-master-tiger-nfc-participara-do-taekwondo-open-de-rolante/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&lt;strong&gt;Equipe Master Tiger/NFC participará do Taekwondo open ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRk4Jd_-WmMW8FDfpBF72pGCCgkDeKdEG37J4nMv6iSbRwvnX7VwWlFhy_78pUJG84h4yshMKhb" alt="&lt;strong&gt;Equipe Master Tiger/NFC participará do Taekwondo open ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O projeto social é um dos mais antigos da região e tem como foco principal formar cidadãos, além de atletas competitivos Cachoeirinha - Cachoeirinha terá.</p></div>
            </div>
        </a><a href='https://www.olimpiadatododia.com.br/taekwondo/479008-brasil-sem-medalhas-no-3o-dia-do-mundial-de-taekwondo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brasil sem medalhas no 3º dia do Mundial de taekwondo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQtHILuQkLGmnhyONr3k1UImrkyq6As95dovwCJ6yIJ4bwtrutoKndheBD3AuihzxwL3LuToMPz" alt="Brasil sem medalhas no 3º dia do Mundial de taekwondo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gabriel Santos perde na primeira luta e Camila Bezerra fica nas oitavas do Campeonato Mundial de taekwondo em Guadalajara no México.</p></div>
            </div>
        </a>
        </Template></>;
}