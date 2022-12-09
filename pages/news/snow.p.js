import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Snow</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Snow"/>
        <meta name="description" content="Trending News about Snow" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Snow</h1>
            <Image width={800} height={500} src="https://www.independent.ie/irish-news/news/9b89f/42206719.ece/AUTOCROP/w1240h700/i%20snow2%20OB%2011%20of%2011.jpg" alt="Snow"/>
            <h3>Recent News</h3>
            <a href='https://www.independent.ie/weather/snow-starts-to-fall-amid-weather-warnings-for-three-counties-as-varadkar-vows-no-power-cuts-for-homes-42204958.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cold weather forecast for Ireland: Met Éireann issue snow warnings ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR7zgMvkwg_CAExmDFn9pWJr0NdLSBNFkOCvqzN5ktHpPNMirL91PVfhfc5lzf5sC1EaWLabSqm" alt="Cold weather forecast for Ireland: Met Éireann issue snow warnings ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Snow has started to fall in parts of the country with as Ireland is set to be plunged into sub-zero conditions by an Arctic air mass likely to bring the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dublinlive.ie/news/dublin-news/snow-hits-different-parts-dublin-25710135'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow hits different parts of Dublin amid baltic cold snap</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT6LrRCtamFYAYXGAbJAGjoT1MPouXWbxNLezlOlk5N53ph8ETP3ZG7fJKldqARKMjZ26MPnoyc" alt="Snow hits different parts of Dublin amid baltic cold snap" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Areas hit by the snow so far include Dun Laoghaire, Stillorgan, Dublin 15, Castleknock and Maynooth.</p></div>
            </div>
        </a><a href='https://www.thejournal.ie/cold-snap-yellow-warnings-5941068-Dec2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow falls in parts of country as Status Yellow warnings take effect</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSDyXPnxEeWzUaMOsy4kZmIPsaxdwRAOkhSR-gatR_Eo4JPxo2yS3rrsspGdt-7O4PY7ujyUzHy" alt="Snow falls in parts of country as Status Yellow warnings take effect" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Met Éireann has forecast severe frost and temperatures falling to -4 degrees Celsius.</p></div>
            </div>
        </a><a href='https://www.purdue.edu/newsroom/releases/2022/Q4/new-online-toolbox-offers-many-ways-to-view-snow-data-in-the-continental-us.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New online toolbox offers many ways to view snow data in the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSd0IlaKcyMFbjftUCq2ahWVA5nJaJKLvW5C9mud3rqoGjmTNb9h6xCaZpjQmsqeHm2l92tqwLZ" alt="New online toolbox offers many ways to view snow data in the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Purdue University&#39;s Midwestern Regional Climate Center (MRCC) has launched an online interactive Snowfall Climatology Toolbox that provides easy-to-use,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/ireland/2022/12/08/cold-weather-ireland-snow-low-temperature-warning-latest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>First snow showers land around country as bitter cold snap set to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdjjumVOF9IUcdguTStQnaA_HL2cMTpSfqTjlCK0YjHm0CfgHANGtMe4GMeSgQVZO7rrXWUbvi" alt="First snow showers land around country as bitter cold snap set to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There is also a status yellow low temperature warning in place which covers the whole country from 10pm until noon on Friday. READ MORE&nbsp;...</p></div>
            </div>
        </a><a href='https://gvwire.com/2022/12/08/snow-is-forecast-nightly-at-valleys-great-wolf-lodge-waterpark-resort/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snow in Forecast Nightly at Valley&#39;s Great Wolf Lodge Waterpark ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSetVhRBF-73rVGl8ByYxBGDtDsJoyefRvBbMOkGRKj9B3Yhx5y7SlBDjYr-8Vfikb2KSdohF-u" alt="Snow in Forecast Nightly at Valley&#39;s Great Wolf Lodge Waterpark ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Great Wolf Lodge, the family-oriented resort hotel in Manteca, is much the same as when it first opened in 2021. But, now it has snow.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/news/greater-manchester-news/snow-started-falling-across-greater-25708723'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>SNOW has started falling across Manchester as temperatures ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMnAcIoaw02ohhQOGFJADFam3rsaLUQ4sJJnNXtZchJhb4YIQ9anExRgK4Vhlg-V4VqLPzUJTI" alt="SNOW has started falling across Manchester as temperatures ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A yellow weather warning was issued across the region from Thursday until Sunday, with the Met Office alerting that sub-zero temperatures could mean frost and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}