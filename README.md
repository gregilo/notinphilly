# notinphilly

**Concept**: In return for a commitment to go out once a week to pick up the litter on a block, we supply citizens of Philadelphia with a trash grabber.

Email you questions to notinphilly@gmail.com

[Project page](https://codeforphilly.org/projects/not_in_philly-2/)


To run the app locally:

1. Git clone the solution.
2. Install *nodejs*, *npm*, *bower*, and *mongodb*.
3. Run `npm install` in the local project root folder.
4. Run `bower install` in the local project root folder.
5. In a new Terminal tab, run `mongo` to start running MongoDB.
6. Create and seed the database:
   a. On Windows, run the `db_import/import_db_local.bat` file.
   b. On Mac/Linux: run the `db_import/import_db_local.sh` file.
7. Populate api keys and server settings in server/config (contact Yuri for keys).
8. Run `node server`, you can now access the server at `http://localhost:8080`.
