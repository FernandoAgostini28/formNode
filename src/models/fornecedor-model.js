class FornecedorNovo {
    
    constructor(nome, razaoSocial, cnpj, segmento, cep, rua, numero, complemento, telefone, email) {
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
        if(!!nome === false){
            return  'error'
        }else {
            return nome  
          
        }
    }
    verificaVazioRazaoSocial(razaoSocial){
        if(!!razaoSocial === false){
            return 'error'
        }else {
            return razaoSocial  
          
        }
    }
    verificaVazioCnpj(cnpj){
        if(!!cnpj === false){
            return 'error'
        }else {
            return cnpj  
          
        }
    }
    verificaVazioNumero(numero){
        if(!!numero === false){
            return 'error'
        }else {
            return numero  
          
        }

    }

    verificaVazioSegmento(segmento){
        if(!!segmento === false){
            return 'error'
        }else {
            return segmento  
          
        }

    }

    verificaVazioTelefone(telefone){
        if(!!telefone === false){
            return 'error'
        }else {
            return telefone  
          
        }

    }
    verificaVazioComplemento(complemento){
        if(!!complemento === false){
            return 'error'
        }else {
            return complemento  
          
        }

    }
    verificaVazioCep(cep) {
        if(!!cep === false){
            return 'error'
        }else {
            return cep  
          
        }

    }
    verificaVazioEmail(email){
        if(!!email === false){
            return 'error'
        }else {
            return email  
          
        }

    }

  
}

module.exports = FornecedorNovo