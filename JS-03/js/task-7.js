"use strict";
// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод отвечающий за добавление суммы к балансу
//    * Создает объект транзакции и вызывает addTransaction
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Создает объект транзакции и вызывает addTransaction
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод добавляющий транзацию в свойство transactions
//    * Принимает объект трназкции
//    */
//   addTransaction(transaction) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

// Решение 7
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
const transactionsTypes = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  // /*
  //  * Метод отвечающий за добавление суммы к балансу
  //  * Создает объект транзакции и вызывает addTransaction
  //  */

  // добавляем сумму через объект - const transaction
  deposit(amount) {
    this.balance += amount;
    const transaction = {
      id: this.transactions.length + 1,
      type: transactionsTypes.DEPOSIT,
      amount
    };

    this.addTransaction(transaction);
  },

  // /*
  //  * Метод отвечающий за снятие суммы с баланса.
  //  * Создает объект транзакции и вызывает addTransaction
  //  *
  //  * Если amount больше чем текущий баланс, выводи сообщение
  //  * о том, что снятие такой суммы не возможно, недостаточно средств.
  //  */
  withdraw(amount) {
    if (amount > this.balance) {
      return alert(`Снятие такой суммы не возможно, недостаточно средств.`);
    }
    this.balance -= amount;
    const transaction = {
      id: this.transactions.length + 1,
      type: transactionsTypes.WITHDRAW,
      amount
    };
    this.addTransaction(transaction);
  },

  // /*
  //  * Метод добавляющий транзацию в свойство transactions
  //  * Принимает объект трназкции
  //  */

  addTransaction(transaction) {
    this.transactions.push(transaction); // вынесли в отдельную переменную
  },

  // /*
  //  * Метод возвращает текущий баланс
  //  */
  getBalance() {
    return this.balance;
  },

  // /*
  //  * Метод ищет и возвращает объект транзации по id
  //  */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    alert(`Транзакция не найдена`);
  },

  // /*
  //  * Метод возвращает количество средств
  //  * определенного типа транзакции из всей истории транзакций
  //  */
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  }
};

account.deposit(1333);
account.withdraw(300);
account.withdraw(300);
// account.withdraw(1300);

console.log("account :", account);
console.log(`details: `, account.getTransactionDetails(2));
console.log(
  "account.getTransactionTotal(type): ",
  account.getTransactionTotal(transactionsTypes.WITHDRAW)
);
console.log("account.getBalance() :", account.getBalance());
