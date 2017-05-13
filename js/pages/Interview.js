/**
 * 请在index.html页面中添加一个表格和一张图表;
 * 表格和图表的数据请使用下面的链接获取,链接支持jsonp请求;
 * 样式可以参考文件夹中的图片（样式不要求相同，只需功能实现即可）;
 * 功能要求表格可以点击表头排序，数据可分页预览;
 * 图表使用显示为折线图，请使用链接返回数据中的“purchases”作为y轴数据来源;
 * 可以使用自己擅长的任何框架及类库来完成;
 */

$(function(){ 
	var link = 'http://pm.linkworld.cn/json/test';
	//做分页，使用dataTables插件
	function getTable2(){		
		$.ajax({
	        dataType: 'jsonp',
	        url: link,
	        success: function(data){
	            //处理data数据
	            var result = data;
	            if(result.length==0){
	            	$('.nodata1').css({"display":"block"});
	            }else{
	            	$('.nodata1').css({"display":"none"});
	            };	           
	            $("#table1").DataTable({
		            data: result,
		            columns: [
		            {
		              "data": "inserted"
		            },{
		              "data": "nick"
		            }, {
		              "data": "purchases"
		            }, {
		              "data": "rank"
		            }, {
		              "data": "updated"
		            },],

		            // "columnDefs": [{
		            //   "targets": [7],
		            //   "data": "id",
		            //   "render": function(data, type, full) {
		            //     return '<a tittle="查看详细信息" style="background:#2d6ba1;border-color:#2d6ba1;"\
		            //  data-id="'+data+'" class="btn btn-info js-editMsg detailBtn" role="button"  href="#"\
		            //   ><i class="glyphicon glyphicon-search"></i></a>';
		            //   }
		            // }],
		            "bDestroy": true,
		            "bLengthChange": false,
		            "bPaginate": true,
		            "oLanguage": { //国际化配置  
		              "sProcessing": "正在获取数据，请稍后...",
		              "sLengthMenu": "显示 _MENU_ 条",
		              "sZeroRecords": "没有您要搜索的内容",
		              "sInfo": "从 _START_ 到  _END_ 条记录 总数据为 _TOTAL_ 条",
		              "sInfoEmpty": "数据为0",
		              "sInfoFiltered": "(全部数据 _MAX_ 条)",
		              "sInfoPostFix": "",
		              "sSearch": "搜索",
		              "sUrl": "",
		              "oPaginate": {
		                "sFirst": "第一页",
		                "sPrevious": "上一页",
		                "sNext": "下一页",
		                "sLast": "最后一页"
		              }
		            }
		        });
				var html;
				for(var i=0;i<result.length;i++){
					var inserted = result[i].inserted || "";								
					var nick = result[i].nick || "";
					var purchases = result[i].purchases || "";
					var rank = result[i].rank || "";					
					var updated = result[i].updated || "";
					html+='<tr>'+
					'<td>'+inserted+'</td>'+
					'<td>'+nick+'</td>'+
					'<td>'+purchases+'</td>'+
					'<td>'+rank+'</td>'+
					'<td>'+updated+'</td>'+
					'</tr>';
				}
				$('#table3 tbody').html(html);
	        }
		});
	}
	getTable2();
	$(document).delegate('#report', 'click', function() {
        function clickDownload(aLink)
          {  
            var str = $("#tableDiv").html();
            str =  encodeURIComponent(str);
            $('.downloadworklog').remove();
            var src = "data:text/doc;charset=utf-8,\ufeff"+str;
            var htm = '<a class="downloadworklog" download="报表.xls" href="'+src+'" style="display:none;"></a>';
            $('body').append(htm);
            $('.downloadworklog').get(0).click();
          }
       clickDownload();
  });
})
function getTable(data){
    //数据表单
    var result = data;
    if(result.length==0){
        $('.nodata1').css({"display":"block"});
    }else{
        $('.nodata1').css({"display":"none"});
    };
    var nums = 10; //每页出现的数量
    var pages = Math.ceil(result.length/nums); //得到总页数
    var thisDate = function(curr){
        var str = '', last = curr*nums - 1;
        last = last >= data.length ? (data.length-1) : last;
        for(var i = (curr*nums - nums); i <= last; i++){
            var inserted = result[i].inserted || '';
            var nick = result[i].nick || '';
            var purchases = result[i].purchases || '';
            var rank = result[i].rank || '';
            var updated = result[i].updated || '';
            str += '<tr>'+
                '<td>'+inserted+'</td>'+
                '<td>'+nick+'</td>'+
                '<td>'+purchases+'</td>'+
                '<td>'+rank+'</td>'+
                '<td>'+updated+'</td>'+
                '</tr>';
    }
        return str;
    };
    var html = document.getElementById('table2');
    var html0 = document.createElement("tbody"); 
    html0.setAttribute("id","adminList");
    html.appendChild(html0);
    //调用分页
    laypage({
        cont: 'main-page2',
        pages: pages,
        jump: function(obj){
            document.getElementById('adminList').innerHTML = thisDate(obj.curr);
        }
    })
}

