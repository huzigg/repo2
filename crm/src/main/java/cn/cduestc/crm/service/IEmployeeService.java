package cn.cduestc.crm.service;

import cn.cduestc.crm.domain.Employee;
import cn.cduestc.crm.query.BaseQuery;
import cn.cduestc.crm.utils.PageResult;


public interface IEmployeeService extends IBaseService<Employee> {
    PageResult queryForPage(BaseQuery query);

}
