package cn.cduestc.crm.utils;

import java.util.List;

public class PageResult {

    private Long total = 0L;
    private List rows;

    public PageResult(){

    }

    public PageResult(Long total, List rows) {
        this.total = total;
        this.rows = rows;
    }

    public Long getTotal() {
        return total;
    }

    public void setTotal(Long total) {
        this.total = total;
    }

    public List getRows() {
        return rows;
    }

    public void setRows(List rows) {
        this.rows = rows;
    }
}
