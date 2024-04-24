import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { ExclusiveAccount } from './class/ExclusiveAccout'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const exclusivoAccount: ExclusiveAccount = new ExclusiveAccount ('jeff', 100)

exclusivoAccount.getLoanES(100)









