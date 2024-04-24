import { DioAccount } from "./DioAccount"

export class ExclusiveAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
      super(name, accountNumber)
      console.log(` Operação Realizada com Sucesso ${name} `)
    }
  
    getLoanES = (amount: number): void => {
    let extra: number = 10
      if (this.isActive()){
        this.balance += amount + extra
  
        console.log(`Emprestimo Aprovado no valor de R$ ${amount} Você Ganhouu R$ ${extra} Por ser Cliente Esclusivo!!! Seu novo saldo é de R$ ${this.balance} `)
      } else {
        console.log('CONTA INATIVA, PROCURE SEU GERENTE')
      }
      
    }
  }