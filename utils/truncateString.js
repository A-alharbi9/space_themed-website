export default function truncateString(sentence, limit = 5) {
  const isSentence = sentence.match(/([0-9A-Za-z%'():;,.?!]+)/gm);

  if (isSentence && limit < isSentence.length) {
    return isSentence.slice(0, limit).join(' ') + '....';
  }
  return sentence;
}
