// Users 

create table users (
id serial primary key,
username varchar(20),
password varchar(20),
profile_pic text)


// Posts 
create table posts (
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references users (id)
);


// Updated Users password data type
alter table users 
alter password 
set data type text;