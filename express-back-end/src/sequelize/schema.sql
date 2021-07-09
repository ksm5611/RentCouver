DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS rentHistories CASCADE;
DROP TABLE IF EXISTS refs CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS ref_requests CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  current_address VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  annual_income INTEGER NOT NULL DEFAULT 0,
  other_household_occupants VARCHAR(255),
  profile_picture_url VARCHAR(255),
  is_landlord BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  landlord_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  unit SMALLINT,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  square_feet INTEGER NOT NULL DEFAULT 0,
  description TEXT,
  property_type VARCHAR(255) NOT NULL,
  number_of_bathrooms INTEGER  NOT NULL DEFAULT 0,
  number_of_bedrooms INTEGER  NOT NULL DEFAULT 0,
  listed_start_date DATE NOT NULL,
  cost_of_month INTEGER NOT NULL DEFAULT 0,
  pets_allowed BOOLEAN NOT NULL
);
 
CREATE TABLE photos (
  id SERIAL PRIMARY KEY NOT NULL,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  photo_url VARCHAR(255) NOT NULL
);

CREATE TABLE rentHistories (
  id SERIAL PRIMARY KEY NOT NULL,
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  review_content TEXT,
  is_requested BOOLEAN NOT NULL,
  is_decline BOOLEAN NOT NULL
);

CREATE TABLE refs (
  id SERIAL PRIMARY KEY NOT NULL,
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  landlord_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
-- requests
CREATE TABLE applications (
  id SERIAL PRIMARY KEY NOT NULL,
  renthistories_id INTEGER REFERENCES rentHistories(id) ON DELETE CASCADE,
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  landlord_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  potential_move_in_date DATE,
  is_decline BOOLEAN NOT NULL
);

CREATE TABLE ref_requests (
  id SERIAL PRIMARY KEY NOT NULL,
  renthistories_id INTEGER REFERENCES rentHistories(id) ON DELETE CASCADE,
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  landlord_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  potential_move_in_date DATE,
  is_updated BOOLEAN NOT NULL,
  is_decline BOOLEAN NOT NULL
);