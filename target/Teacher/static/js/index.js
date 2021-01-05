$(function (){
    var pageindex=1;
    initUser();
    function initUser(){
        $.post("getPageAll",{pageindex:pageindex},getPageAll,"JSON")
        function getPageAll(data){
            var $mypageshow=$("#mypageshow");
            $(data.list).each(function (){
                $("#mypageshow").append("<tr>\n" +
                    "            <td>"+this.t_id+"</td>\n" +
                    "            <td>"+this.t_name+"</td>\n" +
                    "            <td>"+this.t_idcard+"</td>\n" +
                    "            <td>"+this.t_birthday+"</td>\n" +
                    "            <td>"+this.t_loginName+"</td>\n" +
                    "            <td>"+this.t_pwd+"</td>\n" +
                    "            <td>"+this.sex.s_sex+"</td>\n" +
                    "            <td><a class=\"del\" value='"+this.t_id+"' href='javascript:void(0)'>删除</a></td>\n" +
                    "            <td><a href='upd.html?t_id="+this.t_id+"'>修改</a> </td>\n" +
                    "        </tr>")
            })
            var $td=$("<td colspan=\"11\">当前页["+data.pageindex+"/"+data.pagecount+"]</td>");
            if(data.pageindex>1){
                $td.append("<a class='pageclick' value='1' href='javascript:void(0)'>首页</a>");
                $td.append("<a class='pageclick' value='"+(data.pageindex-1)+"' href='javascript:void(0)'>上一页</a>");
            }
            if(data.pageindex < data.pagecount){
                $td.append("<a class='pageclick' value='"+(data.pageindex+1)+"' href='javascript:void(0)'>下一页</a>");
                $td.append("<a class='pageclick' value='"+data.pagecount+"' href='javascript:void(0)'>尾页</a>");
            }
            var $tr=$("<tr align=\"center\"></tr>").append($td);
            $mypageshow.append($tr);
            //页面上下页的点击事件
            $(".pageclick").click(function(){
                pageindex=$(this).attr("value");
                $mypageshow.html("");//清除
                initUser();
            });

            $(".del").click(function (){
                var t_id = $(this).attr("value");
                $mypageshow.html("");//清除
                $.post("del/"+t_id,del,"text");
                function del(data){
                    if(data=="true"){
                        alert("删除成功")
                        initUser();
                    }else {
                        alert("删除失败")
                        initUser();
                    }
                }
            })
        }

    }
})