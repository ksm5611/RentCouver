
-- -- 1 renter: 10  // pro:id 2, 3 pics others one
-- -- 9 landlords: 1-9
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Sura Jeon', 'example1@lhl.com', 'password', '2595 W 1st Ave, Vancouver, BC V6K 1G8', 'Web Developer', 50000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Felicia Okta', 'example2@lhl.com', 'password', '2597 W 1st Ave, Vancouver, BC V6K 1G8', 'Web Developer', 50000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Sumin Kim', 'example3@lhl.com', 'password', '2565 W 1st Ave, Vancouver, BC V6K 1G8', 'Web Developer', 50000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Andy Lindsay', 'example4@lhl.com', 'password', '2559 W 1st Ave, Vancouver, BC V6K 1G8', 'Web Developer', 100000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Christian Nally', 'example5@lhl.com', 'password', '2549 W 1st Ave, Vancouver, BC V6K 1G8', 'Web Developer', 100000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Vasiliy Klimkin', 'example6@lhl.com', 'password', '1720 Trafalgar St, Vancouver, BC V6K 3R8', 'Web Developer', 100000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Gary Jipp', 'example7@lhl.com', 'password', '2572 W 1st Ave, Vancouver, BC V6K 1G7', 'Web Developer', 100000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Dominic Tremblay', 'example8@lhl.com', 'password', '2560 W 1st Ave, Vancouver, BC V6K 1G7', 'Web Developer', 100000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Francis Bourgouin', 'example9@lhl.com', 'password', '2546 W 1st Ave, Vancouver, BC V6K 1G7', 'Web Developer', 100000, null, null, true);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Egg Eggerson', 'example10@lhl.com', 'password', '2522 W 1st Ave, Vancouver, BC V6K 1G7', 'Professional Egger', 120000, 'Startbucks Barista', 'https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png', false);
INSERT INTO users (name, email, password, current_address, job_title, annual_income, other_household_occupants, profile_picture_url, is_landlord) VALUES ('Hoki Poki', 'test@test.com', 'password', '1152 E 78st Ave, Vancouver, BC V6K 1G7', 'Dentist', 400000, 'Mcdonals', 'https://i.pinimg.com/originals/9d/f9/5d/9df95dd43337435f5713813fb1422b7f.jpg', false);



-- -- total 18 properties
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (1, 'Arbutus Nook', '3833 Arbutus St', null, 'Vancouver', 'BC', 'V6J 3Z9', 600, 'This loft-style 1 Bed 2 Bath & Den 600SF laneway house is near the intersection of Arbutus St and King Edward Ave. 10 mins drive/ 20 min bus ride to UBC and Downtown.','house', 2, 1, '2021-06-30', 2400, true);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (4, 'Little Mountain Living', '435 East 37th Avenue', null, 'Vancouver', 'BC', 'V5W 1E8', 700, 'Located on E37th bike lane, and within short walking distance to QE Park, Hillcrest Community Centre and many Main Street restaurants.', 'house', 2, 1, '2021-07-15', 1900, false);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (6, 'Oakridge Hideaway', '50 East 47th Avenue', null, 'Vancouver', 'BC', 'V5W 2A5', 650, 'Deposits: half a month security deposit. Lease term: minimum one year lease. Pets: sorry not this one. Absolutely no smoking please.', 'house', 1.5, 1, '2021-07-02', 2300, true);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (8, 'Marble Mansion', '2938 West 23rd Avenue', null, 'Vancouver', 'BC', 'V6L 1P5', 2717, 'This terrific 5 bedroom Arbutus 2 level home that has been superbly upgraded with high end stonework throughout. Almost 2 master bedrooms up make this a very unique plan. Current attached garage could be enclosed and added to living space and a garage built off of the lane if someone needed more space.', 'house', 4, 5, '2021-08-01', 5800, false);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (2, 'Primo Valentino', '625 West 53rd Avenue', 3, 'Vancouver', 'BC', 'V6P 1K2', 1100, 'About 5 minutes walk to Sir Winston Churchill secondary School. (School catchment) Only 15 minutes to Downtown, UBC; This home is designed for those looking for a family-sized home with 3 bedrooms and 2 baths has a quiet and private in the Oakridge/South Cambie area.', 'house', 2, 3, '2021-08-15', 3200, true);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (3, 'Anchor Point', '1333 Hornby St', 666, 'Vancouver', 'BC', 'V6Z 2C1', 462, 'This well designed studio suite was tastefully renoated and features hardwood flooring throughout, a modern kitchen, and spa like bathroom. The suite itself looks into the peaceful courtyard.', 'condo', 1, 1, '2021-07-01', 1900, true);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (5, 'Corner Condo', '2110 West 46th Avenue', 6, 'Vancouver', 'BC', 'V6M 2L1', 1070, 'Beautifully and tastefully renovated, fully furnished, corner unit condo with gourmet kitchen including stainless steel appliances, gas fireplace, in suite-laundry, ample storage, spacious master bedroom with ensuite, cellular blinds with top down/bottom up feature, and 2 underground parking stalls in the heart of Kerrisdale.', 'condo', 2, 2, '2021-07-01', 3100, true);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (7, 'Sparkler Parker', '5693 Elizabeth Street', null, 'Vancouver', 'BC', 'V5Y 3K1', 546, 'Welcome to The Parker by Townline. Vancouver West luxury living in the heart of the charming Oakridge hub situated between Queen Elizabeth Park and Oakridge Mall.', 'condo', 1, 1, '2021-08-01', 2050, false);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (9, 'Kingsway Family Condo', '1777 Kingsway', null, 'Vancouver', 'BC', 'V5N 2S5', 1050, 'Open concept living/dining room/kitchen, master bedroom with walk through closet and en suite, 2nd full bathroom across from the other two bedrooms (each with their own closets).', 'condo', 2, 3, '2021-08-01', 3200, false);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (2, 'Kensington Palace', '1319 36th Ave E', null, 'Vancouver', 'BC', 'V5W 1E1', 405, 'Brand new built lower suite featuring sound-proofing, and private entrance. Living area, bathroom with stand up shower, in suite washer & dryer, kitchen including Fridge and Stove, and excellent sized bedroom.', 'house', 1, 1, '2021-07-01', 1650, true);

INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (4, 'The Victoria Apartments', '3655 Victoria Dr', 402, 'Vancouver', 'BC', 'V5N 5K9', 550, 'Located just steps from,  most popular parks, Trout Lake, the amenities of Commercial Drive, and plenty of transit options by bike, SkyTrain or bus, The Victoria offers prime access to the best the city has to offer.', 'apartment', 1, 1, '2021-07-12', 1730, false);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (4, 'Wales Street Apartments', '5415 Wales St', null, 'Vancouver', 'BC', 'V5R 3M9', 3088, 'Spacious 5 bedroom, 1.5 bath house in Collingwood Renfrew across from Norquay Park.', 'house', 1.5, 5, '2021-01-25', 3450, true);

INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (2, 'The Evan Apartments', '1908 Scotia St', 330, 'Vancouver', 'BC', 'V5T 0E8', 440, 'The central location of the Evan puts you in walking proximity to all of your major destinations, including the Seawall, Terminal Skytrain Station, Chinatown, Science World, False Creek, dog parks, restaurants in every direction, emerging craft breweries and Downtown Vancouver.', 'apartment', 0, 1, '2021-03-18', 1850, true);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (8, 'Pullman Porter', '1688 Pullman Porter St', 1102, 'Vancouver', 'BC', 'V6A 0H3', 948, 'Navio at The Creek - This is Phase 2 of The Creek by Concert master planned False Creek waterfront condo community. Overlooking a 2.7 acre park on False Creek celebrated Seawall.', 'condo', 2, 2, '2020-12-15', 4200, false);

INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (8, 'Quebec Street', '1088 Quebec Street', 909, 'Vancouver', 'BC', 'V6A 4H2', 1170, 'Newly Renovated 1170 sqft home with 2 Bedroom 2 bath. Conveniently located beside Science World beside downtown and steps to the sea wall and skytrain.', 'condo', 2, 2, '2021-07-15', 3500, false);
INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (1, 'West 2nd Avenue', '159 West 2nd Ave', 202, 'Vancouver', 'BC', 'V5Y 1B8', 525, 'Tower Green At West is located in the heart of False Creek. Just steps to the Sea Wall and all the amazing restaurants, amenities and specialty shops in the Olympic Village.', 'condo', 1, 1, '2021-03-05', 2250, false);

INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (1, 'Quebec Street', '1661 Quebec Street', 1001, 'Vancouver', 'BC', 'V5T 1B4', 460, 'For rent is a gorgeous, fully furnished small 1 bedroom 1 bathroom unit in a 3-year-old upscale building. It is located in Olympic Village/ False Creek, right next to Science World and the seawall, so it is literally steps away from buses & the skytrain station.', 'condo', 1, 1, '2020-11-05', 2400, true);

INSERT INTO properties (landlord_id, title, street, unit, city, province, postal_code, square_feet, description, property_type, number_of_bathrooms, number_of_bedrooms, listed_start_date, cost_of_month, pets_allowed) VALUES (3, 'North Vancouver King Edward','288 King Edward Ave', 307, 'Vancouver', 'BC', 'V5Y 2J2', 1100, 'The Edward - Brand new boutique development by Mosaic. Spacious & filled with light, with 10-ft. ceilings & big windows. Huge wrap-around balcony. Quality finishings, with attention to details. Serene view of mountains & treetops. Close to Cambie Canada Line station, Queen Elizabeth Park, Cambie village, and Main Street. LEED Gold certified.', 'apartment', 2, 2, '2021-05-20', 3000, true);


INSERT INTO photos (property_id, photo_url) VALUES (1, 'https://img.zumpercdn.com/424911000/1280x960?auto=format&w=1238&h=580&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (2, 'https://img.zumpercdn.com/427039524/1280x960?auto=format&w=326&h=360&fit=crop');
INSERT INTO photos (property_id, photo_url) VALUES (2, 'https://img.zumpercdn.com/427039528/1280x960?auto=format&w=1140&h=488&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (2, 'https://img.zumpercdn.com/427039526/1280x960?auto=format&w=1140&h=488&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (3, 'https://img.zumpercdn.com/305108468/1280x960?auto=format&w=1238&h=580&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (4, 'https://img.zumpercdn.com/424440739/1280x960?auto=format&w=1238&h=580&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (5, 'https://img.zumpercdn.com/424438325/1280x960?auto=format&w=1238&h=580&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (6, 'https://img.zumpercdn.com/426153350/1280x960?auto=format&w=832&h=687&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (7, 'https://img.zumpercdn.com/327920993/1280x960?auto=format&w=832&h=687&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (8, 'https://img.zumpercdn.com/419366950/1280x960?auto=format&w=832&h=687&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (9, 'https://img.zumpercdn.com/424810278/1280x960?auto=format&w=832&h=687&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (10, 'https://img.zumpercdn.com/329535855/1280x960?auto=format&w=832&h=687&fit=fill');
INSERT INTO photos (property_id, photo_url) VALUES (11, 'https://img.zumpercdn.com/418922891/1280x960?auto=format&w=392&h=360&fit=crop&dpr=2');
INSERT INTO photos (property_id, photo_url) VALUES (12, 'https://img.zumpercdn.com/418922892/1280x960?auto=format&w=1302&h=445&fit=fill&dpr=2');
INSERT INTO photos (property_id, photo_url) VALUES (13, 'https://img.zumpercdn.com/342635545/1280x960?auto=format&w=1302&h=403&fit=fill&dpr=2');
INSERT INTO photos (property_id, photo_url) VALUES (14, 'https://img.zumpercdn.com/418922844/1280x960?auto=format&w=1302&h=403&fit=fill&dpr=2');
INSERT INTO photos (property_id, photo_url) VALUES (15, 'https://img.zumpercdn.com/418922848/1280x960?auto=format&w=1302&h=403&fit=fill&dpr=2');
INSERT INTO photos (property_id, photo_url) VALUES (16, 'https://img.zumpercdn.com/418922898/1280x960?auto=format&w=1302&h=445&fit=fill&dpr=2');
INSERT INTO photos (property_id, photo_url) VALUES (17, 'https://img.zumpercdn.com/418922894/1280x960?auto=format&w=1302&h=445&fit=fill&dpr=2');
INSERT INTO photos (property_id, photo_url) VALUES (18, 'https://img.zumpercdn.com/426438098/1280x960?auto=format&w=1438&h=494&fit=fill&dpr=2');



-- -- if "decline" is false, we don't display the reference request on the page
INSERT INTO rentHistories (tenant_id, property_id, start_date, end_date, review_content, is_requested, is_decline) VALUES (10, 2, '2017-01-01', '2017-12-31', null, false, false);
INSERT INTO rentHistories (tenant_id, property_id, start_date, end_date, review_content, is_requested, is_decline) VALUES (10, 5, '2018-01-01', '2018-12-31', null, false, false);
INSERT INTO rentHistories (tenant_id, property_id, start_date, end_date, review_content, is_requested, is_decline) VALUES (10, 7, '2019-01-01', '2019-12-31', null, false, false);
INSERT INTO rentHistories (tenant_id, property_id, start_date, end_date, review_content, is_requested, is_decline) VALUES (11, 8, '2020-01-01', '2020-12-31', null, false, false);
INSERT INTO rentHistories (tenant_id, property_id, start_date, end_date, review_content, is_requested, is_decline) VALUES (11, 3, '2021-01-01', '2021-05-31', null, false, false);



-- --diff land id 
INSERT INTO refs (tenant_id, landlord_id) VALUES (10, 4);
INSERT INTO refs (tenant_id, landlord_id) VALUES (10, 2);
INSERT INTO refs (tenant_id, landlord_id) VALUES (10, 5);
INSERT INTO refs (tenant_id, landlord_id) VALUES (10, 7);
INSERT INTO refs (tenant_id, landlord_id) VALUES (10, 6);

-- -- select * from refs where tenant_id (to get ref_id for tenant)

-- -- ㅇㅓㄴ제 이사할수있는지 날짜 1 (actual app form part)
INSERT INTO applications (renthistories_id, tenant_id, landlord_id, property_id, potential_move_in_date, is_decline) VALUES (5, 11, 1, 16, '2021-07-01', false);

-- (ref request part)
INSERT INTO applications (renthistories_id, tenant_id, landlord_id, property_id, potential_move_in_date, is_decline) VALUES (5, 11, 6, 3, '2021-07-01', false);
--  message : text == null

-- -- --- 5
-- INSERT INTO ref_requests (landlord_id, tenant_id, property_id, is_decline) VALUES (4, 10, 2, false);
-- INSERT INTO ref_requests (landlord_id, tenant_id, property_id, is_decline) VALUES (2, 10, 5, false);
-- INSERT INTO ref_requests (landlord_id, tenant_id, property_id, is_decline) VALUES (5, 10, 7, false);
-- INSERT INTO ref_requests (landlord_id, tenant_id, property_id, is_decline) VALUES (7, 10, 8, false);
-- INSERT INTO ref_requests (landlord_id, tenant_id, property_id, is_decline) VALUES (6, 10, 3, false);






















