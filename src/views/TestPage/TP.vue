<template>
  <div>
    <header>
        <div class="intro">
            <div class="title">
                <h1>JSON-to-Go</h1>
                <h2>Convert JSON to Go struct</h2>
            </div>
            <div>
                <img src="../img/json-to-go.png" id="brand">
            </div>
        </div>
    </header>
    <table>
      <tbody>
        <tr>
          <th style="width: 45%;">JSON</th>
          <th style="width: 10%; font-size: 22px;">→</th>
          <th style="width: 45%;">Go <label><input type="checkbox" id="inline" checked="">Inline type definitions</label></th>
        </tr>
      </tbody>
    </table>
    <table>
      <tbody>
        <tr>
          <td style="width: 50%;">
              <div id="input" contenteditable=""></div>
          </td>
          <td style="width: 50%;">
            <div id="output"><span style="color: #777;">Go will appear here</span></div>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>

import '../../js/analytics.js';
import '../../js/jquery.min.js';
import '../../js/highlight.min.js';
import '../../js/json-to-go.js';
import '../../js/common.js';
import '../../js/gofmt.js';
export default {

  data() {
    return {
    }
  },

  computed: {

  },

  mounted() {
    this.jsontogo();
  },

  methods: {
   
  }
}
</script>
<style scoped>
@import "../../css/tomorrow.highlight.css";
@import "../../css/common.css";
h1 {
  background: red;
  width: 375px;
}
.icons-warp {
  border-radius: 25px;
  .float-icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 50px;
    img {
      width: 25px;
      height: 25px;
      margin-bottom: 3px;
    }
    span {
      font-size: 9px;
      color: #666666;
    }
  }
}
</style>
