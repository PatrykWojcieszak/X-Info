const Quotes = [
  "When something is important enough, you do it even if the odds are not in your favor.",
  "Some people don't like change, but you need to embrace change if the alternative is disaster.",
  "Failure is an option here. If things are not failing, you are not innovating enough.",
  "Persistence is very important. You should not give up unless you are forced to give up.",
  "I think it's very important to have a feedback loop, where you're constantly thinking about what you've done and how you could be doing it better.",
  "There's a tremendous bias against taking risks. Everyone is trying to optimize their ass-covering.",
  "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
  "I don't think it's a good idea to plan to sell a company.",
  "I say something, and then it usually happens. Maybe not on schedule, but it usually happens.",
  "I don't spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.",
  "I don't create companies for the sake of creating companies, but to get things done.",
  "Starting and growing a business is as much about the innovation, drive, and determination of the people behind it as the product they sell.",
  "I've actually not read any books on time management.",
  "Really pay attention to negative feedback and solicit it, particularly from friends. ... Hardly anyone does that, and it's incredibly helpful.",
  "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
  "What makes innovative thinking happen?... I think it's really a mindset. You have to decide.",
  "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
  "Being an entrepreneur is like eating glass and staring into the abyss of death.",
  "I wouldn't say I have a lack of fear. In fact, I'd like my fear emotion to be less because it's very distracting and fries my nervous system.",
  "If you're trying to create a company, it's like baking a cake. You have to have all the ingredients in the right proportion.",
  "I think we have a duty to maintain the light of consciousness to make sure it continues into the future.",
  "You shouldn't do things differently just because they're different. They need to be... better.",
  "You have to say, 'Well, why did it succeed where others did not?",
  "It's very important to like the people you work with, otherwise life [and] your job is gonna be quite miserable.",
  "We have a strict 'no-assholes policy' at SpaceX.",
  "Disruptive technology where you really have a big technology discontinuity... tends to come from new companies.",
  "As much as possible, avoid hiring MBAs. MBA programs don't teach people how to create companies.",
  "Don't delude yourself into thinking something's working when it's not, or you're gonna get fixated on a bad solution.",
  "If humanity doesn't land on Mars in my lifetime, I would be very disappointed.",
];

const randomQuote = () => {
  const quote = Math.floor(Math.random() * Quotes.length);
  return Quotes[quote];
};

export default randomQuote;
