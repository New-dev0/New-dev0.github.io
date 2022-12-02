import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kanye West</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kanye West"/>
        <meta name="description" content="Trending News about Kanye West" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kanye West</h1>
            <Image width={800} height={500} src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=2d396108-739e-4806-9cc2-ce75cc88c568&w=800&h=420&watermark=true&t=20221201221600" alt="Kanye West"/>
            <h3>Recent News</h3>
            <a href='https://www.dn.pt/cultura/kanye-west-em-nova-polemica-eu-gosto-do-hitler-15413266.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West em nova polémica: &quot;Eu gosto do Hitler&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT7Voc-gZF01mKVwAwlmn94NSjvWMCdbNtXEN9ENBcrxvr2hU8fBciIUX5vcy9IAekqOPoZpI4D" alt="Kanye West em nova polémica: &quot;Eu gosto do Hitler&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em mais uma entrevista polémica, Kanye West assumiu esta quinta-feira &quot;amor&quot; pelos Nazis e admiração por Adolf Hitler. As declarações foram feitas no&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jn.pt/pessoas/eu-amo-hitler-kanye-west-intensifica-retorica-antissemita-15413415.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Eu gosto de Hitler&quot;. Kanye West intensifica retórica antissemita</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQFCB5gPNXZx6tKJuWzMap3MQqSFvSXfsbYWuKIuYWUOxH1iBd4btUTxh_G3-DQEtBlyc6kJ5lo" alt="&quot;Eu gosto de Hitler&quot;. Kanye West intensifica retórica antissemita" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;O rapper norte-americano Kanye West declarou, esta quinta-feira, o seu &quot;amor&quot; pelos nazis e a sua admiração por Adolf Hitler durante uma transmissão ao&nbsp;...</p></div>
            </div>
        </a><a href='https://g1.globo.com/pop-arte/musica/noticia/2022/12/01/kanye-west-elogia-hitler-e-diz-que-ama-nazistas-grupo-judeu-republicano-diz-que-ele-e-intolerante-e-vil.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West elogia Hitler e diz que ama nazistas; grupo judeu ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-AwcZIeFnHXxbYdiS72dgFo-AK9sWrXmwL_5nlNGyg1oejaLdb4K5_lsgHRNl9LxMW6NVl-gp" alt="Kanye West elogia Hitler e diz que ama nazistas; grupo judeu ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ele falou em programa de apresentador condenado a pagar bilhões de dólares por espalhar mentiras. Mesmo sendo extremista, entrevistador rebateu: &#39;Nazistas&nbsp;...</p></div>
            </div>
        </a><a href='https://sicnoticias.pt/mundo/2022-12-01-Eu-gosto-do-Hitler-Kanye-West-elogia-o-lider-dos-nazis-622ca394'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>“Eu gosto do Hitler”: Kanye West elogia o líder dos nazis</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQDy1op72bXvdnr2v28ob1jZuJrbs2d3rucsC33g0VT1AragwJ8HVtjLx86vuxwdD5NZ4DUcac5" alt="“Eu gosto do Hitler”: Kanye West elogia o líder dos nazis" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>O cantor norte-americano está envolvido numa nova polémica.</p></div>
            </div>
        </a><a href='https://www1.folha.uol.com.br/ilustrada/2022/12/kanye-west-elogia-hitler-e-diz-que-ama-nazistas-em-programa-de-extrema-direita.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West elogia Hitler e diz que ama nazistas em programa de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQenX320K4krxei7_-FmjLuW9z6ztfFhNjCNq-zRvXYWz7yTaanF4V-1qMfuMd5f-DSk4U2kAHu" alt="Kanye West elogia Hitler e diz que ama nazistas em programa de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rapper já havia dado declarações antissemitas e voltou ao assunto em programa de porta-voz de teorias da conspiração.</p></div>
            </div>
        </a><a href='https://oglobo.globo.com/economia/negocios/noticia/2022/12/kanye-west-desiste-de-compra-a-parler.ghtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West não vai mais comprar a Parler</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1WqGvuxbbo-pK5NqMOM82yQF3QL7YYCLMBvuq66KIwGdR2Oxc59XylRdOpnGyncs-La1FxqKm" alt="Kanye West não vai mais comprar a Parler" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Em comunicado, a controladora da empresa disse que a decisão foi tomada em comum acordo com o artista em meados de novembro.</p></div>
            </div>
        </a><a href='https://revistaforum.com.br/global/2022/12/1/video-rapper-kanye-west-diz-que-gosta-de-hitler-que-ama-os-nazistas-128049.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>VÍDEO: Rapper Kanye West diz que gosta de Hitler e que ama os ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR0chFqtELAIOMH6ZZQ8VNRxONrUvWsuKNyhpcSE3VHZLGQa1IKuBn4Xnl8aWJCYOhpcOnpf-N0" alt="VÍDEO: Rapper Kanye West diz que gosta de Hitler e que ama os ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cantor estadunidense, sem qualquer receio, demonstrou admiração pelo nazismo e pelo genocida Adolf Hitler em entrevista ao teórico da conspiração Alex&nbsp;...</p></div>
            </div>
        </a><a href='https://portalrapmais.com/kanye-west-elogia-hitler-durante-participacao-em-podcast/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kanye West elogia Hitler durante participação em podcast</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjmExCLc9GBZtGWJFhtg7rWRjXdgdqEEqlxlcl7QO7LW7SVPk5PDBAaCwKgO83G48kXHggf9AA" alt="Kanye West elogia Hitler durante participação em podcast" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Depois de muitas notícias de que Kanye West elogiava Hitler para seus funcionários, o próprio artista elogiou Adolf Hitler durante uma entrevista na&nbsp;...</p></div>
            </div>
        </a><a href='https://www.uol.com.br/splash/noticias/reuters/2022/12/01/rapper-kanye-west-nao-planeja-mais-comprar-plataforma-de-rede-social-parler.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rapper Kanye West não planeja mais comprar plataforma de rede ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Rapper Kanye West não planeja mais comprar plataforma de rede ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Por Helen Coster (Reuters) - A controladora da rede social Parler e o rapper norte-americano Kanye West, que agora atende por Ye, concordaram em encerrar a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}