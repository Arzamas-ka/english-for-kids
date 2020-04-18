export const templateAudioElement = () => {
  const audio = document.createElement('audio');
  const source = document.createElement('source');
  source.setAttribute('type', 'audio/mpeg');
  audio.append(source);
  audio.play();

  let arrExpression = [];
  arrExpression.push(source, audio);

  return arrExpression;
};
