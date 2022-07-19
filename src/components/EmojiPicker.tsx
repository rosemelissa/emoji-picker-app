import { useState } from 'react';

function EmojiPicker(): JSX.Element {
    const [previousFavourite, rerenderPreviousFavourite] = useState('');
    const [currentFavourite, rerenderCurrentFavourite] = useState('');

    const handleHappy = () => {
        rerenderPreviousFavourite(currentFavourite);
        rerenderCurrentFavourite('😀');
    };

    const handleLaughing = () => {
        rerenderPreviousFavourite(currentFavourite);
        rerenderCurrentFavourite('😂');
    };

    const handleSarcastic = () => {
        rerenderPreviousFavourite(currentFavourite);
        rerenderCurrentFavourite('🙃');
    };

    const handleLove = () => {
        rerenderPreviousFavourite(currentFavourite);
        rerenderCurrentFavourite('😍');
    };

    const handleCowboy = () => {
        rerenderPreviousFavourite(currentFavourite);
        rerenderCurrentFavourite('🤠');
    };

    const handleThinking = () => {
        rerenderPreviousFavourite(currentFavourite);
        rerenderCurrentFavourite('🤔');
    };

    const handleUnamused = () => {
        rerenderPreviousFavourite(currentFavourite);
        rerenderCurrentFavourite('😒');
    };

    return (
        <>
            <h1>Emoji Picker!</h1>
            <p>Current favourite: {currentFavourite}</p>
            <p>Previous favourite: {previousFavourite}</p>
            <hr />
            <h2>Pick a new favourite:</h2>
            <button onClick={handleHappy}>😀</button>
            <button onClick={handleLaughing}>😂</button>
            <button onClick={handleSarcastic}>🙃</button>
            <button onClick={handleLove}>😍</button>
            <button onClick={handleCowboy}>🤠</button>
            <button onClick={handleThinking}>🤔</button>
            <button onClick={handleUnamused}>😒</button>
        </>
    );
}






export default EmojiPicker;