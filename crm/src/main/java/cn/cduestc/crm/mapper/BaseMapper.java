package cn.cduestc.crm.mapper;

import cn.cduestc.crm.domain.Employee;
import java.util.List;

public interface BaseMapper<T> {

    int deleteByPrimaryKey(Long id);

    int insert(T record);

    T selectByPrimaryKey(Long id);

    List<T> selectAll();

    int updateByPrimaryKey(T record);

}
