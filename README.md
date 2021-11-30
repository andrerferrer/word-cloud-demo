# GOAL

This is a demo to show-case how to create a word cloud with [`wordcloud2` plugin](https://github.com/timdream/wordcloud2.js
).

[You can also check my other demos](https://github.com/andrerferrer/dedemos/blob/master/README.md#ded%C3%A9mos).

## What needs to be done?

### Yarn add wordcloud and jquery
```sh
yarn add wordcloud jquery
```

### Add a canvas to your view
```erb
<div id="my_canvas" style='height: 50vh; border: 1px solid red;'></div>
```

### Implement the JS
```js
// app/javascript/plugins/init_word_cloud.js
import WordCloud from 'wordcloud'

const initWordCloud = () => {
  const canvas = document.getElementById('my_canvas');
  if (canvas) {
    const list = [['foo', 120], ['bar', 60], ['banana', 10]]
    WordCloud(canvas, { list: list });
  }
}

export { initWordCloud };
```

### If you want to check it locally
```sh
repo_name="word-cloud-demo"
gh_repository="git@github.com:andrerferrer/$repo_name.git"
cd
git clone $gh_repository demo
cd demo
bundle install
yarn install
rails db:create db:migrate db:seed
rails s

# now you can go to http://localhost:3000/ and see it there
```

And we're good to go 🤓

Good Luck and Have Fun
