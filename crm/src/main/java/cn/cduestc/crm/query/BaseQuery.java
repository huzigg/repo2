package cn.cduestc.crm.query;

import org.springframework.util.StringUtils;

public class BaseQuery {

    private Integer page = 1;
    private Integer rows = 10;
    private String keyWord;

    public String getKeyWord() {
        return StringUtils.hasLength(keyWord) ? keyWord:null;
    }

    public void setKeyWord(String keyWord) {
        this.keyWord = keyWord;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getRows() {
        return rows;
    }

    public void setRows(Integer rows) {
        this.rows = rows;
    }

}
