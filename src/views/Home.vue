<template>
  <div>
    <b-container>
      <h2>Vue Template</h2>
      <hr>
      <b-row>
        <b-col>
          <h5>Vue Plugins Used:</h5>
          <ul>
            <li v-for="(plugin, index) in plugins" v-bind:key="index">
              <strong><a :href="plugin.url" target="_blank">{{plugin.name}}</a></strong> - <small>{{plugin.desc}}</small>
            </li>
          </ul>
        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plugins: [
        {
          name: "Bootstrap Vue",
          url: "https://www.npmjs.com/package/vue-cli-plugin-bootstrap-vue",
          desc: "Bootstrap v4 with added Vue support"
        },
        {
          name: "Vue Fontawesome",
          url: "https://www.npmjs.com/package/vue-cli-plugin-fontawesome",
          desc: "Same as Bootstrap, just with added Vue support"
        },
        {
          name: "Vue Moment",
          url: "https://www.npmjs.com/package/vue-cli-plugin-moment",
          desc:
            "Allows you to manipulate time/date data to make it more readable (e.g. '21/10/2007 19:05:44:92T' can be translated to: '21th October at 7pm')"
        },
        {
          name: "Vuex",
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",
          desc: "State management plugin. See 'store.js' for an example"
        },
        {
          name: "Vue-Router",
          url:
            "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
          desc:
            "Router plugin for mapping of 'components' throughout your Vue app"
        },
        {
          name: "Vue-Page-Transition",
          url: "https://www.npmjs.com/package/vue-page-transition",
          desc: "Easy & clean animation between router mapping"
        },
        {
          name: "Axios",
          url: "https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html",
          desc:
            "API Consumer. Allows for easier API calls using less code and allows for defining default values & prefixing these values (e.g. your API token)"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>