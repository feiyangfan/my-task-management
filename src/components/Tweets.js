import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  const tweets = [
    { name: "viya", tweet: "Hello!" },
    { name: "viya2", tweet: "Bye!" },
    {
      name: "viya3",
      tweet: "Hello, nice to meet you! nice to see you! goodbye! see ya! Hello",
    },
    { name: "viya4", tweet: "Bye!" },
    { name: "viya4", tweet: "****!" },
  ];

  return (
    <section>
      <button onClick={props.setToggle}>Toggle</button>
      <h1>Hello, I have {props.num} tweets</h1>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} />
      ))}
    </section>
  );
};

export default Tweets;
