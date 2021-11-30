import WordCloud from 'wordcloud'

const initWordCloud = () => {
  const canvas = document.getElementById('my_canvas');
  if (canvas) {
    const list = [['foo', 120], ['bar', 60], ['banana', 10]]
    WordCloud(canvas, { list: list });
  }
}

export { initWordCloud };
