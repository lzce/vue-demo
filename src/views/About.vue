<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
      <div class="aaa">
        <el-tree
          class="tree-popout"
          node-key="id"
          ref="tree"
          :data="dataTree"
          :props="defaultPropsTree"
          @node-click="handleNodeClickTree"
          :render-content="renderContent"
          :highlight-current="true"
          :expand-on-click-node="false"
          :render-after-expand="true"
        ></el-tree>

      </div>
      <div class="bbb">
        <div v-for="item of checkedData" :key="item.id">
          {{ item.label }}
          <i class="icon-chahao iconfont" @click="deleteChecked(item.id)"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      dataTree: [
        {
          id: 1,
          label: '一级 2',
          checked: false,
          children: [{
            id: 3,
            label: '二级 2-1',
            checked: false,
            children: [{
              id: 4,
              label: '三级 3-1-1',
              checked: false,
              children: [
                { 
                  id: 44,
                  label: '三级 3-1-1-1',
                  checked: false,
                 },
                 { 
                  id: 45,
                  label: '三级 3-1-1-2',
                  checked: false,
                 }
              ]
            }, {
              id: 5,
              label: '三级 3-1-2',
              checked: false
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            checked: true,
            children: [{
              id: 6,
              label: '三级 3-2-1',
              checked: false
            }, {
              id: 7,
              label: '三级 3-2-2',
              checked: true
            }]
          }]
        }
      ],
      checkedData: [],
      defaultPropsTree: {
        children: "children",
        label: "label"
      } 
    
    }
  },
  mounted () {
    this.initSelectd()
  },
  methods: {
    gogo () {
      this.$router.push('demo')
    },
    handleNodeClickTree (data, node, store) {
      // console.log(data)
      data.checked = data.checked ? false : true;

      // console.log(data)
      let item = {
        id: data.id,
        label: data.label,
        checked: true
      }
      const index = this.checkedData.findIndex(itm => itm.id === item.id)
      if (index > -1) {
        this.checkedData.splice(index, 1)
      } else {
        this.checkedData.push(item)
      }
    },
    renderContent(h, { node, data, store }) {
      // console.log('nodenode', node)
      // console.log('data', data)
      // console.log('store', store)
      let checkedIcon = ''
      if (data.checked) {
        checkedIcon = 'iconfont icon-duihao'
      }
      let levelIcon = ''
      if (node.level === 1) {
         levelIcon = 'icon-wangluo iconfont'
      } else if (node.level == 2) {
         levelIcon = 'icon-location iconfont'
      } else if (node.level == 3) {
         levelIcon = 'icon-49 iconfont'
      }
      if (data.children && Array.isArray(data.children)) {
        return (
        <span class="custom-tree-node">
          <i class={levelIcon} />
          <span style="margin-left:0.1rem;margin-right:0.16rem;">
            {data.label}
          </span>
          <i class={ checkedIcon } />
        </span>
      )
      } else {
        return (
        <span class="custom-tree-node">
          {/**<i class={levelIcon} /> */}
          <span type="primary" class="tree-btn" style="margin-left:0.1rem;margin-right:0.16rem;">
            {data.label}
          </span>
          <i class={ checkedIcon } />
        </span>
      )
      }
      return (
        <span class="custom-tree-node">
          <i class={levelIcon} />
          <span style="margin-left:0.1rem;margin-right:0.16rem;">
            {data.label}
          </span>
          <i class={ checkedIcon } />
        </span>
      )
    },
    deleteChecked (id) {
      this.checkedData = this.checkedData.filter(item => item.id !== id)
      let item = this.findItem(this.dataTree, id)
      // console.log(item)
      item.checked = !item.checked
    },
    // 查找符合条件的那一项
    findItem(arr, id) {
      let a
      function inner(arr2) {
        for (let i = 0; i < arr2.length; i++) {
          let element = arr2[i];
          if (element.id === id) { 
            a = element
          } else if (Array.isArray(element.children)) {
            inner(element.children)
          }
        }
      }
      inner(arr)
      return a
    },
    // 数组扁平处理
    filterSelected(arr) {
      let a = []
      function inner(arr2) {
        for (let i = 0; i < arr2.length; i++) {
          let element = arr2[i]
          a.push(element)
          if (Array.isArray(element.children) && element.children.length > 0) {
            inner(element.children)
          }
        }
      }
      inner(arr)
      a = a.filter(item => item.checked)
      return a
    },
    initSelectd () {
      this.checkedData = this.filterSelected(this.dataTree)
    }
  }
}
</script>

<style lang="scss" scoped>
  * {
    user-select: none;
    }
  .aaa {
    width: 500px;
    margin: 0 auto;
  }
  .bbb {
    width: 200px;
  }
  .icon-checked {
    float: right;
  }
  /deep/.icon-duihao {
    margin-left: 20px;
    color: #f10216;
  }
  .container {
    display: flex;
  }
  /deep/ .tree-btn {
    display: inline-block;
    width: 85px;
    height: 26px;
    padding: 0;
    background-color: #fff;
    text-align: center;
    line-height: 26px;
    color: #666;
    margin-bottom: 5px;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid skyblue;
  }
</style>
