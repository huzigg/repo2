package cn.cduestc.crm.service.impl;

import cn.cduestc.crm.domain.Employee;
import cn.cduestc.crm.mapper.EmployeeMapper;
import cn.cduestc.crm.query.BaseQuery;
import cn.cduestc.crm.service.IEmployeeService;
import cn.cduestc.crm.utils.PageResult;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl extends BaseServiceImpl<Employee> implements IEmployeeService {

    @Autowired
    private EmployeeMapper employeeMapper;

    @Override
    public PageResult queryForPage(BaseQuery query) {
        PageHelper.startPage(query.getPage(),query.getRows());
        Page page = employeeMapper.selectForList(query);
        return new PageResult(page.getTotal(),page);
    }

}
