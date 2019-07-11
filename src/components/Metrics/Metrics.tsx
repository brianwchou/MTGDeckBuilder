import React from 'react';
import Graph from './Graph'

const metricsStyle = {
    border: 'solid black thin',
    width: '35vw',
    height: '30vh',
    display: 'inline-block'
}

interface CardInfo {
    artist: string,
    cmc: number,
    color_identity: Array<string>,
    colors: Array<string>,
    image_uris: {
        art_crop: string,
        border_crop: string,
        large: string,
        normal: string,
        png: string,
        small: string
    },
    mana_cost: string,
    name: string,
    oracle_text: string,
    power: string,
    rarity: string,
    reserved: boolean,
    setName: string,
    toughness: string,
    typeLine: string,
}

interface CardCount {
    [index: string]: number
}

interface MetricsProps {
    main: Array<CardInfo>,
    counts: CardCount
}

interface CMCMetric {
    cmc: number,
    count: number
}

function Metrics ({ main, counts }: MetricsProps) {

    const check = (main: Array<CardInfo>, i: number, graphInput: Array<CMCMetric>): boolean => {
        for (let j = 0; j < graphInput.length; j++) {
            if (main[i].cmc === graphInput[j].cmc) {
                return true
            }
        }
        return false
    }

    const metrics = (main: Array<CardInfo>, counts: CardCount): Array<CMCMetric>=> {
        var graphInput: Array<CMCMetric> = [];

        for (let i = 0; i < main.length; i++) {
            if (!check(main, i, graphInput)) {
                var newObj = {
                    cmc: main[i].cmc,
                    count: counts[main[i].name]
                }
                graphInput.push(newObj)
            }

            else {
                for (let k = 0; k < graphInput.length; k++) {
                    if (main[i].cmc === graphInput[k].cmc) {
                        graphInput[k].count += counts[main[i].name]
                    }
                }
            }
        }
        return graphInput.sort((a, b) => a.cmc - b.cmc);
    }

    return (
        <div style={metricsStyle}>
            <Graph metrics={metrics(main, counts)} />
        </div>
    )
}

export default Metrics