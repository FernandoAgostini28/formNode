class FornecedorNovo {
    
    constructor(nome, razaoSocial, cnpj, segmento, cep, rua, numero, complemento, telefone, email) {
        console.log(cep)
        this.nome = this.verificaVazioNome(nome)
        this.razaoSocial = this.verificaVazioRazaoSocial(razaoSocial)
        this.cnpj= this.verificaVazioCnpj(cnpj)
        this.segmento = this.verificaVazioSegmento(segmento)
        this.cep = this.verificaVazioCep(cep)
        this.rua = rua
        this.numero = this.verificaVazioNumero(numero)
        this.complemento = this.verificaVazioComplemento(complemento)
        this.telefone = this.verificaVazioTelefone(telefone)
        this.email = this.verificaVazioEmail(email)
        
    }

    verificaVazioNome(nome){
        if(!!nome){
            return  'error'
        }else {
            return nome  
          
        }
    }
    verificaVazioRazaoSocial(razaoSocial){
        if(!!razaoSocial){
            return 'vazio'
        }else {
            return razaoSocial  
          
        }
    }
    verificaVazioCnpj(cnpj){
        if(!!cnpj){
            return 'error'
        }else {
            return cnpj  
          
        }
    }
    verificaVazioNumero(numero){
        if(!!numero){
            return 'error'
        }else {
            return numero  
          
        }

    }

    verificaVazioSegmento(segmento){
        if(!!segmento){
            return 'error'
        }else {
            return segmento  
          
        }

    }

    verificaVazioTelefone(telefone){
        if(!!telefone){
            return 'error'
        }else {
            return telefone  
          
        }

    }
    verificaVazioComplemento(complemento){
        if(!!complemento){
            return 'error'
        }else {
            return complemento  
          
        }

    }
    verificaVazioCep(cep) {
        console.log(cep)
        if(!!cep){
            return 'error'
        }else {
            return cep  
          
        }

    }
    verificaVazioEmail(email){
        if(!!email){
            return 'error'
        }else {
            return email  
          
        }

    }

  
}

module.exports = FornecedorNovo