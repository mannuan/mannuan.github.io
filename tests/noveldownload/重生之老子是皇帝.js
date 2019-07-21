(function(){
    var items = Array.prototype.slice.apply(
        $('body > div.listmain > dl > dd > a'), [1060, -1]);
    items.forEach(function(item, index){
        var j = $(item);
        var num = j.text().trim().replace(/[^\d]+/g, '');
        var title = j.text().trim().replace(/[\d.]/g, '');
        var href = j.attr('href');
        $.get( href, function(data){
            var content = $(data).find('#content').text();
            data = {"title": title, "content": content, "index": num}
            $.post("http://127.0.0.1:3000", data, function(response){
                console.log(response);});
        });
    });
})();