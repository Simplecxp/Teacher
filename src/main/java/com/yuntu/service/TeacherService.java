package com.yuntu.service;

import com.yuntu.pojo.Teacher;
import com.yuntu.util.PageUtil;

import java.util.List;

public interface TeacherService {
    //分页

    void getPageAll(PageUtil<Teacher> pageUtil);

    //添加
    boolean addPro(Teacher teacher);

    //删除
    boolean delPro(int id);

    //查单个
    Teacher selPro(int id);

    //修改
    boolean updPro(Teacher teacher);
}
