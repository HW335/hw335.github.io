"use client"


import { useEffect, useState } from 'react'



const FADE_INTERVAL_MS = 3000
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
const WORDS_TO_ANIMATE = [
    '@ HKU',
    '@ CUHK',
    '@ NTU',
]



type FadeProp = { fade: 'fade-in' | 'fade-out' }



export const RollinggText1 = () => {
    const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
    const [wordOrder, setWordOrder] = useState(0)

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
        fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
        }, FADE_INTERVAL_MS)

        return () => clearInterval(fadeTimeout)
    }, [fadeProp])

    useEffect(() => {
        const wordTimeout = setInterval(() => {
        setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
        }, WORD_CHANGE_INTERVAL_MS)

        return () => clearInterval(wordTimeout)
    }, [])

    return (
        <p><span className='text-white'>MMLab</span> <span className='text-[#D71440]'><span className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder]}</span></span></p>
    )
}
