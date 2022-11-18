import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Georgina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Georgina"/>
        <meta name="description" content="Trending News about Georgina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Georgina</h1>
            <Image width={800} height={500} src="https://images.trustinnews.pt/uploads/sites/6/2022/11/221117_1_wm.jpg" alt="Georgina"/>
            <h3>Recent News</h3>
            <a href='https://caras.sapo.pt/famosos/2022-11-17-cristiano-ronaldo-fala-sobre-a-possibilidade-de-se-casar-com-georgina-rodriguez/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Caras | Cristiano Ronaldo fala sobre a possibilidade de se casar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSM_8pGakMUF6y2WCQUAE5o-1mOejki9J6e5YulpwHljCq6IJlR9R0nDzSi9p4hKvSPKQ2P6MvK" alt="Caras | Cristiano Ronaldo fala sobre a possibilidade de se casar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo revela planos de casar-se. O capitão da seleção esclareceu os seus planos para o futuro ao lado de Georgina.</p></div>
            </div>
        </a><a href='https://www.noticiasaominuto.com/fama/2115005/georgina-rodriguez-com-decote-explosivo-em-evento-em-las-vegas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgina Rodríguez com decote &#39;explosivo&#39; em evento em Las Vegas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRy8UYoeGHMMtvPyyHF11bPPJ7Vyg43oP2FBjIwpuy47uIaLitIJQFD8IbTZOze4WmObtF7tjaj" alt="Georgina Rodríguez com decote &#39;explosivo&#39; em evento em Las Vegas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A namorada de Cristiano Ronaldo marcou presença numa homenagem a Marco Antonio Solís.</p></div>
            </div>
        </a><a href='https://sic.pt/sic-mulher/ousada-e-sensual-georgina-rodriguez-rouba-atencoes-em-las-vegas/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ousada e sensual. Georgina Rodríguez rouba atenções em Las ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQBgfYUbyE2IlNhi4vtVfsCE6bvv3nTa8Ly3T2cacJlaYSIT7r5r04Q8vArGuuNhalflnwLH024" alt="Ousada e sensual. Georgina Rodríguez rouba atenções em Las ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A namorada de Cristiano Ronaldo faz sucesso além fronteiras.</p></div>
            </div>
        </a><a href='https://www.vip.pt/georgina-rodriguez-brilha-com-decote-explosivo-em-las-vegas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgina Rodríguez brilha com decote explosivo em Las Vegas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ913UlAQISuCf4goey4B751gvaig18GQIuIlLXenQuQI7MmmBbzIyART3DxcxqKvmYBRGX21Qh" alt="Georgina Rodríguez brilha com decote explosivo em Las Vegas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgina Rodriguez está nos EUA para entregar um Grammy e está já a dar que falar. Namorada de Cristiano Ronaldo arranca elogios com vestido brilhante,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.flash.pt/celebridades/nacional/detalhe/cristiano-ronaldo-deixa-claro-nem-casamento-com-georgina-nem-mais-filhos'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo deixa claro: nem casamento com Georgina, nem ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDHKzBtTQRVbZkQLtutVLnC21g2XSjOVAmC_SYpS7Z1FrcWGXWDh0N7INOJQFHunXmNv7IhNrd" alt="Cristiano Ronaldo deixa claro: nem casamento com Georgina, nem ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Foi emitida a primeira parte da entrevista do craque português ao jornalista britânico Piers Morgan e há revelações quanto ao seu futuro que surpreendem.</p></div>
            </div>
        </a><a href='https://www.flash.pt/estilo/detalhe/georgina-rodriguez-com-look-de-sereia-atrevida-em-las-vegas'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgina Rodríguez com look de sereia atrevida em Las Vegas</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUOyfouTYzVlOPwTW7oh1OmclxAomcRSDVF0hdqKrGqc7cj-V3CCw9P532CVgS7FUQgdMLyGH2" alt="Georgina Rodríguez com look de sereia atrevida em Las Vegas" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A companheira de Cristiano Ronaldo mostra-se alheia a toda a polémica que envolve o jogador português e chama as atenções na &#39;red carpet&#39; dos Grammy&nbsp;...</p></div>
            </div>
        </a><a href='https://famashow.pt/famosos/o-casamento-de-cristiano-ronaldo-e-georgina-rodriguez-esta-para-breve-jogador-responde/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>O casamento de Cristiano Ronaldo e Georgina Rodríguez está para ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQZAVGvZCQXgPLrIX283YJCBO0bJPz-bi7_SbaTLN7Hae2uok75YmZenVkLG1BBBYUo-YgDHZRI" alt="O casamento de Cristiano Ronaldo e Georgina Rodríguez está para ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por fim o craque revelou também que, para já, não faz parte dos planos terem mais filhos: “Acho que ficamos por aqui… mas nunca se sabe. Agora estamos a&nbsp;...</p></div>
            </div>
        </a><a href='https://holofote.sapo.pt/celebridades/2022-11-17-georgina-rodriguez-faz-furor-com-jeans-ousados/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Georgina Rodriguez faz furor com jeans ousados</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6JCCER2jm4JZhXmM6RjlLR15y3mhJkGsT3HWARcjehf_jSMfuoIn28uxbeiAAbedBv7EKdKTO" alt="Georgina Rodriguez faz furor com jeans ousados" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Georgina Rodriguez faz furor com jeans ousados que custam uma fortuna, mas que conquistaram as celebridades. Saiba quanto e quem os assina.</p></div>
            </div>
        </a><a href='https://www.vip.pt/cristiano-ronaldo-sonha-casar-com-georgina-ela-merece-e-eu-mereco'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cristiano Ronaldo sonha casar com Georgina: &quot;Ela merece e eu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSyFehSUgAdOVHu-U22_0g2r6emSwEAlSumq0zCtY7YFLqra4KfvNSScxINgWNZ6GPItPhgf5E0" alt="Cristiano Ronaldo sonha casar com Georgina: &quot;Ela merece e eu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cristiano Ronaldo ainda sofre com a perda do filho durante o parto, em abril, e assume que a família é a sua prioridade máxima.</p></div>
            </div>
        </a><a href='https://selfie.iol.pt/georgina-rodriguez/cristiano-ronaldo/indiferente-a-polemica-georgina-rodriguez-exibe-as-curvas-em-los-angeles/20221117/637666660cf27230dc17e5d1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indiferente a polémica, Georgina Rodríguez exibe as curvas em Los ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTvsihHNJvqDmfFq4ni3RRpVe8WGEnXuogQlYwIUKXTveKV-F2D4ysrmJuK5GUTj9meMv0rT74i" alt="Indiferente a polémica, Georgina Rodríguez exibe as curvas em Los ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Namorada de Cristiano Ronaldo esteve em destaque na passadeira vermelha dos Grammy Latinos, em Las Vegas.</p></div>
            </div>
        </a>
        </Template></>;
}