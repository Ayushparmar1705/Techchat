create database chatting;

use chatting;
show tables;



create table user_details(
is_active bit default true,
created_on datetime default current_timestamp,
updated_on datetime default current_timestamp,
id int primary key auto_increment,
fullname varchar(100) not null,
email varchar(100) unicode,
password varchar(100)  not null,
image varchar(100));    


select * from user_details;

drop table user_details;

create table messages(
is_active bit default true,
create_on datetime default current_timestamp,
updated_on datetime default current_timestamp,
created_by int,
updated_by int,
reciver_by int,
message_id int primary key auto_increment,
message TEXT);
alter table messages add foreign key(created_by) references user_details(id);
alter table messages add foreign key(updated_by) references user_details(id);
alter table messages add foreign key(reciver_by) references user_details(id);
drop table messages;
select * from messages;



alter table signup rename to user_details;



create table favourite(fid int primary key auto_increment,
created_by int,
fav_per_id int,
added_at datetime default current_timestamp , 
is_added bool default true);

alter table favourite add foreign key(created_by) references user_details(id);
alter table favourite add foreign key(fav_per_id) references user_details(id);


select * from favourite;

drop table favourite;


SELECT user_details.fullname , messages.message , messages.create_on , messages.message_id , messages.reciver_by , messages.created_by from user_details INNER JOIN messages  ON user_details.id = messages.created_by  WHERE (created_by = 1 AND reciver_by = 2) OR (created_by = 2 AND reciver_by = 1)