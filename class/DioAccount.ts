export abstract class DioAccount {
  private  name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      if (amount  > 0 ){
        this.balance += amount;
        console.log(`Deposito Realizado no valor de R$ ${amount}. Seu saldo atual é de R$ ${this.balance}`)
      } else if ( amount  <= 0 ) {
        console.log(`Valor invalido, Deposite a partir de R$ 1,00`)
      } else {
        console.log('CONTA INATIVA, PROCURE SEU GERENTE')
      }
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()){
      if(amount > 0 && amount <= this.balance ){
        this.balance -= amount;
        console.log(`Saque realizado com sucesso no valor de R$ ${amount} Seu novo Saldo é de: $${this.balance}`);
      } else if (amount > this.balance){
        console.log('Saldo insuficiente')
      } else {
        console.log('CONTA INATIVA, PROCURE SEU GERENTE')
      }
    }
    console.log('Voce sacou')
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
  isActive(): boolean {
    return this.validateStatus()
  }

}
