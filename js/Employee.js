
class Employee {
    constructor(id, name, skill,checkin) {
    this.id = id;
    this.name = name;
    this.skill = skill;
    this.checkin=checkin;
    this.title=document.getElementById("emp-title").value;
  }
}


Employee.prototype.setCheckIn = function(checkIn){
	this.checkin = checkIn;
};

Employee.prototype.sayYO = function(){
      alert ("Employee ID:"+this.id+" "+this.name+"say YO")
};


function EmployeeView(Employee){
  var template,self=this,
  onSayYoHandler;

  this.em = Employee;

  function init(){
    var source= document.getElementById("entry-template").innerHTML;
    template= Handlebars.compile(source);
    self.html = document.createElement("li");
  }

  function render(){

    var tmptile=Employee.title;
    self.html.innerHTML = template(Employee);

    if (tmptile==='CEO'){
        self.html.querySelector(".fireEveryone").addEventListener("click",onFireEveryOneClick);
    }

    if (tmptile==='CEO' || tmptile==='Teacher' || tmptile==='Developer' ){
        self.html.querySelector(".sayYo").addEventListener("click",onSayYoClick);
    }
    if (tmptile==='Teacher'|| tmptile==='Student' || tmptile==='CEO'){
        self.html.querySelector(".checkIn").addEventListener("click",onCheckInClick);
    }

  }

    function onSayYoClick(){
  		if(onSayYoHandler)
  			onSayYoHandler();
  	}

    function onSayYo(handler){
        onSayYoHandler = handler;
    }

    this.onSayYo = onSayYo;

    function onFireEveryOneClick(){
  		if(onFireEveryOneHandler)
  			onFireEveryOneHandler();
  	}

    function onFireEveryOne(handler){
        onFireEveryOneHandler = handler;
    }

    this.onFireEveryOne = onFireEveryOne;

    function onCheckInClick(){
          if(onCheckInHandler)
              onCheckInHandler(Employee);
    }

    function onCheckIn(handler){
        onCheckInHandler = handler;
    }

    this.onCheckIn = onCheckIn;

    init();
    render();
}
