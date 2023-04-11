
create TABLE survey(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL DEFAULT 'Survey',
    description TEXT,
    start_date DATE,
    end_date DATE,
    props JSON
);

create TABLE page(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    survey_id INTEGER NOT NULL,
    FOREIGN KEY (survey_id) REFERENCES survey(id) ON DELETE CASCADE
);

create TABLE question(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type INTEGER,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES page(id) ON DELETE CASCADE
);

alter TABLE question rename column user_id to page_id;

create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE
);

create TABLE response(
    id SERIAL PRIMARY KEY,
    survey_id INTEGER REFERENCES survey(id),
    person_id INTEGER REFERENCES person(id),
    date DATE,
    answer JSON
);

select * from page;