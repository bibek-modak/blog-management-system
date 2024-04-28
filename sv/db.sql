-- create table user;


    create table user(
    id int PRIMARY KEY auto_increment ,name varchar(50),email varchar(30),password varchar(30),phoneno varchar(10),created_time date DEFAULT (CURRENT_DATE) );


--create table blogs;

create table blogs(
    id int PRIMARY KEY auto_increment ,title varchar(50),category varchar(30),contents varchar(30),created_time date DEFAULT (CURRENT_DATE), userid int,categoryid int,
     CONSTRAINT fk_userid FOREIGN KEY(userid) 
        REFERENCES user(id)
        ON update CASCADE,
        CONSTRAINT fk_category_id FOREIGN KEY(categoryid) 
        REFERENCES categories(id)
        ON update CASCADE);


--create table blogs;





