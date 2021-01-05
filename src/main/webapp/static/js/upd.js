$(function (){
    //通过jQuery获取地址栏参数拿不到
    var t_id = $("#userForm").attr("action").substring($("#userForm").attr("action").indexOf("t_id=")+5);
    $.post("selPro",{"t_id":t_id},selOne,"JSON")
    function selOne(data){
        $("#t_name").val(data.t_name);
        $("#t_idcard").val(data.t_idcard);
        $("#t_loginName").val(data.t_loginName);
        $("#t_pwd").val(data.t_pwd);
        if (data.t_sex==1){
            $("#sex :radio").eq(0).attr("checked","checked")
        }else {
            $("#sex :radio").eq(1).attr("checked","checked")
        }
    }
})