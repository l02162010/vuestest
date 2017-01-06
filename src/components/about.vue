<template>
<div class="about">
  <h1>{{ title }}</h1>
  <p v-if="showName">{{user.firstName}}</p>
  <p v-else="showName">nobody</p>
  <hr>
  <p v-for="item in items">{{ item.power }}</p>
  <div>
    <span v-for="n in 10"> {{n }} </span>
  </div>
  <hr>
  <p>{{ message }}</p>
  <input v-model="message" placeholder="寫東西">
  <p style="white-space: pre">{{ write }}</p>
  <textarea v-model="write" placeholder="寫點東西進去"></textarea>
  <hr>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</lable>
    <hr>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedName">
    <label for="jack">Jack</label>
  <input type="checkbox" id="job" value="job" v-model="checkedName">
  <label for="job">Job</label>
  <td style="border:1px solid" v-for="name in names">
    <input type="checkbox" v-bind:value="name.n" v-model="name.checkedName">
    <tr style="border:1px solid" v-bind:for="name.n">{{name.n}}</tr>
    <tr style="border:1px solid" v-bind:for="name.n">{{ name.checkedName }}</tr>
    </span>
    <span>123</span>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'about',
  data() {
    return {
      title: 'hello world',
      user: {
        firstName: 'Austin',
        lastName: 'Lin'
      },
      showName: true,
      items: [{
          power: '生產力'
        },
        {
          power: '行動力'
        },
        {
          power: '力量'
        }
      ],
      names: [{
          n: 'bob',
          checkedName: true
        },
        {
          n: 'pop',
          checkedName: true
        },
        {
          n: 'coco',
          checkedName: true
        },
        {
          n: 'woer',
          checkedName: true
        }
      ],
      message: '',
      write: '',
      checked: false,

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
