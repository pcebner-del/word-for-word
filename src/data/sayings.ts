export type Category = 'Food & Sausage' | 'Animals' | 'Work' | 'Life' | 'Weather';

export interface Saying {
  id: string;
  german: string;
  wordForWord: string;
  meaning: string;
  category: Category;
  tags: string[];
}

export const sayings: Saying[] = [
  {
    id: 'wurst-zwei-enden',
    german: 'Alles hat ein Ende, nur die Wurst hat zwei.',
    wordForWord: 'Everything has an end, only the sausage has two.',
    meaning: 'All good things must come to an end.',
    category: 'Food & Sausage',
    tags: ['sausage', 'end', 'wurst', 'endings'],
  },
  {
    id: 'tomaten-augen',
    german: 'Du hast Tomaten auf den Augen.',
    wordForWord: 'You have tomatoes on your eyes.',
    meaning: 'You are blind to something obvious.',
    category: 'Food & Sausage',
    tags: ['tomatoes', 'eyes', 'blind', 'obvious'],
  },
  {
    id: 'nur-bahnhof',
    german: 'Ich verstehe nur Bahnhof.',
    wordForWord: 'I only understand train station.',
    meaning: "I don't understand anything that's being said.",
    category: 'Work',
    tags: ['train', 'station', 'understand', 'confused'],
  },
  {
    id: 'baer-steppt',
    german: 'Da steppt der Bär.',
    wordForWord: 'The bear is doing the step dance there.',
    meaning: "It's going to be a great party.",
    category: 'Animals',
    tags: ['bear', 'dance', 'party'],
  },
  {
    id: 'um-die-wurst',
    german: 'Jetzt geht es um die Wurst.',
    wordForWord: "Now it's about the sausage.",
    meaning: 'Now it gets serious. This is the moment of truth.',
    category: 'Food & Sausage',
    tags: ['sausage', 'serious', 'wurst', 'moment of truth'],
  },
  {
    id: 'leben-lassen',
    german: 'Leben und leben lassen.',
    wordForWord: 'Live and let live.',
    meaning: 'Live and let live.',
    category: 'Life',
    tags: ['live', 'tolerance', 'life'],
  },
  {
    id: 'morgenstund-gold',
    german: 'Morgenstund hat Gold im Mund.',
    wordForWord: 'Morning hour has gold in its mouth.',
    meaning: 'The early bird catches the worm.',
    category: 'Work',
    tags: ['morning', 'gold', 'early', 'productivity'],
  },
  {
    id: 'daumen-druecken',
    german: 'Ich drücke dir die Daumen.',
    wordForWord: 'I press my thumbs for you.',
    meaning: "I'm keeping my fingers crossed for you.",
    category: 'Life',
    tags: ['thumbs', 'luck', 'fingers crossed', 'support'],
  },
  {
    id: 'nicht-mein-bier',
    german: 'Das ist nicht mein Bier.',
    wordForWord: "That's not my beer.",
    meaning: "That's not my problem. That's none of my business.",
    category: 'Food & Sausage',
    tags: ['beer', 'problem', 'business', 'not my concern'],
  },
  {
    id: 'alles-butter',
    german: 'Alles in Butter.',
    wordForWord: 'Everything in butter.',
    meaning: 'Everything is fine. All good.',
    category: 'Food & Sausage',
    tags: ['butter', 'fine', 'okay', 'all good'],
  },
  {
    id: 'zwei-fliegen',
    german: 'Zwei Fliegen mit einer Klappe schlagen.',
    wordForWord: 'To hit two flies with one flap.',
    meaning: 'To kill two birds with one stone.',
    category: 'Animals',
    tags: ['flies', 'efficiency', 'two birds', 'multitask'],
  },
  {
    id: 'vogel-haben',
    german: 'Einen Vogel haben.',
    wordForWord: 'To have a bird.',
    meaning: 'To be a little crazy.',
    category: 'Animals',
    tags: ['bird', 'crazy', 'mad', 'unhinged'],
  },
  {
    id: 'hund-begraben',
    german: 'Da liegt der Hund begraben.',
    wordForWord: 'There the dog is buried.',
    meaning: "That's the crux of the matter. That's the real issue.",
    category: 'Animals',
    tags: ['dog', 'buried', 'point', 'crux', 'matter'],
  },
  {
    id: 'schwein-haben',
    german: 'Schwein haben.',
    wordForWord: 'To have pig.',
    meaning: 'To be lucky.',
    category: 'Animals',
    tags: ['pig', 'luck', 'lucky', 'fortune'],
  },
  {
    id: 'nagel-kopf',
    german: 'Den Nagel auf den Kopf treffen.',
    wordForWord: 'To hit the nail on the head.',
    meaning: 'To be exactly right.',
    category: 'Work',
    tags: ['nail', 'head', 'right', 'exact', 'correct'],
  },
  {
    id: 'tassen-schrank',
    german: 'Nicht alle Tassen im Schrank haben.',
    wordForWord: 'Not to have all cups in the cupboard.',
    meaning: 'To not be all there mentally. To be a bit crazy.',
    category: 'Life',
    tags: ['cups', 'cupboard', 'crazy', 'mental', 'missing a few screws'],
  },
  {
    id: 'spanisch-vor',
    german: 'Das kommt mir spanisch vor.',
    wordForWord: 'That seems Spanish to me.',
    meaning: 'That seems strange or suspicious to me.',
    category: 'Life',
    tags: ['spanish', 'strange', 'suspicious', 'weird'],
  },
  {
    id: 'grossem-fuss',
    german: 'Auf großem Fuß leben.',
    wordForWord: 'To live on a big foot.',
    meaning: 'To live extravagantly. To live beyond your means.',
    category: 'Life',
    tags: ['foot', 'extravagant', 'luxury', 'lavish'],
  },
  {
    id: 'hals-beinbruch',
    german: 'Hals- und Beinbruch!',
    wordForWord: 'Neck and leg break!',
    meaning: 'Break a leg! Good luck!',
    category: 'Life',
    tags: ['neck', 'leg', 'break', 'luck', 'good luck'],
  },
  {
    id: 'affe-laust',
    german: 'Ich glaube, mich laust der Affe.',
    wordForWord: 'I think the monkey is delousing me.',
    meaning: "I can't believe it! Well, I'll be darned!",
    category: 'Animals',
    tags: ['monkey', 'delousing', 'surprised', 'unbelievable', 'shocked'],
  },
  {
    id: 'katze-sack',
    german: 'Die Katze aus dem Sack lassen.',
    wordForWord: 'To let the cat out of the bag.',
    meaning: 'To reveal a secret.',
    category: 'Animals',
    tags: ['cat', 'bag', 'secret', 'reveal', 'disclose'],
  },
  {
    id: 'meister-gefallen',
    german: 'Es ist noch kein Meister vom Himmel gefallen.',
    wordForWord: 'No master has yet fallen from heaven.',
    meaning: 'Nobody is born an expert. Practice makes perfect.',
    category: 'Work',
    tags: ['master', 'heaven', 'expert', 'learning', 'practice'],
  },
  {
    id: 'april-april',
    german: 'April, April, der macht was er will.',
    wordForWord: 'April, April, does what it wants.',
    meaning: 'April weather is unpredictable. Also: April Fools!',
    category: 'Weather',
    tags: ['april', 'weather', 'unpredictable', 'fools', 'capricious'],
  },
  {
    id: 'grube-graben',
    german: 'Wer anderen eine Grube gräbt, fällt selbst hinein.',
    wordForWord: 'He who digs a pit for others falls into it himself.',
    meaning: 'What goes around comes around.',
    category: 'Life',
    tags: ['pit', 'karma', 'revenge', 'backfire', 'karma'],
  },
  {
    id: 'dick-duenn',
    german: 'Mit jemandem durch dick und dünn gehen.',
    wordForWord: 'To go through thick and thin with someone.',
    meaning: 'To stand by someone through everything.',
    category: 'Life',
    tags: ['thick', 'thin', 'loyalty', 'friendship', 'support'],
  },
  {
    id: 'auf-den-busch',
    german: 'Auf den Busch klopfen.',
    wordForWord: 'To knock on the bush.',
    meaning: 'To fish for information. To probe cautiously.',
    category: 'Life',
    tags: ['bush', 'probe', 'information', 'fishing', 'subtle'],
  },
  {
    id: 'fingernagel-gonnen',
    german: 'Jemandem nicht das Schwarze unterm Nagel gönnen.',
    wordForWord: "Not to begrudge someone the black under their fingernail.",
    meaning: 'To be extremely stingy or envious toward someone.',
    category: 'Life',
    tags: ['fingernail', 'stingy', 'envious', 'begrudge', 'jealousy'],
  },
  {
    id: 'regen-petrus',
    german: 'Petrus hat heute schlechte Laune.',
    wordForWord: 'St. Peter is in a bad mood today.',
    meaning: "The weather is terrible today. (God's doorman controls the rain.)",
    category: 'Weather',
    tags: ['rain', 'weather', 'saint peter', 'clouds', 'bad weather'],
  },
  {
    id: 'schnee-gestern',
    german: 'Das ist Schnee von gestern.',
    wordForWord: "That's snow from yesterday.",
    meaning: "That's old news. That's water under the bridge.",
    category: 'Weather',
    tags: ['snow', 'yesterday', 'old news', 'past', 'history'],
  },
];

export const categories: Category[] = [
  'Food & Sausage',
  'Animals',
  'Work',
  'Life',
  'Weather',
];

export const categoryEmojis: Record<Category, string> = {
  'Food & Sausage': '🌭',
  Animals: '🐻',
  Work: '💼',
  Life: '✨',
  Weather: '⛅',
};

export function getDailySaying(): Saying {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / 86400000);
  return sayings[dayOfYear % sayings.length];
}

export function getSayingById(id: string): Saying | undefined {
  return sayings.find((s) => s.id === id);
}

export function getRelatedSayings(saying: Saying, count = 3): Saying[] {
  return sayings
    .filter((s) => s.id !== saying.id && s.category === saying.category)
    .slice(0, count);
}
