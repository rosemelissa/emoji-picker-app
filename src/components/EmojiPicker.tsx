import { useState } from "react";

const emotions: { [index: string]: string } = {
  happy: "😀",
  laughing: "😂",
  sarcastic: "🙃",
  love: "😍",
  cowboy: "🤠",
  thinking: "🤔",
  unamused: "😒",
};

//comments are to show how I did it first (unefficiently, using a different handle function for all 7 emojis and 3 usestates)

function EmojiPicker(): JSX.Element {
  // const [previousFavourite, rerenderPreviousFavourite] = useState<string>('');
  // const [currentFavourite, rerenderCurrentFavourite] = useState<string>('');
  const [emojiList, setEmojiList] = useState<string[]>([]);

  const handleEmotion = (emotion: string) => {
    // rerenderPreviousFavourite(currentFavourite);
    // rerenderCurrentFavourite("😀");
    const emoji = emotions[emotion];
    setEmojiList([
      ...emojiList.slice(emojiList.length === 5 ? 1 : 0, emojiList.length),
      emoji,
    ]);
  };

  // const handleLaughing = () => {
  //   // rerenderPreviousFavourite(currentFavourite);
  //   // rerenderCurrentFavourite("😂");
  //   setEmojiList([...emojiList.slice(emojiList.length === 5 ? 1 : 0, emojiList.length), "😂"]);
  // };

  return (
    <>
      <h1>Emoji Picker!</h1>
      <p>Current favourite: {emojiList[emojiList.length - 1]}</p>
      <p>Previous favourite: {emojiList[emojiList.length - 2]}</p>
      <p>5 previous favourites:</p>
      <ul>
        {emojiList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <h2>Pick a new favourite:</h2>
      <button onClick={() => handleEmotion("happy")}>😀</button>
      <button onClick={() => handleEmotion("laughing")}>😂</button>
      <button onClick={() => handleEmotion("sarcastic")}>🙃</button>
      <button onClick={() => handleEmotion("love")}>😍</button>
      <button onClick={() => handleEmotion("cowboy")}>🤠</button>
      <button onClick={() => handleEmotion("thinking")}>🤔</button>
      <button onClick={() => handleEmotion("unamused")}>😒</button>
    </>
  );
}

export default EmojiPicker;
