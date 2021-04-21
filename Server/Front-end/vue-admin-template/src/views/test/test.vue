<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="ID" align="center" width="50">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="学号" width="150">
        <template slot-scope="scope">
          {{ scope.row.member }}
        </template>
      </el-table-column>
      <el-table-column label="姓名" align="center" width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center" width="75">
        <template slot-scope="scope">
          {{ scope.row.age }}
        </template>
      </el-table-column>
      <el-table-column label="性别" width="75">
        <template slot-scope="scope">
          {{ scope.row.gender|convertSex }}
        </template>
      </el-table-column>
      <el-table-column label="年级" width="75">
        <template slot-scope="scope">
          {{ scope.row.grade }}
        </template>
      </el-table-column>
      <el-table-column label="班级" width="75">
        <template slot-scope="scope">
          {{ scope.row.clazz }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="地址" width="">
        <template slot-scope="scope">
          <i class="el-icon-s-home" />
          <span>{{ scope.row.homeaddress }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button
          @click="handleEdit(scope.$index, scope.row)"
          type="primary"
          size="mini">编辑</el-button>
          <el-button
          @click="handleDelete(scope.$index, scope.row)"
          type="danger"
          size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handleEdit(row,$index)">
            编辑
          </el-button>
          <el-button type="danger" size="mini" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="Edit"
      :visible.sync="dialogFormVisible"
      width="30%"
      :before-close="handleClose">
      <el-form :model="form">
        <el-input v-model="form.id" autocomplete="off" v-show="false"></el-input>
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="form.member" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio-group v-model="formgender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年级" :label-width="formLabelWidth">
          <el-input v-model="form.grade" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="form.clazz" autocomplete="off"></el-input>
        </el-form-item>
<!--         <el-form-item label="年级" :label-width="formLabelWidth">
          <el-select v-model="formGrade" placeholder="请选择年级">
            <el-option :label = item :value=item v-for="(item, i) in gradeList"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth" v-show="clazzVisible">
          <el-select v-model="form.clazz" placeholder="请选择班级">
            <el-option :label=item :value=item v-for="(item, i) in clazzList"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.homeaddress" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdateStudent()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "",
      formgender: "",
      form: {
        id: "",
        member: "", 
        name: "", 
        age: "", 
        gender: "",
        grade: "", 
        clazz: "", 
        homeaddress: ""
      },
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },

    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    handleEdit(row,index) {
        this.form.index = index;
        this.form.member = row.member;
        this.form.name = row.name;
        this.form.age = row.age;
        this.formgender = row.gender;
        this.form.grade = row.grade;
        this.form.clazz = row.clazz;
        this.form.homeaddress = row.homeaddress;

        this.dialogFormVisible = true;
    },

    handleDelete(row,index) {
      //删除记录
      var id = row.id;
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
      }).then(() => {
        deleteStudent(id).then(
          response => {
            this.tableData.splice(index, 1);
            this.$message({
                message: response.message,
                type: 'success'
              });
          }
        )
       }).catch(() => {
         this.$message({
           type: 'info',
           message: '已取消删除'
         });
       });
    },

    handleUpdateStudent(){
        var id = this.form.id;
        var member = this.form.member;
        var name = this.form.name;
        var age = this.form.age;
        var gender = this.formgender;
        var grade = this.form.grade;
        var clazz = this.form.clazz;
        var homeaddress = this.form.homeaddress;
        if(
        null === member || "" === member ||
        null === name || "" === name ||
        null === age || "" === age ||
        null === gender || "" === gender ||
        null === grade || "" === grade ||
        null === clazz || "" === clazz ||
        null === homeaddress || "" === homeaddress){
          this.$message({
            message: "请填写完整的信息",
            type: "error"
          })
        }else{
          //请求后台
          var data = {
            id: id,
            member: member,
            name: name,
            age: age,
            gender: gender,
            grade: grade,
            clazz: clazz,
            homeaddress: homeaddress,
          }
          updateStudent(data).then(
            //更新页面数据
            response => {
              this.dialogFormVisible = false;
              this.loadData()
              this.$message({
                message: response.message,
                type: "success"
              })
            }
          )
        }
      },
  },
  filters: {
    convertSex(sex){
      switch(sex){
        case 1:
          return "男"
          break
        case 0:
          return "女"
          break
      }
    }
  }
}
</script>
