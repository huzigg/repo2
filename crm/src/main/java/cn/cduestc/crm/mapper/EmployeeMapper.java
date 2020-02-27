package cn.cduestc.crm.mapper;

import cn.cduestc.crm.domain.Employee;
import cn.cduestc.crm.query.BaseQuery;
import com.github.pagehelper.Page;

public interface EmployeeMapper extends BaseMapper<Employee> {
    Page selectForList(BaseQuery query);
}