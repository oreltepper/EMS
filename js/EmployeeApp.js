var tmpid=0;
function EmployeeApp(){
	this.list = new EmployeeList();
	this.newEmpName;
  this.newEmpSkill;
  this.newEmpTitle;

}

EmployeeApp.prototype.addEmp = function(){
    var input1 = document.querySelector("#emp-name").value;
    var input2 = document.querySelector("#emp-skill").value;
    var empTitle=document.getElementById("emp-title").value;
    if (empTitle==="ceo")
            newEmp = new CEO(tmpid, input1, input2,0);

    if (empTitle==="developer")
            newEmp = new Developer(tmpid, input1, input2,0);

    if (empTitle==="teacher")
                newEmp = new Teacher(tmpid, input1, input2,0);

    if (empTitle==="student")
                newEmp = new Student(tmpid, input1, input2,0);

	this.list.addEmployee(newEmp);
	this.newEmpName = null;
    this.newEmpSkill = null;
    this.newEmpTitle = null;
    tmpid++;
};


function EmployeeAppView(empApp){
	var self = this,
		template;

	function init(){
		var source = document.getElementById("empApp").innerHTML;
		template = Handlebars.compile(source);
		self.html = document.createElement("div");
	}

	function render(){
		self.html.innerHTML = template(empApp);
		var list = self.html.querySelector(".list");
		var empView = new EmployeeListView(empApp.list);
		list.appendChild(empView.html);

		var input1 = document.querySelector("#emp-name");
    var input2 = document.querySelector("#emp-skill");
    var input3 = document.querySelector("#emp-title");

		input1.addEventListener("change", onInput1Changed);
        input2.addEventListener("change", onInput2Changed);
        input3.addEventListener("change", onInput3Changed);

		var addButton = document.querySelector('#btn-add-new-emp');
		addButton.addEventListener("click", onAddClick);
	}

	function onAddClick(e){
        e.preventDefault();
		empApp.addEmp();
		render();
	}

    function onInput1Changed(){
        EmployeeApp.newEmpName = this.value;
    }
    function onInput2Changed(){
        EmployeeApp.newEmpSkill = this.value;
    }
    function onInput3Changed(){
        EmployeeApp.newEmpTitle = this.value;
    }

	init();
	render();
}
