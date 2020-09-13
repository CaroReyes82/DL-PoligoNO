//Rectangulo


function Rectangulo (altura , base) { 
    this._base = function () {
        return base;
    };
    this._altura = function () {
        return altura;
    };

}
 

//Get y Set

Rectangulo.prototype.getAltura =function () {
    return this._altura();

    
}

Rectangulo.prototype.setAltura = function (nueva_altura) {
    this._altura = function () {
        return nueva_altura;
        
    }
    
}

Rectangulo.prototype.getBase = function() {
    return this._base();
    
}
Rectangulo.prototype.setBase = function (nueva_base) {
    this._altura = function () {
        return nueva_base;
        
    }
    
}

//Metodos

Rectangulo.prototype.calcularPerimetro = function () {
    return 2 * (this.base + this.altura);
}

Rectangulo.prototype.calcularArea = function () {
    return this.base * this.altura;
}



    
//Triangulo

function Triangulo (base,altura) {
    this._base = function () {
        return base;
    };
    this._altura = function () {
        return altura;
    };
}

//Get y Set

Triangulo.prototype.getAltura =function () {
    return this._altura();

    
}
Triangulo.prototype.setAltura = function (nueva_altura) {
    this._altura = function () {
        return nueva_altura;
        
    }
    
}


Triangulo.prototype.getBase = function() {
    return this._base();
    
}

Triangulo.prototype.setBase = function (nueva_base) {
    this._base = function () {
        return nueva_base;
        
    }
    
}

//Metodos

Triangulo.prototype.calcularPerimetro = function () {
    return 2 * (this.getBase() + this.getAltura());
}

Triangulo.prototype.calcularArea = function () {
    return this.getBase() * this.getAltura();
};



let operando = document.getElementById('operando');
operando.addEventListener('click', function (e) {
    e.preventDefault();
    let valorBase = document.getElementById('valor_base').value; 
    let valorAltura = document.getElementById('valor_altura').value;
    let resultado = document.getElementById('resultado');
    
    let tri = new Triangulo(
        parseInt(valorBase),
        parseInt(valorAltura)
    );
    resultado.innerHTML = `Perímetro: ${tri.calcularPerimetro()} <br>Área: ${tri.calcularArea()}`;
    console.log(valorBase);
    console.log(valorAltura);
});



let operando2 = document.getElementById('oprando2');
opernado2.addEventListener('click', function (e) {
    e.preventDefault();
    let valorBase2 = document.getElementById('valor_base2').value; 
    let valorAltura2 = document.getElementById('valor_altura2').value;
    let resultado2 = document.getElementById('resultado2');
    let rec = new Rectangulo(
        parseInt(valorBase2),
        parseInt(valorAltura2)
    );
    resultado2.innerHTML = `Perímetro: ${rec.calcularPerimetro()} <br>Área: ${rec.calcularArea()}`;
    console.log(valorBase2);
    console.log(valorAltura2);
});
