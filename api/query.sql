select * from survey;

select * from page where survey_id = 6;

insert into survey(name, description, start_date)
values('Quiz', 'First quiz', now());

INSERT INTO survey (name, description) values('Survey', 'desc');

alter table survey add column create_date date;
