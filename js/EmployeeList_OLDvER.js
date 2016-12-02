

function EmployeeList(list){
  this.EmployeeItemList= list || [];
}

EmployeeList.prototype.addEmployee=function(employee){
  this.EmployeeItemList.push(employee);
}

EmployeeList.prototype.removeEmployee=function(employee){
  this.EmployeeItemList.push(employee);
}

function EmployeeListView(EmployeeList){
  var template,self=this,onRemoveHandler;

  function init(){
    var source= document.getElementById("employeeList").innerHTML;
    template= Handlebars.compile(source);
    self.html = document.createElement("div");
  }

  function render(){
    self.html.innerHTML = template(employeeList);
    var ul=self.html.querySelector("ul");
    renderItems(ul);
  }

  function renderItems(ul){
    for (var i = 0; i < EmployeeList.EmployeeItemList.length; i++) {
        var itemEmp= EmployeeList.EmployeeItemList[i];
        var empView= new EmployeeView(itemEmp);
        registerRemove(itemEmp,empView);
        ul.appendChild(empView.html);
    }
  }

  function registerQuit (itemEmp,empView){

    var quitItem= function (){
        employeeList.removeEmployee();
        render();
    };
      empView.quit(removeEmployee);
  }

  init();
  render();

}
