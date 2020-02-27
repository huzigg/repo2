package cn.cduestc.crm.web.controller;

import cn.cduestc.crm.domain.Employee;
import cn.cduestc.crm.query.BaseQuery;
import cn.cduestc.crm.service.IEmployeeService;
import cn.cduestc.crm.utils.AjaxResult;
import cn.cduestc.crm.utils.PageResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("employee")
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    /**
     * 查询所有
     * @return
     */
    @RequestMapping("findAll")
    @ResponseBody
    public List<Employee> findAll(){
        return employeeService.selectAll();
    }

    /**
     * 分页查询
     */
    @RequestMapping("list")
    @ResponseBody
    public PageResult list(BaseQuery query){
        PageResult pageResult = employeeService.queryForPage(query);
        return pageResult;
    }

    /**
     * 主页面
     * @return
     */
    @RequestMapping("index")
    public String index(){
        return "employee";
    }

    /**
     * 保存或者修改员工数据的方法
     * @param employee
     */
    @RequestMapping("saveOrUpdate")
    @ResponseBody
    public AjaxResult saveOrUpdate(Employee employee){
        try {
            if (employee.getId() != null) {
                employeeService.updateByPrimaryKey(employee);
            }else {
                employeeService.insert(employee);
            }
            return AjaxResult.success();
        } catch (Exception e) {
            e.printStackTrace();
            return AjaxResult.error("网络异常");
        }
    }

    /**
     * 删除数据
     */
    @RequestMapping("delete")
    @ResponseBody
    public AjaxResult delete(Long id){
        try {
            employeeService.deleteByPrimaryKey(id);
            return AjaxResult.success();
        } catch (Exception e) {
            e.printStackTrace();
            return AjaxResult.error("失败啦");
        }
    }

}
