DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS properties CASCADE;
DROP TABLE IF EXISTS rentHistories CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  annual_income VARCHAR(255) NOT NULL,
  other_household_occupants VARCHAR(255) NOT NULL,
  is_landlord BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE properties (
  id SERIAL PRIMARY KEY NOT NULL,
  landlord_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  square_feet INTEGER NOT NULL DEFAULT 0,
  street VARCHAR(255) NOT NULL,
  unit VARCHAR(255),
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  property_type VARCHAR(255) NOT NULL,
  number_of_bathrooms INTEGER  NOT NULL DEFAULT 0,
  number_of_bedrooms INTEGER  NOT NULL DEFAULT 0,
  listed_start_date DATE NOT NULL,
  cost_of_month INTEGER NOT NULL DEFAULT 0,
  pets_allowed BOOLEAN NOT NULL
);
 
CREATE TABLE uploading_photos (
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  photo_url VARCHAR(255) NOT NULL,
)

CREATE TABLE rentHistories (
  id SERIAL PRIMARY KEY NOT NULL,
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  review_content VARCHAR(255) NOT NULL,
  is_requested BOOLEAN NOT NULL,
  decline BOOLEAN
);

CREATE TABLE refs (
  id SERIAL PRIMARY KEY NOT NULL,
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  landlord_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
)

CREATE TABLE applications (
  id SERIAL PRIMARY KEY NOT NULL,
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
  ref_id INTEGER REFERENCES references(id) ON DELETE CASCADE,
  potential_move_in_date DATE NOT NULL,
)

CREATE TABLE ref_requests (
  id SERIAL PRIMARY KEY NOT NULL,
  landlord_id INTEGER REFERENCES users(id) ON DELETE CASCADE, 
  tenant_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
)