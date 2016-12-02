function EmployeeList(list){
	this.currentItemList = list || [];
}

EmployeeList.prototype.addEmployee = function(Employee){
	this.currentItemList.push(Employee);
};

EmployeeList.prototype.sayYo = function(Employee){
	for(var i=0; i<this.currentItemList.length; i++) {
		if (this.currentItemList[i] == Employee){
              	this.currentItemList[i].sayYO();
            break;
        }
	}
};

EmployeeList.prototype.checkIn = function(Employee){
	for(var i=0; i<this.currentItemList.length; i++) {
		if (this.currentItemList[i] == Employee){
              	this.currentItemList[i].setCheckIn(new Date());
            break;
        }
	}
};

EmployeeList.prototype.fireEveryOne = function(){
	this.currentItemList = this.currentItemList.filter(function(item){
		return (item.title=='CEO');
	});
};



function EmployeeListView(EmployeeList){
	var template,
		self = this;

	function init(){
		var source = document.getElementById("employeeList").innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("div");
	}

	function render(){
		self.html.innerHTML = template(EmployeeList);

		var ul = self.html.querySelector("ul");
		renderItems(ul);
	}

	function renderItems(ul){

		for(var i=0; i<EmployeeList.currentItemList.length; i++){
			var item = EmployeeList.currentItemList[i];
			var itemView = new EmployeeView(item);
            registerAll(item, itemView);
			ul.appendChild(itemView.html);
		}
	}

    function registerAll(item, itemView){
        registerCheckIn(item, itemView);
        registerfireEveryOne(item, itemView);
        registerSayYo(item, itemView);
    }

    function registerSayYo(item, itemView){
        var sayYoemp= function(){
            EmployeeList.sayYo(item);
        };
        itemView.onSayYo(sayYoemp);
    }

    function registerCheckIn(item, itemView){
        var checkInemp= function(employee){
    		EmployeeList.checkIn(employee);
    		render();
        };
        itemView.onCheckIn(checkInemp);
    }


    function registerfireEveryOne(item, itemView){
        var fireEveryOneemp= function(){
    		EmployeeList.fireEveryOne();
    		render();
        };
         itemView.onFireEveryOne(fireEveryOneemp);
    }

	init();
	render();
}
