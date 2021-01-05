package com.yuntu.dao;

import com.yuntu.pojo.Teacher;
import com.yuntu.util.PageUtil;

import java.util.List;

public interface TeacherMapper {
    //分页
    int getCount();
    List<Teacher> getPageAll(PageUtil<Teacher> pageUtil);

    //添加
    int addPro(Teacher teacher);

    //删除
    int delPro(int id);

    //查单个
    Teacher selPro(int id);

    //修改
    int updPro(Teacher teacher);
}
