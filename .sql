CREATE TABLE usuarios(
    ID  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(200),
    email varchar(100),
    CPF`-`CNPJ varchar(30),
    logradouro varchar(50),
    número INT(10),
    bairro varchar(50),
    cidade varchar(50),
    estado varchar(50)


);