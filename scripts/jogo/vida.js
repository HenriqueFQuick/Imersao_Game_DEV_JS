class Vida{
    constructor(total, inicial){
        this.total = total;
        this.inicial = inicial;

        this.vidas = this.inicial;

        this.largura = 50;
        this.altura = 50;

        this.xInicial = 20;
        this.y = 20

    }

    draw(){
        for(let i = 0; i < this.vidas; i++){
            const margem = i*35;
            const posicao = this.xInicial*(1+i)
            image(imagemVida, posicao+margem, this.y, this.largura, this.altura)
        }
    }

    ganhaVida(){
        if(this.vidas <= this.total){
            this.vidas++;
        }
    }

    perdeVida(){
        this.vidas--;
    }
}