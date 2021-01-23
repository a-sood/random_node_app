import express from "express";

const app = express();
const port = process.env.PORT || 8080;

const jokes = [
  "Aim for the stars. But first, aim for their bodyguards.",
  "What concert only costs 45 cents? 50 Cent and Nickleback.",
  "There are three kinds of people in this world. Those who can count and those who can’t.",
  "Always remember – you’re unique. Just like everyone else.",
  "Two blondes walk into a building… You’d think one of them would have seen it.",
  "What’s the best thing about babies? Making them.",
  "Light travels faster than sound. That’s why some people appear bright until you hear them speak.",
  "Why don’t lobsters like sharing? Because they’re shellfish.",
  "What animal do you look like when you get in the bath? A little bear.",
  "Just think – half the people you know are below average.",
  "If you choke a Smurf, what color does it turn?",
  "I’m a nobody. Nobody is perfect. Therefore I’m perfect.",
  "What if there were no hypothetical situations?",
  "Why did the scarecrow get a promotion? Because he was outstanding in his field.",
  "I never make mistakes… I thought I did once, but I was wrong.",
  "What do you get when you cross a joke with a rhetorical question?",
];

app.get("/joke", (req, res) => {
  const randInt = Math.floor(Math.random() * jokes.length);
  res.send(jokes[randInt]);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
