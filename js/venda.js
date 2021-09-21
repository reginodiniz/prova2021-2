
   
        function DadosEnviar() {
            var nome = document.getElementById('nome').value;
            var idade = document.getElementById('idade').value;
           var altura = document.getElementById('altura').value;
           var sexo = document.getElementById('sexo').value;
           if(nome.langth <= 5 || nome.langth > 20)
          alert('Tamanho inválido');
          else{
                if(idade <= 17 || idade >= 75)
                alert('idade inválida');

                    else{
                        if(altura < 0)
                        alert('Altura inválida');

                        else{
                            if(sexo != "F" && sexo != "M")
                            alert('Opacao inválido');

                            else
                                alert('Cadastro realisado com sucesso\n Nome:' + nome +'\nidade:'+ idade +'\nAltura:'+ altura +'\nSexo:'+ sexo);
                                
                       }     
                }
            }    
            
           
        
          /////me perdi bem aqui...
        }
        const itens=[
            {
                id:0, nome: "Cerveja Sant Bier", img: "img/cerveja saint bier.jpg",und: 0},
               { id:1, nome: "Antartica 600ml", img: "img/cerveja antarctica 600ml.jpg",und: 0},
               { id:2, nome: "Cerveja Antarctica Original 350ml", img: "img/cerveja antarctica 350ml.jpg",und: 0},
               { id:3, nome: "Cerveja Antarctica 300ml", img: "img/cerveja antarctica300ml.jpg",und: 0},
               { id:4, nome: "Cerveja Antartica 350ml", img: "img/antarctica.jpg",und: 0},
               { id:5, nome: "Antartica 600mlAntarctica Original 600ml", img: "img/Cerveja Ant. Origianal600ml.jpg",und: 0},
        ]
        function inicializarloja(){// perguntar ao professor inicializarloja=()=>{}
            var containerProduto = document.getElementById('produtos').value; itens.map((val)=>{
                containerProduto.innerHTML += `
                <div class="produtos_class">
                    <img src="`+val.img+`"/>
                    <p>`+val.nome+ `</p> 
                    <a key="`+val.id+ `" href="#">Adicionar ao Carrinho</a>
                </div>
            `;
        })
            
        }/*
        inicializarloja();{

        function atulizarCarrinho(){
            var containerCarrinho = document.getElementById('carrinho').value;
            containerCarrinho.innerHTML = "";
            itens.map((val)=>{
                if(val.quantidade > 0){
                containerCarrinho.innerHTML += `
                <div class="produtos_class">
                    <p>"`+val.nome+` \\ Quantidade `+val.quantidade+`"</p>
                    </div>
            `;
        })
        console.log(items);
        {
            var links = document.getElementsByTagName("nome");

            for (var i = 0; i < links.length;i ++ ) {
                links[i].addEventListener("click", function(){
                let key = this.getAttribute('key')
                items[key].quantidade++;
                atulizarCarrinho();
                return false;
            })

        }
    
    }*/