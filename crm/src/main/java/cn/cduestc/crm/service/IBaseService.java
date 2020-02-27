package cn.cduestc.crm.service;

import java.util.List;

public interface IBaseService<T> {

    int deleteByPrimaryKey(Long id);

    int insert(T record);

    T selectByPrimaryKey(Long id);

    List<T> selectAll();

    int updateByPrimaryKey(T record);

}
