var selectApp = angular.module('selectApp',[]);
selectApp.controller('myCtrl',function($scope){
    $scope.myOption = "--请选择--"
    $scope.myOptions = [{
        "value": 106,
        "group": "分组1",
        "label": "选项1"
    },{
        "value": 107,
        "group": "分组1",
        "label": "选项2"
    },{
        "value": 108,
        "group": "分组2",
        "label": "选项3"
    },{
        "value": 109,
        "group": "分组2",
        "label": "选项4"
    },{
        "value": 110,
        "group": "分组2",
        "label": "选项5"
    }];

    $scope.mycity =  "--请选择--";
    $scope.Cities = [{add:"01", id: 1, name: '北京' }, { add:"02",  id: 2, name: '上海' }, { add:"03" ,id: 3, name: '广州' }];


    $scope.mycity2 = "--请选择--";
    $scope.Cities2 = [{
        add:"01", id: 1, groupname: '北京市' ,name:"海淀区"
    },{
        add:"01", id: 2, groupname: '北京市' ,name:"朝阳区"
    },{
        add:"01", id: 3, groupname: '北京市' ,name:"大兴区"
    }, { 
        add:"02",  id: 4, groupname: '上海市',name:"普陀区"
    },{ 
        add:"02",  id: 5, groupname: '上海市',name:"虹口区"
    },{ 
        add:"02",  id: 6, groupname: '上海市',name:"浦东新区"
    },{ 
        add:"02",  id: 7, groupname: '上海市',name:"长宁区"
    },{ 
        add:"02",  id: 8, groupname: '上海市',name:"徐汇区"
    }, { 
         add:"03" ,id: 9, groupname: '唐山' ,name:"遵化"
    }, { 
         add:"03" ,id: 10, groupname: '唐山' ,name:"丰润"
    }, { 
         add:"03" ,id: 11, groupname: '唐山' ,name:"迁安"
    }, { 
         add:"03" ,id: 12, groupname: '唐山' ,name:"玉田"
    }];

})