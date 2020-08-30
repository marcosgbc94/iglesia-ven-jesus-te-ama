// ERROR

error = {
    // Muestra el mensaje de error por alert
    show: function(name, msg){
        try {
            if(name !== undefined && name !== null){
                if(msg !== undefined && msg !== null){
                    alert(name);
                    this.log(name, msg);
                }else{
                    alert(name);
                }
            }
        } catch (e) {
            alert("Error interno: " + e);
        }
    },
    // Muestra el mensaje de error por consola
    log: function(name, msg){
        try {
            console.log("// ERROR //");
            console.log(name);
            console.log(msg);
        } catch (e) {
            alert("Error interno: " + e);
        }
    }
}