const useSpeech = () => {
    const speak = (text) => {
        //REFERENCE https://stackoverflow.com/questions/822452/strip-html-from-text-javascript/47140708#47140708
        const temp = new DOMParser().parseFromString(text, 'text/html');
        const newtext = temp.body.textContent || "";

        const utterance = new window.SpeechSynthesisUtterance();
        utterance.text = newtext;
        // utterance.voice = voice;
        // utterance.onend = handleEnd;
        utterance.rate = .7;
        utterance.pitch = 1.8;
        // utterance.volume = volume;
        window.speechSynthesis.speak(utterance);
    };
    return { speak };

};

export default useSpeech;
