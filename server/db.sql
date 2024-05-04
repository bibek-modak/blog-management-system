-- create table user;


    create table user(
    id int PRIMARY KEY auto_increment ,name varchar(50),email varchar(30),password varchar(30),phoneno varchar(10),created_time date DEFAULT (CURRENT_DATE) );


--create table blogs;

    create table blogs(
    id int PRIMARY KEY auto_increment ,title varchar(50),category varchar(30),contents varchar(30),author varchar(30),created_time date DEFAULT (CURRENT_DATE), userid int,
     CONSTRAINT fk_userid FOREIGN KEY(userid) 
        REFERENCES user(id)
        ON delete CASCADE);


--create table categories;

    create table categories(id int PRIMARY KEY auto_increment, title varchar(30),description varchar(50));







