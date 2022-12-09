import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>8 de dezembro</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,8 de dezembro"/>
        <meta name="description" content="Trending News about 8 de dezembro" /></Head><Template>
            <h1 style={{fontSize: "30"}}>8 de dezembro</h1>
            <Image width={800} height={500} src="https://s2.glbimg.com/iaMKi0LNru8MU6DTjGV2gyDLTuU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/H/K/fhSo3DQDAcVU1KazabQQ/nossa-senhora-imaculada-conceicao.jpg" alt="8 de dezembro"/>
            <h3>Recent News</h3>
            <a href='https://g1.globo.com/mg/minas-gerais/noticia/2022/12/08/voce-sabe-por-que-e-feriado-no-dia-8-de-dezembro-em-belo-horizonte.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Você sabe por que é feriado no dia 8 de dezembro em Belo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSc3q-eqzFc6uPuqqkFrW4J1Uxv7dwC5I684kbIetbwHpxw4fIQWCi5qykS52-pTKNKWPzkzLV-" alt="Você sabe por que é feriado no dia 8 de dezembro em Belo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Fiéis católicos celebram Imaculada Conceição de Nossa Senhora desde o século XIX. Igreja tem programação de missas da 0h até as 18h.</p></div>
            </div>
        </a><a href='https://exame.com/carreira/por-que-e-feriado-em-8-de-dezembro-em-algumas-cidades/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que é feriado em 8 de dezembro em algumas cidades | Exame</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSQx-iQuafFTSpEnGJ7CxDSI65fHKOGKIgaX28dzpuIYvB-HOAO-Tf19A5D7Y1R2Ph-2UF9LlXI" alt="Por que é feriado em 8 de dezembro em algumas cidades | Exame" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Apesar do apelo da data e da popularidade da santa, o dia não é feriado nacional, mas algumas cidades e estados criaram feriados locais.</p></div>
            </div>
        </a><a href='https://jc.ne10.uol.com.br/economia/2022/12/15136958-dia-8-de-dezembro-e-feriado-em-quais-cidades-e-ponto-facultativo-veja-se-bancos-abrem-no-dia-8-de-dezembro.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DIA 8 DE DEZEMBRO É FERIADO EM QUAIS CIDADES? É ponto ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSVS-kOP4xhR2Y5JioKdLabnEjXmNyDax1D-bIsD8KzX5ySiSB435QmnKSqV8fjFXucYcIuibFP" alt="DIA 8 DE DEZEMBRO É FERIADO EM QUAIS CIDADES? É ponto ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Entenda se o dia 8 de dezembro, feriado de Nossa Senhora da Imaculada Conceição, é ponto facultativo ou feriado nacional; confira se bancos abrem hoje.</p></div>
            </div>
        </a><a href='https://roraima1.com.br/2022/12/08/8-de-dezembro-e-dia-de-nossa-senhora-da-conceicao/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>8 de dezembro é dia de Nossa Senhora da Conceição - Roraima 1</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT_hSSpwjr2XEXzSL6NzNbj2S4R2F1AvZZ5NRblJKaGZlZVuMMg0KlCLV0SB8cJkV31aSOcq3tv" alt="8 de dezembro é dia de Nossa Senhora da Conceição - Roraima 1" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A data celebra a Imaculada Conceição, dogma da Igreja Católica que versa sobre a concepção de Jesus no ventre da Virgem Maria. Embora a data não seja feriado&nbsp;...</p></div>
            </div>
        </a><a href='https://www.itatiaia.com.br/editorias/cidades/2022/12/08/entenda-por-que-8-de-dezembro-e-feriado-em-belo-horizonte'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Entenda por que 8 de dezembro é feriado em Belo Horizonte</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQh7dnS4JT8GG-AMhEyOjLPN4O8WwZBGnmE050-TYvQSrm5eGlURja6KrDRixr6-1Pvze6FiS7P" alt="Entenda por que 8 de dezembro é feriado em Belo Horizonte" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hoje (8) é comemorada o dia da Nossa Senhora da Imaculada Conceição em Belo Horizonte e em outras cidades do estado.</p></div>
            </div>
        </a><a href='https://g1.globo.com/podcast/resumao-diario/noticia/2022/12/08/resumao-diario-437-quinta-feira-8-de-dezembro.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Resumão diário #437: Quinta-feira, 8 de dezembro</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSPpHAIHyDkojLS4hpPpyUKz2Shg90jgq_TC9pzL0wlWPYUtuV4zJ61gcYpO7NtFXKuHG0u--uh" alt="Resumão diário #437: Quinta-feira, 8 de dezembro" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Produzido pela equipe de podcasts do g1, o Resumão é apresentado pelo jornalista Márcio Rodrigues. Podcast Resumão — Foto: Comunicação/Globo 1 de&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uai.com.br/app/entretenimento/comportamento/2022/12/08/not-comportamento,309504/por-que-8-de-dezembro-e-feriado-em-belo-horizonte.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Por que 8 de dezembro é feriado em Belo Horizonte?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTD0Hiqj9JZr6jl0v_GV0_vEoHYhwzqWAzR5KxJdjP3gAhxbozEE4Ynx02kdz-u16W2Y6BoywQX" alt="Por que 8 de dezembro é feriado em Belo Horizonte?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belo Horizonte comemora, nesta quinta-feira (08/12), o Dia de Nossa Senhora da Conceição ou Imamariaculada Conceição – dogma da Igreja Católica que versa&nbsp;...</p></div>
            </div>
        </a><a href='https://www.terra.com.br/noticias/dia-da-imaculada-conceicao-saiba-onde-e-feriado-neste-8-de-dezembro,539dbc89e8c4855af6095d5988ee2318nyrljudn.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dia da Imaculada Conceição: saiba onde é feriado neste 8 de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQDctnrL7q2_wTCL9G7k7SHmfJiPQEen7Gb1wISBKXdN5ctnzcQAgin_FBvYioME4gX3Y46yCFp" alt="Dia da Imaculada Conceição: saiba onde é feriado neste 8 de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O dia 8 de dezembro começa com parte do Brasil em festa! Isso porque é Dia de Nossa Senhora da Imaculada Conceição, que é padroeira de Portugal e diversas&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}