import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.isActive()){
      this.balance += amount

      console.log(`Emprestimo Aprovado no valor de R$ ${amount} Seu novo saldo é de R$ ${this.balance} `)
    } else {
      console.log('CONTA INATIVA, PROCURE SEU GERENTE')
    }
    
  }
}
