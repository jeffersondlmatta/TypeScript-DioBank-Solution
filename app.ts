import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

peopleAccount.isActive();
companyAccount.deposit(100);
companyAccount.getLoan(1000);
companyAccount.deposit(1000);
companyAccount.withdraw(2000)





