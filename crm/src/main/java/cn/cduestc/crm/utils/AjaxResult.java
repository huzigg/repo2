package cn.cduestc.crm.utils;

public class AjaxResult {

    private Boolean success = true;
    private String msg;

    /**
     * 当操作成功时，调取该方法
     * @return
     */
    public static AjaxResult success(){
        return new AjaxResult();
    }

    /**
     * 当操作失败时，调取该方法
     * @return
     */
    public static AjaxResult error(String msg){
        AjaxResult ajaxResult = new AjaxResult();
        ajaxResult.setSuccess(false);
        ajaxResult.setMsg(msg);
        return ajaxResult;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
