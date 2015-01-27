(function() {
    document.addEventListener("deviceready", function () {
        console.log("Device Ready function");
        var app = new kendo.mobile.Application(document.body, { skin: "flat" });
        $.get("http://illawarrasouthernhighlandsflpn.com.au/directory",function(data){
            var doc = $(data);
            var catList = [];
            doc.find("#service-type").parent().find(".cn-cat-children label").each(function(){
                catList.push($(this).text());
            });
            $("#directory-type").kendoMobileListView({
                dataSource: catList,
                template: "<span>#: data #</span>"
            });
        });
        $("#directory-lga").kendoMobileListView({
            dataSource: ["Bega","Eurobodalla","Kiama","Shellharbour","Shoalhaven","Wollondilly","Wollongong"],
            template: "<span>#: data #</span>"
        });
        navigator.splashscreen.hide();
    });
}());

function enterSearch(){
    var me = $(this);
    if(me.val()=="search")me.val("");
}