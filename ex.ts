
class Component {
  constructor(public title?, public subtitle?) {}

  ngOnChanges(){}

  ngOnInit(){}

  ngDoCheck(){}

  ngAfterContentInit(){}

  ngAfterContentChecked(){}

  ngAfterViewInit(){}

  ngAfterViewChecked(){}

  ngOnDestroy(){}

  checkChanges(){}
  validateContent(c){}
  validateView(c){}

  builder() {

    let view, content;
    view = document.createElement('div');

    content = document.createElement('h1')
    content.innerHTML = "wfjhcaebs";

    view.append(content) // Content init
    this.ngAfterContentInit()

    this.validateContent(content); // Content chack

    document.append(view) // View init

    this.validateView(view); // View check
  }

}

let component = new Component(); //


component.title = "bfvbv";
component.subtitle = "bfvbv";
component.ngOnChanges();
component.ngOnInit()

component.builder();
