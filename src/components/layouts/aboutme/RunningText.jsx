import { useEffect, useState } from "react";

const RunningText = ({ texts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(200);
    const [pauseTime, setPauseTime] = useState(3000); 

    useEffect(() => {
        const text = texts[currentIndex];
        if (!isDeleting && charIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prevText) => prevText + text[charIndex]);
                setCharIndex((prevIndex) => prevIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timer);
        } else if (!isDeleting && charIndex === text.length) {
            setIsDeleting(true);
            setPauseTime(1500);
        } else if (isDeleting && charIndex > 0) {
            const timer = setTimeout(() => {
                setDisplayedText((prevText) => prevText.substring(0, prevText.length - 1));
                setCharIndex((prevIndex) => prevIndex - 1);
            }, typingSpeed / 1); 
            return () => clearTimeout(timer);
        } else {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setCharIndex(0);
            setDisplayedText('');
            setPauseTime(5000); 
        }
    }, [texts, currentIndex, charIndex, isDeleting, typingSpeed, pauseTime]);

    return <span className="text-text font-jost ">{displayedText}</span>;
};

export default RunningText;