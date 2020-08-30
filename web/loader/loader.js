// LOADER

loader = {
    element: document.getElementById("loader"),
    // Finaliza y oculta el Loader
    finalize: function(){
        try {
            if(this.element !== undefined && this.element !== null){
                this.element.classList.remove("active");
                document.title = name;
            }else{
                error.show("Error de loader", "No se encuentra el elemento Loader.");
            }
        } catch (e) {
            error.show("Error al finalizar Loader", e);
        }
    }
}