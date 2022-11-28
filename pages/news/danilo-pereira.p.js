import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Danilo Pereira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Danilo Pereira"/>
        <meta name="description" content="Trending News about Danilo Pereira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Danilo Pereira</h1>
            <Image width={800} height={500} src="" alt="Danilo Pereira"/>
            <h3>Recent News</h3>
            <a href='https://www.acorianooriental.pt/noticia/danilo-pereira-sofreu-fratura-nas-costelas-no-treino-345022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Danilo Pereira sofreu fratura nas costelas no treino</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTekuKMq5FmcJ7uSJBqQYP_Mrb-NlwVglHEV06bpUHHqsrJPz8SF8MmomK0Yszd3qn2Uc2X3kP8" alt="Danilo Pereira sofreu fratura nas costelas no treino" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O Açoriano Oriental, fundado a 18 de Abril de 1835, é um título de referência no panorama da imprensa regional portuguesa em geral e açoriana em particular.</p></div>
            </div>
        </a><a href='https://www.publico.pt/2022/11/27/desporto/noticia/danilo-pereira-sofreu-fractura-costelas-treino-seleccao-2029379'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Danilo Pereira sofreu fractura nas costelas no treino da selecção</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSNYagn3UqT1njO1pDdgeBoYvNk76kDhGhpQYNlfufXmJUJLnoy9Jieg0gqti4m3h5W709UbA-D" alt="Danilo Pereira sofreu fractura nas costelas no treino da selecção" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O jogador do Paris Saint-Germain não será opção para o seleccionador português, Fernando Santos, até ao final da fase de grupos.</p></div>
            </div>
        </a><a href='https://www.abola.pt/nnh/2022-11-27/portugal-lesao-trava-danilo/966272'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Danilo lesionado e fora da fase de grupos, avança Pepe</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZd7PR5bincfVPUfJQ6olT6DaeLJjI_svRZDM6NBBhk4YlMgY7z0SHjbcNGvqwUUkyBfSPp58G" alt="Danilo lesionado e fora da fase de grupos, avança Pepe" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Danilo Pereira foi dado como indisponível para os trabalhos da Seleção Nacional pela Unidade de Saúde e Performance da Federação Portuguesa de Futebol.</p></div>
            </div>
        </a><a href='https://maisfutebol.iol.pt/selecao/danilo-pereira/selecao-danilo-pereira-sofreu-uma-fratura-de-tres-arcos-costais'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seleção: Danilo Pereira sofre fratura de três arcos costais</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSc9g4UiJQlDWjbObaNEW-jKatNIiNmJR0Rjd_gbE7KKriXuAvvHgdaeHwv_fl48mFglSFZWuL9" alt="Seleção: Danilo Pereira sofre fratura de três arcos costais" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Enorme contrariedade na seleção de Portugal. Danilo Pereira lesionou-se no treino de sábado e não deve voltar a jogar na fase de grupos do Mundial 2022.</p></div>
            </div>
        </a><a href='https://ge.globo.com/futebol/selecoes/portugal/noticia/2022/11/27/danilo-pereira-fratura-tres-costelas-e-bernardo-silva-lamenta-estamos-muito-tristes.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Danilo Pereira fratura três costelas, e Bernardo Silva lamenta ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR4fGDBqLf16blV_UKL2er5iOR2dTJ3-6E4Nb-ajamIPiQjRI2Y_vJu9ueun8c0HA-MH13AiGUg" alt="Danilo Pereira fratura três costelas, e Bernardo Silva lamenta ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Defensor tem lesão confirmada pela seleção portuguesa e será desfalque, pelo menos, até o fim da fase de grupos. Fernando Santos presta apoio, mas diz: &quot;Não&nbsp;...</p></div>
            </div>
        </a><a href='https://rr.sapo.pt/bola-branca/noticia/clube-portugal/2022/11/27/danilo-pereira-esta-lesionado-e-tem-resto-do-mundial-em-risco/309689/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Danilo Pereira está lesionado e tem resto do Mundial em risco ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShjyjf639uyfbMnTrIzB5wzRgDkNrIBv9uzLfoglU-aCkuGYzSHYp0c_nESNefviVcsz2luWjs" alt="Danilo Pereira está lesionado e tem resto do Mundial em risco ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>De acordo com uma nota da FPF, o jogador &quot;sofreu uma fractura de três arcos costais, à direita&quot;, correndo o risco de não jogar mais no Qatar, mesmo que a equipa&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/especiais/mundial-de-futebol/portugal/2022-11-27-Danilo-Pereira-fora-da-fase-de-grupos-do-Mundial-devido-a-lesao-7f8df582'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Danilo Pereira fora da fase de grupos do Mundial devido a lesão</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQGmELLMvqWiZBHj87UIllam07GqpP5BGU-gco0s-X2zL4zx9ENCTyzOSx0mgSLZptxd0ErM_FI" alt="Danilo Pereira fora da fase de grupos do Mundial devido a lesão" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O internacional português Danilo Pereira sofreu uma lesão nas costelas no treino de sábado e vai falhar, pelo menos, os dois jogos que a Seleção tem ainda&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}