    gr.registerComponent("Rotate", {
        attributes: {
            test: {
                defaultValue: "HELLO WORLD!",
                converter: "String"
            }
        },
        $awake:()=>{
          console.log(111);
        },
        $update:function(){
            if(this.i === void 0)
            {
                this.i = 0;
            }
            this.i ++;
            this.node.setAttribute("rotation",''+this.i+','+this.i+','+this.i+'');

        }
    });
    gr.registerNode("rotate",["Rotate"],{},"mesh");
gr(function() {
});