package com.yuntu.service;

import com.yuntu.dao.SexMapper;
import com.yuntu.pojo.Sex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("sexService")
public class SexServiceImpl implements SexService{
    @Autowired
    SexMapper mapper;

    @Override
    public List<Sex> getAll() {
        return mapper.getAll();
    }
}
