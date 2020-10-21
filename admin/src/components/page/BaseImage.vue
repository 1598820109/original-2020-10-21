<template>
    <div class="image">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item> <i class="el-icon-lx-calendar"></i> 图片  {{id}} </el-breadcrumb-item>
                <el-breadcrumb-item>添加图片</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="model" label-width="80px" @submit.native.prevent="save">
                    <el-form-item label="所属分类">
                        <el-select placeholder="请选择" v-model="model.parent"   >
                            <el-option v-for="item in parents" :key="item._id" :label="item.name"  :value="item._id"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="图片标题">
                        <el-input v-model="model.title"></el-input>
                    </el-form-item>

                    <el-form-item label="图片">
                        <el-upload
                            class="avatar-uploader"
                            :action="$http.defaults.baseURL + '/upload'"
                            :headers="getAuthHeaders()"
                            list-type="picture-card"
                            :show-file-list="false"
                            :on-success="afterUpload"
                            multiple
                        >
                            <img width="100%" v-if="model.imageUrl" :src="model.imageUrl" class="avatar" />
                            <i class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" native-type="submit">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    inject: ['reload'],

   // 获取id
    props:{
        id: {},
    },

    data() {
        return {
            model: {},
            parents: [],
            disabled: false,
            multiple: true
        };
    },

    methods: {
        // 上传成功
        afterUpload(res) {
            this.$set(this.model, 'imageUrl', res.url);
        },

      
        //   筛选分类
        async feach() {
            const res = await this.$http.get(`rest/categories/`);
            res.data.forEach((item,index) => {
                if(item.parent == undefined){
                    return item;
                }else if(item.parent.name == "CATAGORY"){
                    this.parents.push(item)
                }

            //  this.parents.push(item)
            });
        },

        // 保存
        async save() {
            let res
            if(this.id){
               res = await this.$http.put(`rest/images/${this.id}`, this.model);
            }else{
               res = await this.$http.post(`rest/images/`, this.model);
            }
            this.reload();
            this.$router.push('/imagelist');
            this.$message({
                type: 'success',
                message: '上传成功'
            });
        },

        // 编辑
        async imageEdit(){
            const res = await this.$http.get(`rest/images/${this.id}`);
            this.model = res.data;
        }
    },

    created() {
        this.feach();
        this.id && this.imageEdit()
    }
};
</script>

<style>
.form-box {
    width: 1200px;
}

.avatar-uploader .el-upload {
    width: 230px;
    height: 230px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 230px;
    height: 230px;
    line-height: 230px;
    text-align: center;
}

.avatar {
    width: 330px;
    height: auto;
    display: block;
}
</style>
