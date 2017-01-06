<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ msg }}</h2>
    <button >press</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'hello',
  data () {
    return {
      title: 'HI 我是Austin',

      msg:'這裡是使用vue.js所製作的履歷表' +
      '如果你對網站所使用的工具有興趣可以到'
      +'找找。' +
      '或者你願意替我的提供更好的建議' +
      '幫助我更上一層樓，歡迎到聯絡我留言',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
