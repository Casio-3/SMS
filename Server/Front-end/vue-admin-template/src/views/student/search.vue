<template>
  <div>
    <el-input
      v-model="content"
      placeholder="请输入内容"
      class="input-with-select"
      style="margin-top: 15px;width:50%;margin-left: 15px;"
    >
      <el-select slot="prepend" v-model="select" placeholder="请选择">
        <el-option label="学号" value="member" />
        <el-option label="姓名" value="name" />
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="handleSearch()" />
    </el-input>

    <el-table
      :data="list"
      style="margin-top: 15px;width:90%;margin-left: 15px;"
    >
      <el-table-column label="ID" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="学号" width="">
        <template slot-scope="scope">
          {{ scope.row.member }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center" width="">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.age }}
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.gender|convertSex }}
        </template>
      </el-table-column>
      <el-table-column label="年级" align="center" width="">
        <template slot-scope="scope">
          {{ scope.row.grade }}
        </template>
      </el-table-column>
      <el-table-column label="班级" width="">
        <template slot-scope="scope">
          {{ scope.row.clazz }}
        </template>
      </el-table-column>
      <el-table-column label="地址" align="center" width="">
        <template slot-scope="scope">
          <em class="el-icon-s-home" />
          <span>{{ scope.row.homeaddress }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

<script type="text/javascript">
import { searchStudent } from '@/api/student'

export default {
  data() {
    return {
      list: [],
      content: '',
      select: ''
    }
  },
  methods: {
    handleSearch() {
      var content = this.content
      var select = this.select
      var data = {
        content: content,
        select: select
      }
      if (select === null || select === '') {
        this.$message({
          message: '选择查询类别',
          type: 'error'
        })
        return
      }

      if (content === null || content === '') {
        this.$message({
          message: '查询内容不能为空',
          type: 'error'
        })
        return
      }
      searchStudent(data).then(
        response => {
          this.list = []
          if (response.data.items.length === 0) {
            this.$message({
              message: '无匹配结果',
              type: 'warning'
            })
          } else {
            this.list = response.data.items
          }
        }
      )
    }
  }
}
</script>
