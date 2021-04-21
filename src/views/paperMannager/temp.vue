<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140" />
    <el-table-column prop="content" label="内容" width="120" />
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-row>
          <el-button type="primary" icon="el-icon-edit" circle @click="edit(scope.row._id)" />
          <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row._id)" />
        </el-row>
        <!-- <el-button
          type="primary"
          size="small"
          @click="edit(scope.row._id)"
        >编辑</el-button>
        <el-button
          type="danger"
          size="small"
          @click="del(scope.row._id)"
        >删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>

