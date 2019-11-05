<template>
  <div>
    <b-container>
      <h2>This is an example page</h2>
      <hr>
      <span>
        A .Vue file acts as a single page component
        <small>
          <a href="https://vuejs.org/v2/guide/single-file-components.html">(Read More)</a>
        </small>
      </span>
      <b-row class="mt-3">
        <b-col>
          <h5>Documentation</h5>
          <ul>
            <li v-for="(docs, index) in links.documentation" v-bind:key="index">
              <a :href="docs.url" target="_blank">{{docs.name}}</a>
            </li>
          </ul>
          <h5>Helpful Links</h5>
          <ul>
            <li v-for="(int, index) in links.interesting" v-bind:key="index">
              <a :href="int.url" target="_blank">{{int.name}}</a>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        documentation: [
          {
            name: "Vue.js",
            url: "https://vuejs.org/v2/guide/"
          },
          {
            name: "Vue Router",
            url: "https://router.vuejs.org/"
          },
          {
            name: "Axios",
            url: "https://github.com/axios/axios"
          },
          {
            name: "BootstrapVue",
            url: "https://bootstrap-vue.js.org/"
          }
        ],
        interesting: [
          {
            name: "Props (passing data to components)",
            url: "https://vuejs.org/v2/guide/components-props.html"
          },
          {
            name: "Vue Single File Components",
            url: "https://vuejs.org/v2/guide/single-file-components.html"
          },
          {
            name: "Vue Instance (Lifecycle)",
            url: "https://vuejs.org/v2/guide/instance.html"
          },
          {
            name: "Material Pallette",
            url: "https://www.materialpalette.com/"
          }
        ]
      }
    };
  }
};
</script>

<style>
a {
  color: #42b983;
}
</style>