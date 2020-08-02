$(function() {
	$('body').keyup(function() {
		$('#livepreview').html($('#liveeditor').val());
	});
});

function downloadfile(){
	//BOM
	var bom = new Uint8Array([0xEF, 0xBB, 0xBF]);

	//各フォームの値を取得
	var title = document.js.title.value;
	var htmlbody = document.js.htmlbody.value;

	//htmlの内容を変数に格納
	var html ="<html><head><title>" + title + "</title></head><body>" + htmlbody + "</body></html>"

	//blobとしてhtmlファイルを生成
	var blob = new Blob([bom, html],{type: "text/html;"})

	//a要素を作成してクリックイベント実行
	var a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.target = '_blank';
	a.download = title + '.html';
	a.click();
}
$('textarea.auto-resize')
	.on('change keyup keydown paste cut', function(){
		if ($(this).outerHeight() > this.scrollHeight){
			$(this).height(2)
		}
		while ($(this).outerHeight() < this.scrollHeight+1){
			$(this).height($(this).height() + 2)
		}
	});
