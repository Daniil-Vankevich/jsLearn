let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( this.age ); 
    }
  
  };
  
  
  let admin = user;
  user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.
  
  admin.sayHi(); 

  // Объяснение про драйвера бд и про ORM 

  /*connection = pg.Connect("username\;sada;rq[rqqlf;wqf;w")
  connection.query('SELECT * FROM TABLE')
  connection.close()


  ORM = ORM('PostgreSQL', 'username:password')

  ORM.createdatabase()
  ORM.createTable('Игры', {id: ORM.idField})

  ORM.query.selectAll('Игры')*/

