function a() {
    console.log(this); //this points global object
    this.newvariable = "I am in function a";
}

var b = function() {
    console.log(this); //this points global object
}
 
a();
console.log(newvariable);
b();
this.name = "I am Biplav";
var c = {
    name: 'The C object',
    process: function()
    {
        var self = this;
        this.name = 'Mutated C object';
        console.log(self);
        
        //FUNCTION STATEMENT
       function method() 
        {
            self.name = 'Mutated again C object';
            console.log(self);
        }
        method();
        //or  
        //FUNCTION EXPRESSION 
        var setName = function(newname) {
            self.name = newname;
            console.log(self);
        }
        setName('Hello there!');
    }
}
c.process();

var arr = [1,
         true,
         {
            name: 'Biplav',
            address: '7 wallace St'
             
         },
         function greet(name) {
             var greetings = 'Hello ';
             console.log(greetings + name);
         },
         "Hello"
        ];
    arr[3](arr[2].name);
        
       